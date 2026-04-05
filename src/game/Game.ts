import * as CANNON from 'cannon-es';
import {
  CanvasTexture,
  CircleGeometry,
  Clock,
  CylinderGeometry,
  DoubleSide,
  Group,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Scene,
  TorusGeometry,
  Vector2,
  Vector3,
  WebGLRenderer
} from 'three';

import {
  NATION_LABELS,
  TANKS,
  TANKS_BY_ID,
  type AmmoDefinition,
  type TankDefinition,
  getAmmoDefinition
} from '../data/tanks';
import {
  DEFAULT_SESSION_CONFIG,
  DEFAULT_NAMEPLATE_CONFIG,
  DIFFICULTY_PRESETS,
  GAME_MODE_PRESETS,
  type DifficultyPreset,
  type GameModeId,
  type GameSessionConfig,
  type NameplateConfig
} from './GamePresets';
import { CameraController, CameraMode } from './controllers/CameraController';
import { type AimInput, TankController } from './controllers/TankController';
import { InputController, type DriveInput } from './core/InputController';
import { Tank } from './entities/Tank';
import { Projectile } from './entities/Projectile';
import { CamouflageGenerator } from './graphics/CamouflageGenerator';
import { ModelLoader } from './loaders/ModelLoader';
import { MobileControls } from './mobile/MobileControls';
import { AudioSystem } from './systems/AudioSystem';
import {
  DamageSystem,
  type DamageModule,
  type DamageTarget
} from './systems/DamageSystem';
import { EnvironmentSystem } from './systems/EnvironmentSystem';
import type {
  BattlefieldState,
  TerrainSample
} from './systems/BattlefieldTypes';
import { ParticleSystem } from './systems/ParticleSystem';
import { PostProcessing } from './systems/PostProcessing';

type Team = 'player' | 'enemy';
type MessageTone = 'hit' | 'ricochet' | 'destroyed' | 'info';
type FloatingTone = 'damage' | 'ricochet' | 'info' | 'destroyed';
type KillTone = 'player' | 'enemy';
type BattlePhase = 'running' | 'paused' | 'victory' | 'defeat';

interface GameOptions extends GameSessionConfig {
  audioSystem: AudioSystem;
  onRestart: (config: GameSessionConfig) => void;
  onReturnToMenu: (payload: GameMenuReturnPayload) => void;
}

export interface GameMenuReturnPayload {
  session: GameSessionConfig;
  summary: {
    resultLabel: string;
    score: number;
    kills: number;
    detail: string;
  };
}

interface ActiveProjectile {
  owner: TankActor;
  projectile: Projectile;
  whizPlayed: boolean;
  specialAmmo: 'standard' | 'ap' | 'he';
}

interface EnemyAIState {
  home: Vector3;
  patrolTarget: Vector3;
  retargetTimer: number;
  fireCooldownBias: number;
}

interface FloatingText {
  element: HTMLDivElement;
  worldPosition: Vector3;
  velocity: number;
  life: number;
}

interface KillFeedEntry {
  element: HTMLDivElement;
  life: number;
}

interface Nameplate {
  actor: TankActor;
  root: HTMLDivElement;
  fill: HTMLDivElement;
  value: HTMLSpanElement;
}

interface TankActor extends DamageTarget {
  id: string;
  team: Team;
  tank: Tank;
  controller: TankController;
  definition: TankDefinition;
  hp: number;
  destroyed: boolean;
  ai?: EnemyAIState;
  dustTimer: number;
  smokeTimer: number;
  damageSmokeTimer: number;
  damageSparkTimer: number;
  damagePulse: number;
  modules: {
    trackBroken: boolean;
    gunDamaged: boolean;
    engineFire: boolean;
    ammoRackHit: boolean;
  };
  engineFireTick: number;
  terrainSample: TerrainSample | null;
}

interface MissionBase {
  root: Group;
  body: CANNON.Body;
  hp: number;
  maxHp: number;
  destroyed: boolean;
  position: Vector3;
}

interface ScheduledStrike {
  delay: number;
  position: Vector3;
  radius: number;
  damage: number;
  ownerTeam: Team;
  label: string;
  shake: number;
}

interface AimPrediction {
  impactPoint: Vector3;
  distance: number;
  targetActor: TankActor | null;
  canHit: boolean;
}

interface PlayerBuffState {
  speedTimer: number;
  reloadTimer: number;
  apShots: number;
  heShots: number;
  invincibleTimer: number;
}

const RETICLE_RING_CIRCUMFERENCE = Math.PI * 2 * 44;
const AIM_STEP_SECONDS = 0.08;
const AIM_MAX_STEPS = 36;
const AIM_MAX_DISTANCE = 220;
const SUPPORT_COOLDOWN = 24;
const SURVIVAL_INITIAL_WAVE = 4;

export class Game {
  private readonly renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly world = new CANNON.World();
  private readonly tankHullMaterial = new CANNON.Material('tankHull');
  private readonly clock = new Clock();
  private readonly cameraController: CameraController;
  private readonly inputController: InputController;
  private readonly mobileControls: MobileControls;
  private readonly damageSystem = new DamageSystem();
  private readonly modelLoader = new ModelLoader();
  private readonly particleSystem: ParticleSystem;
  private readonly environmentSystem: EnvironmentSystem;
  private readonly postProcessing: PostProcessing;
  private readonly projectiles: ActiveProjectile[] = [];
  private readonly actors: TankActor[] = [];
  private readonly enemies: TankActor[] = [];
  private readonly enemyRoster: TankDefinition[];
  private readonly bodyToActor = new Map<number, TankActor>();
  private readonly floatingTexts: FloatingText[] = [];
  private readonly killFeedEntries: KillFeedEntry[] = [];
  private readonly nameplates: Nameplate[] = [];
  private readonly scheduledStrikes: ScheduledStrike[] = [];
  private readonly tmpDirection = new Vector3();
  private readonly tmpPosition = new Vector3();
  private readonly tmpPositionB = new Vector3();
  private readonly tmpVector = new Vector3();
  private readonly tmpVectorB = new Vector3();
  private readonly screenPoint = new Vector2();
  private readonly viewLabel = document.querySelector<HTMLElement>('#view-label');
  private readonly viewLabelMobile = document.querySelector<HTMLElement>('#view-label-mobile');
  private readonly tankLabel = document.querySelector<HTMLElement>('#tank-label');
  private readonly tankLabelMobile = document.querySelector<HTMLElement>('#tank-label-mobile');
  private readonly nationLabel = document.querySelector<HTMLElement>('#nation-label');
  private readonly sceneLabel = document.querySelector<HTMLElement>('#scene-label');
  private readonly weatherLabel = document.querySelector<HTMLElement>('#weather-label');
  private readonly missionLabel = document.querySelector<HTMLElement>('#mission-label');
  private readonly objectiveLabel = document.querySelector<HTMLElement>('#objective-label');
  private readonly modeDetailLine = document.querySelector<HTMLElement>('#mode-detail-line');
  private readonly scoreLabel = document.querySelector<HTMLElement>('#score-label');
  private readonly killLabel = document.querySelector<HTMLElement>('#kill-label');
  private readonly enemyCountLabel = document.querySelector<HTMLElement>('#enemy-count-label');
  private readonly statusLine = document.querySelector<HTMLElement>('#status-line');
  private readonly hpFill = document.querySelector<HTMLElement>('#hp-fill');
  private readonly hpValue = document.querySelector<HTMLElement>('#hp-value');
  private readonly reloadFill = document.querySelector<HTMLElement>('#reload-fill');
  private readonly reloadValue = document.querySelector<HTMLElement>('#reload-value');
  private readonly supportFill = document.querySelector<HTMLElement>('#support-fill');
  private readonly supportValue = document.querySelector<HTMLElement>('#support-value');
  private readonly buffList = document.querySelector<HTMLElement>('#buff-list');
  private readonly damageVignette = document.querySelector<HTMLElement>('#damage-vignette');
  private readonly hitFlash = document.querySelector<HTMLElement>('#hit-flash');
  private readonly centerMessage = document.querySelector<HTMLElement>('#center-message');
  private readonly floatingTextRoot = document.querySelector<HTMLElement>('#floating-texts');
  private readonly killFeedRoot = document.querySelector<HTMLElement>('#kill-feed');
  private readonly nameplateRoot = document.querySelector<HTMLElement>('#nameplates');
  private readonly reticle = document.querySelector<HTMLElement>('#reticle');
  private readonly reloadRing = document.querySelector<SVGCircleElement>('#reload-ring');
  private readonly rangeIndicator = document.querySelector<HTMLElement>('#range-indicator');
  private readonly ammoIndicator = document.querySelector<HTMLElement>('#ammo-indicator');
  private readonly hitIndicator = document.querySelector<HTMLElement>('#hit-indicator');
  private readonly reticleToggleButton = document.querySelector<HTMLButtonElement>('#reticle-toggle-button');
  private readonly reticleToggleLabel = document.querySelector<HTMLElement>('#reticle-toggle-label');
  private readonly minimapCanvas = document.querySelector<HTMLCanvasElement>('#minimap-canvas');
  private readonly minimapContext = this.minimapCanvas?.getContext('2d') ?? null;
  private readonly pauseScreen = document.querySelector<HTMLElement>('#pause-screen');
  private readonly pauseTitle = document.querySelector<HTMLElement>('#pause-title');
  private readonly pauseDescription = document.querySelector<HTMLElement>('#pause-description');
  private readonly pauseScore = document.querySelector<HTMLElement>('#pause-score');
  private readonly pauseKills = document.querySelector<HTMLElement>('#pause-kills');
  private readonly pauseProgress = document.querySelector<HTMLElement>('#pause-progress');
  private readonly resumeButton = document.querySelector<HTMLButtonElement>('#resume-button');
  private readonly restartButton = document.querySelector<HTMLButtonElement>('#restart-button');
  private readonly returnButton = document.querySelector<HTMLButtonElement>('#return-button');
  private readonly isMobile = window.matchMedia('(max-width: 900px), (pointer: coarse)').matches;
  private readonly resumeAudioFromInteraction = (): void => {
    this.options.audioSystem.resume();
  };
  private readonly battlefieldState: BattlefieldState;
  private readonly weatherState: ReturnType<EnvironmentSystem['getWeatherState']>;
  private readonly player: TankActor;
  private readonly playerBuffs: PlayerBuffState = {
    speedTimer: 0,
    reloadTimer: 0,
    apShots: 0,
    heShots: 0,
    invincibleTimer: 0
  };
  private readonly resizeHandler = (): void => {
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.cameraController.resize(window.innerWidth, window.innerHeight);
    this.postProcessing.resize(window.innerWidth, window.innerHeight, pixelRatio);
  };
  private readonly handleMinimapClick = (event: MouseEvent): void => {
    if (!this.minimapCanvas) {
      return;
    }

    const rect = this.minimapCanvas.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width;
    const normalizedY = (event.clientY - rect.top) / rect.height;
    const worldX = (normalizedX - 0.5) * this.battlefieldState.worldExtents * 2;
    const worldZ = -(normalizedY - 0.5) * this.battlefieldState.worldExtents * 2;
    const target = new Vector3(worldX, 0, worldZ);
    this.cameraController.setTopDownFocus(target);
    this.options.audioSystem.playUiClick();
    this.refreshHud();
  };
  private animationFrame = 0;
  private phase: BattlePhase = 'running';
  private score = 0;
  private kills = 0;
  private damageOverlay = 0;
  private hitFlashTime = 0;
  private centerMessageTime = 0;
  private slowMotionTime = 0;
  private slowMotionScale = 0.42;
  private timeScale = 1;
  private elapsedTime = 0;
  private wave = 1;
  private waveCooldown = 0;
  private supportCooldown = 0;
  private supportNoticeTimer = 0;
  private airRaidCooldown = 18 + Math.random() * 10;
  private killChainCount = 0;
  private killChainTimer = 0;
  private nextEnemyCursor = 0;
  private totalEnemySpawns = 0;
  private aimPrediction: AimPrediction | null = null;
  private missionBase: MissionBase | null = null;
  private reticleVisible = true;
  private readonly nameplateConfig: NameplateConfig;
  private readonly difficultyPreset: DifficultyPreset;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly options: GameOptions
  ) {
    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;

    this.world.gravity.set(0, -9.82, 0);
    this.world.defaultContactMaterial.friction = 0.52;
    this.world.addContactMaterial(
      new CANNON.ContactMaterial(this.tankHullMaterial, this.world.defaultMaterial, {
        friction: 0.02,
        restitution: 0
      })
    );
    this.world.addContactMaterial(
      new CANNON.ContactMaterial(this.tankHullMaterial, this.tankHullMaterial, {
        friction: 0.38,
        restitution: 0.02
      })
    );

    this.cameraController = new CameraController(window.innerWidth / window.innerHeight);
    this.inputController = new InputController(this.canvas);
    this.mobileControls = new MobileControls(this.inputController, () => {
      this.options.audioSystem.resume();
      this.options.audioSystem.playUiClick();
    });
    this.particleSystem = new ParticleSystem(this.scene);
    this.environmentSystem = new EnvironmentSystem(this.scene, this.world, this.renderer, {
      battlefieldId: this.options.battlefieldId,
      weatherId: this.options.weatherId
    });
    this.battlefieldState = this.environmentSystem.getBattlefieldState();
    this.weatherState = this.environmentSystem.getWeatherState();
    this.postProcessing = new PostProcessing(
      this.renderer,
      this.scene,
      this.cameraController,
      this.isMobile
    );
    this.postProcessing.updateCameraMode(this.cameraController.getMode());

    const playerDefinition = TANKS_BY_ID.get(options.playerTankId);

    if (!playerDefinition) {
      throw new Error(`Unknown player tank: ${options.playerTankId}`);
    }

    this.nameplateConfig = options.nameplateConfig
      ? { ...options.nameplateConfig }
      : { ...DEFAULT_NAMEPLATE_CONFIG };
    this.difficultyPreset = DIFFICULTY_PRESETS[options.difficultyId ?? 'normal'];
    this.enemyRoster = TANKS.filter((tank) => tank.id !== playerDefinition.id);
    this.setupScene();
    this.player = this.createTankActor(
      playerDefinition,
      'player',
      this.battlefieldState.playerSpawn.clone(),
      0
    );
    this.setupMission();
    this.mobileControls.initialize();
    this.bindEvents();
    this.applyReticleVisibility();
    this.refreshHud();
    this.refreshBuffPanel();
    this.refreshPauseOverlay();
    this.updateAimPrediction();
    this.cameraController.update(0, this.player.controller, this.aimPrediction?.impactPoint ?? null);
    this.updateAimPrediction();
    this.renderMinimap();
  }

  start(): void {
    this.clock.start();
    this.animate();
  }

  destroy(): void {
    cancelAnimationFrame(this.animationFrame);
    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('keydown', this.resumeAudioFromInteraction);
    window.removeEventListener('pointerdown', this.resumeAudioFromInteraction);
    this.minimapCanvas?.removeEventListener('click', this.handleMinimapClick);
    this.mobileControls.destroy();
    this.inputController.destroy();
    this.resumeButton && (this.resumeButton.onclick = null);
    this.restartButton && (this.restartButton.onclick = null);
    this.returnButton && (this.returnButton.onclick = null);
    this.reticleToggleButton && (this.reticleToggleButton.onclick = null);

    this.projectiles.forEach(({ projectile }) => {
      this.scene.remove(projectile.mesh, projectile.trail);
      projectile.destroy();
    });

    this.actors.forEach((actor) => {
      this.scene.remove(actor.tank.root);
      this.world.removeBody(actor.controller.body);
      actor.tank.dispose();
    });

    if (this.missionBase) {
      this.scene.remove(this.missionBase.root);
      this.world.removeBody(this.missionBase.body);
    }

    this.environmentSystem.dispose();
    this.particleSystem.dispose();
    this.nameplates.forEach(({ root }) => root.remove());
    this.killFeedEntries.forEach(({ element }) => element.remove());
    this.floatingTexts.forEach(({ element }) => element.remove());
    this.renderer.dispose();
  }

  private bindEvents(): void {
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('keydown', this.resumeAudioFromInteraction);
    window.addEventListener('pointerdown', this.resumeAudioFromInteraction);
    this.minimapCanvas?.addEventListener('click', this.handleMinimapClick);

    if (this.resumeButton) {
      this.resumeButton.onclick = () => {
        if (this.phase === 'paused') {
          this.setPaused(false);
        }
      };
    }

    if (this.restartButton) {
      this.restartButton.onclick = () => {
        this.options.onRestart(this.getSessionConfig());
      };
    }

    if (this.returnButton) {
      this.returnButton.onclick = () => {
        this.options.onReturnToMenu({
          session: this.getSessionConfig(),
          summary: this.buildReturnSummary()
        });
      };
    }

    if (this.reticleToggleButton) {
      this.reticleToggleButton.onclick = () => {
        this.toggleReticleVisibility();
        this.options.audioSystem.playUiClick();
      };
    }
  }

  private setupScene(): void {
    this.scene.backgroundBlurriness = 0;
  }

  private setupMission(): void {
    const diffCount = this.difficultyPreset.enemyCount;

    if (this.options.modeId === 'classic') {
      this.missionBase = this.createMissionBase();
      this.spawnEnemyBatch(Math.max(diffCount, this.battlefieldState.enemySpawns.length));
      return;
    }

    if (this.options.modeId === 'survival') {
      this.wave = 1;
      this.spawnEnemyBatch(Math.max(SURVIVAL_INITIAL_WAVE, diffCount));
      return;
    }

    this.spawnEnemyBatch(Math.min(diffCount, this.getRemainingAnnihilationSpawns()));
  }

  private createMissionBase(): MissionBase {
    const ground = this.environmentSystem.sampleTerrain(new Vector3(0, 0, 0));
    const position = new Vector3(0, ground.groundHeight + 0.18, 0);
    const root = new Group();
    root.position.copy(position);

    const pedestal = new Mesh(
      new CylinderGeometry(2.6, 3.1, 0.8, 24),
      new MeshStandardMaterial({
        color: '#6e6557',
        roughness: 0.86,
        metalness: 0.14
      })
    );
    pedestal.receiveShadow = true;
    pedestal.castShadow = true;
    root.add(pedestal);

    const badge = new Mesh(
      new CircleGeometry(1.8, 40),
      new MeshBasicMaterial({
        map: this.createBaseBadgeTexture(),
        transparent: true,
        side: DoubleSide
      })
    );
    badge.rotation.x = -Math.PI / 2;
    badge.position.y = 0.46;
    root.add(badge);

    const ring = new Mesh(
      new TorusGeometry(2.02, 0.12, 12, 48),
      new MeshStandardMaterial({
        color: '#d7b46a',
        emissive: '#7c4a14',
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.85
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.52;
    root.add(ring);

    const flag = new Mesh(
      new PlaneGeometry(1.9, 0.8),
      new MeshBasicMaterial({
        map: this.createBaseBadgeTexture(),
        transparent: true,
        side: DoubleSide
      })
    );
    flag.position.set(0, 1.6, 0);
    root.add(flag);

    this.scene.add(root);

    const body = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(new CANNON.Vec3(2.6, 1.3, 2.6)),
      position: new CANNON.Vec3(position.x, position.y + 0.8, position.z)
    });
    this.world.addBody(body);

    return {
      root,
      body,
      hp: 260,
      maxHp: 260,
      destroyed: false,
      position
    };
  }

  private createBaseBadgeTexture(): CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Unable to create base badge canvas.');
    }

    context.clearRect(0, 0, 256, 256);
    context.fillStyle = '#20140f';
    context.beginPath();
    context.arc(128, 128, 120, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#f5d281';
    context.beginPath();
    context.arc(128, 128, 108, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#4a2c1b';
    context.beginPath();
    context.arc(128, 128, 88, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#f8e2aa';
    context.font = 'bold 42px sans-serif';
    context.textAlign = 'center';
    context.fillText('BASE', 128, 112);
    context.font = 'bold 58px sans-serif';
    context.fillText('鹰', 128, 172);

    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  private createTankActor(
    definition: TankDefinition,
    team: Team,
    position: Vector3,
    yaw: number
  ): TankActor {
    const tank = new Tank(
      definition,
      CamouflageGenerator.generate(definition.nation, definition.id),
      team === 'player' ? '#7fe38a' : '#ff6b6b'
    );
    this.scene.add(tank.root);

    const controller = new TankController(
      this.world,
      tank,
      definition,
      {
        position: new CANNON.Vec3(position.x, 0, position.z),
        yaw,
        contactMaterial: this.tankHullMaterial
      }
    );

    const actor: TankActor = {
      id: `${team}-${definition.id}-${this.actors.length}`,
      team,
      tank,
      controller,
      definition,
      hp: team === 'enemy'
        ? definition.hp * this.difficultyPreset.enemyHpMultiplier
        : definition.hp,
      destroyed: false,
      dustTimer: Math.random() * 0.2,
      smokeTimer: Math.random() * 0.35,
      damageSmokeTimer: Math.random() * 0.2,
      damageSparkTimer: Math.random() * 0.35,
      damagePulse: 0,
      modules: {
        trackBroken: false,
        gunDamaged: false,
        engineFire: false,
        ammoRackHit: false
      },
      engineFireTick: 0.7,
      terrainSample: null
    };

    if (team === 'enemy') {
      actor.ai = {
        home: position.clone(),
        patrolTarget: position.clone(),
        retargetTimer: 0,
        fireCooldownBias: Math.random() * 0.45 * this.difficultyPreset.enemyFireRate
      };
    }

    this.actors.push(actor);
    this.bodyToActor.set(controller.body.id, actor);

    if (team === 'enemy') {
      this.enemies.push(actor);
      this.pickPatrolTarget(actor);
      this.createNameplate(actor);
    }

    if (this.modelLoader.hasModel(definition.id)) {
      void this.loadTankModel(actor);
    }

    return actor;
  }

  private async loadTankModel(actor: TankActor): Promise<void> {
    const model = await this.modelLoader.loadTankModel(actor.definition.id, actor.tank.profile);

    if (!model) {
      return;
    }

    actor.tank.applyExternalModel(model);
  }

  private createNameplate(actor: TankActor): void {
    if (!this.nameplateRoot) {
      return;
    }

    const root = document.createElement('div');
    root.className = 'nameplate';
    root.innerHTML = `
      <div class="nameplate__title">${actor.definition.name}</div>
      <div class="nameplate__bar"><div class="nameplate__fill"></div></div>
      <div class="nameplate__value">HP ${actor.hp}</div>
    `;

    const fill = root.querySelector<HTMLDivElement>('.nameplate__fill');
    const value = root.querySelector<HTMLSpanElement>('.nameplate__value');

    if (!fill || !value) {
      root.remove();
      return;
    }

    this.nameplateRoot.appendChild(root);
    this.nameplates.push({ actor, root, fill, value });
  }

  private spawnEnemyBatch(count: number): void {
    for (let index = 0; index < count; index += 1) {
      this.spawnEnemyAt(index);
    }
  }

  private spawnEnemyAt(seedOffset: number): void {
    const definition = this.enemyRoster[this.nextEnemyCursor % this.enemyRoster.length];
    const spawn = this.battlefieldState.enemySpawns[
      (this.totalEnemySpawns + seedOffset) % this.battlefieldState.enemySpawns.length
    ];
    this.nextEnemyCursor += 1;
    this.totalEnemySpawns += 1;
    this.createTankActor(definition, 'enemy', spawn.position.clone(), spawn.yaw);
  }

  private animate = (): void => {
    this.animationFrame = requestAnimationFrame(this.animate);
    const rawDelta = Math.min(this.clock.getDelta(), 0.033);

    if (this.inputController.consumePauseToggle()) {
      if (this.phase === 'running') {
        this.setPaused(true);
      } else if (this.phase === 'paused') {
        this.setPaused(false);
      }
    }

    if (this.phase !== 'running') {
      this.updateEffects(rawDelta);
      this.updateHud();
      this.updateAimPrediction();
      this.renderMinimap();
      this.postProcessing.render(rawDelta);
      return;
    }

    this.elapsedTime += rawDelta;
    this.updatePlayerBuffs(rawDelta);
    this.updateMission(rawDelta);
    this.updateScheduledStrikes(rawDelta);
    this.slowMotionTime = Math.max(0, this.slowMotionTime - rawDelta);
    const targetTimeScale = this.slowMotionTime > 0 ? this.slowMotionScale : 1;
    this.timeScale = MathUtils.damp(this.timeScale, targetTimeScale, 6.5, rawDelta);
    const delta = rawDelta * this.timeScale;

    if (this.inputController.consumeViewToggle()) {
      this.cameraController.cycleMode();
      this.postProcessing.updateCameraMode(this.cameraController.getMode());
      this.refreshHud();
      this.options.audioSystem.playUiClick();
    }

    if (this.inputController.consumeSupport()) {
      this.triggerPlayerSupport();
    }

    if (this.inputController.consumeReticleToggle()) {
      this.toggleReticleVisibility();
      this.options.audioSystem.playUiClick();
    }

    this.updatePlayer(delta);
    this.updateEnemyAi(delta);
    this.world.step(1 / 60, delta, 3);
    this.actors.forEach((actor) => actor.controller.applyDriveVelocityAfterPhysics(delta));
    this.actors.forEach((actor) => actor.controller.syncVisuals());
    this.updateProjectiles(delta);
    this.aimPrediction = this.buildAimPrediction();
    this.cameraController.update(delta, this.player.controller, this.aimPrediction.impactPoint);
    this.environmentSystem.update(
      delta,
      this.player.controller.getPosition(this.tmpPosition.clone()),
      this.renderer
    );
    this.updateModuleDamage(delta);
    this.updateSpatialAudio();
    this.emitVehicleEffects(delta);
    this.particleSystem.update(delta);
    this.updateEffects(delta);
    this.updateHud();
    this.renderAimPrediction();
    this.updateNameplates();
    this.renderMinimap();
    this.postProcessing.render(delta);
  };

  private updatePlayer(delta: number): void {
    let driveInput = this.player.destroyed
      ? { throttle: 0, turn: 0 }
      : this.inputController.getDriveInput();

    if (!this.player.destroyed && this.inputController.isHandbrakeActive()) {
      driveInput = { throttle: 0, turn: driveInput.turn };
    }

    const lookDelta = this.player.destroyed
      ? { x: 0, y: 0 }
      : this.inputController.consumeLookDelta();

    const zooming = !this.player.destroyed && this.inputController.isZoomActive();
    const aimSensitivity = zooming ? 0.5 : 1;
    const aimInput: AimInput = {
      yaw: -lookDelta.x * 0.0032 * aimSensitivity,
      pitch: -lookDelta.y * 0.0018 * aimSensitivity
    };
    const terrain = this.sampleActorTerrain(this.player);

    this.player.controller.update(delta, driveInput, aimInput, terrain, this.player.modules);

    const targetFov = zooming ? 28 : 65;
    const cam = this.cameraController.camera;
    cam.fov = MathUtils.damp(cam.fov, targetFov, 12, delta);
    cam.updateProjectionMatrix();

    if (!this.player.destroyed && this.inputController.consumeFire()) {
      this.tryFire(this.player);
    }
  }

  private updateEnemyAi(delta: number): void {
    this.enemies.forEach((enemy) => {
      const terrain = this.sampleActorTerrain(enemy);

      if (!enemy.ai || enemy.destroyed) {
        enemy.controller.update(
          delta,
          { throttle: 0, turn: 0 },
          { yaw: 0, pitch: 0 },
          terrain,
          enemy.modules
        );
        return;
      }

      const enemyPosition = enemy.controller.getPosition(this.tmpPositionB);
      const targetPoint = this.getEnemyTargetPoint(enemy);
      const toTarget = this.tmpVector.copy(targetPoint).sub(enemyPosition);
      const distance = toTarget.length();
      const hasLineOfSight = this.hasLineOfSightToPoint(enemy, targetPoint);
      const driveInput: DriveInput = { throttle: 0, turn: 0 };
      const aimInput: AimInput = { yaw: 0, pitch: 0 };

      const diff = this.difficultyPreset;

      if (hasLineOfSight && distance < diff.enemyAggressionRange) {
        const desiredYaw = Math.atan2(toTarget.x, toTarget.z);
        const yawError = MathUtils.euclideanModulo(
          desiredYaw - enemy.controller.getHullYaw() + Math.PI,
          Math.PI * 2
        ) - Math.PI;

        driveInput.turn = MathUtils.clamp(-yawError * 1.08, -1, 1);

        if (distance > 28) {
          driveInput.throttle = 0.72;
        } else if (distance < 18) {
          driveInput.throttle = -0.34;
        } else {
          driveInput.throttle = 0.08;
        }

        const aimError = this.getEnemyAimError(enemy, targetPoint, distance);
        aimInput.yaw = MathUtils.clamp(aimError.yaw, -0.04, 0.04);
        aimInput.pitch = MathUtils.clamp(aimError.pitch, -0.024, 0.024);
        enemy.ai.fireCooldownBias = Math.max(0, enemy.ai.fireCooldownBias - delta);

        const movePenalty = enemy.controller.getNormalizedSpeed() * 0.018;
        const yawWindow = 0.025 + movePenalty;
        const pitchWindow = 0.02 + movePenalty * 0.75;

        if (
          enemy.ai.fireCooldownBias <= 0 &&
          distance < diff.enemyFireRange &&
          Math.abs(aimError.yaw) < yawWindow &&
          Math.abs(aimError.pitch) < pitchWindow
        ) {
          this.tryFire(enemy);
          const baseCooldown = 0.45 * diff.enemyFireRate;
          const randomSpread = 0.35 * diff.enemyFireRate;
          enemy.ai.fireCooldownBias = baseCooldown + Math.random() * randomSpread;
        }
      } else {
        enemy.ai.retargetTimer -= delta;

        if (
          enemy.ai.retargetTimer <= 0 ||
          enemyPosition.distanceTo(enemy.ai.patrolTarget) < 5
        ) {
          if (this.options.modeId === 'classic' && this.missionBase && !this.missionBase.destroyed) {
            enemy.ai.patrolTarget.copy(this.missionBase.position);
            enemy.ai.retargetTimer = 3.6;
          } else {
            this.pickPatrolTarget(enemy);
          }
        }

        const toPatrol = this.tmpVector.copy(enemy.ai.patrolTarget).sub(enemyPosition);
        const targetYaw = Math.atan2(toPatrol.x, toPatrol.z);
        const yawError = MathUtils.euclideanModulo(
          targetYaw - enemy.controller.getHullYaw() + Math.PI,
          Math.PI * 2
        ) - Math.PI;

        driveInput.turn = MathUtils.clamp(-yawError * 1.15, -0.7, 0.7);
        driveInput.throttle = toPatrol.length() > 5 ? 0.55 : 0;

        const settleYaw =
          MathUtils.euclideanModulo(
            enemy.controller.getHullYaw() - enemy.controller.getTurretYaw() + Math.PI,
            Math.PI * 2
          ) - Math.PI;
        aimInput.yaw = MathUtils.clamp(settleYaw * 0.08, -0.02, 0.02);
        aimInput.pitch = MathUtils.clamp(-enemy.controller.getGunPitch() * 0.08, -0.01, 0.01);
      }

      enemy.controller.update(delta, driveInput, aimInput, terrain, enemy.modules);
    });
  }

  private getEnemyTargetPoint(enemy: TankActor): Vector3 {
    if (
      this.options.modeId === 'classic' &&
      this.missionBase &&
      !this.missionBase.destroyed &&
      (this.player.destroyed || !this.hasLineOfSight(enemy, this.player))
    ) {
      return this.tmpPosition.copy(this.missionBase.position).add(new Vector3(0, 1.2, 0));
    }

    return this.player.controller.getPosition(this.tmpPosition).add(new Vector3(0, 1.15, 0));
  }

  private getEnemyAimError(
    actor: TankActor,
    targetPosition: Vector3,
    distance: number
  ): { yaw: number; pitch: number } {
    const muzzlePosition = actor.controller.getMuzzleWorldPosition(this.tmpVectorB);
    const desiredDirection = this.tmpDirection
      .copy(targetPosition)
      .sub(muzzlePosition)
      .normalize();
    const baseSpread = MathUtils.mapLinear(distance, 10, 80, 0.002, 0.024) +
      actor.controller.getNormalizedSpeed() * 0.022;
    const accuracySpread = MathUtils.clamp(
      baseSpread * this.difficultyPreset.enemyAccuracy,
      0.001,
      0.05
    );

    desiredDirection.add(
      new Vector3(
        MathUtils.randFloatSpread(accuracySpread),
        MathUtils.randFloatSpread(accuracySpread * 0.55),
        MathUtils.randFloatSpread(accuracySpread)
      )
    ).normalize();

    const desiredYaw = Math.atan2(desiredDirection.x, desiredDirection.z);
    const desiredPitch = Math.asin(MathUtils.clamp(desiredDirection.y, -1, 1));
    const yawError = MathUtils.euclideanModulo(
      desiredYaw - actor.controller.getTurretYaw() + Math.PI,
      Math.PI * 2
    ) - Math.PI;
    const pitchError = desiredPitch - actor.controller.getGunPitch();

    return { yaw: yawError, pitch: pitchError };
  }

  private sampleActorTerrain(actor: TankActor): TerrainSample {
    const sample = this.environmentSystem.sampleTerrain(
      actor.controller.getPosition(this.tmpVector.clone())
    );
    actor.terrainSample = sample;
    return sample;
  }

  private updateMission(delta: number): void {
    if (this.killChainTimer > 0) {
      this.killChainTimer = Math.max(0, this.killChainTimer - delta);

      if (this.killChainTimer === 0) {
        this.killChainCount = 0;
      }
    }

    if (this.supportCooldown > 0) {
      this.supportCooldown = Math.max(0, this.supportCooldown - delta);
    }

    if (this.supportNoticeTimer > 0) {
      this.supportNoticeTimer = Math.max(0, this.supportNoticeTimer - delta);
    }

    if (this.options.modeId === 'survival') {
      const enemiesAlive = this.enemies.filter((enemy) => !enemy.destroyed).length;

      if (enemiesAlive === 0) {
        this.waveCooldown = Math.max(0, this.waveCooldown - delta);

        if (this.waveCooldown === 0) {
          this.wave += 1;
          this.waveCooldown = 2.6;
          this.showBattleMessage(`第 ${this.wave} 波`, 'info');
          this.spawnEnemyBatch(Math.min(this.battlefieldState.enemySpawns.length, SURVIVAL_INITIAL_WAVE + this.wave - 1));
        }
      } else {
        this.waveCooldown = 2.6;
      }
    }

    if (this.options.modeId === 'annihilation') {
      const preset = GAME_MODE_PRESETS.annihilation;
      const remainingToSpawn = this.getRemainingAnnihilationSpawns();
      const enemiesAlive = this.enemies.filter((enemy) => !enemy.destroyed).length;

      if (remainingToSpawn > 0 && enemiesAlive < 4) {
        this.spawnEnemyBatch(Math.min(4 - enemiesAlive, remainingToSpawn));
      }

      if (preset.timeLimit && this.elapsedTime >= preset.timeLimit) {
        this.finishBattle('defeat', '歼灭超时');
      }

      if (this.kills >= (preset.killTarget ?? 0)) {
        this.finishBattle('victory', '歼灭完成');
      }
    }

    if (this.options.modeId === 'classic') {
      if (this.missionBase?.destroyed) {
        this.finishBattle('defeat', '基地被摧毁');
      }

      if (this.enemies.every((enemy) => enemy.destroyed)) {
        this.finishBattle('victory', '基地守住');
      }
    }

    if (this.options.modeId !== 'classic') {
      this.airRaidCooldown = Math.max(0, this.airRaidCooldown - delta);

      if (this.airRaidCooldown === 0) {
        this.scheduleEnemyAirRaid();
        this.airRaidCooldown = 26 + Math.random() * 18;
      }
    }

    if (this.player.destroyed) {
      this.finishBattle('defeat', '你的坦克被击毁');
    }
  }

  private getRemainingAnnihilationSpawns(): number {
    return Math.max(
      0,
      (GAME_MODE_PRESETS.annihilation.killTarget ?? 0) - this.totalEnemySpawns
    );
  }

  private updatePlayerBuffs(delta: number): void {
    this.playerBuffs.speedTimer = Math.max(0, this.playerBuffs.speedTimer - delta);
    this.playerBuffs.reloadTimer = Math.max(0, this.playerBuffs.reloadTimer - delta);
    this.playerBuffs.invincibleTimer = Math.max(0, this.playerBuffs.invincibleTimer - delta);

    this.player.controller.setMobilityMultiplier(
      this.playerBuffs.speedTimer > 0 ? 1.1 : 1
    );
    this.player.controller.setReloadMultiplier(
      this.playerBuffs.reloadTimer > 0 ? 0.8 : 1
    );
  }

  private updateScheduledStrikes(delta: number): void {
    for (let index = this.scheduledStrikes.length - 1; index >= 0; index -= 1) {
      const strike = this.scheduledStrikes[index];
      strike.delay -= delta;

      if (strike.delay > 0) {
        continue;
      }

      this.triggerStrike(strike);
      this.scheduledStrikes.splice(index, 1);
    }
  }

  private scheduleEnemyAirRaid(): void {
    const center = this.player.destroyed
      ? this.missionBase?.position.clone() ?? new Vector3()
      : this.player.controller.getPosition(this.tmpVector).clone();
    const origin = center.clone().add(
      new Vector3(MathUtils.randFloatSpread(10), 0, MathUtils.randFloatSpread(10))
    );

    for (let index = 0; index < 5; index += 1) {
      this.scheduledStrikes.push({
        delay: 1 + index * 0.28,
        position: origin.clone().add(
          new Vector3(MathUtils.randFloatSpread(8), 0, MathUtils.randFloatSpread(8))
        ),
        radius: 4.4,
        damage: 36,
        ownerTeam: 'enemy',
        label: index === 0 ? '空袭来袭' : '空袭',
        shake: 0.38
      });
    }

    this.showBattleMessage('空袭警报', 'destroyed');
  }

  private triggerPlayerSupport(): void {
    if (this.supportCooldown > 0 || !this.aimPrediction) {
      this.showBattleMessage(
        this.supportCooldown > 0
          ? `支援冷却 ${this.supportCooldown.toFixed(1)}s`
          : '未锁定支援目标',
        'info'
      );
      return;
    }

    const center = this.aimPrediction.impactPoint.clone();

    for (let index = 0; index < 5; index += 1) {
      this.scheduledStrikes.push({
        delay: 0.7 + index * 0.24,
        position: center.clone().add(
          new Vector3(MathUtils.randFloatSpread(6), 0, MathUtils.randFloatSpread(6))
        ),
        radius: 4,
        damage: 44,
        ownerTeam: 'player',
        label: index === 0 ? '炮击支援' : '支援炮击',
        shake: 0.34
      });
    }

    this.supportCooldown = SUPPORT_COOLDOWN;
    this.supportNoticeTimer = 1.4;
    this.showBattleMessage('炮击支援已呼叫', 'hit');
  }

  private triggerStrike(strike: ScheduledStrike): void {
    const impact = strike.position.clone();
    impact.y = this.environmentSystem.sampleTerrain(impact).groundHeight + 0.4;
    this.particleSystem.spawnExplosion(impact, strike.ownerTeam === 'player' ? 1.12 : 1.25);
    this.options.audioSystem.playExplosion(impact, 1.05);
    this.applyAreaDamage(strike.ownerTeam, impact, strike.radius, strike.damage);
    this.cameraController.applyShake(strike.shake, 0.18);

    if (strike.label && strike.ownerTeam === 'enemy') {
      this.showBattleMessage(strike.label, 'destroyed');
    }
  }

  private applyAreaDamage(
    ownerTeam: Team,
    center: Vector3,
    radius: number,
    damage: number
  ): void {
    this.actors.forEach((actor) => {
      if (actor.destroyed || actor.team === ownerTeam) {
        return;
      }

      const distance = actor.controller.getPosition(this.tmpPosition).distanceTo(center);

      if (distance > radius) {
        return;
      }

      const falloff = 1 - distance / radius;
      const appliedDamage = Math.max(10, Math.round(damage * falloff));

      if (actor === this.player && this.playerBuffs.invincibleTimer > 0) {
        this.spawnFloatingText('无敌', center.clone().add(new Vector3(0, 1.1, 0)), 'info');
        return;
      }

      actor.hp = Math.max(0, actor.hp - appliedDamage);
      actor.damagePulse = Math.max(actor.damagePulse, 0.78);
      this.spawnFloatingText(`-${appliedDamage}`, center.clone().add(new Vector3(0, 1.1, 0)), 'damage');

      if (actor.hp <= 0) {
        this.destroyActor(
          actor,
          ownerTeam === 'player' ? this.player : actor,
          center.clone(),
          ownerTeam === 'player'
        );
      }
    });

    if (this.missionBase && !this.missionBase.destroyed && ownerTeam === 'enemy') {
      const distance = this.missionBase.position.distanceTo(center);

      if (distance <= radius + 2) {
        this.damageMissionBase(Math.round(damage * 0.7), center);
      }
    }
  }

  private updateModuleDamage(delta: number): void {
    this.actors.forEach((actor) => {
      if (actor.destroyed || !actor.modules.engineFire) {
        return;
      }

      actor.engineFireTick -= delta;

      if (actor.engineFireTick <= 0) {
        actor.engineFireTick = 0.68;
        actor.hp = Math.max(0, actor.hp - 4);
        actor.damagePulse = Math.max(actor.damagePulse, 0.44);
        this.spawnFloatingText(
          '-4',
          actor.controller.getPosition(this.tmpVector.clone()).add(new Vector3(0, 1.1, 0)),
          'damage'
        );

        if (actor.hp <= 0) {
          this.destroyActor(
            actor,
            actor === this.player ? actor : this.player,
            actor.controller.getPosition(this.tmpPosition.clone()),
            false
          );
        }
      }
    });
  }

  private emitVehicleEffects(delta: number): void {
    this.actors.forEach((actor) => {
      const speedRatio = actor.controller.getNormalizedSpeed();
      const damageRatio = 1 - actor.hp / actor.definition.hp;
      actor.dustTimer -= delta;
      actor.smokeTimer -= delta;
      actor.damageSmokeTimer -= delta;
      actor.damageSparkTimer -= delta;
      actor.damagePulse = Math.max(0, actor.damagePulse - delta * 0.55);

      if (!actor.destroyed && speedRatio > 0.18 && actor.dustTimer <= 0) {
        const position = actor.controller.getPosition(this.tmpPosition).clone();
        const direction = actor.controller.getFacingDirection(this.tmpDirection).clone();
        const dustSpeed = actor.controller.getTerrainType() === 'road' ? speedRatio * 0.45 : speedRatio;
        this.particleSystem.spawnTrackDust(position, direction, dustSpeed);
        actor.dustTimer = MathUtils.lerp(0.26, 0.08, Math.max(dustSpeed, 0.2));
      }

      if (actor.destroyed || speedRatio > 0.1 || actor.modules.engineFire) {
        if (actor.smokeTimer <= 0) {
          const position = actor.controller
            .getPosition(this.tmpPositionB)
            .clone()
            .add(actor.controller.getFacingDirection(this.tmpVector).clone().multiplyScalar(-2))
            .add(new Vector3(0, 0.5, 0));
          const intensity = actor.destroyed
            ? 1
            : actor.modules.engineFire
              ? 0.9
              : 0.25 + speedRatio * 0.38;
          this.particleSystem.spawnEngineSmoke(position, intensity);
          actor.smokeTimer = actor.destroyed || actor.modules.engineFire
            ? 0.14
            : MathUtils.lerp(0.42, 0.18, speedRatio);
        }
      }

      if ((actor.destroyed || damageRatio > 0.24 || actor.damagePulse > 0.24) && actor.damageSmokeTimer <= 0) {
        const smokeOrigin = actor.controller
          .getPosition(this.tmpPosition)
          .clone()
          .add(actor.controller.getFacingDirection(this.tmpDirection).clone().multiplyScalar(-1.35))
          .add(
            new Vector3(
              (Math.random() - 0.5) * 0.35,
              0.9 + damageRatio * 0.55,
              (Math.random() - 0.5) * 0.35
            )
          );
        const smokeIntensity = actor.destroyed
          ? 1
          : MathUtils.clamp(damageRatio * 1.15 + actor.damagePulse * 0.4, 0.25, 0.9);
        this.particleSystem.spawnDamageSmoke(smokeOrigin, smokeIntensity);
        actor.damageSmokeTimer = actor.destroyed
          ? 0.12
          : MathUtils.lerp(0.52, 0.2, smokeIntensity);
      }

      if ((actor.destroyed || damageRatio > 0.42 || actor.damagePulse > 0.42) && actor.damageSparkTimer <= 0) {
        const sparkOrigin = actor.controller
          .getPosition(this.tmpPositionB)
          .clone()
          .add(new Vector3((Math.random() - 0.5) * 0.45, 0.82, (Math.random() - 0.5) * 0.45));
        const sparkIntensity = actor.destroyed
          ? 0.95
          : MathUtils.clamp(damageRatio + actor.damagePulse * 0.65, 0.3, 0.85);
        this.particleSystem.spawnDamageSparks(sparkOrigin, sparkIntensity);
        actor.damageSparkTimer = actor.destroyed
          ? 0.18
          : MathUtils.lerp(0.72, 0.26, sparkIntensity);
      }
    });
  }

  private updateSpatialAudio(): void {
    const listenerEnvironment = this.environmentSystem.getAmbientAudioState(
      this.player.controller.getPosition(this.tmpVector.clone())
    );
    this.options.audioSystem.update(
      this.cameraController.camera.position,
      this.actors.map((actor) => ({
        id: actor.id,
        team: actor.team,
        position: actor.controller.getPosition(this.tmpPosition.clone()),
        speedRatio: actor.controller.getNormalizedSpeed(),
        engineLoad: actor.controller.getEngineLoad(),
        slipRatio: actor.controller.getSlipRatio(),
        terrainType: actor.controller.getTerrainType(),
        destroyed: actor.destroyed
      })),
      listenerEnvironment
    );
  }

  private hasLineOfSight(source: TankActor, target: TankActor): boolean {
    const from = source.controller
      .getMuzzleWorldPosition(this.tmpPosition)
      .add(source.controller.getMuzzleWorldDirection(this.tmpDirection).multiplyScalar(0.8));
    const to = target.controller.getPosition(this.tmpPositionB).clone();
    const result = new CANNON.RaycastResult();

    const hasHit = this.world.raycastClosest(
      new CANNON.Vec3(from.x, from.y, from.z),
      new CANNON.Vec3(to.x, to.y + 1, to.z),
      {},
      result
    );

    return Boolean(hasHit && result.body?.id === target.controller.body.id);
  }

  private hasLineOfSightToPoint(source: TankActor, targetPoint: Vector3): boolean {
    const from = source.controller
      .getMuzzleWorldPosition(this.tmpPosition)
      .add(source.controller.getMuzzleWorldDirection(this.tmpDirection).multiplyScalar(0.8));
    const result = new CANNON.RaycastResult();
    const hasHit = this.world.raycastClosest(
      new CANNON.Vec3(from.x, from.y, from.z),
      new CANNON.Vec3(targetPoint.x, targetPoint.y, targetPoint.z),
      {},
      result
    );

    if (!hasHit || !result.body) {
      return false;
    }

    if (this.missionBase && result.body.id === this.missionBase.body.id) {
      return true;
    }

    return this.bodyToActor.has(result.body.id);
  }

  private pickPatrolTarget(enemy: TankActor): void {
    if (!enemy.ai) {
      return;
    }

    const angle = Math.random() * Math.PI * 2;
    const radius = 10 + Math.random() * 16;

    enemy.ai.patrolTarget.set(
      enemy.ai.home.x + Math.cos(angle) * radius,
      enemy.ai.home.y,
      enemy.ai.home.z + Math.sin(angle) * radius
    );
    enemy.ai.retargetTimer = 5 + Math.random() * 4;
  }

  private tryFire(actor: TankActor): void {
    if (!actor.controller.canFire()) {
      return;
    }

    const ammoPackage = this.getAmmoPackage(actor, true);
    const direction = actor.controller.getMuzzleWorldDirection(this.tmpDirection).clone();

    if (actor.modules.gunDamaged) {
      direction
        .add(
          new Vector3(
            MathUtils.randFloatSpread(0.05),
            MathUtils.randFloatSpread(0.03),
            MathUtils.randFloatSpread(0.05)
          )
        )
        .normalize();
    }

    const origin = actor.controller
      .getMuzzleWorldPosition(this.tmpPosition)
      .clone()
      .addScaledVector(direction, 0.7);
    const projectile = new Projectile({
      ammo: ammoPackage.ammo,
      origin,
      direction,
      ownerBodyId: actor.controller.body.id
    });

    this.scene.add(projectile.mesh, projectile.trail);
    this.projectiles.push({
      owner: actor,
      projectile,
      whizPlayed: false,
      specialAmmo: ammoPackage.kind
    });
    actor.controller.markFired();
    this.options.audioSystem.playShot(actor.definition.gunCaliber, origin, actor.team);
    this.particleSystem.spawnMuzzleFlash(origin, direction, projectile.ammo.trailColor);

    if (actor.team === 'player' && this.cameraController.getMode() === CameraMode.POV) {
      this.cameraController.applyShake(0.28, 0.12);
    }
  }

  private getAmmoPackage(
    actor: TankActor,
    consumeSpecial: boolean
  ): { ammo: AmmoDefinition; kind: ActiveProjectile['specialAmmo'] } {
    const baseAmmo = { ...getAmmoDefinition(actor.definition.gunCaliber) };

    if (actor.team !== 'player') {
      return { ammo: baseAmmo, kind: 'standard' };
    }

    if (this.playerBuffs.heShots > 0) {
      if (consumeSpecial) {
        this.playerBuffs.heShots = Math.max(0, this.playerBuffs.heShots - 1);
      }

      return {
        ammo: {
          ...baseAmmo,
          damage: Math.round(baseAmmo.damage * 1.12),
          trailColor: '#ffb45d'
        },
        kind: 'he'
      };
    }

    if (this.playerBuffs.apShots > 0) {
      if (consumeSpecial) {
        this.playerBuffs.apShots = Math.max(0, this.playerBuffs.apShots - 1);
      }

      return {
        ammo: {
          ...baseAmmo,
          penetration: Math.round(baseAmmo.penetration * 1.3),
          trailColor: '#dbeafe'
        },
        kind: 'ap'
      };
    }

    return { ammo: baseAmmo, kind: 'standard' };
  }

  private updateProjectiles(delta: number): void {
    for (let index = this.projectiles.length - 1; index >= 0; index -= 1) {
      const entry = this.projectiles[index];
      const hit = entry.projectile.update(delta, this.world);

      if (
        !entry.whizPlayed &&
        entry.owner.team !== 'player' &&
        entry.projectile.position.distanceTo(this.cameraController.camera.position) < 7
      ) {
        entry.whizPlayed = true;
        this.options.audioSystem.playShellWhiz(
          entry.projectile.position.clone(),
          MathUtils.clamp(entry.projectile.velocity.length() / 120, 0.5, 1.2)
        );
      }

      if (hit) {
        this.handleProjectileHit(
          entry.owner,
          entry.projectile,
          entry.specialAmmo,
          hit.body,
          hit.point,
          hit.normal
        );
      }

      if (!entry.projectile.isActive) {
        this.scene.remove(entry.projectile.mesh, entry.projectile.trail);
        entry.projectile.destroy();
        this.projectiles.splice(index, 1);
      }
    }
  }

  private handleProjectileHit(
    owner: TankActor,
    projectile: Projectile,
    specialAmmo: ActiveProjectile['specialAmmo'],
    body: CANNON.Body,
    hitPoint: Vector3,
    hitNormal: Vector3
  ): void {
    const target = this.bodyToActor.get(body.id);

    if (!target && this.missionBase && body.id === this.missionBase.body.id) {
      this.particleSystem.spawnImpact(hitPoint, hitNormal, true);
      this.options.audioSystem.playArmorHit(hitPoint, true);
      this.damageMissionBase(Math.round(projectile.ammo.damage * 0.9), hitPoint);
      return;
    }

    if (!target) {
      const structureImpact = this.environmentSystem.handleStructureHit(
        body,
        hitPoint,
        projectile.velocity.clone().normalize(),
        projectile.ammo.penetration,
        projectile.ammo.damage
      );

      this.particleSystem.spawnImpact(hitPoint, hitNormal, Boolean(structureImpact?.penetrated));
      this.options.audioSystem.playArmorHit(hitPoint, Boolean(structureImpact?.penetrated));

      if (structureImpact?.penetrated) {
        this.spawnStructurePenetrationShot(owner, projectile, hitPoint, specialAmmo);
        if (owner.team === 'player') {
          this.showBattleMessage(structureImpact.message ?? '墙体击穿', 'hit');
        }
      }

      if (owner.team === 'player' && specialAmmo === 'he') {
        this.applyAreaDamage('player', hitPoint, 3, Math.round(projectile.ammo.damage * 0.92));
      }

      return;
    }

    if (target.destroyed || target.team === owner.team) {
      this.particleSystem.spawnImpact(hitPoint, hitNormal, false);
      this.options.audioSystem.playArmorHit(hitPoint, false);
      return;
    }

    if (target === this.player && this.playerBuffs.invincibleTimer > 0) {
      this.particleSystem.spawnImpact(hitPoint, hitNormal, false);
      this.spawnFloatingText('无敌', hitPoint, 'info');
      return;
    }

    const isEnemyHittingPlayer = owner.team === 'enemy' && target === this.player;
    const mult = isEnemyHittingPlayer
      ? this.difficultyPreset.enemyDamageMultiplier * (1 - this.difficultyPreset.playerDamageReduction)
      : 1;
    const damageResult = this.damageSystem.resolveHit(
      projectile,
      target,
      hitPoint,
      hitNormal,
      mult
    );

    if (damageResult.ricochet) {
      this.showBattleMessage('跳弹', 'ricochet');
      this.spawnFloatingText('跳弹', hitPoint, 'ricochet');
      this.particleSystem.spawnImpact(hitPoint, hitNormal, false);
      this.options.audioSystem.playRicochet(hitPoint);
      return;
    }

    this.particleSystem.spawnImpact(hitPoint, hitNormal, damageResult.penetrated);
    this.options.audioSystem.playArmorHit(hitPoint, damageResult.penetrated);

    if (damageResult.penetrated) {
      target.damagePulse = Math.max(target.damagePulse, damageResult.destroyed ? 1 : 0.78);
      target.damageSmokeTimer = 0;
      target.damageSparkTimer = 0;
      target.tank.addArmorDeformation(damageResult.localHitPoint, damageResult.deformation);
      this.spawnFloatingText(`-${damageResult.damage}`, hitPoint, 'damage');

      if (damageResult.moduleHit) {
        this.applyModuleDamage(target, damageResult.moduleHit.module, damageResult.moduleHit.severity, hitPoint);
      }

      if (owner.team === 'player') {
        this.hitFlashTime = 0.18;
      }

      if (target.team === 'player') {
        this.damageOverlay = 0.85;
        this.cameraController.applyShake(0.48, 0.22);
      }

      const violentKill = target.modules.ammoRackHit && damageResult.moduleHit?.module === 'ammo';

      if (specialAmmo === 'he' && owner.team === 'player') {
        this.applyAreaDamage('player', hitPoint, 3, Math.round(projectile.ammo.damage * 0.88));
      }

      if (damageResult.destroyed || violentKill) {
        this.destroyActor(target, owner, hitPoint, violentKill);
        this.showBattleMessage('击毁', 'destroyed');
        this.spawnFloatingText('击毁', hitPoint, 'destroyed');
        if (owner.team === 'player') {
          this.triggerSlowMotion(violentKill ? 0.32 : 0.22, violentKill ? 0.34 : 0.52);
        }
      } else if (owner.team === 'player') {
        const bonusText =
          damageResult.zone === 'rear'
            ? '暴击 后部'
            : damageResult.zone === 'side'
              ? '暴击 侧面'
              : `命中 ${damageResult.zone}`;
        this.showBattleMessage(bonusText, 'hit');
      }
    } else if (owner.team === 'player') {
      this.showBattleMessage('未击穿', 'info');
      this.spawnFloatingText('未击穿', hitPoint, 'info');
    }
  }

  private damageMissionBase(amount: number, hitPoint: Vector3): void {
    if (!this.missionBase || this.missionBase.destroyed) {
      return;
    }

    this.missionBase.hp = Math.max(0, this.missionBase.hp - amount);
    this.spawnFloatingText(`基地 -${amount}`, hitPoint.clone().add(new Vector3(0, 1.2, 0)), 'destroyed');

    if (this.missionBase.hp <= 0) {
      this.missionBase.destroyed = true;
      this.particleSystem.spawnExplosion(this.missionBase.position.clone().add(new Vector3(0, 1, 0)), 1.8);
      this.options.audioSystem.playExplosion(this.missionBase.position.clone(), 1.25);
      this.showBattleMessage('基地被摧毁', 'destroyed');
    }
  }

  private destroyActor(
    target: TankActor,
    owner: TankActor,
    hitPoint: Vector3,
    violent = false
  ): void {
    if (target.destroyed) {
      return;
    }

    target.destroyed = true;
    target.damagePulse = 1;
    target.damageSmokeTimer = 0;
    target.damageSparkTimer = 0;
    target.modules.engineFire = false;
    target.controller.disableCombat();
    target.tank.setDestroyedVisual(violent);
    this.bodyToActor.delete(target.controller.body.id);

    if (owner.team === 'player' && target.team === 'enemy') {
      const streakBonus = this.registerKillChain();
      this.score += target.definition.scoreValue + streakBonus;
      this.kills += 1;
      this.grantRandomReward();
    }

    if (target.team === 'player') {
      this.showBattleMessage('载具被击毁', 'destroyed');
    }

    const wreckCenter = target.controller
      .getPosition(this.tmpPosition)
      .clone()
      .add(new Vector3(0, 1.05, 0));
    this.particleSystem.spawnExplosion(hitPoint, violent ? 1.65 : 1.35);
    this.particleSystem.spawnExplosion(wreckCenter, violent ? 1.15 : 0.95);
    this.options.audioSystem.playExplosion(hitPoint, target.team === 'player' ? 1.15 : violent ? 1.2 : 1);
    this.addKillFeed(owner, target);
  }

  private registerKillChain(): number {
    this.killChainCount += 1;
    this.killChainTimer = 4;

    if (this.killChainCount === 1) {
      this.showBattleMessage('击毁！', 'hit');
      return 0;
    }

    if (this.killChainCount === 2) {
      this.showBattleMessage('双杀！', 'destroyed');
      return 50;
    }

    if (this.killChainCount >= 3) {
      this.playerBuffs.invincibleTimer = 5;
      this.showBattleMessage('三连杀！无敌启动', 'destroyed');
      return 120;
    }

    return 0;
  }

  private grantRandomReward(): void {
    const roll = Math.random();

    if (roll < 0.2) {
      const heal = Math.round(this.player.definition.hp * 0.2);
      this.player.hp = Math.min(this.player.definition.hp, this.player.hp + heal);
      this.showBattleMessage('奖励: 血量恢复 +20%', 'hit');
      return;
    }

    if (roll < 0.4) {
      this.playerBuffs.speedTimer = 30;
      this.showBattleMessage('奖励: 机动提升 30s', 'hit');
      return;
    }

    if (roll < 0.6) {
      this.playerBuffs.reloadTimer = 30;
      this.showBattleMessage('奖励: 装填加速 30s', 'hit');
      return;
    }

    if (roll < 0.8) {
      this.playerBuffs.apShots = 5;
      this.playerBuffs.heShots = 0;
      this.showBattleMessage('奖励: 高级穿甲弹 x5', 'hit');
      return;
    }

    this.playerBuffs.heShots = 3;
    this.playerBuffs.apShots = 0;
    this.showBattleMessage('奖励: 高爆弹 x3', 'hit');
  }

  private applyModuleDamage(
    target: TankActor,
    module: DamageModule,
    severity: number,
    hitPoint: Vector3
  ): void {
    if (module === 'track' && !target.modules.trackBroken && severity > 0.32) {
      target.modules.trackBroken = true;
      this.spawnFloatingText('履带断裂', hitPoint, 'info');
      if (target.team === 'player') {
        this.showBattleMessage('履带断裂', 'destroyed');
      }
      return;
    }

    if (module === 'gun' && !target.modules.gunDamaged && severity > 0.28) {
      target.modules.gunDamaged = true;
      this.spawnFloatingText('炮管受损', hitPoint, 'info');
      return;
    }

    if (module === 'engine' && !target.modules.engineFire && severity > 0.24) {
      target.modules.engineFire = true;
      target.engineFireTick = 0.58;
      this.spawnFloatingText('发动机起火', hitPoint, 'destroyed');
      return;
    }

    if (module === 'ammo' && severity > 0.34) {
      target.modules.ammoRackHit = true;
      this.spawnFloatingText('弹药架命中', hitPoint, 'destroyed');
    }
  }

  private spawnStructurePenetrationShot(
    owner: TankActor,
    projectile: Projectile,
    hitPoint: Vector3,
    specialAmmo: ActiveProjectile['specialAmmo']
  ): void {
    const direction = projectile.velocity.clone().normalize();
    const passthrough = new Projectile({
      ammo: {
        ...projectile.ammo,
        penetration: projectile.ammo.penetration * 0.72,
        damage: projectile.ammo.damage * 0.74,
        speed: projectile.ammo.speed * 0.86
      },
      origin: hitPoint.clone().addScaledVector(direction, 1),
      direction,
      ownerBodyId: owner.controller.body.id
    });

    this.scene.add(passthrough.mesh, passthrough.trail);
    this.projectiles.push({
      owner,
      projectile: passthrough,
      whizPlayed: true,
      specialAmmo
    });
  }

  private triggerSlowMotion(duration: number, scale: number): void {
    this.slowMotionTime = Math.max(this.slowMotionTime, duration);
    this.slowMotionScale = scale;
  }

  private updateEffects(delta: number): void {
    this.damageOverlay = Math.max(0, this.damageOverlay - delta * 1.85);
    this.hitFlashTime = Math.max(0, this.hitFlashTime - delta * 3.2);
    this.centerMessageTime = Math.max(0, this.centerMessageTime - delta);

    if (this.damageVignette) {
      this.damageVignette.style.opacity = `${this.damageOverlay}`;
    }

    if (this.hitFlash) {
      this.hitFlash.style.opacity = `${this.hitFlashTime}`;
    }

    if (this.centerMessage) {
      this.centerMessage.style.opacity = this.centerMessageTime > 0 ? '1' : '0';
    }

    for (let index = this.floatingTexts.length - 1; index >= 0; index -= 1) {
      const entry = this.floatingTexts[index];
      entry.life -= delta;
      entry.worldPosition.y += entry.velocity * delta;

      if (entry.life <= 0) {
        entry.element.remove();
        this.floatingTexts.splice(index, 1);
        continue;
      }

      this.projectWorldToScreen(entry.worldPosition, this.screenPoint);
      entry.element.style.transform = `translate(${this.screenPoint.x}px, ${this.screenPoint.y}px)`;
      entry.element.style.opacity = `${Math.min(1, entry.life * 1.8)}`;
    }

    for (let index = this.killFeedEntries.length - 1; index >= 0; index -= 1) {
      const entry = this.killFeedEntries[index];
      entry.life -= delta;

      if (entry.life <= 0) {
        entry.element.remove();
        this.killFeedEntries.splice(index, 1);
        continue;
      }

      entry.element.style.opacity = `${Math.min(1, entry.life * 1.6)}`;
    }
  }

  private updateNameplates(): void {
    const cameraPos = this.cameraController.camera.position;
    const cfg = this.nameplateConfig;

    this.nameplates.forEach((nameplate) => {
      const worldPosition = nameplate.actor.tank.nameAnchor.getWorldPosition(this.tmpVector);
      const projected = worldPosition.clone().project(this.cameraController.camera);

      if (
        projected.z < -1 ||
        projected.z > 1 ||
        Math.abs(projected.x) > 1.1 ||
        Math.abs(projected.y) > 1.1
      ) {
        nameplate.root.style.opacity = '0';
        return;
      }

      const distance = cameraPos.distanceTo(worldPosition);
      const scaleFactor = MathUtils.clamp(1 - (distance - 20) / 120, 0.45, 1);

      this.screenPoint.set(
        ((projected.x + 1) * 0.5) * window.innerWidth,
        ((-projected.y + 1) * 0.5) * window.innerHeight
      );

      let visible = true;

      if (cfg.displayMode === 'aim') {
        const cx = window.innerWidth * 0.5;
        const cy = window.innerHeight * 0.5;
        const dx = this.screenPoint.x - cx;
        const dy = this.screenPoint.y - cy;
        visible = Math.sqrt(dx * dx + dy * dy) < 90;
      } else if (cfg.displayMode === 'hover') {
        const mx = this.inputController.getPointerScreenX();
        const my = this.inputController.getPointerScreenY();
        const dx = this.screenPoint.x - mx;
        const dy = this.screenPoint.y - my;
        visible = Math.sqrt(dx * dx + dy * dy) < 120;
      }

      nameplate.root.style.opacity = visible ? '1' : '0';
      nameplate.root.style.transform = `translate(${this.screenPoint.x}px, ${this.screenPoint.y}px) scale(${scaleFactor})`;
      nameplate.fill.style.width = `${(nameplate.actor.hp / nameplate.actor.definition.hp) * 100}%`;
      nameplate.value.textContent = nameplate.actor.destroyed
        ? '击毁'
        : `HP ${Math.round(nameplate.actor.hp)}`;
      nameplate.root.classList.toggle('is-destroyed', nameplate.actor.destroyed);

      const titleEl = nameplate.root.querySelector<HTMLElement>('.nameplate__title');
      const barEl = nameplate.root.querySelector<HTMLElement>('.nameplate__bar');

      if (titleEl) {
        titleEl.classList.toggle('is-hidden', !cfg.showTankModel);
      }

      if (barEl) {
        barEl.classList.toggle('is-hidden', !cfg.showHealthBar);
      }

      nameplate.value.classList.toggle('is-hidden', !cfg.showHpValue);
    });
  }

  private updateAimPrediction(): void {
    this.aimPrediction = this.buildAimPrediction();
    this.renderAimPrediction();
  }

  private buildAimPrediction(): AimPrediction {
    const ammoPackage = this.getAmmoPackage(this.player, false);
    const origin = this.player.controller.getMuzzleWorldPosition(this.tmpPosition).clone();
    const direction = this.player.controller.getMuzzleWorldDirection(this.tmpDirection).clone();
    const gravity = new Vector3(0, -9.82 * ammoPackage.ammo.gravityScale, 0);
    const velocity = direction.clone().multiplyScalar(ammoPackage.ammo.speed);
    const from = origin.clone().addScaledVector(direction, 0.7);
    let previous = from.clone();
    let impact = previous.clone();
    let targetActor: TankActor | null = null;
    let canHit = false;
    let travelTime = 0;

    for (let step = 0; step < AIM_MAX_STEPS; step += 1) {
      velocity.addScaledVector(gravity, AIM_STEP_SECONDS);
      const next = previous.clone().addScaledVector(velocity, AIM_STEP_SECONDS);
      travelTime += AIM_STEP_SECONDS;

      const predictiveHit = this.findLeadAimTargetHit(previous, next, travelTime);
      const result = new CANNON.RaycastResult();
      const hasObstacleHit = this.world.raycastClosest(
        new CANNON.Vec3(previous.x, previous.y, previous.z),
        new CANNON.Vec3(next.x, next.y, next.z),
        {},
        result
      );
      const obstacleHit =
        hasObstacleHit && result.body && result.body.id !== this.player.controller.body.id
          ? {
              point: new Vector3(
                result.hitPointWorld.x,
                result.hitPointWorld.y,
                result.hitPointWorld.z
              ),
              actor: this.bodyToActor.get(result.body.id) ?? null
            }
          : null;

      if (predictiveHit) {
        const obstacleDistance = obstacleHit
          ? previous.distanceTo(obstacleHit.point)
          : Number.POSITIVE_INFINITY;

        if (predictiveHit.distance <= obstacleDistance + 0.05) {
          impact = predictiveHit.point;
          targetActor = predictiveHit.actor;
          canHit = true;
          break;
        }
      }

      if (obstacleHit) {
        impact = obstacleHit.point;
        targetActor = obstacleHit.actor;
        canHit = Boolean(targetActor && targetActor.team === 'enemy' && !targetActor.destroyed);
        break;
      }

      impact = next.clone();
      previous = next;

      if (next.y <= 0 || next.distanceTo(from) > AIM_MAX_DISTANCE) {
        break;
      }
    }

    return {
      impactPoint: impact,
      distance: from.distanceTo(impact),
      targetActor,
      canHit
    };
  }

  private renderAimPrediction(): void {
    if (!this.aimPrediction) {
      return;
    }

    if (this.rangeIndicator) {
      this.rangeIndicator.textContent = `${this.aimPrediction.distance.toFixed(0)} m`;
    }

    const ammoPackage = this.getAmmoPackage(this.player, false);

    if (this.ammoIndicator) {
      this.ammoIndicator.textContent = this.getAmmoStatusText(ammoPackage.kind, ammoPackage.ammo.caliber);
    }

    const canHitEnemy = Boolean(
      this.aimPrediction.canHit &&
        this.aimPrediction.targetActor &&
        this.aimPrediction.targetActor.team === 'enemy' &&
        !this.aimPrediction.targetActor.destroyed
    );

    this.reticle?.classList.toggle('is-hostile', canHitEnemy);

    if (this.hitIndicator) {
      this.hitIndicator.textContent = canHitEnemy ? '可命中' : '预测落点';
    }
  }

  private findLeadAimTargetHit(
    start: Vector3,
    end: Vector3,
    secondsAhead: number
  ): { actor: TankActor; point: Vector3; distance: number } | null {
    let closestHit: { actor: TankActor; point: Vector3; distance: number } | null = null;

    this.enemies.forEach((enemy) => {
      if (enemy.destroyed) {
        return;
      }

      const targetCenter = enemy.controller.getPredictedPosition(
        secondsAhead,
        new Vector3()
      );
      targetCenter.y += enemy.tank.profile.collisionHalfExtents.y * 0.85;
      const hitPoint = this.getSegmentSphereHit(
        start,
        end,
        targetCenter,
        this.getAimTargetRadius(enemy)
      );

      if (!hitPoint) {
        return;
      }

      const distance = start.distanceTo(hitPoint);

      if (!closestHit || distance < closestHit.distance) {
        closestHit = {
          actor: enemy,
          point: hitPoint,
          distance
        };
      }
    });

    return closestHit;
  }

  private getAimTargetRadius(actor: TankActor): number {
    return MathUtils.clamp(
      Math.max(
        actor.tank.profile.collisionHalfExtents.x,
        actor.tank.profile.collisionHalfExtents.z
      ) * 0.58,
      1.25,
      2.1
    );
  }

  private getSegmentSphereHit(
    start: Vector3,
    end: Vector3,
    center: Vector3,
    radius: number
  ): Vector3 | null {
    const segment = end.clone().sub(start);
    const offset = start.clone().sub(center);
    const a = segment.dot(segment);

    if (a <= 0.000001) {
      return null;
    }

    const b = 2 * offset.dot(segment);
    const c = offset.dot(offset) - radius * radius;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return null;
    }

    const root = Math.sqrt(discriminant);
    const tMin = (-b - root) / (2 * a);
    const tMax = (-b + root) / (2 * a);
    const t =
      tMin >= 0 && tMin <= 1
        ? tMin
        : tMax >= 0 && tMax <= 1
          ? tMax
          : null;

    if (t === null) {
      return null;
    }

    return start.clone().addScaledVector(segment, t);
  }

  private renderMinimap(): void {
    if (!this.minimapCanvas || !this.minimapContext) {
      return;
    }

    const canvas = this.minimapCanvas;
    const context = this.minimapContext;
    const size = canvas.width;
    const extent = this.battlefieldState.worldExtents;
    const scale = size / (extent * 2);

    context.clearRect(0, 0, size, size);
    context.fillStyle = '#10181d';
    context.fillRect(0, 0, size, size);
    context.strokeStyle = 'rgba(255,255,255,0.08)';
    context.lineWidth = 1;

    for (let step = 0; step <= 6; step += 1) {
      const offset = (size / 6) * step;
      context.beginPath();
      context.moveTo(offset, 0);
      context.lineTo(offset, size);
      context.stroke();
      context.beginPath();
      context.moveTo(0, offset);
      context.lineTo(size, offset);
      context.stroke();
    }

    this.battlefieldState.structures.forEach((structure) => {
      const x = size / 2 + structure.position.x * scale;
      const y = size / 2 - structure.position.z * scale;
      context.save();
      context.translate(x, y);
      context.rotate(-structure.yaw);
      context.fillStyle = 'rgba(203, 213, 225, 0.16)';
      context.strokeStyle = 'rgba(226, 232, 240, 0.22)';
      context.fillRect(
        (-structure.size.x * scale) / 2,
        (-structure.size.z * scale) / 2,
        structure.size.x * scale,
        structure.size.z * scale
      );
      context.strokeRect(
        (-structure.size.x * scale) / 2,
        (-structure.size.z * scale) / 2,
        structure.size.x * scale,
        structure.size.z * scale
      );
      context.restore();
    });

    if (this.missionBase) {
      const point = this.worldToMinimap(this.missionBase.position, size, scale);
      context.strokeStyle = '#f59e0b';
      context.lineWidth = 2;
      context.beginPath();
      context.arc(point.x, point.y, 10, 0, Math.PI * 2);
      context.stroke();
      context.fillStyle = '#fde68a';
      context.fillRect(point.x - 3, point.y - 3, 6, 6);
    }

    const playerPoint = this.worldToMinimap(
      this.player.controller.getPosition(this.tmpPosition),
      size,
      scale
    );
    context.fillStyle = '#5ee26d';
    context.beginPath();
    context.arc(playerPoint.x, playerPoint.y, 5, 0, Math.PI * 2);
    context.fill();
    const facing = this.player.controller.getFacingDirection(this.tmpDirection);
    context.strokeStyle = '#86efac';
    context.beginPath();
    context.moveTo(playerPoint.x, playerPoint.y);
    context.lineTo(
      playerPoint.x + facing.x * 12,
      playerPoint.y - facing.z * 12
    );
    context.stroke();

    this.enemies.forEach((enemy) => {
      if (enemy.destroyed) {
        return;
      }

      const point = this.worldToMinimap(
        enemy.controller.getPosition(this.tmpPositionB),
        size,
        scale
      );
      context.fillStyle = '#ef4444';
      context.beginPath();
      context.arc(point.x, point.y, 4.5, 0, Math.PI * 2);
      context.fill();
    });
  }

  private worldToMinimap(position: Vector3, size: number, scale: number): { x: number; y: number } {
    return {
      x: size / 2 + position.x * scale,
      y: size / 2 - position.z * scale
    };
  }

  private spawnFloatingText(
    text: string,
    worldPosition: Vector3,
    tone: FloatingTone
  ): void {
    if (!this.floatingTextRoot) {
      return;
    }

    const element = document.createElement('div');
    element.className = `floating-text is-${tone}`;
    element.textContent = text;
    this.floatingTextRoot.appendChild(element);
    this.floatingTexts.push({
      element,
      worldPosition: worldPosition.clone(),
      velocity: 1.35,
      life: 0.95
    });
  }

  private showBattleMessage(message: string, tone: MessageTone): void {
    if (!this.centerMessage) {
      return;
    }

    this.centerMessage.textContent = message;
    this.centerMessage.dataset.tone = tone;
    this.centerMessageTime = 1.05;
  }

  private addKillFeed(owner: TankActor, target: TankActor): void {
    if (!this.killFeedRoot) {
      return;
    }

    const entry = document.createElement('div');
    const ownerLabel = owner.team === 'player' ? '你' : owner.definition.name;
    const targetLabel = target.team === 'player' ? '你' : target.definition.name;
    const tone: KillTone = owner.team === 'player' ? 'player' : 'enemy';

    entry.className = `kill-feed__entry is-${tone}`;
    entry.textContent = `${ownerLabel} 击毁 ${targetLabel}`;
    this.killFeedRoot.prepend(entry);
    this.killFeedEntries.push({
      element: entry,
      life: 4.2
    });
  }

  private projectWorldToScreen(position: Vector3, target: Vector2): Vector2 {
    const projected = position.clone().project(this.cameraController.camera);
    target.set(
      ((projected.x + 1) * 0.5) * window.innerWidth,
      ((-projected.y + 1) * 0.5) * window.innerHeight
    );

    return target;
  }

  private refreshHud(): void {
    const modeLabel = this.getCameraModeLabel(this.cameraController.getMode());

    if (this.viewLabel) {
      this.viewLabel.textContent = modeLabel;
    }

    if (this.viewLabelMobile) {
      this.viewLabelMobile.textContent = modeLabel;
    }

    if (this.tankLabel) {
      this.tankLabel.textContent = this.player.definition.name;
    }

    if (this.tankLabelMobile) {
      this.tankLabelMobile.textContent = this.player.definition.name;
    }

    if (this.nationLabel) {
      this.nationLabel.textContent = NATION_LABELS[this.player.definition.nation];
    }

    if (this.sceneLabel) {
      this.sceneLabel.textContent = this.battlefieldState.label;
    }

    if (this.weatherLabel) {
      this.weatherLabel.textContent = this.weatherState.label;
    }

    if (this.missionLabel) {
      this.missionLabel.textContent = GAME_MODE_PRESETS[this.options.modeId].label;
    }

    if (this.objectiveLabel) {
      this.objectiveLabel.textContent = this.getObjectiveText();
    }

    this.applyReticleVisibility();
  }

  private updateHud(): void {
    this.refreshHud();
    this.refreshBuffPanel();
    this.refreshPauseOverlay();

    if (this.scoreLabel) {
      this.scoreLabel.textContent = `${this.score}`;
    }

    if (this.killLabel) {
      this.killLabel.textContent = `${this.kills}`;
    }

    const enemiesAlive = this.enemies.filter((enemy) => !enemy.destroyed).length;

    if (this.enemyCountLabel) {
      this.enemyCountLabel.textContent = `${enemiesAlive}`;
    }

    if (this.hpFill) {
      this.hpFill.style.width = `${(this.player.hp / this.player.definition.hp) * 100}%`;
    }

    if (this.hpValue) {
      this.hpValue.textContent = `${Math.round(this.player.hp)} / ${this.player.definition.hp}`;
    }

    const reloadProgress = this.player.controller.getReloadProgress();

    if (this.reloadFill) {
      this.reloadFill.style.width = `${reloadProgress * 100}%`;
    }

    if (this.reloadValue) {
      this.reloadValue.textContent =
        reloadProgress >= 1
          ? '炮弹就绪'
          : `${this.player.controller.getReloadRemaining().toFixed(1)}s`;
    }

    if (this.reloadRing) {
      this.reloadRing.style.strokeDasharray = `${RETICLE_RING_CIRCUMFERENCE}`;
      this.reloadRing.style.strokeDashoffset = `${RETICLE_RING_CIRCUMFERENCE * (1 - reloadProgress)}`;
    }

    this.reticle?.classList.toggle('is-ready', reloadProgress >= 1);

    if (this.supportFill) {
      const ratio = 1 - Math.min(this.supportCooldown / SUPPORT_COOLDOWN, 1);
      this.supportFill.style.width = `${ratio * 100}%`;
    }

    if (this.supportValue) {
      this.supportValue.textContent =
        this.supportCooldown > 0 ? `${this.supportCooldown.toFixed(1)}s` : '可呼叫';
    }

    if (this.modeDetailLine) {
      this.modeDetailLine.textContent = this.getModeDetailText(enemiesAlive);
    }

    if (this.statusLine) {
      const speed = Math.round(this.player.controller.getArcadeSpeedMetersPerSecond() * 3.6);
      const reloadText = reloadProgress >= 1 ? '炮弹就绪' : '装填中';
      const moduleStates = [
        this.player.modules.trackBroken ? '履带断裂' : null,
        this.player.modules.gunDamaged ? '炮管受损' : null,
        this.player.modules.engineFire ? '发动机起火' : null,
        this.playerBuffs.invincibleTimer > 0 ? '无敌' : null
      ]
        .filter(Boolean)
        .join(' / ');
      this.statusLine.textContent = this.player.destroyed
        ? `状态: 载具已击毁 | ${this.battlefieldState.label} ${this.weatherState.label}`
        : `状态: ${reloadText} | 车速 ${speed} km/h | 地形 ${this.getTerrainLabel(this.player.controller.getTerrainType())} | ${this.battlefieldState.label} ${this.weatherState.label}${moduleStates ? ` | ${moduleStates}` : ''}`;
    }
  }

  private getAmmoStatusText(
    kind: ActiveProjectile['specialAmmo'],
    caliber: string
  ): string {
    if (kind === 'he') {
      return `高爆弹 · ${this.playerBuffs.heShots} 发`;
    }

    if (kind === 'ap') {
      return `高级穿甲弹 · ${this.playerBuffs.apShots} 发`;
    }

    return `标准穿甲弹 · ${caliber}`;
  }

  private toggleReticleVisibility(): void {
    this.reticleVisible = !this.reticleVisible;
    this.applyReticleVisibility();
  }

  private applyReticleVisibility(): void {
    if (this.reticle) {
      this.reticle.hidden = !this.reticleVisible;
    }

    if (this.reticleToggleButton) {
      this.reticleToggleButton.setAttribute('aria-pressed', this.reticleVisible ? 'true' : 'false');
    }

    if (this.reticleToggleLabel) {
      this.reticleToggleLabel.textContent = this.reticleVisible ? '开启' : '关闭';
    }
  }

  private refreshBuffPanel(): void {
    if (!this.buffList) {
      return;
    }

    const buffs: string[] = [];

    if (this.playerBuffs.speedTimer > 0) {
      buffs.push(`机动强化 ${this.playerBuffs.speedTimer.toFixed(0)}s`);
    }

    if (this.playerBuffs.reloadTimer > 0) {
      buffs.push(`装填加速 ${this.playerBuffs.reloadTimer.toFixed(0)}s`);
    }

    if (this.playerBuffs.apShots > 0) {
      buffs.push(`高级穿甲弹 ${this.playerBuffs.apShots} 发`);
    }

    if (this.playerBuffs.heShots > 0) {
      buffs.push(`高爆弹 ${this.playerBuffs.heShots} 发`);
    }

    if (this.playerBuffs.invincibleTimer > 0) {
      buffs.push(`无敌 ${this.playerBuffs.invincibleTimer.toFixed(0)}s`);
    }

    this.buffList.innerHTML = buffs.length
      ? buffs.map((buff) => `<div class="buff-pill">${buff}</div>`).join('')
      : '<div class="buff-pill is-empty">暂无增益</div>';
  }

  private refreshPauseOverlay(): void {
    if (!this.pauseScreen) {
      return;
    }

    const isVisible = this.phase === 'paused' || this.phase === 'victory' || this.phase === 'defeat';
    this.pauseScreen.classList.toggle('is-hidden', !isVisible);

    if (this.pauseTitle) {
      this.pauseTitle.textContent =
        this.phase === 'victory'
          ? '任务完成'
          : this.phase === 'defeat'
            ? '任务失败'
            : '已暂停';
    }

    if (this.pauseDescription) {
      this.pauseDescription.textContent =
        this.phase === 'victory'
          ? this.getObjectiveText()
          : this.phase === 'defeat'
            ? this.buildReturnSummary().detail
            : '战斗进程已冻结，可继续、重新开始或返回主界面。';
    }

    if (this.pauseScore) {
      this.pauseScore.textContent = `${this.score}`;
    }

    if (this.pauseKills) {
      this.pauseKills.textContent = `${this.kills}`;
    }

    if (this.pauseProgress) {
      this.pauseProgress.textContent = this.buildReturnSummary().detail;
    }

    if (this.resumeButton) {
      this.resumeButton.hidden = this.phase !== 'paused';
    }
  }

  private setPaused(value: boolean): void {
    if (this.phase === 'victory' || this.phase === 'defeat') {
      return;
    }

    this.phase = value ? 'paused' : 'running';

    if (value) {
      document.exitPointerLock();
    }

    this.refreshPauseOverlay();
  }

  private finishBattle(result: Extract<BattlePhase, 'victory' | 'defeat'>, reason: string): void {
    if (this.phase === 'victory' || this.phase === 'defeat') {
      return;
    }

    this.phase = result;
    document.exitPointerLock();
    this.showBattleMessage(reason, result === 'victory' ? 'hit' : 'destroyed');
    this.refreshPauseOverlay();
  }

  private buildReturnSummary(): GameMenuReturnPayload['summary'] {
    const resultLabel =
      this.phase === 'victory'
        ? '任务完成'
        : this.phase === 'defeat'
          ? '任务失败'
          : this.phase === 'paused'
            ? '战斗已暂停'
            : '战斗进行中';

    return {
      resultLabel,
      score: this.score,
      kills: this.kills,
      detail: this.getModeDetailText(this.enemies.filter((enemy) => !enemy.destroyed).length)
    };
  }

  private getSessionConfig(): GameSessionConfig {
    return {
      playerTankId: this.options.playerTankId ?? DEFAULT_SESSION_CONFIG.playerTankId,
      battlefieldId: this.options.battlefieldId,
      weatherId: this.options.weatherId,
      modeId: this.options.modeId as GameModeId,
      difficultyId: this.options.difficultyId ?? DEFAULT_SESSION_CONFIG.difficultyId,
      nameplateConfig: { ...this.nameplateConfig }
    };
  }

  private getObjectiveText(): string {
    if (this.options.modeId === 'classic') {
      return '守住基地并歼灭所有敌军';
    }

    if (this.options.modeId === 'survival') {
      return '坚持更久并撑过更多波次';
    }

    return '限时完成目标歼灭数';
  }

  private getModeDetailText(enemiesAlive: number): string {
    if (this.options.modeId === 'classic') {
      const baseHp = this.missionBase ? Math.max(0, Math.round(this.missionBase.hp)) : 0;
      return `基地 HP ${baseHp} | 敌军剩余 ${enemiesAlive}`;
    }

    if (this.options.modeId === 'survival') {
      return `第 ${this.wave} 波 | 生存 ${this.elapsedTime.toFixed(0)}s | 敌军 ${enemiesAlive}`;
    }

    const target = GAME_MODE_PRESETS.annihilation.killTarget ?? 0;
    const remainingTime = Math.max(
      0,
      (GAME_MODE_PRESETS.annihilation.timeLimit ?? 0) - this.elapsedTime
    );
    return `已击毁 ${this.kills}/${target} | 倒计时 ${remainingTime.toFixed(0)}s`;
  }

  private getCameraModeLabel(mode: CameraMode): string {
    if (mode === CameraMode.POV) {
      return '炮手视角';
    }

    if (mode === CameraMode.TopDown) {
      return '战术俯视';
    }

    return '第三人称';
  }

  private getTerrainLabel(type: TerrainSample['type']): string {
    if (type === 'road') {
      return '公路';
    }

    if (type === 'mud') {
      return '泥地';
    }

    if (type === 'rubble') {
      return '废墟';
    }

    if (type === 'yard') {
      return '院落';
    }

    return '草地';
  }
}

import * as CANNON from 'cannon-es';
import {
  AmbientLight,
  Box3,
  BoxGeometry,
  BufferAttribute,
  CanvasTexture,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  DynamicDrawUsage,
  Fog,
  Group,
  HemisphereLight,
  InstancedMesh,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NoColorSpace,
  Object3D,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  SphereGeometry,
  Vector3,
  WebGLRenderer
} from 'three';
import { PMREMGenerator } from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

import {
  getBattlefieldById,
  getWeatherPreset,
  type BattlefieldDefinition,
  type StructureDefinition,
  type TerrainZoneDefinition
} from './BattlefieldLayouts';
import type { AmbientAudioState, BattlefieldState, StructureImpactResult, TerrainSample, WeatherState } from './BattlefieldTypes';

interface RainDropState {
  offset: Vector3;
  velocity: number;
}

interface DebrisState {
  body: CANNON.Body;
  mesh: Mesh;
  life: number;
}

interface StructureRuntime {
  definition: StructureDefinition;
  root: Group;
  shell: Mesh;
  body: CANNON.Body | null;
  marks: Mesh[];
  durability: number;
  maxDurability: number;
  scaleFactor: number;
  collapsed: boolean;
}

interface EnvironmentSystemOptions {
  battlefieldId: BattlefieldDefinition['id'];
  weatherId: WeatherState['id'];
}

const WORLD_EXTENTS = 180;
const RAIN_DROP_COUNT = 220;
const SKY_DISTANCE = 450000;

export class EnvironmentSystem {
  private readonly root = new Group();
  private readonly environmentObjects = new Group();
  private readonly effectObjects = new Group();
  private readonly vegetationRoot = new Group();
  private readonly bodies: CANNON.Body[] = [];
  private readonly bodyToStructure = new Map<number, StructureRuntime>();
  private readonly structures: StructureRuntime[] = [];
  private readonly debris: DebrisState[] = [];
  private readonly createdMeshes: Mesh[] = [];
  private readonly allocatedTextures: CanvasTexture[] = [];
  private readonly registeredMaterials = new Set<MeshBasicMaterial | MeshStandardMaterial>();
  private readonly tempObject = new Object3D();
  private readonly sky = new Sky();
  private readonly pmremGenerator: PMREMGenerator;
  private readonly ambientLight = new AmbientLight('#d7d0c1', 1.2);
  private readonly hemiLight = new HemisphereLight('#9ec7ef', '#5a4a32', 0.8);
  private readonly sunLight = new DirectionalLight('#fff2cf', 2);
  private readonly shaftGroup = new Group();
  private readonly rainStates: RainDropState[] = [];
  private readonly rainMesh: InstancedMesh;
  private readonly rainMaterial: MeshBasicMaterial;
  private readonly mistLayer: Mesh;
  private readonly battlefieldDefinition: BattlefieldDefinition;
  private readonly weatherState: WeatherState;
  private environmentTexture: ReturnType<PMREMGenerator['fromScene']> | null = null;
  private groundBody: CANNON.Body | null = null;
  private time = Math.random() * 100;
  private rainDrift = Math.random() * Math.PI * 2;

  constructor(
    private readonly scene: Scene,
    private readonly world: CANNON.World,
    renderer: WebGLRenderer,
    options: EnvironmentSystemOptions
  ) {
    this.pmremGenerator = new PMREMGenerator(renderer);
    this.root.name = 'environment-root';
    this.environmentObjects.name = 'environment-objects';
    this.effectObjects.name = 'environment-effects';
    this.vegetationRoot.name = 'vegetation-root';

    this.battlefieldDefinition = getBattlefieldById(options.battlefieldId);
    const preset = getWeatherPreset(options.weatherId);

    this.weatherState = {
      id: options.weatherId,
      ...preset
    };

    this.scene.add(this.root);
    this.root.add(this.environmentObjects, this.vegetationRoot, this.effectObjects, this.shaftGroup);

    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 180;
    this.sunLight.shadow.camera.left = -80;
    this.sunLight.shadow.camera.right = 80;
    this.sunLight.shadow.camera.top = 80;
    this.sunLight.shadow.camera.bottom = -80;

    this.scene.add(this.ambientLight, this.hemiLight, this.sunLight);
    this.createSky();
    this.applyAtmosphere(renderer);
    this.createGround();
    this.createStructures();
    this.createVegetation();
    this.createVolumeLight();

    this.rainMaterial = new MeshBasicMaterial({
      color: '#d5e6ff',
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    this.rainMesh = new InstancedMesh(new BoxGeometry(0.04, 2.6, 0.04), this.rainMaterial, RAIN_DROP_COUNT);
    this.rainMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.rainMesh.frustumCulled = false;
    this.effectObjects.add(this.rainMesh);

    for (let index = 0; index < RAIN_DROP_COUNT; index += 1) {
      this.rainStates.push({
        offset: new Vector3(
          MathUtils.randFloatSpread(40),
          Math.random() * 32,
          MathUtils.randFloatSpread(40)
        ),
        velocity: 24 + Math.random() * 10
      });
    }

    this.mistLayer = new Mesh(
      new PlaneGeometry(240, 240, 1, 1),
      new MeshBasicMaterial({
        color: '#dbe2eb',
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: DoubleSide
      })
    );
    this.mistLayer.rotation.x = -Math.PI / 2;
    this.mistLayer.position.y = 0.35;
    this.effectObjects.add(this.mistLayer);
    this.registerMesh(this.mistLayer);
  }

  getBattlefieldState(): BattlefieldState {
    return {
      id: this.battlefieldDefinition.id,
      label: this.battlefieldDefinition.label,
      description: this.battlefieldDefinition.description,
      worldExtents: WORLD_EXTENTS,
      playerSpawn: this.battlefieldDefinition.playerSpawn.clone(),
      enemySpawns: this.battlefieldDefinition.enemySpawns.map((spawn) => ({
        position: spawn.position.clone(),
        yaw: spawn.yaw
      })),
      structures: this.battlefieldDefinition.structures.map((structure) => ({
        type: structure.type,
        position: structure.position.clone(),
        size: structure.size.clone(),
        yaw: structure.yaw ?? 0
      })),
      terrainZones: this.battlefieldDefinition.terrainZones.map((zone) => ({
        type: zone.type,
        center: zone.center.clone(),
        size: zone.size.clone()
      })),
      supplyPoints: this.battlefieldDefinition.supplyPoints.map((p) => ({
        x: p.x,
        z: p.z,
        kind: p.kind
      }))
    };
  }

  getWeatherState(): WeatherState {
    return { ...this.weatherState };
  }

  sampleTerrain(position: Vector3): TerrainSample {
    const groundHeight = this.sampleGroundHeight(position.x, position.z);
    const dx = this.sampleGroundHeight(position.x + 1.4, position.z) - this.sampleGroundHeight(position.x - 1.4, position.z);
    const dz = this.sampleGroundHeight(position.x, position.z + 1.4) - this.sampleGroundHeight(position.x, position.z - 1.4);
    const result: TerrainSample = {
      type: 'grass',
      groundHeight,
      slopePitch: MathUtils.clamp(dz * 0.22, -0.16, 0.16),
      slopeRoll: MathUtils.clamp(-dx * 0.22, -0.16, 0.16),
      speedMultiplier: 0.92,
      traction: 0.84,
      braking: 0.82,
      suspension: 0.64,
      roughness: 0.42,
      enclosure: 0,
      interior: false,
      wetness: this.weatherState.wetness
    };

    this.battlefieldDefinition.terrainZones.forEach((zone) => {
      const influence = this.getZoneInfluence(zone, position);

      if (influence <= 0) {
        return;
      }

      result.type = zone.type;
      result.speedMultiplier = MathUtils.lerp(result.speedMultiplier, zone.speedMultiplier, influence);
      result.traction = MathUtils.lerp(result.traction, zone.traction, influence);
      result.braking = MathUtils.lerp(result.braking, zone.braking, influence);
      result.suspension = MathUtils.lerp(result.suspension, zone.suspension, influence);
      result.roughness = MathUtils.lerp(result.roughness, zone.roughness, influence);
      result.enclosure = Math.max(result.enclosure, (zone.enclosure ?? 0) * influence);
      result.interior = result.interior || Boolean(zone.interior && influence > 0.55);
    });

    this.structures.forEach((structure) => {
      if (structure.collapsed || structure.definition.enclosure === undefined) {
        return;
      }

      const local = this.worldToStructureLocal(structure, position);
      const inside =
        Math.abs(local.x) <= structure.definition.size.x * 0.52 &&
        Math.abs(local.z) <= structure.definition.size.z * 0.52 &&
        position.y <= structure.definition.size.y + 0.8;

      if (inside) {
        result.enclosure = Math.max(result.enclosure, structure.definition.enclosure ?? 0.2);
        result.interior = result.interior || (structure.definition.enclosure ?? 0) > 0.3;
      }
    });

    if (this.weatherState.id === 'rain') {
      result.traction *= 0.88;
      result.braking *= 0.86;
    }

    return result;
  }

  getAmbientAudioState(position: Vector3): AmbientAudioState {
    const sample = this.sampleTerrain(position);

    return {
      enclosure: sample.enclosure,
      interior: sample.interior,
      weather: this.weatherState.id,
      wetness: sample.wetness
    };
  }

  handleStructureHit(
    body: CANNON.Body,
    hitPoint: Vector3,
    direction: Vector3,
    penetration: number,
    damage: number
  ): StructureImpactResult | null {
    const structure = this.bodyToStructure.get(body.id);

    if (!structure || !structure.definition.destructible || structure.collapsed) {
      return null;
    }

    const resistance = structure.definition.penetrationResistance ?? 80;
    const penetrated = penetration >= resistance * 0.92;
    const damageScale = penetrated ? 1.15 : 0.55;
    const appliedDamage = Math.max(8, damage * damageScale + Math.max(0, penetration - resistance) * 0.12);
    structure.durability = Math.max(0, structure.durability - appliedDamage);
    structure.scaleFactor = MathUtils.clamp(structure.durability / structure.maxDurability, 0, 1);

    const localPoint = structure.root.worldToLocal(hitPoint.clone());
    this.spawnImpactMark(structure, localPoint);
    this.applyStructuralDamage(structure, localPoint);
    this.rebuildStructureBody(structure);

    let destroyed = false;

    if (structure.scaleFactor <= 0.08 || (structure.definition.collapsible && structure.scaleFactor <= 0.22)) {
      destroyed = true;
      this.collapseStructure(structure, direction);
    }

    return {
      handled: true,
      penetrated,
      destroyed,
      damageApplied: appliedDamage,
      coverLoss: 1 - structure.scaleFactor,
      message: destroyed ? '掩体坍塌' : penetrated ? '墙体击穿' : '结构受损'
    };
  }

  update(delta: number, focusPosition: Vector3, renderer: WebGLRenderer): void {
    this.time += delta;
    this.rainDrift += delta * 0.18;
    renderer.toneMappingExposure = MathUtils.damp(
      renderer.toneMappingExposure,
      this.weatherState.exposure,
      2.2,
      delta
    );

    this.updateAtmosphere(delta);
    this.updateRain(delta, focusPosition);
    this.updateMist(delta, focusPosition);
    this.updateDebris(delta);
  }

  dispose(): void {
    this.root.removeFromParent();
    this.scene.remove(this.ambientLight, this.hemiLight, this.sunLight);
    this.createdMeshes.forEach((mesh) => {
      mesh.geometry.dispose();
    });
    this.registeredMaterials.forEach((material) => material.dispose());
    this.allocatedTextures.forEach((texture) => texture.dispose());
    this.bodies.forEach((body) => this.world.removeBody(body));
    this.debris.forEach((entry) => {
      this.world.removeBody(entry.body);
      entry.mesh.geometry.dispose();
    });
    this.environmentTexture?.texture.dispose();
    this.pmremGenerator.dispose();
    this.rainMesh.geometry.dispose();
  }

  private createSky(): void {
    this.sky.scale.setScalar(SKY_DISTANCE);
    this.root.add(this.sky);
  }

  private applyAtmosphere(renderer: WebGLRenderer): void {
    const uniforms = this.sky.material.uniforms;
    uniforms.turbidity.value = MathUtils.lerp(6.4, 10.5, this.weatherState.mistStrength);
    uniforms.rayleigh.value = MathUtils.lerp(2.8, 1.05, this.weatherState.wetness);
    uniforms.mieCoefficient.value = MathUtils.lerp(0.012, 0.05, this.weatherState.mistStrength);
    uniforms.mieDirectionalG.value = MathUtils.lerp(0.82, 0.96, this.weatherState.mistStrength);
    uniforms.sunPosition.value.setFromSphericalCoords(
      1,
      Math.PI * (1 - this.weatherState.sunHeight * 0.48),
      this.weatherState.sunAzimuth * Math.PI * 2
    );

    this.scene.background = new Color(this.weatherState.fogColor);
    this.scene.fog = new Fog(this.weatherState.fogColor, this.weatherState.fogNear, this.weatherState.fogFar);
    this.scene.environment = null;

    this.ambientLight.color.set(this.weatherState.ambientColor);
    this.ambientLight.intensity = this.weatherState.ambientIntensity;
    this.hemiLight.color.set(this.weatherState.hemiSky);
    this.hemiLight.groundColor.set(this.weatherState.hemiGround);
    this.hemiLight.intensity = this.weatherState.hemiIntensity;
    this.sunLight.color.set(this.weatherState.sunColor);
    this.sunLight.intensity = this.weatherState.sunIntensity;

    const environmentScene = new Scene();
    environmentScene.add(this.sky.clone());
    this.environmentTexture = this.pmremGenerator.fromScene(environmentScene);
    this.scene.environment = this.environmentTexture.texture;

    renderer.shadowMap.enabled = true;
  }

  private updateAtmosphere(delta: number): void {
    const sunDrift = this.time * 0.028;
    const sunX = Math.sin(this.weatherState.sunAzimuth * Math.PI * 2 + sunDrift) * 52;
    const sunY = 22 + this.weatherState.sunHeight * 20 + Math.sin(this.time * 0.18) * 1.2;
    const sunZ = Math.cos(this.weatherState.sunAzimuth * Math.PI * 2 + sunDrift) * 34;
    this.sunLight.position.set(sunX, sunY, sunZ);

    this.shaftGroup.position.set(sunX * 0.28, 12, sunZ * 0.28);
    this.shaftGroup.rotation.y = this.time * 0.06;

    const mistMaterial = this.mistLayer.material;

    if (mistMaterial instanceof MeshBasicMaterial) {
      const targetOpacity = MathUtils.clamp(this.weatherState.mistStrength * 0.22, 0, 0.24);
      mistMaterial.opacity = MathUtils.damp(mistMaterial.opacity, targetOpacity, 3.2, delta);
      mistMaterial.color.lerp(new Color(this.weatherState.fogColor), delta * 0.25);
    }

    const rainOpacity = this.weatherState.rainStrength > 0 ? 0.28 : 0;
    this.rainMaterial.opacity = MathUtils.damp(this.rainMaterial.opacity, rainOpacity, 4.2, delta);

    const fog = this.scene.fog as Fog | null;

    if (fog) {
      fog.near = MathUtils.damp(fog.near, this.weatherState.fogNear, 2, delta);
      fog.far = MathUtils.damp(fog.far, this.weatherState.fogFar, 2, delta);
    }
  }

  private createGround(): void {
    const geometry = new PlaneGeometry(360, 360, 92, 92);
    const position = geometry.attributes.position as BufferAttribute;
    const colors: number[] = [];

    for (let index = 0; index < position.count; index += 1) {
      const x = position.getX(index);
      const z = position.getY(index);
      const height = this.sampleGroundHeight(x, z);
      position.setZ(index, height);
      const terrain = this.sampleTerrain(new Vector3(x, 0, z));
      const color = this.getGroundColor(terrain.type, height);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3));
    geometry.computeVertexNormals();
    geometry.rotateX(-Math.PI / 2);

    const { albedo, normal, roughness } = this.createGroundTextures();
    const material = new MeshStandardMaterial({
      map: albedo,
      normalMap: normal,
      roughnessMap: roughness,
      roughness: 1,
      metalness: MathUtils.lerp(0.04, 0.18, this.weatherState.wetness),
      vertexColors: true
    });
    const ground = new Mesh(geometry, material);
    ground.receiveShadow = true;
    this.registerMesh(ground);
    this.environmentObjects.add(ground);

    this.groundBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane()
    });
    this.groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.world.addBody(this.groundBody);
    this.bodies.push(this.groundBody);

    this.createRoadPatches();
  }

  private createRoadPatches(): void {
    const roadMaterial = new MeshStandardMaterial({
      color: new Color().setHSL(0.08, 0.12, MathUtils.lerp(0.3, 0.38, this.weatherState.wetness)),
      roughness: MathUtils.lerp(0.98, 0.28, this.weatherState.wetness),
      metalness: MathUtils.lerp(0.02, 0.12, this.weatherState.wetness)
    });

    this.battlefieldDefinition.terrainZones
      .filter((zone) => zone.type === 'road')
      .forEach((zone) => {
        const road = new Mesh(
          new PlaneGeometry(zone.size.x, zone.size.z),
          roadMaterial
        );
        road.rotation.x = -Math.PI / 2;
        road.position.set(zone.center.x, this.sampleGroundHeight(zone.center.x, zone.center.z) + 0.02, zone.center.z);
        this.registerMesh(road);
        this.environmentObjects.add(road);
      });
  }

  private createStructures(): void {
    this.battlefieldDefinition.structures.forEach((definition) => {
      const runtime = this.buildStructure(definition);
      this.structures.push(runtime);
      this.environmentObjects.add(runtime.root);
      if (runtime.body) {
        this.world.addBody(runtime.body);
        this.bodies.push(runtime.body);
        this.bodyToStructure.set(runtime.body.id, runtime);
      }
    });
  }

  private buildStructure(definition: StructureDefinition): StructureRuntime {
    const root = new Group();
    root.position.set(
      definition.position.x,
      this.sampleGroundHeight(definition.position.x, definition.position.z),
      definition.position.z
    );
    root.rotation.y = definition.yaw ?? 0;

    const shell = this.createStructureShell(definition);
    root.add(shell);

    const runtime: StructureRuntime = {
      definition,
      root,
      shell,
      body: null,
      marks: [],
      durability: definition.durability ?? 100,
      maxDurability: definition.durability ?? 100,
      scaleFactor: 1,
      collapsed: false
    };

    runtime.body = this.createStructureBody(runtime, 1);
    return runtime;
  }

  private createStructureShell(definition: StructureDefinition): Mesh {
    const size = definition.size;
    let geometry: BoxGeometry | CylinderGeometry = new BoxGeometry(size.x, size.y, size.z);
    let material = new MeshStandardMaterial({
      color: '#7c6f5d',
      roughness: 0.92,
      metalness: 0.06
    });

    if (definition.type === 'chimney') {
      geometry = new CylinderGeometry(size.x * 0.44, size.x * 0.6, size.y, 12);
      material = new MeshStandardMaterial({
        color: '#6e6258',
        roughness: 0.95,
        metalness: 0.04
      });
    } else if (definition.type === 'wreck') {
      geometry = new BoxGeometry(size.x, size.y, size.z);
      material = new MeshStandardMaterial({
        color: '#544d43',
        roughness: 0.84,
        metalness: 0.24
      });
    } else if (definition.type === 'fence') {
      geometry = new BoxGeometry(size.x, size.y, size.z);
      material = new MeshStandardMaterial({
        color: '#7c6a4f',
        roughness: 0.98,
        metalness: 0.02
      });
    }

    const shell = new Mesh(geometry, material);
    shell.position.y = size.y * 0.5;
    shell.castShadow = true;
    shell.receiveShadow = true;
    this.registerMesh(shell);

    if (definition.type === 'factory-wall' || definition.type === 'warehouse') {
      const roof = new Mesh(
        new BoxGeometry(size.x * 0.96, Math.max(0.3, size.y * 0.08), size.z * 0.96),
        new MeshStandardMaterial({
          color: '#43484c',
          roughness: 0.68,
          metalness: 0.26
        })
      );
      roof.position.y = size.y + size.y * 0.04;
      roof.castShadow = true;
      roof.receiveShadow = true;
      shell.add(roof);
      this.registerMesh(roof);
    }

    if (definition.type === 'farmhouse' || definition.type === 'barn' || definition.type === 'shed') {
      const roof = new Mesh(
        new ConeGeometry(Math.max(size.x, size.z) * 0.46, size.y * 0.55, 4),
        new MeshStandardMaterial({
          color: definition.type === 'barn' ? '#724a34' : '#5b3f31',
          roughness: 0.82,
          metalness: 0.06
        })
      );
      roof.rotation.y = Math.PI * 0.25;
      roof.position.y = size.y + size.y * 0.18;
      roof.castShadow = true;
      shell.add(roof);
      this.registerMesh(roof);
    }

    if (definition.type === 'ruin-block' || definition.type === 'street-wall') {
      for (let index = 0; index < 3; index += 1) {
        const brace = new Mesh(
          new BoxGeometry(size.x * 0.18, size.y * MathUtils.randFloat(0.25, 0.45), size.z * 0.2),
          new MeshStandardMaterial({
            color: '#655a4f',
            roughness: 1,
            metalness: 0.02
          })
        );
        brace.position.set(
          MathUtils.randFloatSpread(size.x * 0.65),
          size.y * MathUtils.randFloat(0.18, 0.52),
          MathUtils.randFloatSpread(size.z * 0.65)
        );
        shell.add(brace);
        this.registerMesh(brace);
      }
    }

    if (definition.type === 'wreck') {
      const turret = new Mesh(
        new SphereGeometry(Math.max(size.y * 0.5, 0.8), 12, 12),
        new MeshStandardMaterial({
          color: '#65574d',
          roughness: 0.74,
          metalness: 0.34
        })
      );
      turret.scale.set(1.2, 0.65, 1.1);
      turret.position.set(0, size.y * 0.62, 0);
      shell.add(turret);
      this.registerMesh(turret);
    }

    return shell;
  }

  private createStructureBody(runtime: StructureRuntime, scaleFactor: number): CANNON.Body {
    const size = runtime.definition.size.clone();
    size.x *= Math.max(0.2, scaleFactor);
    size.y *= Math.max(0.22, MathUtils.lerp(0.45, 1, scaleFactor));
    size.z *= Math.max(0.2, MathUtils.lerp(0.55, 1, scaleFactor));

    return new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(
        new CANNON.Vec3(size.x * 0.5, size.y * 0.5, size.z * 0.5)
      ),
      position: new CANNON.Vec3(
        runtime.root.position.x,
        runtime.root.position.y + size.y * 0.5,
        runtime.root.position.z
      ),
      quaternion: new CANNON.Quaternion().setFromEuler(0, runtime.definition.yaw ?? 0, 0, 'YZX')
    });
  }

  private rebuildStructureBody(runtime: StructureRuntime): void {
    if (!runtime.body || runtime.collapsed) {
      return;
    }

    this.world.removeBody(runtime.body);
    this.bodyToStructure.delete(runtime.body.id);
    runtime.body = this.createStructureBody(runtime, Math.max(0.12, runtime.scaleFactor));
    this.world.addBody(runtime.body);
    this.bodyToStructure.set(runtime.body.id, runtime);
  }

  private applyStructuralDamage(runtime: StructureRuntime, localPoint: Vector3): void {
    const deformation = 1 - runtime.scaleFactor;
    runtime.shell.scale.set(
      MathUtils.lerp(1, 0.62, deformation * 0.72),
      MathUtils.lerp(1, 0.48, deformation),
      MathUtils.lerp(1, 0.7, deformation * 0.8)
    );
    runtime.shell.position.y = runtime.definition.size.y * 0.5 * runtime.shell.scale.y;
    runtime.shell.rotation.z = MathUtils.clamp(localPoint.x / Math.max(runtime.definition.size.x, 1) * deformation * 0.18, -0.12, 0.12);
    runtime.shell.rotation.x = MathUtils.clamp(-localPoint.z / Math.max(runtime.definition.size.z, 1) * deformation * 0.16, -0.12, 0.12);

    const material = runtime.shell.material;

    if (material instanceof MeshStandardMaterial) {
      material.color.lerp(new Color('#4d443b'), deformation * 0.18);
    }
  }

  private collapseStructure(runtime: StructureRuntime, direction: Vector3): void {
    if (runtime.collapsed) {
      return;
    }

    runtime.collapsed = true;
    runtime.shell.visible = false;

    if (runtime.body) {
      this.world.removeBody(runtime.body);
      this.bodyToStructure.delete(runtime.body.id);
      runtime.body = null;
    }

    const debrisPieces = Math.max(3, Math.round(runtime.definition.size.x / 6));

    for (let index = 0; index < debrisPieces; index += 1) {
      const chunk = new Mesh(
        new BoxGeometry(
          runtime.definition.size.x / debrisPieces,
          Math.max(0.9, runtime.definition.size.y * 0.32),
          Math.max(0.9, runtime.definition.size.z * 0.45)
        ),
        new MeshStandardMaterial({
          color: '#5d5449',
          roughness: 0.96,
          metalness: 0.08
        })
      );
      chunk.castShadow = true;
      chunk.receiveShadow = true;
      this.registerMesh(chunk);
      this.effectObjects.add(chunk);

      const chunkBody = new CANNON.Body({
        mass: 18 + Math.random() * 10,
        shape: new CANNON.Box(
          new CANNON.Vec3(
            runtime.definition.size.x / debrisPieces * 0.5,
            Math.max(0.45, runtime.definition.size.y * 0.16),
            Math.max(0.45, runtime.definition.size.z * 0.22)
          )
        ),
        position: new CANNON.Vec3(
          runtime.root.position.x + MathUtils.randFloatSpread(runtime.definition.size.x * 0.4),
          runtime.root.position.y + runtime.definition.size.y * MathUtils.randFloat(0.35, 0.7),
          runtime.root.position.z + MathUtils.randFloatSpread(runtime.definition.size.z * 0.4)
        )
      });

      const throwDirection = direction.clone().multiplyScalar(4 + Math.random() * 5);
      chunkBody.velocity.set(
        throwDirection.x + MathUtils.randFloatSpread(2),
        4 + Math.random() * 3,
        throwDirection.z + MathUtils.randFloatSpread(2)
      );
      chunkBody.angularVelocity.set(
        MathUtils.randFloatSpread(5),
        MathUtils.randFloatSpread(5),
        MathUtils.randFloatSpread(5)
      );
      this.world.addBody(chunkBody);
      this.debris.push({
        body: chunkBody,
        mesh: chunk,
        life: 8 + Math.random() * 4
      });
    }
  }

  private spawnImpactMark(runtime: StructureRuntime, localPoint: Vector3): void {
    const mark = new Mesh(
      new CircleGeometry(0.45 + Math.random() * 0.3, 18),
      new MeshBasicMaterial({
        color: '#1c1c1a',
        transparent: true,
        opacity: 0.72,
        depthWrite: false
      })
    );
    mark.position.copy(localPoint.clone().normalize().multiplyScalar(0));
    mark.position.set(localPoint.x, localPoint.y, localPoint.z);
    mark.lookAt(localPoint.clone().multiplyScalar(2));
    mark.rotateY(Math.random() * Math.PI * 2);
    mark.position.add(localPoint.clone().normalize().multiplyScalar(0.06));
    runtime.shell.add(mark);
    this.registerMesh(mark);
    runtime.marks.push(mark);

    if (runtime.marks.length > 8) {
      const oldest = runtime.marks.shift();

      if (oldest) {
        oldest.removeFromParent();
      }
    }
  }

  private createVegetation(): void {
    const material = new MeshStandardMaterial({
      color: '#798654',
      roughness: 1,
      metalness: 0.02
    });
    const mesh = new InstancedMesh(new ConeGeometry(0.16, 1.2, 6), material, 180);
    const bounds = new Box3(
      new Vector3(-WORLD_EXTENTS, 0, -WORLD_EXTENTS),
      new Vector3(WORLD_EXTENTS, 0, WORLD_EXTENTS)
    );

    for (let index = 0; index < 180; index += 1) {
      const x = MathUtils.randFloat(bounds.min.x, bounds.max.x);
      const z = MathUtils.randFloat(bounds.min.z, bounds.max.z);
      const keepOut = Math.hypot(x, z) < 14 || this.isNearStructure(x, z, 10);

      if (keepOut) {
        this.tempObject.position.set(400 + index, -20, 400 + index);
      } else {
        this.tempObject.position.set(x, this.sampleGroundHeight(x, z) + 0.58, z);
        this.tempObject.scale.setScalar(0.7 + Math.random() * 1.8);
        this.tempObject.rotation.y = Math.random() * Math.PI * 2;
      }

      this.tempObject.updateMatrix();
      mesh.setMatrixAt(index, this.tempObject.matrix);
    }

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.registerMesh(mesh);
    this.vegetationRoot.add(mesh);
  }

  private createVolumeLight(): void {
    for (let index = 0; index < 3; index += 1) {
      const shaft = new Mesh(
        new ConeGeometry(5 + index * 2, 24, 18, 1, true),
        new MeshBasicMaterial({
          color: index === 0 ? '#ffe7b3' : '#f4d7aa',
          transparent: true,
          opacity: MathUtils.lerp(0.05, 0.14, 1 - this.weatherState.mistStrength),
          depthWrite: false,
          side: DoubleSide
        })
      );
      shaft.rotation.x = Math.PI;
      shaft.position.set(index * 4, 10 + index * 2, -index * 5);
      this.shaftGroup.add(shaft);
      this.registerMesh(shaft);
    }
  }

  private updateRain(delta: number, focusPosition: Vector3): void {
    if (this.weatherState.rainStrength <= 0.01) {
      return;
    }

    const windX = Math.sin(this.rainDrift) * 2.4;
    const windZ = Math.cos(this.rainDrift * 0.72) * 1.6;

    this.rainStates.forEach((drop, index) => {
      drop.offset.y -= drop.velocity * delta;
      drop.offset.x += windX * delta * 0.55;
      drop.offset.z += windZ * delta * 0.55;

      if (drop.offset.y < -4) {
        drop.offset.y = 28 + Math.random() * 10;
        drop.offset.x = MathUtils.randFloatSpread(40);
        drop.offset.z = MathUtils.randFloatSpread(40);
      }

      this.tempObject.position.copy(focusPosition).add(drop.offset);
      this.tempObject.position.y = Math.max(
        this.tempObject.position.y,
        this.sampleGroundHeight(this.tempObject.position.x, this.tempObject.position.z) + 1.2
      );
      this.tempObject.rotation.y = Math.atan2(windX, windZ);
      this.tempObject.scale.set(
        1,
        0.7 + this.weatherState.rainStrength * 0.45,
        1
      );
      this.tempObject.updateMatrix();
      this.rainMesh.setMatrixAt(index, this.tempObject.matrix);
    });

    this.rainMesh.instanceMatrix.needsUpdate = true;
  }

  private updateMist(delta: number, focusPosition: Vector3): void {
    this.mistLayer.position.x = MathUtils.damp(this.mistLayer.position.x, focusPosition.x, 1.4, delta);
    this.mistLayer.position.z = MathUtils.damp(this.mistLayer.position.z, focusPosition.z, 1.4, delta);
    this.mistLayer.rotation.z = Math.sin(this.time * 0.05) * 0.03;
  }

  private updateDebris(delta: number): void {
    for (let index = this.debris.length - 1; index >= 0; index -= 1) {
      const entry = this.debris[index];
      entry.life -= delta;
      entry.mesh.position.set(
        entry.body.position.x,
        entry.body.position.y,
        entry.body.position.z
      );
      entry.mesh.quaternion.set(
        entry.body.quaternion.x,
        entry.body.quaternion.y,
        entry.body.quaternion.z,
        entry.body.quaternion.w
      );

      if (entry.life <= 0) {
        this.world.removeBody(entry.body);
        entry.mesh.removeFromParent();
        this.debris.splice(index, 1);
      }
    }
  }

  private createGroundTextures(): {
    albedo: CanvasTexture;
    normal: CanvasTexture;
    roughness: CanvasTexture;
  } {
    const size = 512;
    const albedoCanvas = document.createElement('canvas');
    const normalCanvas = document.createElement('canvas');
    const roughnessCanvas = document.createElement('canvas');
    [albedoCanvas, normalCanvas, roughnessCanvas].forEach((canvas) => {
      canvas.width = size;
      canvas.height = size;
    });

    const albedo = albedoCanvas.getContext('2d');
    const normal = normalCanvas.getContext('2d');
    const roughness = roughnessCanvas.getContext('2d');

    if (!albedo || !normal || !roughness) {
      throw new Error('Unable to create environment textures.');
    }

    albedo.fillStyle = '#6b7848';
    albedo.fillRect(0, 0, size, size);
    roughness.fillStyle = `rgb(${Math.round(MathUtils.lerp(214, 110, this.weatherState.wetness))},${Math.round(MathUtils.lerp(214, 110, this.weatherState.wetness))},${Math.round(MathUtils.lerp(214, 110, this.weatherState.wetness))})`;
    roughness.fillRect(0, 0, size, size);
    normal.fillStyle = 'rgb(128,128,255)';
    normal.fillRect(0, 0, size, size);

    for (let index = 0; index < 1800; index += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = 1 + Math.random() * 5.5;
      const alpha = 0.08 + Math.random() * 0.12;
      albedo.fillStyle = `rgba(${84 + Math.random() * 80}, ${78 + Math.random() * 70}, ${48 + Math.random() * 50}, ${alpha})`;
      albedo.beginPath();
      albedo.arc(x, y, radius, 0, Math.PI * 2);
      albedo.fill();

      roughness.fillStyle = `rgba(${80 + Math.random() * 80}, ${80 + Math.random() * 80}, ${80 + Math.random() * 80}, ${0.18 + Math.random() * 0.2})`;
      roughness.beginPath();
      roughness.arc(x, y, radius * 0.8, 0, Math.PI * 2);
      roughness.fill();
    }

    const albedoTexture = new CanvasTexture(albedoCanvas);
    const normalTexture = new CanvasTexture(normalCanvas);
    const roughnessTexture = new CanvasTexture(roughnessCanvas);

    [albedoTexture, normalTexture, roughnessTexture].forEach((texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(12, 12);
      this.allocatedTextures.push(texture);
    });

    albedoTexture.colorSpace = SRGBColorSpace;
    normalTexture.colorSpace = NoColorSpace;
    roughnessTexture.colorSpace = NoColorSpace;

    return {
      albedo: albedoTexture,
      normal: normalTexture,
      roughness: roughnessTexture
    };
  }

  private getZoneInfluence(zone: TerrainZoneDefinition, position: Vector3): number {
    const dx = Math.abs(position.x - zone.center.x) / Math.max(zone.size.x * 0.5, 0.001);
    const dz = Math.abs(position.z - zone.center.z) / Math.max(zone.size.z * 0.5, 0.001);
    const distance = Math.max(dx, dz);

    if (distance >= 1) {
      return 0;
    }

    return 1 - MathUtils.smoothstep(distance, 0.6, 1);
  }

  private worldToStructureLocal(structure: StructureRuntime, position: Vector3): Vector3 {
    return structure.root.worldToLocal(position.clone());
  }

  private isNearStructure(x: number, z: number, threshold: number): boolean {
    return this.battlefieldDefinition.structures.some((structure) => {
      const dx = x - structure.position.x;
      const dz = z - structure.position.z;
      return Math.abs(dx) < structure.size.x * 0.6 + threshold && Math.abs(dz) < structure.size.z * 0.6 + threshold;
    });
  }

  private sampleGroundHeight(x: number, z: number): number {
    const radial = Math.min(1, Math.hypot(x, z) / 150);
    const base =
      Math.sin(x * 0.052) * 0.2 * radial +
      Math.cos(z * 0.074) * 0.24 * radial +
      Math.sin((x + z) * 0.032) * 0.12;
    const battlefieldBias =
      this.battlefieldDefinition.id === 'city'
        ? Math.sin(x * 0.012) * 0.06
        : this.battlefieldDefinition.id === 'factory'
          ? Math.cos(z * 0.018) * 0.08
          : Math.sin((x - z) * 0.016) * 0.14;

    return base + battlefieldBias;
  }

  private getGroundColor(type: TerrainSample['type'], height: number): Color {
    const wetness = this.weatherState.wetness;

    if (type === 'road') {
      return new Color().setHSL(0.08, 0.08, MathUtils.lerp(0.26, 0.34, 1 - wetness));
    }

    if (type === 'rubble') {
      return new Color().setHSL(0.1, 0.12, MathUtils.lerp(0.22, 0.36, (height + 0.8) * 0.45));
    }

    if (type === 'mud') {
      return new Color().setHSL(0.09, 0.34, MathUtils.lerp(0.18, 0.28, 1 - wetness));
    }

    if (type === 'yard') {
      return new Color().setHSL(0.12, 0.18, 0.32);
    }

    return new Color().setHSL(
      0.22,
      MathUtils.lerp(0.28, 0.18, wetness),
      MathUtils.lerp(0.24, 0.42, (height + 0.6) * 0.45)
    );
  }

  private registerMesh(mesh: Mesh): void {
    this.createdMeshes.push(mesh);
    const material = mesh.material;

    if (Array.isArray(material)) {
      material.forEach((entry) => {
        if (entry instanceof MeshStandardMaterial || entry instanceof MeshBasicMaterial) {
          this.registeredMaterials.add(entry);
        }
      });
    } else if (material instanceof MeshStandardMaterial || material instanceof MeshBasicMaterial) {
      this.registeredMaterials.add(material);
    }
  }
}

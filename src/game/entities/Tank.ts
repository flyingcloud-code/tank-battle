import {
  BoxGeometry,
  CanvasTexture,
  CircleGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  RepeatWrapping,
  Texture,
  Vector3
} from 'three';

import type { TankClass, TankDefinition } from '../../data/tanks';
import type { LoadedTankModel } from '../loaders/ModelLoader';
import { type TankSurface } from '../graphics/CamouflageGenerator';
import { buildTankVisual, type TankVisualMaterials } from '../graphics/TankVisualFactory';

interface CollisionHalfExtents {
  x: number;
  y: number;
  z: number;
}

export interface TankProfile {
  hullWidth: number;
  hullHeight: number;
  hullDepth: number;
  hullCenterY: number;
  trackWidth: number;
  trackHeight: number;
  trackDepth: number;
  trackCenterY: number;
  turretWidth: number;
  turretHeight: number;
  turretDepth: number;
  turretCenterY: number;
  cabinWidth: number;
  cabinHeight: number;
  cabinDepth: number;
  cabinCenterY: number;
  cabinOffsetZ: number;
  gunLength: number;
  gunWidth: number;
  muzzleOffset: number;
  collisionHalfExtents: CollisionHalfExtents;
  turretPivot: Vector3;
  gunPivot: Vector3;
  povAnchor: Vector3;
  chaseOffset: Vector3;
  topHeight: number;
  nameAnchorY: number;
  markerY: number;
  shadowScale: Vector3;
}

export interface TankAnimationState {
  leftTrackSpeed: number;
  rightTrackSpeed: number;
  pitch: number;
  roll: number;
  speedRatio: number;
  heave: number;
}

const PROFILE_BY_CLASS: Record<TankClass, TankProfile> = {
  MEDIUM: {
    hullWidth: 3.8,
    hullHeight: 0.92,
    hullDepth: 5.4,
    hullCenterY: -0.12,
    trackWidth: 0.64,
    trackHeight: 0.68,
    trackDepth: 5.7,
    trackCenterY: -0.48,
    turretWidth: 2.38,
    turretHeight: 0.78,
    turretDepth: 2.72,
    turretCenterY: 0.2,
    cabinWidth: 2.7,
    cabinHeight: 0.6,
    cabinDepth: 2.8,
    cabinCenterY: 0.48,
    cabinOffsetZ: -0.24,
    gunLength: 3.8,
    gunWidth: 0.28,
    muzzleOffset: 3.9,
    collisionHalfExtents: { x: 1.96, y: 0.82, z: 2.86 },
    turretPivot: new Vector3(0, 0.46, 0.28),
    gunPivot: new Vector3(0, 0.14, 0.78),
    povAnchor: new Vector3(0, 0.2, 0.34),
    chaseOffset: new Vector3(0, 5.4, -8.6),
    topHeight: 30,
    nameAnchorY: 2.45,
    markerY: 2.12,
    shadowScale: new Vector3(3.25, 1, 4.45)
  },
  HEAVY: {
    hullWidth: 4.4,
    hullHeight: 1.04,
    hullDepth: 6.1,
    hullCenterY: -0.08,
    trackWidth: 0.78,
    trackHeight: 0.74,
    trackDepth: 6.35,
    trackCenterY: -0.55,
    turretWidth: 2.82,
    turretHeight: 0.88,
    turretDepth: 3.12,
    turretCenterY: 0.22,
    cabinWidth: 3.1,
    cabinHeight: 0.68,
    cabinDepth: 3.25,
    cabinCenterY: 0.6,
    cabinOffsetZ: -0.3,
    gunLength: 4.35,
    gunWidth: 0.34,
    muzzleOffset: 4.55,
    collisionHalfExtents: { x: 2.26, y: 0.92, z: 3.2 },
    turretPivot: new Vector3(0, 0.56, 0.22),
    gunPivot: new Vector3(0, 0.16, 0.86),
    povAnchor: new Vector3(0, 0.22, 0.4),
    chaseOffset: new Vector3(0, 5.9, -9.5),
    topHeight: 33,
    nameAnchorY: 2.7,
    markerY: 2.38,
    shadowScale: new Vector3(3.6, 1, 4.9)
  },
  TD: {
    hullWidth: 4,
    hullHeight: 0.84,
    hullDepth: 5.6,
    hullCenterY: -0.16,
    trackWidth: 0.7,
    trackHeight: 0.64,
    trackDepth: 5.86,
    trackCenterY: -0.42,
    turretWidth: 2.26,
    turretHeight: 0.64,
    turretDepth: 2.94,
    turretCenterY: 0.12,
    cabinWidth: 2.96,
    cabinHeight: 0.56,
    cabinDepth: 3.18,
    cabinCenterY: 0.34,
    cabinOffsetZ: -0.14,
    gunLength: 4.5,
    gunWidth: 0.28,
    muzzleOffset: 4.75,
    collisionHalfExtents: { x: 2.04, y: 0.74, z: 2.98 },
    turretPivot: new Vector3(0, 0.34, 0.42),
    gunPivot: new Vector3(0, 0.06, 0.96),
    povAnchor: new Vector3(0, 0.16, 0.34),
    chaseOffset: new Vector3(0, 5.2, -8.9),
    topHeight: 29,
    nameAnchorY: 2.2,
    markerY: 1.92,
    shadowScale: new Vector3(3.1, 1, 4.55)
  }
};

const TRACK_TEXTURE_REPEAT = new Vector3(1, 5.5, 1);

export function getTankProfile(tankClass: TankClass): TankProfile {
  return PROFILE_BY_CLASS[tankClass];
}

export class Tank {
  readonly root = new Group();
  readonly turretPivot = new Object3D();
  readonly gunPivot = new Object3D();
  readonly muzzleAnchor = new Object3D();
  readonly povAnchor = new Object3D();
  readonly chaseAnchor = new Object3D();
  readonly topAnchor = new Object3D();
  readonly nameAnchor = new Object3D();
  readonly definition: TankDefinition;
  readonly profile: TankProfile;

  private readonly motionPivot = new Group();
  private readonly hullGroup = new Group();
  private readonly turretGroup = new Group();
  private readonly gunGroup = new Group();
  private readonly impactMarkRoot = new Group();
  private readonly wreckMaterials: MeshStandardMaterial[];
  private readonly teamMarker: Mesh;
  private readonly leftTrackTexture = createTrackTexture();
  private readonly rightTrackTexture = createTrackTexture();
  private readonly visualMaterials: TankVisualMaterials;
  private surface: TankSurface;
  private usingExternalModel = false;
  private leftTrackOffset = 0;
  private rightTrackOffset = 0;
  private motionClock = Math.random() * Math.PI * 2;
  private smoothedPitch = 0;
  private smoothedRoll = 0;
  private recoilTime = Number.POSITIVE_INFINITY;
  private shakeTime = 0;
  private destroyed = false;
  private destroyedPitch = 0;
  private destroyedRoll = 0;
  private smoothedHeave = 0;
  private gunDamage = 0;
  private trackDamage = 0;
  private engineHeat = 0;
  private turretLaunchTime = Number.POSITIVE_INFINITY;
  private turretLaunchVelocity = new Vector3();
  private turretLaunchOffset = new Vector3();
  private turretSpin = 0;

  constructor(definition: TankDefinition, surface: TankSurface, markerColor: string) {
    this.definition = definition;
    this.profile = getTankProfile(definition.class);
    this.surface = surface;

    const hullMaterial = new MeshStandardMaterial({
      map: surface.albedo,
      normalMap: surface.normal,
      roughnessMap: surface.roughness,
      metalnessMap: surface.metalness,
      roughness: 0.88,
      metalness: 0.26
    });
    const leftTrackMaterial = createTrackMaterial(this.leftTrackTexture);
    const rightTrackMaterial = createTrackMaterial(this.rightTrackTexture);
    const gunMaterial = new MeshStandardMaterial({
      map: surface.albedo,
      normalMap: surface.normal,
      roughnessMap: surface.roughness,
      metalnessMap: surface.metalness,
      roughness: 0.72,
      metalness: 0.36
    });
    const detailMaterial = new MeshStandardMaterial({
      color: '#525447',
      roughness: 0.82,
      metalness: 0.24
    });

    this.visualMaterials = {
      hull: hullMaterial,
      trackLeft: leftTrackMaterial,
      trackRight: rightTrackMaterial,
      gun: gunMaterial,
      detail: detailMaterial
    };
    this.wreckMaterials = [hullMaterial, gunMaterial, leftTrackMaterial, rightTrackMaterial, detailMaterial];

    this.teamMarker = new Mesh(
      new BoxGeometry(0.95, 0.08, 0.95),
      new MeshBasicMaterial({
        color: markerColor,
        transparent: true,
        opacity: 0.85
      })
    );
    this.teamMarker.position.set(0, this.profile.markerY, 0);

    const softShadow = new Mesh(
      new CircleGeometry(1, 28),
      new MeshBasicMaterial({
        color: '#000000',
        transparent: true,
        opacity: 0.16,
        depthWrite: false
      })
    );
    softShadow.rotation.x = -Math.PI / 2;
    softShadow.position.y = -this.profile.collisionHalfExtents.y + 0.04;
    softShadow.scale.copy(this.profile.shadowScale);

    this.root.name = 'tank-root';
    this.motionPivot.name = 'tank-motion-pivot';
    this.hullGroup.name = 'tank-hull-group';
    this.turretGroup.name = 'tank-turret-group';
    this.gunGroup.name = 'tank-gun-group';

    this.root.add(softShadow, this.motionPivot);
    this.motionPivot.add(this.hullGroup);

    this.turretPivot.position.copy(this.profile.turretPivot);
    this.gunPivot.position.copy(this.profile.gunPivot);
    this.muzzleAnchor.position.set(0, 0, this.profile.muzzleOffset);
    this.povAnchor.position.copy(this.profile.povAnchor);
    this.chaseAnchor.position.copy(this.profile.chaseOffset);
    this.topAnchor.position.set(0, this.profile.topHeight, 0);
    this.nameAnchor.position.set(0, this.profile.nameAnchorY, 0);

    this.applyFallbackVisual();

    this.gunPivot.add(this.gunGroup, this.muzzleAnchor, this.povAnchor);
    this.turretPivot.add(this.turretGroup, this.gunPivot);
    this.motionPivot.add(this.impactMarkRoot);
    this.motionPivot.add(
      this.turretPivot,
      this.chaseAnchor,
      this.topAnchor,
      this.nameAnchor
    );

    if (markerColor) {
      this.motionPivot.add(this.teamMarker);
    }
  }

  get hasExternalModel(): boolean {
    return this.usingExternalModel;
  }

  setCamouflage(nextSurface: TankSurface): void {
    const previousTextures = new Set<Texture>();

    [this.surface.albedo, this.surface.normal, this.surface.roughness, this.surface.metalness].forEach(
      (texture) => previousTextures.add(texture)
    );

    this.visualMaterials.hull.map = nextSurface.albedo;
    this.visualMaterials.hull.normalMap = nextSurface.normal;
    this.visualMaterials.hull.roughnessMap = nextSurface.roughness;
    this.visualMaterials.hull.metalnessMap = nextSurface.metalness;
    this.visualMaterials.hull.needsUpdate = true;

    this.visualMaterials.gun.map = nextSurface.albedo;
    this.visualMaterials.gun.normalMap = nextSurface.normal;
    this.visualMaterials.gun.roughnessMap = nextSurface.roughness;
    this.visualMaterials.gun.metalnessMap = nextSurface.metalness;
    this.visualMaterials.gun.needsUpdate = true;

    previousTextures.forEach((previousTexture) => previousTexture.dispose());
    this.surface.dispose();
    this.surface = nextSurface;
  }

  applyExternalModel(model: LoadedTankModel): void {
    this.clearGroup(this.hullGroup);
    this.clearGroup(this.turretGroup);
    this.clearGroup(this.gunGroup);
    this.skinExternalMeshes(model.hull);
    this.skinExternalMeshes(model.turret);
    this.skinExternalMeshes(model.gun);
    this.hullGroup.add(model.hull);
    this.turretGroup.add(model.turret);
    this.gunGroup.add(model.gun);
    this.usingExternalModel = true;
  }

  triggerShotFeedback(): void {
    this.recoilTime = 0;
    this.shakeTime = 0.12;
  }

  updateAnimation(delta: number, state: TankAnimationState): void {
    this.motionClock += delta;
    this.leftTrackOffset = normalizeTrackOffset(
      this.leftTrackOffset - state.leftTrackSpeed * delta * 1.45
    );
    this.rightTrackOffset = normalizeTrackOffset(
      this.rightTrackOffset - state.rightTrackSpeed * delta * 1.45
    );
    this.leftTrackTexture.offset.y = this.leftTrackOffset;
    this.rightTrackTexture.offset.y = this.rightTrackOffset;

    this.smoothedPitch = MathUtils.damp(this.smoothedPitch, state.pitch, 7.5, delta);
    this.smoothedRoll = MathUtils.damp(this.smoothedRoll, state.roll, 7.5, delta);
    this.smoothedHeave = MathUtils.damp(this.smoothedHeave, state.heave, 8.5, delta);

    if (Number.isFinite(this.recoilTime)) {
      this.recoilTime += delta;
    }

    this.shakeTime = Math.max(0, this.shakeTime - delta);

    const recoilDistance = this.getRecoilDistance();
    const shakeStrength = this.destroyed ? 0 : this.shakeTime / 0.12;
    const bob =
      this.destroyed || state.speedRatio < 0.08
        ? 0
        : Math.sin(this.motionClock * (7.5 + state.speedRatio * 5.5)) * state.speedRatio * 0.028;

    if (Number.isFinite(this.turretLaunchTime)) {
      this.turretLaunchTime += delta;
      this.turretLaunchVelocity.y -= 8.6 * delta;
      this.turretLaunchOffset.addScaledVector(this.turretLaunchVelocity, delta);
      this.turretPivot.position
        .copy(this.profile.turretPivot)
        .add(this.turretLaunchOffset);
      this.turretPivot.rotation.y += this.turretSpin * delta;
      this.turretPivot.rotation.z += this.turretSpin * 0.28 * delta;
    } else {
      this.turretPivot.position.copy(this.profile.turretPivot);
    }

    this.motionPivot.position.set(
      Math.sin(this.motionClock * 62) * shakeStrength * 0.02,
      bob + this.smoothedHeave + Math.cos(this.motionClock * 74) * shakeStrength * 0.016,
      Math.sin(this.motionClock * 52) * shakeStrength * 0.014
    );
    this.motionPivot.rotation.set(
      this.smoothedPitch + this.destroyedPitch + Math.sin(this.motionClock * 58) * shakeStrength * 0.01,
      0,
      this.smoothedRoll + this.destroyedRoll + Math.cos(this.motionClock * 49) * shakeStrength * 0.012
    );
    this.gunGroup.position.z = -recoilDistance;
    this.gunGroup.rotation.z = this.gunDamage * 0.12;
    this.gunGroup.rotation.x = -this.gunDamage * 0.04;
    this.visualMaterials.trackLeft.emissive.setScalar(this.trackDamage * 0.08);
    this.visualMaterials.trackRight.emissive.setScalar(this.trackDamage * 0.08);
    this.visualMaterials.hull.emissive.setRGB(this.engineHeat * 0.1, this.engineHeat * 0.04, this.engineHeat * 0.02);
  }

  setDestroyedVisual(violent = false): void {
    this.destroyed = true;
    this.destroyedPitch = 0.09 + Math.random() * 0.06;
    this.destroyedRoll = (Math.random() - 0.5) * 0.26;

    this.wreckMaterials.forEach((material) => {
      material.color.multiplyScalar(0.48);
      material.emissive.set('#160000');
      material.emissiveIntensity = 0.28;
      material.needsUpdate = true;
    });

    this.turretPivot.rotation.z = (Math.random() - 0.5) * 0.18;
    this.turretPivot.rotation.y += (Math.random() - 0.5) * 0.32;
    this.gunPivot.rotation.x -= 0.06;

    if (violent) {
      this.turretLaunchTime = 0;
      this.turretLaunchOffset.set(0, 0, 0);
      this.turretLaunchVelocity.set(
        (Math.random() - 0.5) * 5,
        8.5 + Math.random() * 2.2,
        -4 - Math.random() * 3
      );
      this.turretSpin = (Math.random() - 0.5) * 7;
    }

    const markerMaterial = this.teamMarker.material;

    if (markerMaterial instanceof MeshBasicMaterial) {
      markerMaterial.opacity = 0.22;
    }
  }

  dispose(): void {
    this.surface.dispose();
    this.leftTrackTexture.dispose();
    this.rightTrackTexture.dispose();
    this.wreckMaterials.forEach((material) => material.dispose());
    this.disposeGroupGeometries(this.hullGroup);
    this.disposeGroupGeometries(this.turretGroup);
    this.disposeGroupGeometries(this.gunGroup);
    this.disposeGroupGeometries(this.impactMarkRoot);
  }

  applyDamageState(state: {
    trackBroken: boolean;
    gunDamaged: boolean;
    engineFire: boolean;
  }, delta: number): void {
    this.trackDamage = MathUtils.damp(this.trackDamage, state.trackBroken ? 1 : 0, 8, delta);
    this.gunDamage = MathUtils.damp(this.gunDamage, state.gunDamaged ? 1 : 0, 8, delta);
    this.engineHeat = MathUtils.damp(this.engineHeat, state.engineFire ? 1 : 0, 4, delta);
  }

  addArmorDeformation(localPoint: Vector3, intensity: number): void {
    const mark = new Mesh(
      new CircleGeometry(MathUtils.lerp(0.12, 0.34, intensity), 18),
      new MeshBasicMaterial({
        color: intensity > 0.6 ? '#1c160f' : '#30261f',
        transparent: true,
        opacity: 0.82
      })
    );
    mark.position.copy(localPoint);
    mark.lookAt(localPoint.clone().multiplyScalar(2));
    mark.position.add(localPoint.clone().normalize().multiplyScalar(0.05));
    this.impactMarkRoot.add(mark);
    this.gunGroup.position.x += MathUtils.clamp(localPoint.x * intensity * 0.015, -0.04, 0.04);
  }

  private applyFallbackVisual(): void {
    const visual = buildTankVisual(this.definition, this.profile, this.visualMaterials);
    visual.hull.forEach((part) => this.hullGroup.add(part));
    visual.turret.forEach((part) => this.turretGroup.add(part));
    visual.gun.forEach((part) => this.gunGroup.add(part));
    this.usingExternalModel = false;
  }

  private getRecoilDistance(): number {
    if (!Number.isFinite(this.recoilTime)) {
      return 0;
    }

    const retreatDuration = 0.15;
    const recoveryDuration = 0.3;
    const maxRecoil = MathUtils.clamp(this.profile.gunLength * 0.08, 0.22, 0.42);

    if (this.recoilTime <= retreatDuration) {
      return MathUtils.lerp(0, maxRecoil, this.recoilTime / retreatDuration);
    }

    if (this.recoilTime <= retreatDuration + recoveryDuration) {
      return MathUtils.lerp(
        maxRecoil,
        0,
        (this.recoilTime - retreatDuration) / recoveryDuration
      );
    }

    this.recoilTime = Number.POSITIVE_INFINITY;
    return 0;
  }

  private clearGroup(group: Group): void {
    while (group.children.length > 0) {
      const child = group.children.pop();

      if (child) {
        child.removeFromParent();
      }
    }
  }

  private skinExternalMeshes(root: Object3D): void {
    root.traverse((child) => {
      if (!(child instanceof Mesh)) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;
      const name = child.name.toLowerCase();

      if (name.includes('track') || name.includes('wheel')) {
        child.material = this.resolveTrackMaterial(child);
      } else if (name.includes('gun') || name.includes('barrel') || name.includes('cannon')) {
        child.material = this.visualMaterials.gun;
      } else if (name.includes('detail') || name.includes('tool') || name.includes('exhaust')) {
        child.material = this.visualMaterials.detail;
      } else {
        child.material = this.visualMaterials.hull;
      }
    });
  }

  private resolveTrackMaterial(mesh: Mesh): MeshStandardMaterial {
    const name = mesh.name.toLowerCase();

    if (name.includes('left') || name.includes('_l') || name.endsWith('.l')) {
      return this.visualMaterials.trackLeft;
    }

    if (name.includes('right') || name.includes('_r') || name.endsWith('.r')) {
      return this.visualMaterials.trackRight;
    }

    return mesh.position.x <= 0 ? this.visualMaterials.trackLeft : this.visualMaterials.trackRight;
  }

  private disposeGroupGeometries(group: Group): void {
    group.traverse((child) => {
      if (child instanceof Mesh) {
        child.geometry.dispose();
      }
    });
  }
}

function createTrackMaterial(texture: CanvasTexture): MeshStandardMaterial {
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(TRACK_TEXTURE_REPEAT.x, TRACK_TEXTURE_REPEAT.y);

  return new MeshStandardMaterial({
    color: '#2f322e',
    metalness: 0.52,
    roughness: 0.82,
    map: texture
  });
}

function createTrackTexture(): CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 96;
  canvas.height = 256;
  const context = canvas.getContext('2d');

  if (!context) {
    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  context.fillStyle = '#2f322e';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#3d413b';

  for (let offset = 0; offset < canvas.height; offset += 28) {
    context.fillRect(12, offset, canvas.width - 24, 16);
    context.fillStyle = offset % 56 === 0 ? '#5e6257' : '#4a4d45';
    context.fillRect(20, offset + 6, canvas.width - 40, 4);
    context.fillStyle = '#3d413b';
  }

  context.fillStyle = 'rgba(110, 96, 76, 0.28)';

  for (let index = 0; index < 24; index += 1) {
    context.fillRect(
      8 + Math.random() * (canvas.width - 24),
      Math.random() * canvas.height,
      6 + Math.random() * 12,
      2 + Math.random() * 8
    );
  }

  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function normalizeTrackOffset(offset: number): number {
  return ((offset % 1) + 1) % 1;
}

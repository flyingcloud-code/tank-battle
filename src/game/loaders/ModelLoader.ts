import {
  Box3,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  Vector3
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import type { TankProfile } from '../entities/Tank';

export interface LoadedTankModel {
  hull: Object3D;
  turret: Object3D;
  gun: Object3D;
}

interface ModelConfig {
  path: string;
  scale: number;
  offset: Vector3;
  rotationY: number;
  nodes?: {
    hull?: string[];
    turret?: string[];
    gun?: string[];
  };
}

const DEFAULT_SEGMENT_NAMES = {
  hull: ['hull', 'body', 'chassis', 'lower', 'base'],
  turret: ['turret', 'tower', 'mantlet'],
  gun: ['gun', 'barrel', 'cannon', 'main_gun']
};

const MODEL_CONFIGS: Partial<Record<string, ModelConfig>> = {
  'tiger-i': {
    path: '/models/tanks/tiger-i.glb',
    scale: 1,
    offset: new Vector3(0, -0.85, 0),
    rotationY: Math.PI,
    nodes: {
      hull: ['hull', 'chassis', 'body'],
      turret: ['turret'],
      gun: ['gun', 'barrel', 'cannon']
    }
  },
  panther: {
    path: '/models/tanks/panther.glb',
    scale: 1,
    offset: new Vector3(0, -0.8, 0),
    rotationY: Math.PI,
    nodes: {
      hull: ['hull', 'chassis', 'body'],
      turret: ['turret'],
      gun: ['gun', 'barrel']
    }
  },
  't34-85': {
    path: '/models/tanks/t34-85.glb',
    scale: 1,
    offset: new Vector3(0, -0.72, 0),
    rotationY: Math.PI,
    nodes: {
      hull: ['hull', 'body'],
      turret: ['turret'],
      gun: ['gun', 'barrel']
    }
  },
  'm4-sherman': {
    path: '/models/tanks/m4-sherman.glb',
    scale: 1,
    offset: new Vector3(0, -0.76, 0),
    rotationY: Math.PI,
    nodes: {
      hull: ['hull', 'body'],
      turret: ['turret'],
      gun: ['gun', 'barrel']
    }
  }
};

export class ModelLoader {
  private readonly loader = new GLTFLoader();
  private readonly cache = new Map<string, Promise<LoadedTankModel | null>>();
  private readonly pendingLoads = new Set<string>();

  hasModel(id: string): boolean {
    return Boolean(MODEL_CONFIGS[id]);
  }

  isLoading(id: string): boolean {
    return this.pendingLoads.has(id);
  }

  async loadTankModel(id: string, profile: TankProfile): Promise<LoadedTankModel | null> {
    const config = MODEL_CONFIGS[id];

    if (!config) {
      return null;
    }

    let request = this.cache.get(id);

    if (!request) {
      this.pendingLoads.add(id);
      request = this.loader.loadAsync(config.path)
        .then((gltf) => this.processTankModel(gltf.scene, config, profile))
        .catch((error) => {
          console.warn(`[ModelLoader] Failed to load ${id} from ${config.path}`, error);
          return null;
        })
        .finally(() => {
          this.pendingLoads.delete(id);
        });
      this.cache.set(id, request);
    }

    const result = await request;

    if (!result) {
      return null;
    }

    return {
      hull: result.hull.clone(true),
      turret: result.turret.clone(true),
      gun: result.gun.clone(true)
    };
  }

  async waitForIdle(): Promise<void> {
    await Promise.all(this.cache.values());
  }

  private processTankModel(
    rootScene: Object3D,
    config: ModelConfig,
    profile: TankProfile
  ): LoadedTankModel | null {
    const root = rootScene.clone(true);
    root.rotation.y += config.rotationY;
    root.scale.setScalar(config.scale);
    root.position.add(config.offset);
    this.prepareSketchfabScene(root);

    const segmentRoot = new Group();
    segmentRoot.add(root);

    const hullNode = this.findNode(root, config.nodes?.hull ?? DEFAULT_SEGMENT_NAMES.hull);
    const turretNode = this.findNode(root, config.nodes?.turret ?? DEFAULT_SEGMENT_NAMES.turret);
    const gunNode = this.findNode(root, config.nodes?.gun ?? DEFAULT_SEGMENT_NAMES.gun);

    if (!hullNode || !turretNode || !gunNode) {
      return null;
    }

    const bounds = new Box3().setFromObject(root);
    const size = new Vector3();
    const center = new Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);

    const scaleByWidth = (profile.hullWidth + profile.trackWidth * 2.2) / Math.max(size.x, 0.001);
    const scaleByDepth = (profile.hullDepth + 0.65) / Math.max(size.z, 0.001);
    const scaleByHeight = (profile.collisionHalfExtents.y * 2.15) / Math.max(size.y, 0.001);
    const normalizedScale = MathUtils.clamp(
      Math.min(scaleByWidth, scaleByDepth, scaleByHeight),
      0.01,
      20
    );
    segmentRoot.scale.multiplyScalar(normalizedScale);
    segmentRoot.position.sub(center.multiplyScalar(normalizedScale));
    segmentRoot.position.y += profile.collisionHalfExtents.y;
    segmentRoot.updateWorldMatrix(true, true);

    return {
      hull: this.cloneWithWorldTransform(hullNode),
      turret: this.cloneWithWorldTransform(turretNode),
      gun: this.cloneWithWorldTransform(gunNode)
    };
  }

  private prepareSketchfabScene(root: Object3D): void {
    root.traverse((child) => {
      if (!(child instanceof Mesh)) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;
      child.frustumCulled = false;

      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        if (material instanceof MeshStandardMaterial) {
          material.metalness = Math.min(material.metalness ?? 0.18, 0.35);
          material.roughness = Math.max(material.roughness ?? 0.85, 0.45);
        }
      });
    });
  }

  private findNode(root: Object3D, names: string[]): Object3D | null {
    const normalized = names.map((name) => name.toLowerCase());
    let found: Object3D | null = null;

    root.traverse((child) => {
      if (found || !child.name) {
        return;
      }

      const childName = child.name.toLowerCase();

      if (normalized.some((name) => childName.includes(name))) {
        found = child;
      }
    });

    return found;
  }

  private cloneWithWorldTransform(node: Object3D): Object3D {
    const clone = node.clone(true);
    node.updateWorldMatrix(true, false);
    node.matrixWorld.decompose(clone.position, clone.quaternion, clone.scale);
    return clone;
  }
}

import * as CANNON from 'cannon-es';
import {
  BufferGeometry,
  Float32BufferAttribute,
  Line,
  LineBasicMaterial,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  Vector3
} from 'three';

import type { AmmoDefinition } from '../../data/tanks';

export interface ProjectileHit {
  body: CANNON.Body;
  point: Vector3;
  normal: Vector3;
}

interface ProjectileOptions {
  ammo: AmmoDefinition;
  origin: Vector3;
  direction: Vector3;
  ownerBodyId: number;
}

const GRAVITY = new Vector3(0, -9.82, 0);
const TRAIL_SEGMENTS = 10;

export class Projectile {
  readonly mesh: Mesh;
  readonly trail: Line;
  readonly ammo: AmmoDefinition;
  readonly ownerBodyId: number;
  readonly velocity = new Vector3();
  private readonly history: Vector3[] = [];
  private readonly previousPosition = new Vector3();
  private life = 4.4;
  private active = true;

  constructor({ ammo, origin, direction, ownerBodyId }: ProjectileOptions) {
    this.ammo = ammo;
    this.ownerBodyId = ownerBodyId;

    const scale = MathUtils.clamp(ammo.mass / 10, 0.75, 1.55);

    this.mesh = new Mesh(
      new SphereGeometry(0.12 * scale, 12, 12),
      new MeshStandardMaterial({
        color: '#ffe4b2',
        emissive: ammo.trailColor,
        emissiveIntensity: 2.4,
        metalness: 0.35,
        roughness: 0.2
      })
    );
    this.mesh.position.copy(origin);
    this.mesh.castShadow = true;

    this.trail = new Line(
      new BufferGeometry(),
      new LineBasicMaterial({
        color: ammo.trailColor,
        transparent: true,
        opacity: 0.82
      })
    );

    this.velocity.copy(direction).multiplyScalar(ammo.speed);
    this.previousPosition.copy(origin);

    for (let index = 0; index < TRAIL_SEGMENTS; index += 1) {
      this.history.push(origin.clone());
    }

    this.syncTrail();
  }

  get isActive(): boolean {
    return this.active;
  }

  get position(): Vector3 {
    return this.mesh.position;
  }

  update(delta: number, world: CANNON.World): ProjectileHit | null {
    if (!this.active) {
      return null;
    }

    this.life -= delta;

    if (this.life <= 0) {
      this.active = false;
      return null;
    }

    this.previousPosition.copy(this.mesh.position);
    this.velocity.addScaledVector(GRAVITY, this.ammo.gravityScale * delta);

    const nextPosition = this.mesh.position
      .clone()
      .addScaledVector(this.velocity, delta);

    const from = new CANNON.Vec3(
      this.previousPosition.x,
      this.previousPosition.y,
      this.previousPosition.z
    );
    const to = new CANNON.Vec3(nextPosition.x, nextPosition.y, nextPosition.z);
    const raycastResult = new CANNON.RaycastResult();

    const hasHit = world.raycastClosest(from, to, {}, raycastResult);

    if (hasHit && raycastResult.body && raycastResult.body.id !== this.ownerBodyId) {
      this.mesh.position.set(
        raycastResult.hitPointWorld.x,
        raycastResult.hitPointWorld.y,
        raycastResult.hitPointWorld.z
      );
      this.recordHistory();
      this.syncTrail();
      this.active = false;

      return {
        body: raycastResult.body,
        point: new Vector3(
          raycastResult.hitPointWorld.x,
          raycastResult.hitPointWorld.y,
          raycastResult.hitPointWorld.z
        ),
        normal: new Vector3(
          raycastResult.hitNormalWorld.x,
          raycastResult.hitNormalWorld.y,
          raycastResult.hitNormalWorld.z
        ).normalize()
      };
    }

    this.mesh.position.copy(nextPosition);
    this.recordHistory();
    this.syncTrail();

    if (this.mesh.position.y < -1.5) {
      this.active = false;
    }

    return null;
  }

  destroy(): void {
    this.active = false;
    this.mesh.geometry.dispose();

    const meshMaterial = this.mesh.material;

    if (meshMaterial instanceof MeshStandardMaterial) {
      meshMaterial.dispose();
    }

    this.trail.geometry.dispose();

    const trailMaterial = this.trail.material;

    if (trailMaterial instanceof LineBasicMaterial) {
      trailMaterial.dispose();
    }
  }

  private recordHistory(): void {
    this.history.pop();
    this.history.unshift(this.mesh.position.clone());
  }

  private syncTrail(): void {
    const positions = this.history.flatMap((point) => [point.x, point.y, point.z]);
    this.trail.geometry.setAttribute(
      'position',
      new Float32BufferAttribute(positions, 3)
    );
    this.trail.geometry.attributes.position.needsUpdate = true;
  }
}

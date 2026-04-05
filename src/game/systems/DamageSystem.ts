import { MathUtils, Vector3 } from 'three';

import type { TankDefinition } from '../../data/tanks';
import { Projectile } from '../entities/Projectile';
import { TankController } from '../controllers/TankController';

export type HitZone = 'front' | 'side' | 'rear' | 'top';
export type DamageModule = 'track' | 'gun' | 'engine' | 'ammo';

export interface DamageTarget {
  definition: TankDefinition;
  controller: TankController;
  hp: number;
}

export interface DamageResult {
  zone: HitZone;
  impactAngle: number;
  effectiveArmor: number;
  armorThickness: number;
  penetration: number;
  damage: number;
  penetrated: boolean;
  ricochet: boolean;
  destroyed: boolean;
  remainingHp: number;
  deformation: number;
  localHitPoint: Vector3;
  moduleHit: {
    module: DamageModule;
    severity: number;
  } | null;
}

const ZONE_MULTIPLIERS: Record<HitZone, number> = {
  front: 1,
  side: 1.15,
  rear: 1.35,
  top: 1.5
};

export class DamageSystem {
  private readonly incomingDirection = new Vector3();
  private readonly forwardDirection = new Vector3();
  private readonly upDirection = new Vector3();
  private readonly localHitPoint = new Vector3();

  resolveHit(
    projectile: Projectile,
    target: DamageTarget,
    hitPoint: Vector3,
    hitNormal: Vector3
  ): DamageResult {
    const zone = this.getHitZone(target.controller, projectile, hitPoint, hitNormal);
    const armorThickness = this.getArmorThickness(target.definition, zone, this.localHitPoint);

    this.incomingDirection.copy(projectile.velocity).normalize().multiplyScalar(-1);

    const normalAlignment = Math.max(
      0.1,
      Math.abs(hitNormal.clone().normalize().dot(this.incomingDirection))
    );
    const impactAngle = MathUtils.radToDeg(Math.acos(MathUtils.clamp(normalAlignment, -1, 1)));
    const effectiveArmor = armorThickness / normalAlignment;

    const ricochetChance =
      zone !== 'top' && impactAngle > 70
        ? MathUtils.clamp((impactAngle - 70) / 16, 0.12, 0.82)
        : 0;
    const ricochet = ricochetChance > 0 && Math.random() < ricochetChance;
    const penetration = projectile.ammo.penetration;
    const penetrationRatio = penetration / effectiveArmor;
    const penetrated = !ricochet && penetrationRatio >= 0.92;

    const damage = penetrated
      ? Math.round(
          projectile.ammo.damage *
            MathUtils.clamp(penetrationRatio, 0.88, 1.55) *
            ZONE_MULTIPLIERS[zone]
        )
      : 0;
    const moduleHit = penetrated
      ? this.getModuleDamage(zone, this.localHitPoint, penetrationRatio)
      : null;

    target.hp = Math.max(0, target.hp - damage);

    return {
      zone,
      impactAngle,
      effectiveArmor,
      armorThickness,
      penetration,
      damage,
      penetrated,
      ricochet,
      destroyed: target.hp <= 0,
      remainingHp: target.hp,
      deformation: MathUtils.clamp((projectile.ammo.mass / 22) * (penetrated ? 1.05 : 0.55), 0.16, 0.92),
      localHitPoint: this.localHitPoint.clone(),
      moduleHit
    };
  }

  private getHitZone(
    controller: TankController,
    projectile: Projectile,
    hitPoint: Vector3,
    hitNormal: Vector3
  ): HitZone {
    controller.worldToLocalPoint(hitPoint, this.localHitPoint);
    controller.getUpDirection(this.upDirection);

    if (Math.abs(hitNormal.dot(this.upDirection)) > 0.72 || this.localHitPoint.y > 1.95) {
      return 'top';
    }

    controller.getFacingDirection(this.forwardDirection);

    const shotAlignment = this.forwardDirection.dot(
      projectile.velocity.clone().normalize()
    );

    if (shotAlignment < -0.45) {
      return 'front';
    }

    if (shotAlignment > 0.45) {
      return 'rear';
    }

    return 'side';
  }

  private getArmorThickness(
    definition: TankDefinition,
    zone: HitZone,
    localHitPoint: Vector3
  ): number {
    if (zone === 'top') {
      return Math.max(18, definition.turretArmor * 0.28);
    }

    if (zone === 'rear') {
      return Math.max(25, definition.frontalArmor * 0.46);
    }

    if (zone === 'side') {
      return Math.max(32, definition.frontalArmor * 0.64);
    }

    if (localHitPoint.y > 1.7) {
      return definition.turretArmor;
    }

    return definition.frontalArmor;
  }

  private getModuleDamage(
    zone: HitZone,
    localHitPoint: Vector3,
    penetrationRatio: number
  ): DamageResult['moduleHit'] {
    const severity = MathUtils.clamp((penetrationRatio - 0.78) * 0.9, 0.2, 1);

    if (Math.abs(localHitPoint.x) > 1.35 && localHitPoint.y < 0.32) {
      return {
        module: 'track',
        severity
      };
    }

    if (localHitPoint.y > 0.78 && localHitPoint.z > 1.2) {
      return {
        module: 'gun',
        severity: MathUtils.clamp(severity * 0.9, 0.2, 1)
      };
    }

    if (zone === 'rear' || localHitPoint.z < -1.45) {
      return {
        module: 'engine',
        severity: MathUtils.clamp(severity * 0.82, 0.2, 1)
      };
    }

    if (localHitPoint.y > 0.68 && Math.abs(localHitPoint.x) < 0.78) {
      return {
        module: 'ammo',
        severity: MathUtils.clamp(severity * 1.08, 0.24, 1)
      };
    }

    return null;
  }
}

import * as CANNON from 'cannon-es';
import { MathUtils, Vector3 } from 'three';

import type { TankDefinition } from '../../data/tanks';
import type { DriveInput } from '../core/InputController';
import { Tank } from '../entities/Tank';
import type { TerrainSample } from '../systems/BattlefieldTypes';

export interface AimInput {
  yaw: number;
  pitch: number;
}

export interface TankDamageState {
  trackBroken: boolean;
  gunDamaged: boolean;
  engineFire: boolean;
}

interface TankControllerOptions {
  position?: CANNON.Vec3;
  yaw?: number;
}

export class TankController {
  readonly tank: Tank;
  readonly body: CANNON.Body;
  readonly definition: TankDefinition;

  private yaw = 0;
  private turretYaw = 0;
  private gunPitch = -0.08;
  private destroyed = false;
  private reloadRemaining = 0;
  private readonly bodyHalfExtents: CANNON.Vec3;
  private readonly forwardVector = new Vector3();
  private readonly maxForwardSpeed: number;
  private readonly maxReverseSpeed: number;
  private forwardSpeed = 0;
  private turnVelocity = 0;
  private engineLoad = 0;
  private slipRatio = 0;
  private suspensionTravel = 0;
  private currentTerrain: TerrainSample['type'] = 'grass';
  private mobilityMultiplier = 1;
  private reloadMultiplier = 1;

  constructor(
    world: CANNON.World,
    tank: Tank,
    definition: TankDefinition,
    options: TankControllerOptions = {}
  ) {
    this.tank = tank;
    this.definition = definition;
    this.yaw = options.yaw ?? 0;

    const massPenalty = this.getMassPenalty();
    this.maxForwardSpeed = 5.1 + this.definition.mobility * 1.95 - massPenalty * 0.45;
    this.maxReverseSpeed = this.maxForwardSpeed * 0.46;

    this.bodyHalfExtents = new CANNON.Vec3(
      tank.profile.collisionHalfExtents.x,
      tank.profile.collisionHalfExtents.y,
      tank.profile.collisionHalfExtents.z
    );

    const initialPosition = options.position?.clone() ?? new CANNON.Vec3(0, 0, 0);
    initialPosition.y = this.getRideHeight();

    this.body = new CANNON.Body({
      mass: definition.mass,
      shape: new CANNON.Box(this.bodyHalfExtents),
      linearDamping: 0.55,
      angularDamping: 0.95,
      position: initialPosition
    });

    this.body.angularFactor.set(0, 0, 0);
    this.body.linearFactor.set(1, 0, 1);
    this.body.quaternion.setFromEuler(0, this.yaw, 0, 'YZX');
    world.addBody(this.body);

    this.tank.updateAnimation(0, {
      leftTrackSpeed: 0,
      rightTrackSpeed: 0,
      pitch: 0,
      roll: 0,
      speedRatio: 0,
      heave: 0
    });
    this.syncVisuals();
  }

  update(
    delta: number,
    driveInput: DriveInput,
    aimInput: AimInput,
    terrain: TerrainSample,
    damageState: TankDamageState = {
      trackBroken: false,
      gunDamaged: false,
      engineFire: false
    }
  ): void {
    this.reloadRemaining = Math.max(0, this.reloadRemaining - delta);
    this.currentTerrain = terrain.type;
    this.tank.applyDamageState(damageState, delta);

    if (this.destroyed) {
      this.forwardSpeed = 0;
      this.turnVelocity = 0;
      this.body.velocity.setZero();
      this.tank.updateAnimation(delta, {
        leftTrackSpeed: 0,
        rightTrackSpeed: 0,
        pitch: 0,
        roll: 0,
        speedRatio: 0,
        heave: 0
      });
      this.syncVisuals();
      return;
    }

    const previousSpeed = this.forwardSpeed;
    const throttle = damageState.trackBroken ? 0 : MathUtils.clamp(driveInput.throttle, -1, 1);
    const turnInput = MathUtils.clamp(driveInput.turn, -1, 1);
    const effectiveTraction = MathUtils.clamp(
      terrain.traction * (damageState.trackBroken ? 0.15 : 1),
      0.12,
      1
    );
    const effectiveSpeedMultiplier = terrain.speedMultiplier * (damageState.engineFire ? 0.88 : 1);
    const engineTarget = Math.abs(throttle) > 0.04 ? Math.abs(throttle) : 0;
    const engineRamp = throttle > this.engineLoad ? 1.45 + this.definition.mobility * 0.22 : 2.6;
    this.engineLoad = MathUtils.damp(this.engineLoad, engineTarget, engineRamp, delta);

    const engineCurve = 0.32 + Math.pow(this.engineLoad, 1.45) * 0.94;
    const desiredSpeed =
      this.getSpeedForThrottle(throttle) * effectiveSpeedMultiplier * engineCurve * this.mobilityMultiplier;
    const accelerationResponse =
      this.getAccelerationResponse(throttle, desiredSpeed) * MathUtils.lerp(0.45, 1.1, effectiveTraction);
    const brakingResponse =
      this.getBrakeResponse(terrain, previousSpeed) * (Math.abs(throttle) < 0.08 || Math.sign(throttle) !== Math.sign(previousSpeed) ? 1 : 0.58);

    if (Math.abs(throttle) > 0.04) {
      this.forwardSpeed = MathUtils.damp(this.forwardSpeed, desiredSpeed, accelerationResponse, delta);
    } else {
      this.forwardSpeed = MathUtils.damp(this.forwardSpeed, 0, brakingResponse, delta);
    }

    const speedRatio = MathUtils.clamp(Math.abs(this.forwardSpeed) / Math.max(this.maxForwardSpeed, 0.001), 0, 1);
    this.slipRatio = MathUtils.damp(
      this.slipRatio,
      MathUtils.clamp((1 - effectiveTraction) * (0.45 + speedRatio * 0.6) + terrain.roughness * 0.22, 0, 0.85),
      6.2,
      delta
    );

    const steeringAuthority = MathUtils.lerp(0.58, 1.02, speedRatio) * MathUtils.lerp(0.55, 1, effectiveTraction);
    const pivotBias = MathUtils.lerp(0.5, 0.1, speedRatio);
    const desiredTurnVelocity =
      turnInput *
      this.getTurnRate() *
      this.mobilityMultiplier *
      (steeringAuthority + pivotBias) *
      MathUtils.lerp(0.78, 1, effectiveTraction);

    this.turnVelocity = MathUtils.damp(
      this.turnVelocity,
      desiredTurnVelocity,
      this.getSteeringResponse() * MathUtils.lerp(0.55, 1, effectiveTraction),
      delta
    );

    if (Math.abs(turnInput) < 0.02) {
      this.turnVelocity = MathUtils.damp(
        this.turnVelocity,
        0,
        this.getSteeringResponse() * 0.88,
        delta
      );
    }

    const reverseSteerFactor = this.forwardSpeed < -0.18 ? -0.72 : 1;
    this.yaw -= this.turnVelocity * reverseSteerFactor * delta;
    this.forwardVector.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));

    const lateral = new Vector3(-this.forwardVector.z, 0, this.forwardVector.x);
    const slipOffset = lateral.multiplyScalar(this.slipRatio * this.forwardSpeed * 0.22);
    this.body.velocity.x = this.forwardVector.x * this.forwardSpeed + slipOffset.x;
    this.body.velocity.z = this.forwardVector.z * this.forwardSpeed + slipOffset.z;
    this.suspensionTravel = MathUtils.damp(
      this.suspensionTravel,
      MathUtils.clamp(
        Math.sin(this.engineLoad * Math.PI + this.body.position.x * 0.08 + this.body.position.z * 0.06) *
          terrain.suspension *
          (0.04 + speedRatio * 0.06),
        -0.14,
        0.16
      ),
      8.4,
      delta
    );
    this.body.position.y = this.getRideHeight() + terrain.groundHeight + this.suspensionTravel;
    this.body.quaternion.setFromEuler(0, this.yaw, 0, 'YZX');

    const aimPenalty = damageState.gunDamaged ? 0.012 : 0;
    this.turretYaw += MathUtils.clamp(aimInput.yaw + MathUtils.randFloatSpread(aimPenalty), -0.08, 0.08);
    this.gunPitch = MathUtils.clamp(
      this.gunPitch + MathUtils.clamp(aimInput.pitch + MathUtils.randFloatSpread(aimPenalty * 0.6), -0.05, 0.05),
      -0.34,
      0.2
    );

    const trackTurnBias = MathUtils.clamp(
      this.turnVelocity / Math.max(this.getTurnRate(), 0.001),
      -1,
      1
    );
    const forwardRatio = this.forwardSpeed / this.maxForwardSpeed;
    const longitudinalAcceleration = (this.forwardSpeed - previousSpeed) / Math.max(delta, 0.001);
    const desiredPitch = MathUtils.clamp(terrain.slopePitch - longitudinalAcceleration * 0.018, -0.14, 0.14);
    const desiredRoll = MathUtils.clamp(
      terrain.slopeRoll + this.turnVelocity * (0.04 + speedRatio * 0.035) + this.slipRatio * turnInput * 0.04,
      -0.14,
      0.14
    );

    this.tank.updateAnimation(delta, {
      leftTrackSpeed: MathUtils.clamp(forwardRatio - trackTurnBias * 0.72 + this.slipRatio * 0.28, -1.35, 1.35),
      rightTrackSpeed: MathUtils.clamp(forwardRatio + trackTurnBias * 0.72 - this.slipRatio * 0.28, -1.35, 1.35),
      pitch: desiredPitch,
      roll: desiredRoll,
      speedRatio,
      heave: this.suspensionTravel
    });

    this.syncVisuals();
  }

  canFire(): boolean {
    return !this.destroyed && this.reloadRemaining <= 0;
  }

  markFired(): void {
    this.reloadRemaining = this.definition.reloadSeconds * this.reloadMultiplier;
    this.tank.triggerShotFeedback();
  }

  getReloadProgress(): number {
    if (this.definition.reloadSeconds <= 0) {
      return 1;
    }

    return 1 - this.reloadRemaining / this.definition.reloadSeconds;
  }

  getPosition(target: Vector3): Vector3 {
    return target.set(
      this.body.position.x,
      this.body.position.y,
      this.body.position.z
    );
  }

  getPredictedPosition(secondsAhead: number, target: Vector3): Vector3 {
    return target.set(
      this.body.position.x + this.body.velocity.x * secondsAhead,
      this.body.position.y + this.body.velocity.y * secondsAhead,
      this.body.position.z + this.body.velocity.z * secondsAhead
    );
  }

  getFacingDirection(target: Vector3): Vector3 {
    return target
      .set(Math.sin(this.yaw), 0, Math.cos(this.yaw))
      .normalize();
  }

  getUpDirection(target: Vector3): Vector3 {
    return target.set(0, 1, 0);
  }

  getTurretDirection(target: Vector3): Vector3 {
    target.set(
      Math.sin(this.yaw + this.turretYaw) * Math.cos(this.gunPitch),
      Math.sin(this.gunPitch),
      Math.cos(this.yaw + this.turretYaw) * Math.cos(this.gunPitch)
    );

    return target.normalize();
  }

  getMuzzleWorldPosition(target: Vector3): Vector3 {
    return this.tank.muzzleAnchor.getWorldPosition(target);
  }

  getMuzzleWorldDirection(target: Vector3): Vector3 {
    this.tank.muzzleAnchor.getWorldDirection(target);
    return target.normalize();
  }

  worldToLocalPoint(worldPoint: Vector3, target: Vector3): Vector3 {
    target.copy(worldPoint);
    return this.tank.root.worldToLocal(target);
  }

  getCurrentSpeed(): number {
    return Math.hypot(this.body.velocity.x, this.body.velocity.z);
  }

  getNormalizedSpeed(): number {
    return MathUtils.clamp(
      this.getCurrentSpeed() / Math.max(this.maxForwardSpeed * this.mobilityMultiplier, 0.001),
      0,
      1
    );
  }

  getEngineLoad(): number {
    return this.engineLoad;
  }

  getSlipRatio(): number {
    return this.slipRatio;
  }

  getTerrainType(): TerrainSample['type'] {
    return this.currentTerrain;
  }

  getHullYaw(): number {
    return this.yaw;
  }

  getTurretYaw(): number {
    return this.yaw + this.turretYaw;
  }

  getGunPitch(): number {
    return this.gunPitch;
  }

  getRideHeight(): number {
    return this.bodyHalfExtents.y;
  }

  getReloadRemaining(): number {
    return this.reloadRemaining;
  }

  setMobilityMultiplier(value: number): void {
    this.mobilityMultiplier = Math.max(0.5, value);
  }

  setReloadMultiplier(value: number): void {
    this.reloadMultiplier = Math.max(0.3, value);
  }

  disableCombat(): void {
    this.destroyed = true;
    this.forwardSpeed = 0;
    this.turnVelocity = 0;
    this.body.velocity.setZero();
    this.body.angularVelocity.setZero();
    this.body.type = CANNON.Body.STATIC;
    this.body.collisionResponse = false;
    this.body.updateMassProperties();
  }

  private getSpeedForThrottle(throttle: number): number {
    const clamped = MathUtils.clamp(throttle, -1, 1);
    return clamped >= 0 ? clamped * this.maxForwardSpeed : clamped * this.maxReverseSpeed;
  }

  private getTurnRate(): number {
    return 0.7 + this.definition.mobility * 0.24 - this.getMassPenalty() * 0.1;
  }

  private getBrakeResponse(terrain: TerrainSample, previousSpeed: number): number {
    const inertiaBias = MathUtils.lerp(0.9, 0.48, MathUtils.clamp(Math.abs(previousSpeed) / this.maxForwardSpeed, 0, 1));
    return Math.max(0.6, this.getCoastResponse() * terrain.braking * inertiaBias);
  }

  private getMassPenalty(): number {
    return MathUtils.clamp((this.definition.mass - 25) / 45, 0, 1);
  }

  private getAccelerationResponse(throttle: number, targetSpeed: number): number {
    const massPenalty = this.getMassPenalty();
    const changingDirection =
      Math.abs(targetSpeed) > 0.2 &&
      Math.abs(this.forwardSpeed) > 0.4 &&
      Math.sign(targetSpeed) !== Math.sign(this.forwardSpeed);

    if (changingDirection) {
      return MathUtils.lerp(6.4, 4.1, massPenalty) + this.definition.mobility * 0.15;
    }

    if (Math.abs(throttle) < 0.04) {
      return this.getCoastResponse();
    }

    const speedingUp = Math.abs(targetSpeed) > Math.abs(this.forwardSpeed);
    return speedingUp
      ? MathUtils.lerp(4.6, 2.2, massPenalty) + this.definition.mobility * 0.22
      : MathUtils.lerp(5.8, 3.6, massPenalty) + this.definition.mobility * 0.18;
  }

  private getCoastResponse(): number {
    return MathUtils.lerp(3.3, 1.7, this.getMassPenalty());
  }

  private getSteeringResponse(): number {
    return MathUtils.lerp(7.4, 4.4, this.getMassPenalty()) + this.definition.mobility * 0.14;
  }

  syncVisuals(): void {
    this.tank.root.position.set(
      this.body.position.x,
      this.body.position.y,
      this.body.position.z
    );
    this.tank.root.rotation.set(0, this.yaw, 0);
    this.tank.turretPivot.rotation.y = this.turretYaw;
    this.tank.gunPivot.rotation.x = this.gunPitch;
  }
}

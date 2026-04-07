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

type DrivePhase = 'stopped' | 'starting' | 'driving';

const SPEED_BOOST_MULTIPLIER = 1;
const ACCELERATION_BOOST_MULTIPLIER = 1.55;
const COAST_AND_BRAKE_BOOST_MULTIPLIER = 1.15;

interface TankControllerOptions {
  position?: CANNON.Vec3;
  yaw?: number;
  /** 与地面对应的低摩擦材质，避免 Cannon 摩擦与手动速度对抗导致“发黏”、无法加速 */
  contactMaterial?: CANNON.Material;
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
  private drivePhase: DrivePhase = 'stopped';
  private driveVelocityX = 0;
  private driveVelocityZ = 0;
  private prePhysicsX = 0;
  private prePhysicsZ = 0;
  private readonly world: CANNON.World;

  constructor(
    world: CANNON.World,
    tank: Tank,
    definition: TankDefinition,
    options: TankControllerOptions = {}
  ) {
    this.world = world;
    this.tank = tank;
    this.definition = definition;
    this.yaw = options.yaw ?? 0;

    const massPenalty = this.getMassPenalty();
    this.maxForwardSpeed =
      (5.1 + this.definition.mobility * 1.95 - massPenalty * 0.45) * SPEED_BOOST_MULTIPLIER;
    this.maxReverseSpeed = this.maxForwardSpeed * 0.52;

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
      linearDamping: 0.02,
      angularDamping: 0.95,
      position: initialPosition,
      material: options.contactMaterial
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
      this.driveVelocityX = 0;
      this.driveVelocityZ = 0;
      this.prePhysicsX = this.body.position.x;
      this.prePhysicsZ = this.body.position.z;
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
    const throttleMagnitude = Math.abs(throttle);
    const speedCap = throttle >= 0 ? this.maxForwardSpeed : this.maxReverseSpeed;
    const normalizedTravelSpeed = MathUtils.clamp(
      Math.abs(previousSpeed) /
        Math.max(speedCap * effectiveSpeedMultiplier * this.mobilityMultiplier, 0.001),
      0,
      1
    );
    let changingDirection =
      throttleMagnitude > 0.08 &&
      Math.abs(previousSpeed) > 0.4 &&
      Math.sign(throttle) !== Math.sign(previousSpeed);

    this.drivePhase = this.resolveDrivePhase(
      throttleMagnitude,
      normalizedTravelSpeed,
      changingDirection
    );

    const engineTarget = this.getEngineTarget(throttleMagnitude, this.drivePhase);
    const engineRamp = this.getEngineRamp(this.drivePhase, engineTarget > this.engineLoad);
    this.engineLoad = MathUtils.damp(this.engineLoad, engineTarget, engineRamp, delta);

    const engineCurve = this.getEngineCurve(this.drivePhase);
    const desiredSpeed =
      Math.sign(throttle) *
      speedCap *
      this.getTargetSpeedRatio(throttleMagnitude, this.drivePhase) *
      effectiveSpeedMultiplier *
      engineCurve *
      this.mobilityMultiplier;
    const accelerationResponse =
      this.getAccelerationResponse(this.drivePhase, changingDirection) *
      MathUtils.lerp(0.45, 1.1, effectiveTraction);
    const brakingResponse =
      this.getBrakeResponse(terrain, previousSpeed) * (Math.abs(throttle) < 0.08 || Math.sign(throttle) !== Math.sign(previousSpeed) ? 1 : 0.58);

    if (Math.abs(throttle) > 0.04) {
      const speedTarget =
        changingDirection && Math.abs(this.forwardSpeed) > 0.18
          ? 0
          : desiredSpeed;
      this.forwardSpeed = MathUtils.damp(
        this.forwardSpeed,
        speedTarget,
        changingDirection ? brakingResponse * 1.1 : accelerationResponse,
        delta
      );
      changingDirection = speedTarget === 0;
    } else {
      this.forwardSpeed = MathUtils.damp(this.forwardSpeed, 0, brakingResponse, delta);
    }

    const speedRatio = MathUtils.clamp(
      Math.abs(this.forwardSpeed) / Math.max(this.maxForwardSpeed, 0.001),
      0,
      1
    );
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
    this.driveVelocityX = this.forwardVector.x * this.forwardSpeed + slipOffset.x;
    this.driveVelocityZ = this.forwardVector.z * this.forwardSpeed + slipOffset.z;
    this.body.velocity.x = this.driveVelocityX;
    this.body.velocity.z = this.driveVelocityZ;
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
    this.turretYaw += MathUtils.clamp(aimInput.yaw + MathUtils.randFloatSpread(aimPenalty), -0.12, 0.12);
    this.gunPitch = MathUtils.clamp(
      this.gunPitch + MathUtils.clamp(aimInput.pitch + MathUtils.randFloatSpread(aimPenalty * 0.6), -0.08, 0.08),
      -0.38,
      0.35
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

    this.prePhysicsX = this.body.position.x;
    this.prePhysicsZ = this.body.position.z;

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

  /** 与街机模型一致的车速 (m/s)，用于 HUD，避免物理步与速度显示不一致 */
  getArcadeSpeedMetersPerSecond(): number {
    return Math.abs(this.forwardSpeed);
  }

  getNormalizedSpeed(): number {
    return MathUtils.clamp(
      this.getArcadeSpeedMetersPerSecond() / Math.max(this.maxForwardSpeed * this.mobilityMultiplier, 0.001),
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
    this.reloadMultiplier = Math.max(0.1, value);
  }

  disableCombat(): void {
    this.destroyed = true;
    this.forwardSpeed = 0;
    this.turnVelocity = 0;
    this.drivePhase = 'stopped';
    this.body.velocity.setZero();
    this.body.angularVelocity.setZero();
    this.body.type = CANNON.Body.STATIC;
    this.body.collisionResponse = false;
    this.body.updateMassProperties();
  }

  private resolveDrivePhase(
    throttleMagnitude: number,
    normalizedTravelSpeed: number,
    changingDirection: boolean
  ): DrivePhase {
    if (throttleMagnitude < 0.04) {
      return 'stopped';
    }

    if (changingDirection || normalizedTravelSpeed < 0.04) {
      return 'starting';
    }

    return 'driving';
  }

  private getTargetSpeedRatio(throttleMagnitude: number, phase: DrivePhase): number {
    if (phase === 'stopped') {
      return 0;
    }

    if (phase === 'starting') {
      return 0.2 + Math.pow(throttleMagnitude, 1.5) * 0.3;
    }

    return 0.5 + Math.pow(throttleMagnitude, 1.2) * 0.5;
  }

  private getEngineTarget(throttleMagnitude: number, phase: DrivePhase): number {
    if (phase === 'stopped') {
      return 0;
    }

    if (phase === 'starting') {
      return 0.3 + throttleMagnitude * 0.2;
    }

    return 0.5 + throttleMagnitude * 0.25;
  }

  private getEngineRamp(phase: DrivePhase, rampingUp: boolean): number {
    if (!rampingUp) {
      return 2.6;
    }

    if (phase === 'starting') {
      return 1.5 + this.definition.mobility * 0.2;
    }

    return 1.5 + this.definition.mobility * 0.15;
  }

  private getEngineCurve(phase: DrivePhase): number {
    if (phase === 'stopped') {
      return Math.max(0.08, this.engineLoad * 0.14);
    }

    if (phase === 'starting') {
      return 0.35 + Math.pow(this.engineLoad, 1.5) * 0.5;
    }

    return 0.7 + Math.pow(this.engineLoad, 1.1) * 0.3;
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

  private getAccelerationResponse(phase: DrivePhase, changingDirection: boolean): number {
    const massPenalty = this.getMassPenalty();

    if (changingDirection) {
      return (
        MathUtils.lerp(6.4, 4.1, massPenalty) + this.definition.mobility * 0.15
      ) * ACCELERATION_BOOST_MULTIPLIER;
    }

    if (phase === 'stopped') {
      return this.getCoastResponse();
    }

    return (
      MathUtils.lerp(4, 2.2, massPenalty) + this.definition.mobility * 0.18
    ) * ACCELERATION_BOOST_MULTIPLIER;
  }

  private getCoastResponse(): number {
    return MathUtils.lerp(3.3, 1.7, this.getMassPenalty()) * COAST_AND_BRAKE_BOOST_MULTIPLIER;
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

  /**
   * 街机速度与物理碰撞的折中策略：
   * 计算期望位置与 Cannon 步进后位置的偏差，
   * 若物理引擎推回了坦克（说明有碰撞），则尊重物理结果并降速；
   * 否则使用街机位置保持手感一致。
   */
  applyDriveVelocityAfterPhysics(delta: number): void {
    if (this.destroyed) {
      return;
    }

    const arcadeX = this.prePhysicsX + this.driveVelocityX * delta;
    const arcadeZ = this.prePhysicsZ + this.driveVelocityZ * delta;

    const solverX = this.body.position.x;
    const solverZ = this.body.position.z;

    const diffX = solverX - (this.prePhysicsX + this.body.velocity.x * delta);
    const diffZ = solverZ - (this.prePhysicsZ + this.body.velocity.z * delta);
    const solverCorrection = Math.sqrt(diffX * diffX + diffZ * diffZ);

    const collisionThreshold = 0.02;

    if (solverCorrection > collisionThreshold) {
      this.body.position.x = solverX;
      this.body.position.z = solverZ;

      const pushBackX = solverX - arcadeX;
      const pushBackZ = solverZ - arcadeZ;
      const pushDist = Math.sqrt(pushBackX * pushBackX + pushBackZ * pushBackZ);

      if (pushDist > 0.01) {
        const pushNormX = pushBackX / pushDist;
        const pushNormZ = pushBackZ / pushDist;
        const velocityIntoPush = this.driveVelocityX * pushNormX + this.driveVelocityZ * pushNormZ;

        if (velocityIntoPush < 0) {
          this.driveVelocityX -= pushNormX * velocityIntoPush;
          this.driveVelocityZ -= pushNormZ * velocityIntoPush;
        }
      }

      this.forwardSpeed *= 0.5;
      this.body.velocity.x = this.driveVelocityX;
      this.body.velocity.z = this.driveVelocityZ;
    } else {
      const movement = Math.hypot(arcadeX - this.prePhysicsX, arcadeZ - this.prePhysicsZ);

      if (movement > 0.001) {
        const from = new CANNON.Vec3(this.prePhysicsX, this.body.position.y, this.prePhysicsZ);
        const to = new CANNON.Vec3(arcadeX, this.body.position.y, arcadeZ);
        const sweepResult = new CANNON.RaycastResult();
        const blocked = this.world.raycastClosest(from, to, { skipBackfaces: true, collisionFilterMask: 1 }, sweepResult);

        if (blocked && sweepResult.body && sweepResult.body.id !== this.body.id) {
          this.body.position.x = this.prePhysicsX;
          this.body.position.z = this.prePhysicsZ;
          this.driveVelocityX *= 0.15;
          this.driveVelocityZ *= 0.15;
          this.forwardSpeed *= 0.32;
          this.body.velocity.x = this.driveVelocityX;
          this.body.velocity.z = this.driveVelocityZ;
          return;
        }
      }

      this.body.position.x = arcadeX;
      this.body.position.z = arcadeZ;
      this.body.velocity.x = this.driveVelocityX;
      this.body.velocity.z = this.driveVelocityZ;
    }
  }
}

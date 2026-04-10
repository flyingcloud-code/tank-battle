import { MathUtils, Object3D, PerspectiveCamera, Vector3 } from 'three';

import { computeOrbitCameraPose } from '../camera/orbitCameraPose';
import { TankController } from './TankController';

export enum CameraMode {
  POV = 'POV',
  ThirdPerson = 'THIRD_PERSON',
  TopDown = 'TOP_DOWN'
}

export class CameraController {
  readonly camera: PerspectiveCamera;

  private mode = CameraMode.ThirdPerson;
  private transitionTime = 1;
  private shakeTime = 0;
  private shakeIntensity = 0;
  private readonly currentPosition = new Vector3(0, 5, -10);
  private readonly currentLookAt = new Vector3();
  private readonly desiredPosition = new Vector3();
  private readonly desiredLookAt = new Vector3();
  private readonly tempPosition = new Vector3();
  private readonly tempLook = new Vector3();
  private readonly turretLook = new Vector3();
  private readonly shakeOffset = new Vector3();
  private readonly tacticalFocus = new Vector3();
  private readonly tacticalOffset = new Vector3();
  private tacticalBlend = 0;

  /** Horizontal orbit angle (radians). Mouse-X drives this. */
  private orbitYaw = 0;
  /** Vertical orbit angle (radians). Higher = camera higher above the tank. */
  private orbitPitch = 0.35;
  private readonly orbitDistance = 10;
  private readonly orbitMinPitch = -0.1;
  private readonly orbitMaxPitch = 1.1;
  /** Vertical offset above the tank body that the orbit pivots around. */
  private readonly orbitPivotHeight = 1.6;
  private readonly orbitShoulderOffset = 1.4;
  private readonly orbitLookDistance = 32;

  constructor(aspect: number) {
    this.camera = new PerspectiveCamera(65, aspect, 0.1, 800);
    this.camera.position.copy(this.currentPosition);
  }

  resize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  cycleMode(): CameraMode {
    if (this.mode === CameraMode.POV) {
      this.mode = CameraMode.ThirdPerson;
    } else if (this.mode === CameraMode.ThirdPerson) {
      this.mode = CameraMode.TopDown;
    } else {
      this.mode = CameraMode.POV;
    }

    this.transitionTime = 0;
    return this.mode;
  }

  setMode(mode: CameraMode): void {
    if (this.mode === mode) {
      return;
    }

    this.mode = mode;
    this.transitionTime = 0;
  }

  getMode(): CameraMode {
    return this.mode;
  }

  setTopDownFocus(target: Vector3): void {
    this.tacticalFocus.copy(target);
    this.tacticalBlend = 1;
    this.setMode(CameraMode.TopDown);
  }

  applyShake(intensity: number, duration = 0.24): void {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    this.shakeTime = Math.max(this.shakeTime, duration);
  }

  /**
   * Feed raw mouse delta into the orbit camera.
   * Called from Game.updatePlayer() in ThirdPerson mode.
   */
  applyLookDelta(dx: number, dy: number): void {
    this.orbitYaw -= dx;
    this.orbitPitch = MathUtils.clamp(
      this.orbitPitch + dy,
      this.orbitMinPitch,
      this.orbitMaxPitch
    );
  }

  /**
   * Synchronise the initial orbit yaw with the tank's hull yaw so the
   * camera spawns behind the tank facing forward.
   */
  initOrbitYaw(hullYaw: number): void {
    this.orbitYaw = hullYaw + Math.PI;
  }

  update(delta: number, tankController: TankController): void {
    if (this.mode === CameraMode.POV) {
      this.setPovTargets(tankController.tank.povAnchor, tankController);
    } else if (this.mode === CameraMode.ThirdPerson) {
      this.setOrbitTargets(tankController);
    } else {
      this.setTopTargets(tankController.tank.topAnchor, tankController.tank.root, tankController, delta);
    }

    this.transitionTime = Math.min(1, this.transitionTime + delta / 0.3);
    const blend = MathUtils.smoothstep(this.transitionTime, 0, 1);
    const smoothing = 1 - Math.pow(0.001, delta * 6);

    this.currentPosition.lerp(
      this.tempPosition.copy(this.currentPosition).lerp(this.desiredPosition, blend),
      smoothing
    );
    this.currentLookAt.lerp(
      this.tempLook.copy(this.currentLookAt).lerp(this.desiredLookAt, blend),
      smoothing
    );

    this.camera.position.copy(this.currentPosition);

    if (this.shakeTime > 0) {
      this.shakeTime = Math.max(0, this.shakeTime - delta);
      this.shakeOffset.set(
        (Math.random() - 0.5) * this.shakeIntensity,
        (Math.random() - 0.5) * this.shakeIntensity * 0.6,
        (Math.random() - 0.5) * this.shakeIntensity
      );
      this.camera.position.add(this.shakeOffset);
      this.shakeIntensity = Math.max(0, this.shakeIntensity - delta * 5);
    }

    if (this.mode === CameraMode.TopDown) {
      this.camera.up.set(0, 0, -1);
    } else {
      this.camera.up.set(0, 1, 0);
    }

    this.camera.lookAt(this.currentLookAt);
  }

  private setPovTargets(anchor: Object3D, tankController: TankController): void {
    anchor.getWorldPosition(this.desiredPosition);
    tankController
      .getMuzzleWorldDirection(this.turretLook)
      .multiplyScalar(45)
      .add(this.desiredPosition);
    this.desiredLookAt.copy(this.turretLook);
  }

  /**
   * Third-person chase/orbit:
   * camera position sits over the shoulder and the camera looks ahead.
   */
  private setOrbitTargets(tankController: TankController): void {
    const tankPos = tankController.getPosition(this.tempPosition);
    const pose = computeOrbitCameraPose({
      tankPosition: tankPos,
      orbitYaw: this.orbitYaw,
      orbitPitch: this.orbitPitch,
      orbitDistance: this.orbitDistance,
      orbitPivotHeight: this.orbitPivotHeight,
      shoulderOffset: this.orbitShoulderOffset,
      lookDistance: this.orbitLookDistance
    });

    this.desiredPosition.set(pose.position.x, pose.position.y, pose.position.z);
    this.desiredLookAt.set(pose.lookAt.x, pose.lookAt.y, pose.lookAt.z);
  }

  private setTopTargets(
    _anchor: Object3D,
    _focus: Object3D,
    tankController: TankController,
    delta: number
  ): void {
    const tankPos = tankController.getPosition(this.tempPosition);
    const topHeight = tankController.tank.profile.topHeight;
    this.desiredPosition.set(tankPos.x, tankPos.y + topHeight, tankPos.z);
    this.desiredLookAt.set(tankPos.x, tankPos.y, tankPos.z);

    if (this.tacticalBlend > 0.001) {
      this.tacticalOffset
        .copy(this.tacticalFocus)
        .sub(tankPos)
        .multiplyScalar(this.tacticalBlend);
      this.desiredPosition.add(this.tacticalOffset);
      this.desiredLookAt.add(this.tacticalOffset);
    }

    this.tacticalBlend = Math.max(
      0,
      this.tacticalBlend - delta * (this.mode === CameraMode.TopDown ? 0.12 : 0.45)
    );
  }
}

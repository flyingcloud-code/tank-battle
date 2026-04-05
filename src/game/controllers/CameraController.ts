import { MathUtils, Object3D, PerspectiveCamera, Vector3 } from 'three';

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

  constructor(aspect: number) {
    this.camera = new PerspectiveCamera(65, aspect, 0.1, 450);
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

  update(delta: number, tankController: TankController, aimPoint?: Vector3 | null): void {
    if (this.mode === CameraMode.POV) {
      this.setPovTargets(tankController.tank.povAnchor, tankController);
    } else if (this.mode === CameraMode.ThirdPerson) {
      this.setObjectTargets(tankController.tank.chaseAnchor, tankController.tank.root, aimPoint);
    } else {
      this.setTopTargets(tankController.tank.topAnchor, tankController.tank.root, tankController, delta);
    }

    this.transitionTime = Math.min(1, this.transitionTime + delta / 0.3);
    const blend = MathUtils.smoothstep(this.transitionTime, 0, 1);
    const smoothing = 1 - Math.pow(0.001, delta * 4);

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

  private setObjectTargets(anchor: Object3D, focus: Object3D, aimPoint?: Vector3 | null): void {
    anchor.getWorldPosition(this.desiredPosition);

    if (aimPoint) {
      this.desiredLookAt.copy(aimPoint);
      return;
    }

    focus.getWorldPosition(this.desiredLookAt);
    this.desiredLookAt.y += 1.6;
  }

  private setTopTargets(
    anchor: Object3D,
    focus: Object3D,
    tankController: TankController,
    delta: number
  ): void {
    anchor.getWorldPosition(this.desiredPosition);
    focus.getWorldPosition(this.desiredLookAt);

    if (this.tacticalBlend > 0.001) {
      tankController.getPosition(this.tempLook);
      this.tacticalOffset
        .copy(this.tacticalFocus)
        .sub(this.tempLook)
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

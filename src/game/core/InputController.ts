export interface DriveInput {
  throttle: number;
  turn: number;
}

export class InputController {
  private readonly keys = new Set<string>();
  private lookDelta = { x: 0, y: 0 };
  private virtualDrive = { x: 0, y: 0 };
  private fireQueued = false;
  private viewQueued = false;
  private nationQueued = false;
  private pauseQueued = false;
  private supportQueued = false;
  private reticleQueued = false;
  private zoomActive = false;
  private pointerScreenX = -9999;
  private pointerScreenY = -9999;

  constructor(private readonly target: HTMLElement) {
    this.bindEvents();
  }

  destroy(): void {
    document.exitPointerLock();
  }

  getDriveInput(): DriveInput {
    const keyboardThrottle =
      (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    const keyboardTurn =
      (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);

    return {
      throttle: this.clamp(keyboardThrottle + this.virtualDrive.y),
      turn: this.clamp(keyboardTurn + this.virtualDrive.x)
    };
  }

  consumeLookDelta(): { x: number; y: number } {
    const delta = { ...this.lookDelta };
    this.lookDelta.x = 0;
    this.lookDelta.y = 0;
    return delta;
  }

  consumeViewToggle(): boolean {
    if (!this.viewQueued) {
      return false;
    }

    this.viewQueued = false;
    return true;
  }

  consumeFire(): boolean {
    if (!this.fireQueued) {
      return false;
    }

    this.fireQueued = false;
    return true;
  }

  consumeNationToggle(): boolean {
    if (!this.nationQueued) {
      return false;
    }

    this.nationQueued = false;
    return true;
  }

  consumePauseToggle(): boolean {
    if (!this.pauseQueued) {
      return false;
    }

    this.pauseQueued = false;
    return true;
  }

  consumeSupport(): boolean {
    if (!this.supportQueued) {
      return false;
    }

    this.supportQueued = false;
    return true;
  }

  consumeReticleToggle(): boolean {
    if (!this.reticleQueued) {
      return false;
    }

    this.reticleQueued = false;
    return true;
  }

  getPointerScreenX(): number {
    return this.pointerScreenX;
  }

  getPointerScreenY(): number {
    return this.pointerScreenY;
  }

  isZoomActive(): boolean {
    return this.zoomActive;
  }

  isHandbrakeActive(): boolean {
    return this.keys.has('KeyX');
  }

  setVirtualDrive(x: number, y: number): void {
    this.virtualDrive.x = this.clamp(x);
    this.virtualDrive.y = this.clamp(y);
  }

  queueViewToggle(): void {
    this.viewQueued = true;
  }

  queueFire(): void {
    this.fireQueued = true;
  }

  private bindEvents(): void {
    window.addEventListener('keydown', (event) => {
      this.keys.add(event.code);

      if (event.code === 'KeyV') {
        this.viewQueued = true;
      }

      if (event.code === 'Space') {
        this.fireQueued = true;
      }

      if (event.code === 'KeyN') {
        this.nationQueued = true;
      }

      if (event.code === 'Escape') {
        this.pauseQueued = true;
      }

      if (event.code === 'KeyB') {
        this.supportQueued = true;
      }

      if (event.code === 'KeyH' && !event.repeat) {
        this.reticleQueued = true;
      }
    });

    window.addEventListener('keyup', (event) => {
      this.keys.delete(event.code);
    });

    this.target.addEventListener('click', () => {
      if (window.matchMedia('(pointer:fine)').matches) {
        void this.target.requestPointerLock();
      }
    });

    window.addEventListener('mousemove', (event) => {
      if (document.pointerLockElement !== this.target) {
        return;
      }

      this.lookDelta.x += event.movementX;
      this.lookDelta.y += event.movementY;
    });

    window.addEventListener('mousemove', (event) => {
      this.pointerScreenX = event.clientX;
      this.pointerScreenY = event.clientY;
    });

    window.addEventListener('mousedown', (event) => {
      const target = event.target;

      if (target instanceof HTMLElement && target.closest('button, #selection-screen')) {
        return;
      }

      if (document.pointerLockElement === this.target) {
        if (event.button === 0) {
          this.fireQueued = true;
        } else if (event.button === 2) {
          this.zoomActive = true;
        }
      }
    });

    window.addEventListener('mouseup', (event) => {
      if (event.button === 2) {
        this.zoomActive = false;
      }
    });

    window.addEventListener('contextmenu', (event) => {
      if (document.pointerLockElement === this.target) {
        event.preventDefault();
      }
    });
  }

  private clamp(value: number): number {
    return Math.max(-1, Math.min(1, value));
  }
}

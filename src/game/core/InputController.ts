export interface DriveInput {
  throttle: number;
  turn: number;
}

export type SelectedAmmoType = 'standard' | 'ap' | 'he';

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
  private ammoSelection: SelectedAmmoType = 'standard';
  private disposed = false;

  private readonly handleKeyDown = (event: KeyboardEvent): void => {
    if (this.disposed) return;
    this.keys.add(event.code);
    if (event.code === 'KeyV') this.viewQueued = true;
    if (event.code === 'Space') this.fireQueued = true;
    if (event.code === 'KeyN') this.nationQueued = true;
    if (event.code === 'Escape') this.pauseQueued = true;
    if (event.code === 'KeyB') this.supportQueued = true;
    if (event.code === 'KeyH' && !event.repeat) this.reticleQueued = true;
    if (event.code === 'Digit1') this.ammoSelection = 'standard';
    if (event.code === 'Digit2') this.ammoSelection = 'ap';
    if (event.code === 'Digit3') this.ammoSelection = 'he';
  };

  private readonly handleKeyUp = (event: KeyboardEvent): void => {
    this.keys.delete(event.code);
  };

  private readonly handleCanvasClick = (): void => {
    if (this.disposed) return;
    if (window.matchMedia('(pointer:fine)').matches) {
      void this.target.requestPointerLock();
    }
  };

  private readonly handleMouseMoveLook = (event: MouseEvent): void => {
    if (this.disposed || document.pointerLockElement !== this.target) return;
    this.lookDelta.x += event.movementX;
    this.lookDelta.y += event.movementY;
  };

  private readonly handleMouseMoveScreen = (event: MouseEvent): void => {
    this.pointerScreenX = event.clientX;
    this.pointerScreenY = event.clientY;
  };

  private readonly handleMouseDown = (event: MouseEvent): void => {
    if (this.disposed) return;
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('button, #selection-screen, #pause-screen')) {
      return;
    }
    if (document.pointerLockElement === this.target) {
      if (event.button === 0) this.fireQueued = true;
      else if (event.button === 2) this.zoomActive = true;
    }
  };

  private readonly handleMouseUp = (event: MouseEvent): void => {
    if (event.button === 2) this.zoomActive = false;
  };

  private readonly handleContextMenu = (event: MouseEvent): void => {
    if (document.pointerLockElement === this.target) {
      event.preventDefault();
    }
  };

  constructor(private readonly target: HTMLElement) {
    this.bindEvents();
  }

  destroy(): void {
    this.disposed = true;
    document.exitPointerLock();
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('mousemove', this.handleMouseMoveLook);
    window.removeEventListener('mousemove', this.handleMouseMoveScreen);
    window.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('contextmenu', this.handleContextMenu);
    this.target.removeEventListener('click', this.handleCanvasClick);
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
    if (!this.viewQueued) return false;
    this.viewQueued = false;
    return true;
  }

  consumeFire(): boolean {
    if (!this.fireQueued) return false;
    this.fireQueued = false;
    return true;
  }

  consumeNationToggle(): boolean {
    if (!this.nationQueued) return false;
    this.nationQueued = false;
    return true;
  }

  consumePauseToggle(): boolean {
    if (!this.pauseQueued) return false;
    this.pauseQueued = false;
    return true;
  }

  consumeSupport(): boolean {
    if (!this.supportQueued) return false;
    this.supportQueued = false;
    return true;
  }

  consumeReticleToggle(): boolean {
    if (!this.reticleQueued) return false;
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

  getSelectedAmmo(): SelectedAmmoType {
    return this.ammoSelection;
  }

  setSelectedAmmo(type: SelectedAmmoType): void {
    this.ammoSelection = type;
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
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    this.target.addEventListener('click', this.handleCanvasClick);
    window.addEventListener('mousemove', this.handleMouseMoveLook);
    window.addEventListener('mousemove', this.handleMouseMoveScreen);
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('contextmenu', this.handleContextMenu);
  }

  private clamp(value: number): number {
    return Math.max(-1, Math.min(1, value));
  }
}

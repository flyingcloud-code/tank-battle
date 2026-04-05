import nipplejs, { type NippleData } from 'nipplejs';

import { InputController } from '../core/InputController';

export class MobileControls {
  private joystick: ReturnType<typeof nipplejs.create> | null = null;
  private readonly root = document.querySelector<HTMLElement>('#mobile-controls');
  private readonly joystickZone = document.querySelector<HTMLElement>('#joystick-zone');
  private readonly fireButton = document.querySelector<HTMLButtonElement>('#fire-button');
  private readonly viewButton = document.querySelector<HTMLButtonElement>('#view-button');

  constructor(
    private readonly inputController: InputController,
    private readonly onUiAction?: () => void
  ) {}

  initialize(): void {
    if (!this.root || !this.joystickZone || !this.fireButton || !this.viewButton) {
      return;
    }

    const isTouchDevice =
      window.matchMedia('(max-width: 900px)').matches ||
      navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
      return;
    }

    this.root.classList.add('is-active');

    this.joystick = nipplejs.create({
      zone: this.joystickZone,
      mode: 'static',
      position: { left: '50%', top: '50%' },
      color: 'white',
      size: 120
    });

    this.joystick.on('move', (_event: Event, data: NippleData) => {
      const vector = data.vector ?? { x: 0, y: 0 };
      this.inputController.setVirtualDrive(vector.x, -vector.y);
    });

    this.joystick.on('end', () => {
      this.inputController.setVirtualDrive(0, 0);
    });

    this.bindButton(this.fireButton, () => this.inputController.queueFire());
    this.bindButton(this.viewButton, () => this.inputController.queueViewToggle());
  }

  destroy(): void {
    this.joystick?.destroy();
  }

  private bindButton(button: HTMLButtonElement, action: () => void): void {
    const trigger = (event: Event) => {
      event.preventDefault();
      this.onUiAction?.();
      action();
    };

    button.addEventListener('touchstart', trigger, { passive: false });
    button.addEventListener('mousedown', trigger);
  }
}

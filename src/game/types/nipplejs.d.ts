declare module 'nipplejs' {
  export interface NippleData {
    angle?: {
      radian?: number;
    };
    distance?: number;
    vector?: {
      x: number;
      y: number;
    };
  }

  export interface JoystickManager {
    on(event: string, handler: (_event: Event, data: NippleData) => void): void;
    destroy(): void;
  }

  export interface Nipplejs {
    create(options: Record<string, unknown>): JoystickManager;
  }

  const nipplejs: Nipplejs;
  export default nipplejs;
}

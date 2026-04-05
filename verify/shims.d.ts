declare module 'three' {
  export const MathUtils: any;
  export const RepeatWrapping: any;
  export const SRGBColorSpace: any;

  export class Vector3 {
    [key: string]: any;
    constructor(...args: any[]);
  }

  export class Quaternion {
    [key: string]: any;
    constructor(...args: any[]);
  }

  export class Object3D {
    [key: string]: any;
    constructor(...args: any[]);
  }

  export class Group extends Object3D {}
  export class Scene extends Object3D {}
  export class PerspectiveCamera extends Object3D {}
  export class Mesh extends Object3D {}
  export class BoxGeometry {
    constructor(...args: any[]);
  }
  export class PlaneGeometry {
    constructor(...args: any[]);
  }
  export class SphereGeometry {
    constructor(...args: any[]);
  }
  export class MeshStandardMaterial {
    [key: string]: any;
    constructor(...args: any[]);
  }
  export class ShadowMaterial {
    [key: string]: any;
    constructor(...args: any[]);
  }
  export class WebGLRenderer {
    [key: string]: any;
    constructor(...args: any[]);
  }
  export class AmbientLight extends Object3D {}
  export class DirectionalLight extends Object3D {
    shadow: any;
  }
  export class HemisphereLight extends Object3D {}
  export class GridHelper extends Object3D {}
  export class Clock {
    [key: string]: any;
    constructor(...args: any[]);
  }
  export class Color {
    constructor(...args: any[]);
  }
  export class Fog {
    constructor(...args: any[]);
  }
  export class CanvasTexture {
    [key: string]: any;
    constructor(...args: any[]);
  }

  export type Texture = any;
}

declare module 'cannon-es' {
  export class Vec3 {
    [key: string]: any;
    constructor(...args: any[]);
  }

  export class Plane {
    constructor(...args: any[]);
  }

  export class Box {
    constructor(...args: any[]);
  }

  export class Body {
    [key: string]: any;
    constructor(...args: any[]);
  }

  export class World {
    [key: string]: any;
    constructor(...args: any[]);
  }
}

declare module 'nipplejs' {
  const nipplejs: {
    create(options: Record<string, unknown>): any;
  };

  export default nipplejs;
}

declare module 'vite/client' {}

declare module '*.css';

import {
  BoxGeometry,
  CylinderGeometry,
  LatheGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  Vector2
} from 'three';

import type { TankDefinition } from '../../data/tanks';
import type { TankProfile } from '../entities/Tank';

export interface TankVisualMaterials {
  hull: MeshStandardMaterial;
  trackLeft: MeshStandardMaterial;
  trackRight: MeshStandardMaterial;
  gun: MeshStandardMaterial;
  detail: MeshStandardMaterial;
}

export interface TankVisualParts {
  hull: Object3D[];
  turret: Object3D[];
  gun: Object3D[];
}

/* ── Per-tank style config ─────────────────────────────────────────────── */

interface TankStyleConfig {
  frontSlope: number;
  turretStyle: 'cast' | 'welded';
  muzzleBrake: boolean;
  wheelCount: number;
  wheelRadius: number;
  sideSkirts: boolean;
  cupola: boolean;
  cupolaX: number;
  cupolaZ: number;
  exhaustSide: 'left' | 'right' | 'both' | 'none';
  antenna: boolean;
  storageBox: boolean;
  fenders: boolean;
}

const D: TankStyleConfig = {
  frontSlope: 0.2, turretStyle: 'welded', muzzleBrake: false,
  wheelCount: 5, wheelRadius: 0.34, sideSkirts: false,
  cupola: true, cupolaX: 0.5, cupolaZ: -0.4,
  exhaustSide: 'right', antenna: true, storageBox: true, fenders: true
};

function s(o: Partial<TankStyleConfig>): TankStyleConfig { return { ...D, ...o }; }

const STYLES: Record<string, TankStyleConfig> = {
  'panzer-iv':    s({ frontSlope: 0.12, muzzleBrake: true, wheelCount: 6, wheelRadius: 0.32, sideSkirts: true, exhaustSide: 'both' }),
  'panther':      s({ frontSlope: 0.42, wheelCount: 8, wheelRadius: 0.36, sideSkirts: true, exhaustSide: 'both' }),
  'tiger-i':      s({ frontSlope: 0.06, muzzleBrake: true, wheelCount: 8, wheelRadius: 0.38, cupolaX: 0.52 }),
  'tiger-ii':     s({ frontSlope: 0.36, muzzleBrake: true, wheelCount: 9, wheelRadius: 0.38, sideSkirts: true, exhaustSide: 'both' }),
  'm4-sherman':   s({ frontSlope: 0.32, turretStyle: 'cast', wheelCount: 6, wheelRadius: 0.30, cupolaX: -0.42, cupolaZ: -0.3, exhaustSide: 'none' }),
  'm26-pershing': s({ frontSlope: 0.38, turretStyle: 'cast', muzzleBrake: true, wheelCount: 6, wheelRadius: 0.36, cupolaX: -0.48 }),
  'm36-jackson':  s({ frontSlope: 0.28, muzzleBrake: true, wheelCount: 6, wheelRadius: 0.30, cupola: false, exhaustSide: 'none' }),
  't34-76':       s({ frontSlope: 0.52, turretStyle: 'cast', wheelCount: 5, wheelRadius: 0.40, cupolaX: 0.3, cupolaZ: -0.3, exhaustSide: 'left' }),
  't34-85':       s({ frontSlope: 0.52, turretStyle: 'cast', wheelCount: 5, wheelRadius: 0.40, cupolaX: 0.32, exhaustSide: 'left' }),
  'kv-1':         s({ frontSlope: 0.22, turretStyle: 'cast', wheelCount: 6, wheelRadius: 0.34, cupolaX: 0.38 }),
  'is-2':         s({ frontSlope: 0.48, turretStyle: 'cast', muzzleBrake: true, wheelCount: 6, wheelRadius: 0.38, exhaustSide: 'left' }),
  'cromwell':     s({ frontSlope: 0.18, wheelCount: 5, wheelRadius: 0.36, cupolaX: 0.36, cupolaZ: -0.3 }),
  'churchill':    s({ frontSlope: 0.05, wheelCount: 11, wheelRadius: 0.22, cupolaX: 0.4 }),
  'firefly':      s({ frontSlope: 0.32, turretStyle: 'cast', muzzleBrake: true, wheelCount: 6, wheelRadius: 0.30, cupolaX: -0.42, cupolaZ: -0.3, exhaustSide: 'none' })
};

/* ── Main entry ────────────────────────────────────────────────────────── */

export function buildTankVisual(
  definition: TankDefinition,
  profile: TankProfile,
  materials: TankVisualMaterials
): TankVisualParts {
  const style = STYLES[definition.id] ?? D;
  return {
    hull: buildHull(profile, style, materials),
    turret: buildTurretGroup(profile, style, materials),
    gun: buildGunGroup(profile, style, materials)
  };
}

/* ── Hull assembly ─────────────────────────────────────────────────────── */

function buildHull(p: TankProfile, st: TankStyleConfig, m: TankVisualMaterials): Object3D[] {
  const parts: Object3D[] = [];
  const mH = p.hullHeight + p.cabinHeight;
  const mY = (p.hullCenterY + p.cabinCenterY) / 2;

  // Main hull body
  parts.push(box(p.hullWidth, mH, p.hullDepth, m.hull, { y: mY }));

  // Front slope plate
  if (st.frontSlope > 0.02) {
    const sH = p.hullHeight * 0.55;
    parts.push(box(p.hullWidth * 0.94, sH, p.hullDepth * 0.18, m.hull, {
      y: mY + mH * 0.3, z: p.hullDepth * 0.44, rx: -st.frontSlope
    }));
    parts.push(box(p.hullWidth * 0.92, sH * 0.55, p.hullDepth * 0.14, m.hull, {
      y: mY - mH * 0.12, z: p.hullDepth * 0.48, rx: st.frontSlope * 0.5
    }));
  }

  // Rear plate
  parts.push(box(p.hullWidth * 0.88, mH * 0.7, p.hullDepth * 0.06, m.detail, {
    y: mY, z: -p.hullDepth * 0.48
  }));

  // Fenders
  if (st.fenders) {
    for (const side of [-1, 1]) {
      parts.push(box(p.trackWidth + 0.26, 0.06, p.trackDepth * 0.92, m.detail, {
        x: side * (p.hullWidth / 2 + 0.16),
        y: p.trackCenterY + p.trackHeight * 0.5 + 0.04
      }));
    }
  }

  // Road wheels
  parts.push(...buildWheels(p, st, m.detail));

  // Sprocket & idler
  parts.push(...buildEndWheels(p, st, m.detail));

  // Tracks
  parts.push(
    box(p.trackWidth, p.trackHeight, p.trackDepth, m.trackLeft, {
      x: -(p.hullWidth / 2 + 0.16), y: p.trackCenterY
    }),
    box(p.trackWidth, p.trackHeight, p.trackDepth, m.trackRight, {
      x: p.hullWidth / 2 + 0.16, y: p.trackCenterY
    })
  );

  // Side skirts
  if (st.sideSkirts) {
    for (const side of [-1, 1]) {
      parts.push(box(0.06, p.trackHeight * 0.75, p.trackDepth * 0.72, m.detail, {
        x: side * (p.hullWidth / 2 + p.trackWidth + 0.22),
        y: p.trackCenterY + 0.08
      }));
    }
  }

  // Exhaust pipes
  if (st.exhaustSide !== 'none') {
    const sides = st.exhaustSide === 'both' ? [-1, 1] : st.exhaustSide === 'left' ? [-1] : [1];
    for (const side of sides) {
      parts.push(cyl(0.08, 1.4, m.detail, {
        x: side * p.hullWidth * 0.38, y: mY + mH * 0.14,
        z: -p.hullDepth * 0.38, rx: Math.PI * 0.08
      }));
      parts.push(cyl(0.1, 0.12, m.detail, {
        x: side * p.hullWidth * 0.38, y: mY + mH * 0.14 + 0.06,
        z: -p.hullDepth * 0.38 - 0.72
      }));
    }
  }

  // Storage box
  if (st.storageBox) {
    parts.push(box(p.hullWidth * 0.4, 0.28, 0.36, m.detail, {
      y: mY + mH * 0.5 + 0.14, z: -p.hullDepth * 0.36
    }));
  }

  // Antenna
  if (st.antenna) {
    parts.push(cyl(0.018, 2.2, m.detail, {
      x: p.hullWidth * 0.32, y: mY + mH * 0.5 + 1.1, z: -p.hullDepth * 0.3
    }));
  }

  // Tow hooks
  for (const side of [-1, 1]) {
    parts.push(cyl(0.05, 0.32, m.detail, {
      x: side * p.hullWidth * 0.35, y: mY - mH * 0.2,
      z: p.hullDepth * 0.5 + 0.05, rz: Math.PI / 2
    }));
  }

  // Hull hatches
  parts.push(cyl(0.22, 0.08, m.detail, {
    x: -p.hullWidth * 0.18, y: mY + mH * 0.52, z: p.hullDepth * 0.24
  }));
  parts.push(cyl(0.22, 0.08, m.detail, {
    x: p.hullWidth * 0.18, y: mY + mH * 0.52, z: p.hullDepth * 0.24
  }));

  return parts;
}

/* ── Road wheels ───────────────────────────────────────────────────────── */

function buildWheels(p: TankProfile, st: TankStyleConfig, mat: MeshStandardMaterial): Object3D[] {
  const parts: Object3D[] = [];
  const n = st.wheelCount;
  const r = st.wheelRadius;
  const halfD = p.trackDepth * 0.44;
  const wY = p.trackCenterY;

  for (let i = 0; i < n; i++) {
    const t = n > 1 ? i / (n - 1) : 0.5;
    const z = MathUtils.lerp(halfD, -halfD, t);
    for (const side of [-1, 1]) {
      const x = side * (p.hullWidth / 2 + 0.14);
      parts.push(cyl(r, 0.12, mat, { x, y: wY, z, rz: Math.PI / 2 }));
      parts.push(cyl(r * 0.65, 0.14, mat, { x: x + side * 0.02, y: wY, z, rz: Math.PI / 2 }));
      parts.push(cyl(r * 0.2, 0.16, mat, { x: x + side * 0.04, y: wY, z, rz: Math.PI / 2 }));
    }
  }
  return parts;
}

function buildEndWheels(p: TankProfile, st: TankStyleConfig, mat: MeshStandardMaterial): Object3D[] {
  const parts: Object3D[] = [];
  const sR = st.wheelRadius * 0.82;
  const iR = st.wheelRadius * 0.7;
  const fZ = p.trackDepth * 0.5;
  const rZ = -p.trackDepth * 0.5;
  const eY = p.trackCenterY + st.wheelRadius * 0.45;

  for (const side of [-1, 1]) {
    const x = side * (p.hullWidth / 2 + 0.14);
    parts.push(cyl(sR, 0.16, mat, { x, y: eY, z: fZ, rz: Math.PI / 2 }));
    parts.push(cyl(iR, 0.14, mat, { x, y: eY, z: rZ, rz: Math.PI / 2 }));
  }
  return parts;
}

/* ── Turret ─────────────────────────────────────────────────────────────── */

function buildTurretGroup(p: TankProfile, st: TankStyleConfig, m: TankVisualMaterials): Object3D[] {
  const parts: Object3D[] = [];
  const tw = p.turretWidth * 1.08;
  const th = p.turretHeight * 1.05;
  const td = p.turretDepth * 1.05;

  if (st.turretStyle === 'cast') {
    const r = Math.max(tw, td) * 0.42;
    const pts: Vector2[] = [new Vector2(0, -th * 0.5)];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const a = t * Math.PI;
      pts.push(new Vector2(r * (0.88 + 0.12 * Math.sin(a)), MathUtils.lerp(-th * 0.5, th * 0.5, t)));
    }
    pts.push(new Vector2(r * 0.7, th * 0.5));
    pts.push(new Vector2(0, th * 0.55));

    const lathe = new LatheGeometry(pts, 16);
    const mesh = new Mesh(lathe, m.hull);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.y = p.turretCenterY + th * 0.15;
    mesh.scale.set(tw / (r * 2), 1, td / (r * 2));
    parts.push(mesh);

    // Base ring
    parts.push(cyl(Math.max(tw, td) * 0.38, 0.08, m.detail, {
      y: p.turretCenterY - th * 0.3
    }));
  } else {
    // Welded angular turret
    parts.push(box(tw, th, td, m.hull, { y: p.turretCenterY }));
    // Front face angle
    parts.push(box(tw * 0.9, th * 0.86, td * 0.1, m.hull, {
      y: p.turretCenterY + th * 0.04, z: td * 0.48, rx: -0.12
    }));
    // Rear bustle
    parts.push(box(tw * 0.7, th * 0.6, td * 0.15, m.detail, {
      y: p.turretCenterY - th * 0.1, z: -td * 0.52
    }));
  }

  // Cupola
  if (st.cupola) {
    const cx = st.cupolaX * p.turretWidth;
    const cz = st.cupolaZ * p.turretDepth;
    parts.push(cyl(0.24, 0.2, m.detail, {
      x: cx, y: p.turretCenterY + th * 0.56, z: cz
    }));
    parts.push(cyl(0.16, 0.08, m.detail, {
      x: cx, y: p.turretCenterY + th * 0.56 + 0.14, z: cz
    }));
  }

  // Turret hatch
  parts.push(cyl(0.18, 0.06, m.detail, {
    x: -st.cupolaX * p.turretWidth * 0.5,
    y: p.turretCenterY + th * 0.52,
    z: p.turretDepth * 0.1
  }));

  // Grab handles on turret sides
  for (const side of [-1, 1]) {
    parts.push(cyl(0.025, 0.42, m.detail, {
      x: side * tw * 0.48, y: p.turretCenterY + th * 0.12,
      z: -td * 0.15, rx: Math.PI / 2
    }));
  }

  return parts;
}

/* ── Gun ────────────────────────────────────────────────────────────────── */

function buildGunGroup(p: TankProfile, st: TankStyleConfig, m: TankVisualMaterials): Object3D[] {
  const parts: Object3D[] = [];
  const gR = p.gunWidth * 0.56;
  const gL = p.gunLength;

  // Mantlet (gun shield)
  parts.push(box(p.turretWidth * 0.4, p.turretHeight * 0.55, 0.32, m.detail, { z: 0.12 }));

  // Barrel base (thicker)
  parts.push(cyl(gR * 1.15, gL * 0.3, m.gun, {
    z: gL * 0.15 + 0.22, rx: Math.PI / 2
  }));

  // Barrel mid
  parts.push(cyl(gR, gL * 0.45, m.gun, {
    z: gL * 0.45 + 0.22, rx: Math.PI / 2
  }));

  // Barrel tip
  parts.push(cyl(gR * 0.88, gL * 0.28, m.gun, {
    z: gL * 0.72 + 0.22, rx: Math.PI / 2
  }));

  // Muzzle brake
  if (st.muzzleBrake) {
    parts.push(cyl(gR * 1.6, gL * 0.06, m.detail, {
      z: gL * 0.92 + 0.22, rx: Math.PI / 2
    }));
    parts.push(cyl(gR * 1.3, gL * 0.04, m.detail, {
      z: gL * 0.96 + 0.22, rx: Math.PI / 2
    }));
  }

  return parts;
}

/* ── Primitive helpers ─────────────────────────────────────────────────── */

interface Xf { x?: number; y?: number; z?: number; rx?: number; ry?: number; rz?: number; }

function box(w: number, h: number, d: number, mat: MeshStandardMaterial, t: Xf = {}): Mesh {
  const m = new Mesh(new BoxGeometry(w, h, d), mat);
  m.castShadow = true;
  m.receiveShadow = true;
  xf(m, t);
  return m;
}

function cyl(r: number, l: number, mat: MeshStandardMaterial, t: Xf = {}): Mesh {
  const segs = MathUtils.clamp(Math.round(r * 48), 8, 20);
  const m = new Mesh(new CylinderGeometry(r, r * 0.92, l, segs), mat);
  m.castShadow = true;
  m.receiveShadow = true;
  xf(m, t);
  return m;
}

function xf(o: Object3D, t: Xf): void {
  o.position.set(t.x ?? 0, t.y ?? 0, t.z ?? 0);
  o.rotation.set(t.rx ?? 0, t.ry ?? 0, t.rz ?? 0);
}

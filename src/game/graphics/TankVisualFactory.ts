import {
  BoxGeometry,
  CylinderGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  Object3D
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

export function buildTankVisual(
  definition: TankDefinition,
  profile: TankProfile,
  materials: TankVisualMaterials
): TankVisualParts {
  if (definition.id === 'tiger-i') {
    return buildTigerI(profile, materials);
  }

  if (definition.id === 'panther') {
    return buildPanther(profile, materials);
  }

  if (definition.id === 't34-85') {
    return buildT3485(profile, materials);
  }

  if (definition.id === 'm4-sherman') {
    return buildSherman(profile, materials);
  }

  return buildFallback(profile, materials);
}

function buildFallback(
  profile: TankProfile,
  materials: TankVisualMaterials
): TankVisualParts {
  const mergedHullHeight = profile.hullHeight + profile.cabinHeight;
  const mergedHullY = (profile.hullCenterY + profile.cabinCenterY) / 2;

  return {
    hull: [
      makeBox(profile.hullWidth, mergedHullHeight, profile.hullDepth, materials.hull, {
        y: mergedHullY
      }),
      ...buildTracks(profile, materials.trackLeft, materials.trackRight)
    ],
    turret: [
      makeBox(profile.turretWidth, profile.turretHeight, profile.turretDepth, materials.hull, {
        y: profile.turretCenterY
      })
    ],
    gun: [
      makeCylinder(profile.gunWidth * 0.56, profile.gunLength, materials.gun, {
        y: 0,
        z: profile.gunLength / 2 + 0.22,
        rotateX: Math.PI / 2
      })
    ]
  };
}

function buildTigerI(
  profile: TankProfile,
  materials: TankVisualMaterials
): TankVisualParts {
  return {
    hull: [
      makeBox(4.35, 1.4, 6.2, materials.hull, { y: 0.09 }),
      makeBox(4.1, 0.28, 1.28, materials.detail, { y: 0.34, z: 2.68, rotateX: -0.2 }),
      makeBox(0.42, 0.36, 2.2, materials.detail, { x: -2.38, y: 0.26, z: -1.1 }),
      makeBox(0.42, 0.36, 2.2, materials.detail, { x: 2.38, y: 0.26, z: -1.1 }),
      makeCylinder(0.18, 0.92, materials.detail, {
        x: -0.8,
        y: 0.36,
        z: -3.04,
        rotateZ: Math.PI / 2
      }),
      makeCylinder(0.18, 0.92, materials.detail, {
        x: 0.8,
        y: 0.36,
        z: -3.04,
        rotateZ: Math.PI / 2
      }),
      ...buildTracks(profile, materials.trackLeft, materials.trackRight)
    ],
    turret: [
      makeBox(2.88, 1.2, 3.14, materials.hull, { y: 0.38 }),
      makeCylinder(0.28, 0.72, materials.detail, { y: 0.2, z: 1.78, rotateX: Math.PI / 2 }),
      makeCylinder(0.18, 0.22, materials.detail, { x: 0.58, y: 0.86, z: -0.56 })
    ],
    gun: [
      makeCylinder(0.18, 4.48, materials.gun, { z: 2.44, rotateX: Math.PI / 2 }),
      makeCylinder(0.12, 0.7, materials.detail, { z: 4.48, rotateX: Math.PI / 2 }),
      makeBox(0.74, 0.56, 0.54, materials.detail, { z: 0.18 })
    ]
  };
}

function buildPanther(
  profile: TankProfile,
  materials: TankVisualMaterials
): TankVisualParts {
  return {
    hull: [
      makeBox(4.1, 1.2, 5.92, materials.hull, { y: 0.02 }),
      makeBox(0.32, 0.48, 3.14, materials.detail, { x: -2.22, y: 0.22, z: -0.4, rotateZ: -0.16 }),
      makeBox(0.32, 0.48, 3.14, materials.detail, { x: 2.22, y: 0.22, z: -0.4, rotateZ: 0.16 }),
      makeCylinder(0.16, 0.76, materials.detail, {
        x: -0.72,
        y: 0.34,
        z: -2.94,
        rotateZ: Math.PI / 2
      }),
      makeCylinder(0.16, 0.76, materials.detail, {
        x: 0.72,
        y: 0.34,
        z: -2.94,
        rotateZ: Math.PI / 2
      }),
      ...buildTracks(profile, materials.trackLeft, materials.trackRight, 0.08)
    ],
    turret: [
      makeBox(2.34, 1.0, 2.72, materials.hull, { y: 0.30 }),
      makeBox(0.72, 0.54, 0.62, materials.detail, { y: 0.22, z: 1.56 })
    ],
    gun: [
      makeCylinder(0.15, 4.88, materials.gun, { z: 2.66, rotateX: Math.PI / 2 }),
      makeCylinder(0.11, 0.76, materials.detail, { z: 4.82, rotateX: Math.PI / 2 }),
      makeBox(0.76, 0.54, 0.58, materials.detail, { z: 0.14 })
    ]
  };
}

function buildT3485(
  profile: TankProfile,
  materials: TankVisualMaterials
): TankVisualParts {
  return {
    hull: [
      makeBox(3.68, 1.1, 5.26, materials.hull, { y: 0.0 }),
      makeBox(0.24, 0.42, 3.24, materials.detail, { x: -1.92, y: 0.08, z: -0.12, rotateZ: -0.18 }),
      makeBox(0.24, 0.42, 3.24, materials.detail, { x: 1.92, y: 0.08, z: -0.12, rotateZ: 0.18 }),
      ...buildTracks(profile, materials.trackLeft, materials.trackRight, -0.02)
    ],
    turret: [
      makeCylinder(1.16, 1.2, materials.hull, { y: 0.34 }),
      makeBox(0.74, 0.48, 0.56, materials.detail, { y: 0.18, z: 1.12 })
    ],
    gun: [
      makeCylinder(0.15, 4.12, materials.gun, { z: 2.16, rotateX: Math.PI / 2 }),
      makeCylinder(0.11, 0.5, materials.detail, { z: 4.08, rotateX: Math.PI / 2 }),
      makeBox(0.72, 0.46, 0.52, materials.detail, { z: 0.1 })
    ]
  };
}

function buildSherman(
  profile: TankProfile,
  materials: TankVisualMaterials
): TankVisualParts {
  return {
    hull: [
      makeBox(3.76, 1.2, 5.38, materials.hull, { y: 0.04 }),
      makeCylinder(0.22, 3.12, materials.detail, { y: 0.3, z: -2.22, rotateZ: Math.PI / 2 }),
      makeBox(0.42, 0.26, 1.18, materials.detail, { x: -1.86, y: 0.2, z: 1.48 }),
      makeBox(0.42, 0.26, 1.18, materials.detail, { x: 1.86, y: 0.2, z: 1.48 }),
      ...buildTracks(profile, materials.trackLeft, materials.trackRight)
    ],
    turret: [
      makeCylinder(1.18, 1.1, materials.hull, { y: 0.32 }),
      makeCylinder(0.16, 0.26, materials.detail, { x: -0.42, y: 0.86, z: -0.34 })
    ],
    gun: [
      makeCylinder(0.14, 3.86, materials.gun, { z: 1.96, rotateX: Math.PI / 2 }),
      makeCylinder(0.12, 0.46, materials.detail, { z: 3.84, rotateX: Math.PI / 2 }),
      makeBox(0.66, 0.44, 0.48, materials.detail, { z: 0.06 })
    ]
  };
}

function buildTracks(
  profile: TankProfile,
  leftMaterial: MeshStandardMaterial,
  rightMaterial: MeshStandardMaterial,
  inset = 0
): Object3D[] {
  return [
    makeBox(profile.trackWidth, profile.trackHeight, profile.trackDepth, leftMaterial, {
      x: -(profile.hullWidth / 2 + 0.16 - inset),
      y: profile.trackCenterY,
      z: 0
    }),
    makeBox(profile.trackWidth, profile.trackHeight, profile.trackDepth, rightMaterial, {
      x: profile.hullWidth / 2 + 0.16 - inset,
      y: profile.trackCenterY,
      z: 0
    })
  ];
}

function makeBox(
  width: number,
  height: number,
  depth: number,
  material: MeshStandardMaterial,
  transform: Partial<{
    x: number;
    y: number;
    z: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
  }>
): Mesh {
  const mesh = new Mesh(new BoxGeometry(width, height, depth), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  applyTransform(mesh, transform);
  return mesh;
}

function makeCylinder(
  radius: number,
  length: number,
  material: MeshStandardMaterial,
  transform: Partial<{
    x: number;
    y: number;
    z: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
  }>
): Mesh {
  const mesh = new Mesh(
    new CylinderGeometry(radius, radius * 0.92, length, MathUtils.clamp(Math.round(radius * 40), 10, 18)),
    material
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  applyTransform(mesh, transform);
  return mesh;
}

function applyTransform(
  object: Object3D,
  transform: Partial<{
    x: number;
    y: number;
    z: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
  }>
): void {
  object.position.set(transform.x ?? 0, transform.y ?? 0, transform.z ?? 0);
  object.rotation.set(
    transform.rotateX ?? 0,
    transform.rotateY ?? 0,
    transform.rotateZ ?? 0
  );
}

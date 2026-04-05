import { MathUtils, Vector3 } from 'three';

import type { BattlefieldId, StructureType, TerrainType, WeatherId } from './BattlefieldTypes';

export interface StructureDefinition {
  id: string;
  type: StructureType;
  position: Vector3;
  size: Vector3;
  yaw?: number;
  destructible?: boolean;
  collapsible?: boolean;
  penetrationResistance?: number;
  durability?: number;
  enclosure?: number;
}

export interface TerrainZoneDefinition {
  type: TerrainType;
  center: Vector3;
  size: Vector3;
  speedMultiplier: number;
  traction: number;
  braking: number;
  suspension: number;
  roughness: number;
  enclosure?: number;
  interior?: boolean;
}

export interface BattlefieldDefinition {
  id: BattlefieldId;
  label: string;
  description: string;
  playerSpawn: Vector3;
  enemySpawns: Array<{ position: Vector3; yaw: number }>;
  structures: StructureDefinition[];
  terrainZones: TerrainZoneDefinition[];
}

export const WEATHER_PRESETS: Record<WeatherId, {
  label: string;
  fogColor: string;
  fogNear: number;
  fogFar: number;
  ambientColor: string;
  ambientIntensity: number;
  hemiSky: string;
  hemiGround: string;
  hemiIntensity: number;
  sunColor: string;
  sunIntensity: number;
  sunHeight: number;
  sunAzimuth: number;
  wetness: number;
  rainStrength: number;
  mistStrength: number;
  exposure: number;
}> = {
  clear: {
    label: '晴空',
    fogColor: '#7c8e9f',
    fogNear: 90,
    fogFar: 220,
    ambientColor: '#ddd2be',
    ambientIntensity: 1.18,
    hemiSky: '#b7d7f4',
    hemiGround: '#62533c',
    hemiIntensity: 0.84,
    sunColor: '#fff3d7',
    sunIntensity: 2.1,
    sunHeight: 0.78,
    sunAzimuth: 0.16,
    wetness: 0.06,
    rainStrength: 0,
    mistStrength: 0.05,
    exposure: 1.05
  },
  rain: {
    label: '暴雨',
    fogColor: '#627281',
    fogNear: 72,
    fogFar: 168,
    ambientColor: '#aab5bf',
    ambientIntensity: 0.92,
    hemiSky: '#92a9c2',
    hemiGround: '#3f3a32',
    hemiIntensity: 0.68,
    sunColor: '#d7e6ff',
    sunIntensity: 1.3,
    sunHeight: 0.58,
    sunAzimuth: 0.26,
    wetness: 0.88,
    rainStrength: 1,
    mistStrength: 0.3,
    exposure: 0.9
  },
  fog: {
    label: '浓雾',
    fogColor: '#8d9491',
    fogNear: 34,
    fogFar: 110,
    ambientColor: '#d7d7cf',
    ambientIntensity: 1.02,
    hemiSky: '#d8dfdf',
    hemiGround: '#5d5546',
    hemiIntensity: 0.6,
    sunColor: '#f5f1de',
    sunIntensity: 1.1,
    sunHeight: 0.46,
    sunAzimuth: 0.18,
    wetness: 0.34,
    rainStrength: 0,
    mistStrength: 0.92,
    exposure: 0.88
  },
  dusk: {
    label: '黄昏',
    fogColor: '#665e63',
    fogNear: 64,
    fogFar: 170,
    ambientColor: '#8b7680',
    ambientIntensity: 0.74,
    hemiSky: '#d79863',
    hemiGround: '#413830',
    hemiIntensity: 0.54,
    sunColor: '#ffb568',
    sunIntensity: 1.75,
    sunHeight: 0.34,
    sunAzimuth: 0.08,
    wetness: 0.12,
    rainStrength: 0,
    mistStrength: 0.18,
    exposure: 0.96
  }
};

export const BATTLEFIELD_LAYOUTS: BattlefieldDefinition[] = [
  {
    id: 'factory',
    label: '废弃工厂',
    description: '厂房、仓库、烟囱和围墙组成的钢铁战场。',
    playerSpawn: new Vector3(-52, 0, -18),
    enemySpawns: [
      { position: new Vector3(42, 0, -8), yaw: Math.PI * 0.95 },
      { position: new Vector3(32, 0, 22), yaw: Math.PI * 1.05 },
      { position: new Vector3(-8, 0, 38), yaw: Math.PI },
      { position: new Vector3(12, 0, -42), yaw: Math.PI * 0.7 },
      { position: new Vector3(-28, 0, 44), yaw: Math.PI * 1.22 },
      { position: new Vector3(56, 0, 30), yaw: Math.PI * 1.15 }
    ],
    structures: [
      factoryHall('factory-hall-west', -8, 0, 0, 22, 10, 34, 0),
      factoryHall('factory-hall-east', 26, 0, -6, 18, 8, 26, Math.PI * 0.06),
      warehouse('factory-warehouse-north', 18, 0, 32, 18, 7, 16, Math.PI * 0.2),
      wall('factory-wall-south', -2, 0, -34, 34, 4.4, 2.2, 0),
      wall('factory-wall-east', 50, 0, 10, 2.4, 4.2, 30, 0),
      chimney('factory-chimney-a', -20, 0, 18, 4, 20, 4),
      chimney('factory-chimney-b', 42, 0, -22, 4.6, 24, 4.6),
      wreck('factory-wreck-a', -28, 0, -4, 5.4, 2.2, 2.4, Math.PI * 0.4),
      wall('factory-gate-1', -32, 0, 28, 16, 3.2, 1.2, Math.PI * 0.08),
      wall('factory-gate-2', 8, 0, 18, 12, 3, 1.2, Math.PI * 0.5)
    ],
    terrainZones: [
      zone('road', -6, 0, 0, 88, 0.2, 20, 1.12, 1, 1.08, 0.22, 0.08),
      zone('yard', 24, 0, -2, 44, 0.2, 34, 0.95, 0.88, 0.88, 0.44, 0.28),
      zone('rubble', 18, 0, 28, 30, 0.2, 24, 0.82, 0.72, 0.84, 0.82, 0.36),
      zone('grass', -44, 0, 26, 34, 0.2, 42, 0.9, 0.84, 0.84, 0.38, 0)
    ]
  },
  {
    id: 'city',
    label: '城市废墟',
    description: '坍塌街区、街道残骸和燃烧路口。',
    playerSpawn: new Vector3(-48, 0, 12),
    enemySpawns: [
      { position: new Vector3(36, 0, 26), yaw: Math.PI * 1.08 },
      { position: new Vector3(28, 0, -18), yaw: Math.PI * 0.88 },
      { position: new Vector3(-6, 0, -42), yaw: Math.PI * 0.62 },
      { position: new Vector3(6, 0, 44), yaw: Math.PI * 1.25 },
      { position: new Vector3(52, 0, 2), yaw: Math.PI },
      { position: new Vector3(-22, 0, 38), yaw: Math.PI * 1.3 }
    ],
    structures: [
      ruin('city-ruin-a', -10, 0, 24, 18, 8, 14, Math.PI * 0.08),
      ruin('city-ruin-b', 14, 0, -24, 20, 9, 16, Math.PI * 0.12),
      ruin('city-ruin-c', 34, 0, 20, 14, 7, 12, Math.PI * 0.42),
      streetWall('city-wall-a', -28, 0, -6, 20, 4.2, 1.8, Math.PI * 0.5),
      streetWall('city-wall-b', 4, 0, 10, 24, 4, 1.8, 0),
      streetWall('city-wall-c', 30, 0, 44, 18, 3.8, 1.4, 0),
      wreck('city-wreck-bus', 6, 0, -2, 6.8, 2.6, 2.5, Math.PI * 0.52),
      wreck('city-car-hulk', 24, 0, 6, 4.2, 1.8, 2.2, Math.PI * 0.28),
      wall('city-barricade-a', -16, 0, -28, 12, 2.8, 2.2, Math.PI * 0.14),
      wall('city-barricade-b', 42, 0, -8, 10, 2.8, 2, Math.PI * 0.62)
    ],
    terrainZones: [
      zone('road', 0, 0, 0, 108, 0.2, 18, 1.15, 0.94, 1.12, 0.18, 0.05),
      zone('road', 14, 0, 0, 18, 0.2, 104, 1.15, 0.96, 1.08, 0.18, 0.05),
      zone('rubble', -8, 0, 24, 44, 0.2, 34, 0.76, 0.66, 0.82, 0.92, 0.18),
      zone('rubble', 24, 0, -18, 36, 0.2, 32, 0.8, 0.68, 0.86, 0.86, 0.2)
    ]
  },
  {
    id: 'countryside',
    label: '乡村战场',
    description: '农舍、谷仓、树林和篱笆线交错的机动区域。',
    playerSpawn: new Vector3(-54, 0, -20),
    enemySpawns: [
      { position: new Vector3(38, 0, -18), yaw: Math.PI * 0.98 },
      { position: new Vector3(18, 0, 34), yaw: Math.PI * 1.1 },
      { position: new Vector3(-4, 0, 46), yaw: Math.PI * 1.22 },
      { position: new Vector3(36, 0, 18), yaw: Math.PI * 0.9 },
      { position: new Vector3(52, 0, 4), yaw: Math.PI * 1.02 },
      { position: new Vector3(-24, 0, 28), yaw: Math.PI * 1.28 }
    ],
    structures: [
      farmhouse('country-house', -6, 0, 2, 14, 6.4, 10, Math.PI * 0.08),
      barn('country-barn', 18, 0, -8, 16, 7.2, 12, Math.PI * 0.14),
      fence('country-fence-a', -24, 0, 14, 18, 1.5, 1, Math.PI * 0.1),
      fence('country-fence-b', 4, 0, 24, 24, 1.5, 1, Math.PI * 0.5),
      fence('country-fence-c', 32, 0, 10, 18, 1.5, 1, Math.PI * 0.26),
      shed('country-shed', 34, 0, -26, 7.5, 3.2, 6, Math.PI * 0.2),
      wreck('country-wreck-a', -16, 0, -18, 4.6, 1.8, 2.2, Math.PI * 0.36),
      wall('country-stone-wall', 24, 0, 30, 20, 2.3, 1.6, Math.PI * 0.06)
    ],
    terrainZones: [
      zone('road', -12, 0, -10, 108, 0.2, 14, 1.12, 0.95, 1.06, 0.2, 0),
      zone('mud', 18, 0, 16, 34, 0.2, 30, 0.72, 0.58, 0.64, 0.92, 0),
      zone('grass', 10, 0, -24, 52, 0.2, 32, 0.88, 0.8, 0.8, 0.46, 0),
      zone('yard', -6, 0, 2, 24, 0.2, 18, 0.92, 0.84, 0.88, 0.4, 0.24)
    ]
  }
];

export function pickBattlefield(seed: number): BattlefieldDefinition {
  return BATTLEFIELD_LAYOUTS[seed % BATTLEFIELD_LAYOUTS.length];
}

export function getBattlefieldById(id: BattlefieldId): BattlefieldDefinition {
  const battlefield = BATTLEFIELD_LAYOUTS.find((entry) => entry.id === id);

  if (!battlefield) {
    throw new Error(`Unknown battlefield: ${id}`);
  }

  return battlefield;
}

export function pickWeather(seed: number, preferred: BattlefieldId): WeatherId {
  const weatherOptions: Record<BattlefieldId, WeatherId[]> = {
    factory: ['clear', 'rain', 'fog'],
    city: ['fog', 'dusk', 'rain'],
    countryside: ['clear', 'dusk', 'rain']
  };

  const options = weatherOptions[preferred];
  return options[seed % options.length];
}

export function getWeatherPreset(id: WeatherId): (typeof WEATHER_PRESETS)[WeatherId] {
  const preset = WEATHER_PRESETS[id];

  if (!preset) {
    throw new Error(`Unknown weather: ${id}`);
  }

  return preset;
}

function zone(
  type: TerrainType,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  speedMultiplier: number,
  traction: number,
  braking: number,
  roughness: number,
  enclosure = 0,
  interior = false
): TerrainZoneDefinition {
  return {
    type,
    center: new Vector3(x, y, z),
    size: new Vector3(width, height, depth),
    speedMultiplier,
    traction,
    braking,
    suspension: MathUtils.lerp(0.45, 1.25, roughness),
    roughness,
    enclosure,
    interior
  };
}

function baseStructure(
  id: string,
  type: StructureType,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0,
  destructible = true,
  collapsible = false,
  penetrationResistance = 90,
  durability = 110,
  enclosure = 0
): StructureDefinition {
  return {
    id,
    type,
    position: new Vector3(x, y, z),
    size: new Vector3(width, height, depth),
    yaw,
    destructible,
    collapsible,
    penetrationResistance,
    durability,
    enclosure
  };
}

function factoryHall(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'factory-wall', x, y, z, width, height, depth, yaw, true, true, 86, 140, 0.38);
}

function warehouse(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'warehouse', x, y, z, width, height, depth, yaw, true, true, 96, 150, 0.42);
}

function chimney(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number
): StructureDefinition {
  return baseStructure(id, 'chimney', x, y, z, width, height, depth, 0, true, true, 132, 180, 0);
}

function ruin(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'ruin-block', x, y, z, width, height, depth, yaw, true, true, 82, 110, 0.24);
}

function streetWall(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'street-wall', x, y, z, width, height, depth, yaw, true, false, 76, 86, 0.18);
}

function farmhouse(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'farmhouse', x, y, z, width, height, depth, yaw, true, true, 78, 90, 0.45);
}

function barn(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'barn', x, y, z, width, height, depth, yaw, true, true, 72, 96, 0.35);
}

function fence(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'fence', x, y, z, width, height, depth, yaw, true, false, 36, 42, 0);
}

function wall(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'street-wall', x, y, z, width, height, depth, yaw, true, false, 70, 80, 0.08);
}

function wreck(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'wreck', x, y, z, width, height, depth, yaw, true, false, 40, 52, 0);
}

function shed(
  id: string,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  depth: number,
  yaw = 0
): StructureDefinition {
  return baseStructure(id, 'shed', x, y, z, width, height, depth, yaw, true, true, 58, 60, 0.18);
}

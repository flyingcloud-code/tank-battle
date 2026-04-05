import { Vector3 } from 'three';

export type BattlefieldId = 'factory' | 'city' | 'countryside';
export type WeatherId = 'clear' | 'rain' | 'fog' | 'dusk';
export type TerrainType = 'road' | 'grass' | 'mud' | 'rubble' | 'yard';
export type StructureType =
  | 'factory-wall'
  | 'warehouse'
  | 'chimney'
  | 'ruin-block'
  | 'street-wall'
  | 'farmhouse'
  | 'barn'
  | 'fence'
  | 'wreck'
  | 'shed';

export interface TerrainSample {
  type: TerrainType;
  groundHeight: number;
  slopePitch: number;
  slopeRoll: number;
  speedMultiplier: number;
  traction: number;
  braking: number;
  suspension: number;
  roughness: number;
  enclosure: number;
  interior: boolean;
  wetness: number;
}

export interface AmbientAudioState {
  enclosure: number;
  interior: boolean;
  weather: WeatherId;
  wetness: number;
}

export interface StructureImpactResult {
  handled: boolean;
  penetrated: boolean;
  destroyed: boolean;
  damageApplied: number;
  coverLoss: number;
  message: string | null;
}

export interface WeatherState {
  id: WeatherId;
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
}

export interface BattlefieldState {
  id: BattlefieldId;
  label: string;
  description: string;
  worldExtents: number;
  playerSpawn: Vector3;
  enemySpawns: Array<{ position: Vector3; yaw: number }>;
  structures: Array<{
    type: StructureType;
    position: Vector3;
    size: Vector3;
    yaw: number;
  }>;
  terrainZones: Array<{
    type: TerrainType;
    center: Vector3;
    size: Vector3;
  }>;
}

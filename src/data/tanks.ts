export type TankNation = 'GER' | 'USA' | 'USSR' | 'UK';
export type TankClass = 'MEDIUM' | 'HEAVY' | 'TD';

export interface AmmoDefinition {
  caliber: string;
  speed: number;
  mass: number;
  penetration: number;
  damage: number;
  gravityScale: number;
  trailColor: string;
}

export interface TankDefinition {
  id: string;
  name: string;
  nation: TankNation;
  class: TankClass;
  firepower: number;
  armor: number;
  mobility: number;
  gunCaliber: string;
  gunPenetration: number;
  frontalArmor: number;
  turretArmor: number;
  hp: number;
  mass: number;
  reloadSeconds: number;
  scoreValue: number;
}

export const NATION_LABELS: Record<TankNation, string> = {
  GER: '德国',
  USA: '美国',
  USSR: '苏联',
  UK: '英国'
};

export const CLASS_LABELS: Record<TankClass, string> = {
  MEDIUM: '中型',
  HEAVY: '重型',
  TD: '坦歼'
};

export const TANK_NATIONS: TankNation[] = ['GER', 'USA', 'USSR', 'UK'];

export const AMMO_BY_CALIBER: Record<string, AmmoDefinition> = {
  '75mm炮': {
    caliber: '75mm炮',
    speed: 82,
    mass: 6.8,
    penetration: 110,
    damage: 38,
    gravityScale: 1,
    trailColor: '#ffd08a'
  },
  '75mm长管炮': {
    caliber: '75mm长管炮',
    speed: 96,
    mass: 6.6,
    penetration: 150,
    damage: 44,
    gravityScale: 0.95,
    trailColor: '#ffe0a6'
  },
  '76mm炮': {
    caliber: '76mm炮',
    speed: 88,
    mass: 7.3,
    penetration: 124,
    damage: 40,
    gravityScale: 1,
    trailColor: '#ffe7b3'
  },
  '85mm炮': {
    caliber: '85mm炮',
    speed: 84,
    mass: 9.2,
    penetration: 142,
    damage: 48,
    gravityScale: 1.04,
    trailColor: '#ffd36b'
  },
  '88mm炮': {
    caliber: '88mm炮',
    speed: 92,
    mass: 10.2,
    penetration: 165,
    damage: 56,
    gravityScale: 1.02,
    trailColor: '#ffd974'
  },
  '88mm长管炮': {
    caliber: '88mm长管炮',
    speed: 104,
    mass: 10.4,
    penetration: 198,
    damage: 60,
    gravityScale: 0.98,
    trailColor: '#fff0c7'
  },
  '90mm炮': {
    caliber: '90mm炮',
    speed: 94,
    mass: 10.9,
    penetration: 176,
    damage: 58,
    gravityScale: 1,
    trailColor: '#ffe79a'
  },
  '122mm炮': {
    caliber: '122mm炮',
    speed: 74,
    mass: 25,
    penetration: 190,
    damage: 72,
    gravityScale: 1.12,
    trailColor: '#ffbf66'
  },
  '17磅炮(76mm)': {
    caliber: '17磅炮(76mm)',
    speed: 102,
    mass: 7.7,
    penetration: 171,
    damage: 54,
    gravityScale: 0.96,
    trailColor: '#fff1b5'
  }
};

export const TANKS: TankDefinition[] = [
  {
    id: 'panzer-iv',
    name: 'Panzer IV',
    nation: 'GER',
    class: 'MEDIUM',
    firepower: 3,
    armor: 3,
    mobility: 4,
    gunCaliber: '75mm炮',
    gunPenetration: 110,
    frontalArmor: 80,
    turretArmor: 50,
    hp: 122,
    mass: 25,
    reloadSeconds: 2.5,
    scoreValue: 100
  },
  {
    id: 'panther',
    name: 'Panther',
    nation: 'GER',
    class: 'MEDIUM',
    firepower: 4,
    armor: 4,
    mobility: 4,
    gunCaliber: '75mm长管炮',
    gunPenetration: 150,
    frontalArmor: 110,
    turretArmor: 100,
    hp: 138,
    mass: 45,
    reloadSeconds: 2.8,
    scoreValue: 150
  },
  {
    id: 'tiger-i',
    name: 'Tiger I',
    nation: 'GER',
    class: 'HEAVY',
    firepower: 5,
    armor: 5,
    mobility: 2,
    gunCaliber: '88mm炮',
    gunPenetration: 165,
    frontalArmor: 120,
    turretArmor: 110,
    hp: 170,
    mass: 57,
    reloadSeconds: 3.2,
    scoreValue: 220
  },
  {
    id: 'tiger-ii',
    name: 'Tiger II',
    nation: 'GER',
    class: 'HEAVY',
    firepower: 5,
    armor: 5,
    mobility: 2,
    gunCaliber: '88mm长管炮',
    gunPenetration: 198,
    frontalArmor: 150,
    turretArmor: 180,
    hp: 182,
    mass: 69,
    reloadSeconds: 3.5,
    scoreValue: 260
  },
  {
    id: 'm4-sherman',
    name: 'M4 Sherman',
    nation: 'USA',
    class: 'MEDIUM',
    firepower: 3,
    armor: 3,
    mobility: 4,
    gunCaliber: '75mm炮',
    gunPenetration: 110,
    frontalArmor: 75,
    turretArmor: 76,
    hp: 126,
    mass: 30,
    reloadSeconds: 2.4,
    scoreValue: 100
  },
  {
    id: 'm26-pershing',
    name: 'M26 Pershing',
    nation: 'USA',
    class: 'HEAVY',
    firepower: 4,
    armor: 4,
    mobility: 3,
    gunCaliber: '90mm炮',
    gunPenetration: 176,
    frontalArmor: 102,
    turretArmor: 102,
    hp: 156,
    mass: 41,
    reloadSeconds: 3.1,
    scoreValue: 180
  },
  {
    id: 'm36-jackson',
    name: 'M36 Jackson',
    nation: 'USA',
    class: 'TD',
    firepower: 5,
    armor: 3,
    mobility: 3,
    gunCaliber: '90mm炮',
    gunPenetration: 176,
    frontalArmor: 75,
    turretArmor: 32,
    hp: 118,
    mass: 30,
    reloadSeconds: 2.9,
    scoreValue: 170
  },
  {
    id: 't34-76',
    name: 'T-34/76',
    nation: 'USSR',
    class: 'MEDIUM',
    firepower: 3,
    armor: 4,
    mobility: 4,
    gunCaliber: '76mm炮',
    gunPenetration: 124,
    frontalArmor: 90,
    turretArmor: 70,
    hp: 128,
    mass: 26,
    reloadSeconds: 2.4,
    scoreValue: 110
  },
  {
    id: 't34-85',
    name: 'T-34/85',
    nation: 'USSR',
    class: 'MEDIUM',
    firepower: 4,
    armor: 4,
    mobility: 4,
    gunCaliber: '85mm炮',
    gunPenetration: 142,
    frontalArmor: 90,
    turretArmor: 90,
    hp: 138,
    mass: 32,
    reloadSeconds: 2.7,
    scoreValue: 145
  },
  {
    id: 'kv-1',
    name: 'KV-1',
    nation: 'USSR',
    class: 'HEAVY',
    firepower: 4,
    armor: 5,
    mobility: 2,
    gunCaliber: '76mm炮',
    gunPenetration: 124,
    frontalArmor: 115,
    turretArmor: 95,
    hp: 168,
    mass: 47,
    reloadSeconds: 3,
    scoreValue: 190
  },
  {
    id: 'is-2',
    name: 'IS-2',
    nation: 'USSR',
    class: 'HEAVY',
    firepower: 5,
    armor: 5,
    mobility: 3,
    gunCaliber: '122mm炮',
    gunPenetration: 190,
    frontalArmor: 120,
    turretArmor: 100,
    hp: 176,
    mass: 46,
    reloadSeconds: 3.9,
    scoreValue: 240
  },
  {
    id: 'cromwell',
    name: 'Cromwell',
    nation: 'UK',
    class: 'MEDIUM',
    firepower: 3,
    armor: 3,
    mobility: 5,
    gunCaliber: '75mm炮',
    gunPenetration: 110,
    frontalArmor: 76,
    turretArmor: 76,
    hp: 120,
    mass: 28,
    reloadSeconds: 2.2,
    scoreValue: 105
  },
  {
    id: 'churchill',
    name: 'Churchill',
    nation: 'UK',
    class: 'HEAVY',
    firepower: 3,
    armor: 4,
    mobility: 2,
    gunCaliber: '75mm炮',
    gunPenetration: 110,
    frontalArmor: 102,
    turretArmor: 89,
    hp: 166,
    mass: 40,
    reloadSeconds: 3,
    scoreValue: 165
  },
  {
    id: 'firefly',
    name: 'Firefly',
    nation: 'UK',
    class: 'MEDIUM',
    firepower: 5,
    armor: 3,
    mobility: 3,
    gunCaliber: '17磅炮(76mm)',
    gunPenetration: 171,
    frontalArmor: 76,
    turretArmor: 89,
    hp: 134,
    mass: 33,
    reloadSeconds: 2.9,
    scoreValue: 175
  }
];

export const TANKS_BY_ID = new Map(TANKS.map((tank) => [tank.id, tank]));

export function getTanksByNation(nation: TankNation): TankDefinition[] {
  return TANKS.filter((tank) => tank.nation === nation);
}

export function getAmmoDefinition(caliber: string): AmmoDefinition {
  const ammo = AMMO_BY_CALIBER[caliber];

  if (!ammo) {
    throw new Error(`Unknown ammo caliber: ${caliber}`);
  }

  return ammo;
}

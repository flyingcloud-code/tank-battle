import type { BattlefieldId, WeatherId } from './systems/BattlefieldTypes';

export type GameModeId = 'classic' | 'survival' | 'annihilation';
export type DifficultyId = 'easy' | 'normal' | 'hard';
export type NameplateDisplayMode = 'always' | 'aim' | 'hover';

export interface NameplateConfig {
  showHealthBar: boolean;
  showTankModel: boolean;
  showHpValue: boolean;
  displayMode: NameplateDisplayMode;
}

export interface DifficultyPreset {
  id: DifficultyId;
  label: string;
  description: string;
  accent: string;
  enemyCount: number;
  enemyHpMultiplier: number;
  enemyDamageMultiplier: number;
  enemyAccuracy: number;
  enemyFireRate: number;
  enemyAggressionRange: number;
  enemyFireRange: number;
  playerDamageReduction: number;
}

export type ReloadSpeedId = 'slow' | 'normal' | 'fast' | 'veryfast' | 'x2' | 'x3';

export interface ReloadSpeedPreset {
  id: ReloadSpeedId;
  label: string;
  description: string;
  multiplier: number;
}

export const RELOAD_SPEED_PRESETS: Record<ReloadSpeedId, ReloadSpeedPreset> = {
  slow: { id: 'slow', label: '慢速', description: '真实装填节奏', multiplier: 1.3 },
  normal: { id: 'normal', label: '标准', description: '默认装填速度', multiplier: 1.0 },
  fast: { id: 'fast', label: '快速', description: '装填加速 40%', multiplier: 0.6 },
  veryfast: { id: 'veryfast', label: '极速', description: '装填加速 65%', multiplier: 0.35 },
  x2: { id: 'x2', label: '2 倍速', description: '装填速度翻倍', multiplier: 0.5 },
  x3: { id: 'x3', label: '3 倍速', description: '装填速度三倍', multiplier: 0.33 }
};

export interface GameSessionConfig {
  playerTankId: string;
  battlefieldId: BattlefieldId;
  weatherId: WeatherId;
  modeId: GameModeId;
  difficultyId: DifficultyId;
  reloadSpeedId: ReloadSpeedId;
  nameplateConfig: NameplateConfig;
}

export interface GameModePreset {
  id: GameModeId;
  label: string;
  description: string;
  objective: string;
  accent: string;
  timeLimit?: number;
  killTarget?: number;
}

export const DEFAULT_NAMEPLATE_CONFIG: NameplateConfig = {
  showHealthBar: true,
  showTankModel: false,
  showHpValue: false,
  displayMode: 'always'
};

export const DIFFICULTY_PRESETS: Record<DifficultyId, DifficultyPreset> = {
  easy: {
    id: 'easy',
    label: '简单',
    description: '敌方较弱，适合新手',
    accent: 'linear-gradient(135deg, rgba(74, 222, 128, 0.28), rgba(22, 101, 52, 0.12))',
    enemyCount: 3,
    enemyHpMultiplier: 0.5,
    enemyDamageMultiplier: 0.35,
    enemyAccuracy: 2.5,
    enemyFireRate: 2.4,
    enemyAggressionRange: 45,
    enemyFireRange: 35,
    playerDamageReduction: 0.45
  },
  normal: {
    id: 'normal',
    label: '中级',
    description: '标准难度，考验战术',
    accent: 'linear-gradient(135deg, rgba(250, 204, 21, 0.28), rgba(161, 98, 7, 0.12))',
    enemyCount: 5,
    enemyHpMultiplier: 1.0,
    enemyDamageMultiplier: 1.0,
    enemyAccuracy: 1.0,
    enemyFireRate: 1.0,
    enemyAggressionRange: 86,
    enemyFireRange: 72,
    playerDamageReduction: 0
  },
  hard: {
    id: 'hard',
    label: '高级',
    description: '精锐敌军，死亡一触即发',
    accent: 'linear-gradient(135deg, rgba(248, 113, 113, 0.28), rgba(153, 27, 27, 0.12))',
    enemyCount: 8,
    enemyHpMultiplier: 1.4,
    enemyDamageMultiplier: 1.5,
    enemyAccuracy: 0.55,
    enemyFireRate: 0.6,
    enemyAggressionRange: 100,
    enemyFireRange: 92,
    playerDamageReduction: 0
  }
};

export const DEFAULT_SESSION_CONFIG: GameSessionConfig = {
  playerTankId: 'panther',
  battlefieldId: 'factory',
  weatherId: 'clear',
  modeId: 'classic',
  difficultyId: 'normal',
  reloadSpeedId: 'normal',
  nameplateConfig: { ...DEFAULT_NAMEPLATE_CONFIG }
};

export const GAME_MODE_PRESETS: Record<GameModeId, GameModePreset> = {
  classic: {
    id: 'classic',
    label: '经典模式',
    description: '保护中央基地，歼灭所有进攻坦克。',
    objective: '基地守住且敌军清零即获胜。',
    accent:
      'linear-gradient(135deg, rgba(250, 204, 21, 0.28), rgba(180, 83, 9, 0.12))'
  },
  survival: {
    id: 'survival',
    label: '生存模式',
    description: '无限波敌人持续进攻，坚持越久得分越高。',
    objective: '波数不断提高，目标是刷新生存记录。',
    accent:
      'linear-gradient(135deg, rgba(248, 113, 113, 0.28), rgba(127, 29, 29, 0.12))'
  },
  annihilation: {
    id: 'annihilation',
    label: '歼灭模式',
    description: '在倒计时内击毁固定数量目标。',
    objective: '180 秒内击毁 12 辆敌军载具。',
    accent:
      'linear-gradient(135deg, rgba(96, 165, 250, 0.26), rgba(30, 64, 175, 0.12))',
    timeLimit: 180,
    killTarget: 12
  }
};

export const BATTLEFIELD_UI_PRESETS: Record<
  BattlefieldId,
  {
    preview: string;
    highlights: string[];
  }
> = {
  factory: {
    preview:
      'linear-gradient(160deg, rgba(75, 85, 99, 0.92), rgba(31, 41, 55, 0.96)), radial-gradient(circle at 78% 22%, rgba(251, 191, 36, 0.28), transparent 24%)',
    highlights: ['高密度掩体', '适合巷战', '建筑可破坏']
  },
  city: {
    preview:
      'linear-gradient(160deg, rgba(88, 28, 36, 0.9), rgba(30, 41, 59, 0.96)), radial-gradient(circle at 25% 18%, rgba(248, 113, 113, 0.24), transparent 24%)',
    highlights: ['街道火线长', '废墟遮挡多', '适合伏击']
  },
  countryside: {
    preview:
      'linear-gradient(160deg, rgba(39, 74, 52, 0.92), rgba(24, 34, 30, 0.96)), radial-gradient(circle at 70% 26%, rgba(190, 242, 100, 0.22), transparent 24%)',
    highlights: ['机动空间大', '地形起伏', '适合侧袭']
  }
};

export const WEATHER_UI_PRESETS: Record<
  WeatherId,
  {
    preview: string;
    summary: string;
  }
> = {
  clear: {
    preview:
      'linear-gradient(180deg, rgba(125, 163, 205, 0.94), rgba(77, 102, 118, 0.9) 58%, rgba(59, 74, 58, 0.95))',
    summary: '能见度最佳，远距离交火更稳定。'
  },
  rain: {
    preview:
      'linear-gradient(180deg, rgba(82, 101, 119, 0.94), rgba(57, 68, 79, 0.92) 54%, rgba(44, 49, 55, 0.96))',
    summary: '地面湿滑、雾化增强，移动射击更难。'
  },
  fog: {
    preview:
      'linear-gradient(180deg, rgba(159, 166, 164, 0.94), rgba(114, 121, 119, 0.92) 52%, rgba(76, 83, 80, 0.96))',
    summary: '视距显著缩短，近距离遭遇战更频繁。'
  },
  dusk: {
    preview:
      'linear-gradient(180deg, rgba(207, 125, 72, 0.94), rgba(110, 78, 85, 0.92) 54%, rgba(49, 56, 63, 0.96))',
    summary: '逆光与暖色雾层并存，轮廓识别更吃经验。'
  }
};

import './style.css';

import {
  CLASS_LABELS,
  NATION_LABELS,
  TANKS_BY_ID,
  TANK_NATIONS,
  type TankDefinition,
  type TankNation,
  getTanksByNation
} from './data/tanks';
import { Game, type GameMenuReturnPayload } from './game/Game';
import {
  BATTLEFIELD_UI_PRESETS,
  DEFAULT_SESSION_CONFIG,
  DEFAULT_NAMEPLATE_CONFIG,
  DIFFICULTY_PRESETS,
  GAME_MODE_PRESETS,
  RELOAD_SPEED_PRESETS,
  WEATHER_UI_PRESETS,
  type DifficultyId,
  type GameSessionConfig,
  type NameplateDisplayMode,
  type ReloadSpeedId
} from './game/GamePresets';
import { AudioSystem } from './game/systems/AudioSystem';
import {
  BATTLEFIELD_LAYOUTS,
  WEATHER_PRESETS
} from './game/systems/BattlefieldLayouts';
import type { BattlefieldId, WeatherId } from './game/systems/BattlefieldTypes';

interface StoredProgressSummary {
  timestamp: string;
  tankName: string;
  battlefieldLabel: string;
  weatherLabel: string;
  modeLabel: string;
  statusLabel: string;
  score: number;
  kills: number;
  detail: string;
}

const STORAGE_KEYS = {
  selection: 'tank-battle-phase5.selection',
  progress: 'tank-battle-phase5.progress'
} as const;

const canvas = document.querySelector<HTMLCanvasElement>('#game-canvas');
const selectionScreen = document.querySelector<HTMLElement>('#selection-screen');
const nationTabs = document.querySelector<HTMLElement>('#nation-tabs');
const tankGrid = document.querySelector<HTMLElement>('#tank-grid');
const battlefieldGrid = document.querySelector<HTMLElement>('#battlefield-grid');
const weatherGrid = document.querySelector<HTMLElement>('#weather-grid');
const modeGrid = document.querySelector<HTMLElement>('#mode-grid');
const difficultyGrid = document.querySelector<HTMLElement>('#difficulty-grid');
const reloadSpeedGrid = document.querySelector<HTMLElement>('#reload-speed-grid');
const nameplatePanel = document.querySelector<HTMLElement>('#nameplate-settings');
const selectionHint = document.querySelector<HTMLElement>('#selection-hint');
const selectionSummary = document.querySelector<HTMLElement>('#selection-summary');
const selectionBriefing = document.querySelector<HTMLElement>('#selection-briefing');
const lastProgress = document.querySelector<HTMLElement>('#last-progress');
const launchButton = document.querySelector<HTMLButtonElement>('#launch-button');

if (!canvas) {
  throw new Error('Canvas element #game-canvas was not found.');
}

const gameCanvas = canvas;
const audioSystem = new AudioSystem();
let game: Game | null = null;
let activeNation: TankNation = 'GER';
let selectedConfig = loadStoredSelection();
let lastStoredProgress = loadStoredProgress();

function buildBarRow(label: string, value: number): string {
  return `
    <div class="tank-card__stat">
      <span>${label}</span>
      <div class="tank-card__bar">
        <i style="width:${value * 20}%"></i>
      </div>
      <strong>${value}/5</strong>
    </div>
  `;
}

function buildSpecs(tank: TankDefinition): string {
  return `
    <span>${CLASS_LABELS[tank.class]}</span>
    <span>${tank.gunCaliber}</span>
    <span>穿深 ${tank.gunPenetration}</span>
    <span>装填 ${tank.reloadSeconds.toFixed(1)}s</span>
    <span>HP ${tank.hp}</span>
    <span>${NATION_LABELS[tank.nation]}</span>
  `;
}

function playUiClick(): void {
  audioSystem.resume();
  audioSystem.playUiClick();
}

function isDifficultyId(value: unknown): value is DifficultyId {
  return typeof value === 'string' && value in DIFFICULTY_PRESETS;
}

function isReloadSpeedId(value: unknown): value is ReloadSpeedId {
  return typeof value === 'string' && value in RELOAD_SPEED_PRESETS;
}

function loadStoredSelection(): GameSessionConfig {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.selection);

    if (!raw) {
      return { ...DEFAULT_SESSION_CONFIG, nameplateConfig: { ...DEFAULT_NAMEPLATE_CONFIG } };
    }

    const parsed = JSON.parse(raw) as Partial<GameSessionConfig>;
    const storedNp = parsed.nameplateConfig;

    return {
      playerTankId:
        parsed.playerTankId && TANKS_BY_ID.has(parsed.playerTankId)
          ? parsed.playerTankId
          : DEFAULT_SESSION_CONFIG.playerTankId,
      battlefieldId: isBattlefieldId(parsed.battlefieldId)
        ? parsed.battlefieldId
        : DEFAULT_SESSION_CONFIG.battlefieldId,
      weatherId: isWeatherId(parsed.weatherId)
        ? parsed.weatherId
        : DEFAULT_SESSION_CONFIG.weatherId,
      modeId:
        parsed.modeId && parsed.modeId in GAME_MODE_PRESETS
          ? parsed.modeId
          : DEFAULT_SESSION_CONFIG.modeId,
      difficultyId: isDifficultyId(parsed.difficultyId)
        ? parsed.difficultyId
        : DEFAULT_SESSION_CONFIG.difficultyId,
      reloadSpeedId: isReloadSpeedId((parsed as Record<string, unknown>).reloadSpeedId)
        ? (parsed as Record<string, unknown>).reloadSpeedId as ReloadSpeedId
        : DEFAULT_SESSION_CONFIG.reloadSpeedId,
      nameplateConfig: storedNp
        ? {
            showHealthBar: storedNp.showHealthBar ?? DEFAULT_NAMEPLATE_CONFIG.showHealthBar,
            showTankModel: storedNp.showTankModel ?? DEFAULT_NAMEPLATE_CONFIG.showTankModel,
            showHpValue: storedNp.showHpValue ?? DEFAULT_NAMEPLATE_CONFIG.showHpValue,
            displayMode: storedNp.displayMode ?? DEFAULT_NAMEPLATE_CONFIG.displayMode
          }
        : { ...DEFAULT_NAMEPLATE_CONFIG }
    };
  } catch {
    return { ...DEFAULT_SESSION_CONFIG, nameplateConfig: { ...DEFAULT_NAMEPLATE_CONFIG } };
  }
}

function persistSelection(): void {
  window.localStorage.setItem(STORAGE_KEYS.selection, JSON.stringify(selectedConfig));
}

function loadStoredProgress(): StoredProgressSummary | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.progress);
    return raw ? (JSON.parse(raw) as StoredProgressSummary) : null;
  } catch {
    return null;
  }
}

function persistProgress(payload: GameMenuReturnPayload): void {
  const battlefield = BATTLEFIELD_LAYOUTS.find(
    (entry) => entry.id === payload.session.battlefieldId
  );
  const weather = WEATHER_PRESETS[payload.session.weatherId];
  const tank = TANKS_BY_ID.get(payload.session.playerTankId);
  const mode = GAME_MODE_PRESETS[payload.session.modeId];

  if (!battlefield || !weather || !tank || !mode) {
    return;
  }

  const summary: StoredProgressSummary = {
    timestamp: new Date().toISOString(),
    tankName: tank.name,
    battlefieldLabel: battlefield.label,
    weatherLabel: weather.label,
    modeLabel: mode.label,
    statusLabel: payload.summary.resultLabel,
    score: payload.summary.score,
    kills: payload.summary.kills,
    detail: payload.summary.detail
  };

  window.localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(summary));
  lastStoredProgress = summary;
}

function showSelectionScreen(): void {
  selectionScreen?.classList.remove('is-hidden');
}

function hideSelectionScreen(): void {
  selectionScreen?.classList.add('is-hidden');
}

function startGame(sessionConfig = selectedConfig): void {
  playUiClick();
  selectedConfig = { ...sessionConfig };
  persistSelection();
  game?.destroy();
  game = new Game(gameCanvas, {
    ...selectedConfig,
    audioSystem,
    onRestart: (config) => startGame(config),
    onReturnToMenu: (payload) => {
      persistProgress(payload);
      game?.destroy();
      game = null;
      selectedConfig = { ...payload.session };
      activeNation = TANKS_BY_ID.get(selectedConfig.playerTankId)?.nation ?? activeNation;
      persistSelection();
      renderSelection();
      showSelectionScreen();
    }
  });
  game.start();
  hideSelectionScreen();
}

function selectTank(tankId: string): void {
  const tank = TANKS_BY_ID.get(tankId);

  if (!tank) {
    return;
  }

  selectedConfig.playerTankId = tankId;
  activeNation = tank.nation;
  persistSelection();
  renderSelection();
}

function renderNationTabs(): void {
  if (!nationTabs) {
    return;
  }

  nationTabs.innerHTML = '';

  TANK_NATIONS.forEach((nation) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `nation-tab${nation === activeNation ? ' is-active' : ''}`;
    button.innerHTML = `
      <span class="nation-tab__label">${NATION_LABELS[nation]}</span>
      <span class="nation-tab__count">${getTanksByNation(nation).length} 辆</span>
    `;
    button.addEventListener('click', () => {
      activeNation = nation;
      const visibleTanks = getTanksByNation(activeNation);

      if (!visibleTanks.some((tank) => tank.id === selectedConfig.playerTankId)) {
        selectedConfig.playerTankId = visibleTanks[0]?.id ?? selectedConfig.playerTankId;
      }

      playUiClick();
      renderSelection();
    });
    nationTabs.appendChild(button);
  });
}

function renderSelectionSummary(tanks: TankDefinition[]): void {
  if (!selectionSummary) {
    return;
  }

  const selectedTank = TANKS_BY_ID.get(selectedConfig.playerTankId) ?? tanks[0];
  const battlefield = BATTLEFIELD_LAYOUTS.find(
    (entry) => entry.id === selectedConfig.battlefieldId
  );
  const weather = WEATHER_PRESETS[selectedConfig.weatherId];
  const mode = GAME_MODE_PRESETS[selectedConfig.modeId];

  const totals = tanks.reduce(
    (accumulator, tank) => ({
      firepower: accumulator.firepower + tank.firepower,
      armor: accumulator.armor + tank.armor,
      mobility: accumulator.mobility + tank.mobility
    }),
    { firepower: 0, armor: 0, mobility: 0 }
  );

  const count = Math.max(1, tanks.length);

  selectionSummary.innerHTML = `
    <div class="selection-summary__nation">${NATION_LABELS[activeNation]}</div>
    <div class="selection-summary__headline">${selectedTank?.name ?? '未选择坦克'}</div>
    <div class="selection-summary__meta">${battlefield?.label ?? ''} · ${weather?.label ?? ''} · ${mode.label}</div>
    <div class="selection-summary__stats">
      <div><span>平均火力</span><strong>${(totals.firepower / count).toFixed(1)}</strong></div>
      <div><span>平均装甲</span><strong>${(totals.armor / count).toFixed(1)}</strong></div>
      <div><span>平均机动</span><strong>${(totals.mobility / count).toFixed(1)}</strong></div>
    </div>
  `;
}

function renderBriefing(): void {
  if (!selectionBriefing) {
    return;
  }

  const battlefield = BATTLEFIELD_LAYOUTS.find(
    (entry) => entry.id === selectedConfig.battlefieldId
  );
  const battlefieldUi = BATTLEFIELD_UI_PRESETS[selectedConfig.battlefieldId];
  const weather = WEATHER_PRESETS[selectedConfig.weatherId];
  const weatherUi = WEATHER_UI_PRESETS[selectedConfig.weatherId];
  const mode = GAME_MODE_PRESETS[selectedConfig.modeId];

  selectionBriefing.innerHTML = `
    <div class="selection-summary__nation">Mission Briefing</div>
    <div class="selection-summary__headline">${mode.label}</div>
    <div class="selection-briefing__text">${mode.description}</div>
    <div class="selection-briefing__cards">
      <div class="selection-briefing__card">
        <span>战场</span>
        <strong>${battlefield?.label ?? ''}</strong>
        <div class="selection-briefing__text">${battlefield?.description ?? ''}</div>
      </div>
      <div class="selection-briefing__card">
        <span>天气</span>
        <strong>${weather.label}</strong>
        <div class="selection-briefing__text">${weatherUi.summary}</div>
      </div>
      <div class="selection-briefing__card">
        <span>目标</span>
        <strong>${mode.objective}</strong>
        <div class="selection-briefing__text">${battlefieldUi.highlights.join(' · ')}</div>
      </div>
    </div>
  `;
}

function renderLastProgress(): void {
  if (!lastProgress) {
    return;
  }

  if (!lastStoredProgress) {
    lastProgress.className = 'last-progress is-empty';
    lastProgress.innerHTML = `
      <div class="selection-summary__nation">Last Sortie</div>
      <div class="selection-summary__headline">暂无保存记录</div>
      <div class="last-progress__empty">从暂停菜单返回主界面时，会在这里显示最近一次战斗摘要。</div>
    `;
    return;
  }

  const timeLabel = new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(lastStoredProgress.timestamp));

  lastProgress.className = 'last-progress';
  lastProgress.innerHTML = `
    <div class="selection-summary__nation">Last Sortie</div>
    <div class="selection-summary__headline">${lastStoredProgress.statusLabel}</div>
    <div class="selection-summary__meta">${timeLabel} · ${lastStoredProgress.tankName}</div>
    <div class="last-progress__cards">
      <div class="last-progress__card">
        <span>战场</span>
        <strong>${lastStoredProgress.battlefieldLabel}</strong>
      </div>
      <div class="last-progress__card">
        <span>得分 / 击毁</span>
        <strong>${lastStoredProgress.score} / ${lastStoredProgress.kills}</strong>
      </div>
      <div class="last-progress__card">
        <span>摘要</span>
        <strong>${lastStoredProgress.detail}</strong>
      </div>
    </div>
  `;
}

function renderTankGrid(): void {
  if (!tankGrid) {
    return;
  }

  const tanks = getTanksByNation(activeNation);
  tankGrid.innerHTML = '';

  tanks.forEach((tank, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `tank-card${tank.id === selectedConfig.playerTankId ? ' is-active' : ''}`;
    button.innerHTML = `
      <div class="tank-card__header">
        <div>
          <div class="tank-card__name">${tank.name}</div>
          <div class="tank-card__meta">${CLASS_LABELS[tank.class]} · ${tank.gunCaliber}</div>
        </div>
        <div class="tank-card__hotkey">${index + 1}</div>
      </div>
      <div class="tank-card__body">
        ${buildBarRow('火力', tank.firepower)}
        ${buildBarRow('装甲', tank.armor)}
        ${buildBarRow('机动', tank.mobility)}
      </div>
      <div class="tank-card__specs">${buildSpecs(tank)}</div>
      <div class="tank-card__footer">
        <span>正面装甲 ${tank.frontalArmor}mm</span>
        <span>炮塔装甲 ${tank.turretArmor}mm</span>
      </div>
    `;
    button.addEventListener('click', () => {
      playUiClick();
      selectTank(tank.id);
    });
    tankGrid.appendChild(button);
  });

  renderSelectionSummary(tanks);

  if (selectionHint) {
    selectionHint.textContent = `当前国家: ${NATION_LABELS[activeNation]}，按 1-${tanks.length} 选择坦克，左右方向键切换国家，回车进入战场`;
  }
}

function renderBattlefieldGrid(): void {
  if (!battlefieldGrid) {
    return;
  }

  battlefieldGrid.innerHTML = '';

  BATTLEFIELD_LAYOUTS.forEach((battlefield) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `selection-option${battlefield.id === selectedConfig.battlefieldId ? ' is-active' : ''}`;
    button.innerHTML = `
      <div class="selection-option__header">
        <div>
          <div class="selection-option__title">${battlefield.label}</div>
          <div class="selection-option__meta">${battlefield.description}</div>
        </div>
        <div class="selection-option__tag">地图</div>
      </div>
      <div class="selection-option__preview" style="background:${BATTLEFIELD_UI_PRESETS[battlefield.id].preview}"></div>
      <div class="selection-option__chips">
        ${BATTLEFIELD_UI_PRESETS[battlefield.id].highlights.map((item) => `<span>${item}</span>`).join('')}
      </div>
    `;
    button.addEventListener('click', () => {
      selectedConfig.battlefieldId = battlefield.id;
      playUiClick();
      persistSelection();
      renderSelection();
    });
    battlefieldGrid.appendChild(button);
  });
}

function renderWeatherGrid(): void {
  if (!weatherGrid) {
    return;
  }

  weatherGrid.innerHTML = '';

  (Object.keys(WEATHER_PRESETS) as WeatherId[]).forEach((weatherId) => {
    const weather = WEATHER_PRESETS[weatherId];
    const ui = WEATHER_UI_PRESETS[weatherId];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `selection-option${weatherId === selectedConfig.weatherId ? ' is-active' : ''}`;
    button.innerHTML = `
      <div class="selection-option__header">
        <div>
          <div class="selection-option__title">${weather.label}</div>
          <div class="selection-option__meta">${ui.summary}</div>
        </div>
        <div class="selection-option__tag">天气</div>
      </div>
      <div class="selection-option__preview" style="background:${ui.preview}"></div>
      <div class="selection-option__chips">
        <span>雾强 ${weather.mistStrength.toFixed(2)}</span>
        <span>湿度 ${weather.wetness.toFixed(2)}</span>
        <span>曝光 ${weather.exposure.toFixed(2)}</span>
      </div>
    `;
    button.addEventListener('click', () => {
      selectedConfig.weatherId = weatherId;
      playUiClick();
      persistSelection();
      renderSelection();
    });
    weatherGrid.appendChild(button);
  });
}

function renderModeGrid(): void {
  if (!modeGrid) {
    return;
  }

  modeGrid.innerHTML = '';

  (Object.values(GAME_MODE_PRESETS)).forEach((mode) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `selection-option${mode.id === selectedConfig.modeId ? ' is-active' : ''}`;
    button.innerHTML = `
      <div class="selection-option__header">
        <div>
          <div class="selection-option__title">${mode.label}</div>
          <div class="selection-option__meta">${mode.description}</div>
        </div>
        <div class="selection-option__tag">模式</div>
      </div>
      <div class="selection-option__preview" style="background:${mode.accent}"></div>
      <div class="selection-option__chips">
        <span>${mode.objective}</span>
        ${mode.timeLimit ? `<span>${mode.timeLimit}s 限时</span>` : ''}
        ${mode.killTarget ? `<span>${mode.killTarget} 辆目标</span>` : ''}
      </div>
    `;
    button.addEventListener('click', () => {
      selectedConfig.modeId = mode.id;
      playUiClick();
      persistSelection();
      renderSelection();
    });
    modeGrid.appendChild(button);
  });
}

function renderDifficultyGrid(): void {
  if (!difficultyGrid) {
    return;
  }

  difficultyGrid.innerHTML = '';

  (Object.values(DIFFICULTY_PRESETS)).forEach((preset) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `selection-option${preset.id === selectedConfig.difficultyId ? ' is-active' : ''}`;
    button.innerHTML = `
      <div class="selection-option__header">
        <div>
          <div class="selection-option__title">${preset.label}</div>
          <div class="selection-option__meta">${preset.description}</div>
        </div>
        <div class="selection-option__tag">难度</div>
      </div>
      <div class="selection-option__preview" style="background:${preset.accent}"></div>
      <div class="selection-option__chips">
        <span>敌方 ${preset.enemyCount} 辆</span>
        <span>血量 ×${preset.enemyHpMultiplier}</span>
        <span>伤害 ×${preset.enemyDamageMultiplier}</span>
        ${preset.playerDamageReduction > 0 ? `<span>减伤 ${Math.round(preset.playerDamageReduction * 100)}%</span>` : ''}
      </div>
    `;
    button.addEventListener('click', () => {
      selectedConfig.difficultyId = preset.id;
      playUiClick();
      persistSelection();
      renderSelection();
    });
    difficultyGrid.appendChild(button);
  });
}

function renderReloadSpeedGrid(): void {
  if (!reloadSpeedGrid) {
    return;
  }

  reloadSpeedGrid.innerHTML = '';

  (Object.values(RELOAD_SPEED_PRESETS)).forEach((preset) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `selection-option${preset.id === selectedConfig.reloadSpeedId ? ' is-active' : ''}`;
    const speedRatio = 1 / preset.multiplier;
    const speedLabel = speedRatio === 1 ? '标准' : `×${speedRatio.toFixed(1).replace('.0', '')}`;
    button.innerHTML = `
      <div class="selection-option__header">
        <div>
          <div class="selection-option__title">${preset.label}</div>
          <div class="selection-option__meta">${preset.description}</div>
        </div>
        <div class="selection-option__tag">装填 ${speedLabel}</div>
      </div>
    `;
    button.addEventListener('click', () => {
      selectedConfig.reloadSpeedId = preset.id;
      playUiClick();
      persistSelection();
      renderSelection();
    });
    reloadSpeedGrid.appendChild(button);
  });
}

function renderNameplateSettings(): void {
  if (!nameplatePanel) {
    return;
  }

  const cfg = selectedConfig.nameplateConfig;

  nameplatePanel.innerHTML = `
    <div class="nameplate-settings__row">
      <label class="nameplate-settings__toggle">
        <input type="checkbox" data-np="healthBar" ${cfg.showHealthBar ? 'checked' : ''} />
        <span>血条</span>
      </label>
      <label class="nameplate-settings__toggle">
        <input type="checkbox" data-np="tankModel" ${cfg.showTankModel ? 'checked' : ''} />
        <span>坦克型号</span>
      </label>
      <label class="nameplate-settings__toggle">
        <input type="checkbox" data-np="hpValue" ${cfg.showHpValue ? 'checked' : ''} />
        <span>HP 数值</span>
      </label>
    </div>
    <div class="nameplate-settings__row">
      <span class="nameplate-settings__label">显示模式</span>
      <select class="nameplate-settings__select" data-np="displayMode">
        <option value="always" ${cfg.displayMode === 'always' ? 'selected' : ''}>始终显示</option>
        <option value="aim" ${cfg.displayMode === 'aim' ? 'selected' : ''}>瞄准时显示</option>
        <option value="hover" ${cfg.displayMode === 'hover' ? 'selected' : ''}>鼠标靠近显示</option>
      </select>
    </div>
  `;

  nameplatePanel.querySelectorAll<HTMLInputElement>('input[data-np]').forEach((input) => {
    input.addEventListener('change', () => {
      const key = input.dataset.np;

      if (key === 'healthBar') {
        selectedConfig.nameplateConfig.showHealthBar = input.checked;
      } else if (key === 'tankModel') {
        selectedConfig.nameplateConfig.showTankModel = input.checked;
      } else if (key === 'hpValue') {
        selectedConfig.nameplateConfig.showHpValue = input.checked;
      }

      persistSelection();
    });
  });

  const selectEl = nameplatePanel.querySelector<HTMLSelectElement>('select[data-np="displayMode"]');

  selectEl?.addEventListener('change', () => {
    selectedConfig.nameplateConfig.displayMode = selectEl.value as NameplateDisplayMode;
    persistSelection();
  });
}

function renderSelection(): void {
  renderNationTabs();
  renderTankGrid();
  renderBattlefieldGrid();
  renderWeatherGrid();
  renderModeGrid();
  renderDifficultyGrid();
  renderReloadSpeedGrid();
  renderNameplateSettings();
  renderBriefing();
  renderLastProgress();
}

function isBattlefieldId(value: unknown): value is BattlefieldId {
  return typeof value === 'string' && BATTLEFIELD_LAYOUTS.some((entry) => entry.id === value);
}

function isWeatherId(value: unknown): value is WeatherId {
  return typeof value === 'string' && value in WEATHER_PRESETS;
}

launchButton?.addEventListener('click', () => {
  startGame(selectedConfig);
});

window.addEventListener('keydown', (event) => {
  if (selectionScreen?.classList.contains('is-hidden')) {
    return;
  }

  const tanks = getTanksByNation(activeNation);
  const key = Number(event.key);

  if (Number.isInteger(key) && key >= 1 && key <= 9) {
    const selected = tanks[key - 1];

    if (selected) {
      playUiClick();
      selectTank(selected.id);
    }
  }

  if (event.code === 'Enter') {
    startGame(selectedConfig);
  }

  if (event.code === 'ArrowLeft') {
    const currentIndex = TANK_NATIONS.indexOf(activeNation);
    activeNation =
      TANK_NATIONS[(currentIndex + TANK_NATIONS.length - 1) % TANK_NATIONS.length];
    if (!getTanksByNation(activeNation).some((tank) => tank.id === selectedConfig.playerTankId)) {
      selectedConfig.playerTankId = getTanksByNation(activeNation)[0]?.id ?? selectedConfig.playerTankId;
    }
    playUiClick();
    renderSelection();
  }

  if (event.code === 'ArrowRight') {
    const currentIndex = TANK_NATIONS.indexOf(activeNation);
    activeNation = TANK_NATIONS[(currentIndex + 1) % TANK_NATIONS.length];
    if (!getTanksByNation(activeNation).some((tank) => tank.id === selectedConfig.playerTankId)) {
      selectedConfig.playerTankId = getTanksByNation(activeNation)[0]?.id ?? selectedConfig.playerTankId;
    }
    playUiClick();
    renderSelection();
  }
});

window.addEventListener('beforeunload', () => {
  game?.destroy();
  audioSystem.destroy();
});

activeNation = TANKS_BY_ID.get(selectedConfig.playerTankId)?.nation ?? activeNation;
renderSelection();

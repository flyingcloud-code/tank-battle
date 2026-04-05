import { MathUtils, Vector3 } from 'three';
import type { AmbientAudioState, TerrainType } from './BattlefieldTypes';

type Team = 'player' | 'enemy';
type EngineBand = 'idle' | 'low' | 'medium' | 'high';

export interface AudioTankState {
  id: string;
  team: Team;
  position: Vector3;
  speedRatio: number;
  engineLoad: number;
  slipRatio: number;
  terrainType: TerrainType;
  destroyed: boolean;
}

interface TankAudioChannel {
  master: GainNode;
  engineOscillator: OscillatorNode;
  engineFilter: BiquadFilterNode;
  engineGain: GainNode;
  trackSource: AudioBufferSourceNode;
  trackFilter: BiquadFilterNode;
  trackGain: GainNode;
  panner: StereoPannerNode | null;
  band: EngineBand;
}

interface ShotProfile {
  bodyFrequency: number;
  crackFrequency: number;
  duration: number;
  gain: number;
}

const ENGINE_PROFILES: Record<
  EngineBand,
  { frequency: number; filter: number; gain: number; waveform: OscillatorType }
> = {
  idle: { frequency: 34, filter: 180, gain: 0.08, waveform: 'triangle' },
  low: { frequency: 46, filter: 240, gain: 0.1, waveform: 'sawtooth' },
  medium: { frequency: 60, filter: 340, gain: 0.14, waveform: 'sawtooth' },
  high: { frequency: 78, filter: 480, gain: 0.18, waveform: 'square' }
};

export class AudioSystem {
  private audioContext: AudioContext | null = null;
  private masterBus: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private environmentFilter: BiquadFilterNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private readonly listenerPosition = new Vector3();
  private readonly channels = new Map<string, TankAudioChannel>();

  resume(): void {
    const context = this.getContext();

    if (!context) {
      return;
    }

    if (context.state === 'suspended') {
      void context.resume();
    }
  }

  update(
    listenerPosition: Vector3,
    tankStates: AudioTankState[],
    listenerEnvironment?: AmbientAudioState
  ): void {
    this.listenerPosition.copy(listenerPosition);

    const context = this.getContext();

    if (!context || !this.masterBus) {
      return;
    }

    if (listenerEnvironment) {
      this.updateEnvironment(context, listenerEnvironment);
    }

    const activeIds = new Set<string>();

    tankStates.forEach((state) => {
      activeIds.add(state.id);

      if (state.destroyed) {
        this.removeChannel(state.id);
        return;
      }

      const channel = this.getOrCreateChannel(state.id);

      if (!channel) {
        return;
      }

      this.updateChannel(context, channel, state);
    });

    Array.from(this.channels.keys()).forEach((channelId) => {
      if (!activeIds.has(channelId)) {
        this.removeChannel(channelId);
      }
    });
  }

  playShot(caliber: string, position: Vector3, team: Team): void {
    const context = this.getContext();

    if (!context) {
      return;
    }

    const profile = this.getShotProfile(caliber);
    const gainMultiplier = team === 'player' ? 1 : 0.86;
    const output = this.createPositionalGain(position, profile.gain * gainMultiplier);
    const now = context.currentTime;

    if (!output) {
      return;
    }

    const bodyOscillator = context.createOscillator();
    const crackOscillator = context.createOscillator();
    const noiseSource = this.createNoiseSource(false);
    const noiseFilter = context.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(840, now);
    noiseFilter.Q.value = 0.9;

    const bodyGain = context.createGain();
    const crackGain = context.createGain();
    const noiseGain = context.createGain();

    bodyOscillator.type = 'sawtooth';
    bodyOscillator.frequency.setValueAtTime(profile.bodyFrequency, now);
    bodyOscillator.frequency.exponentialRampToValueAtTime(
      Math.max(24, profile.bodyFrequency * 0.42),
      now + profile.duration
    );

    crackOscillator.type = 'triangle';
    crackOscillator.frequency.setValueAtTime(profile.crackFrequency, now);
    crackOscillator.frequency.exponentialRampToValueAtTime(
      Math.max(180, profile.crackFrequency * 0.36),
      now + profile.duration * 0.45
    );

    bodyGain.gain.setValueAtTime(0.001, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.85, now + 0.01);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + profile.duration);

    crackGain.gain.setValueAtTime(0.6, now);
    crackGain.gain.exponentialRampToValueAtTime(0.0001, now + profile.duration * 0.34);

    noiseGain.gain.setValueAtTime(0.42, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + profile.duration * 0.52);

    bodyOscillator.connect(bodyGain);
    crackOscillator.connect(crackGain);
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);

    bodyGain.connect(output);
    crackGain.connect(output);
    noiseGain.connect(output);

    bodyOscillator.start(now);
    crackOscillator.start(now);
    noiseSource.start(now);

    bodyOscillator.stop(now + profile.duration);
    crackOscillator.stop(now + profile.duration * 0.46);
    noiseSource.stop(now + profile.duration * 0.55);
  }

  playArmorHit(position: Vector3, penetrated: boolean): void {
    const context = this.getContext();

    if (!context) {
      return;
    }

    const output = this.createPositionalGain(position, penetrated ? 0.22 : 0.18);
    const now = context.currentTime;

    if (!output) {
      return;
    }

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const noiseSource = this.createNoiseSource(false);
    const noiseFilter = context.createBiquadFilter();
    const noiseGain = context.createGain();

    oscillator.type = penetrated ? 'square' : 'triangle';
    oscillator.frequency.setValueAtTime(penetrated ? 420 : 540, now);
    oscillator.frequency.exponentialRampToValueAtTime(
      penetrated ? 110 : 180,
      now + (penetrated ? 0.12 : 0.08)
    );

    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (penetrated ? 0.14 : 0.09));

    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(penetrated ? 1200 : 1800, now);
    noiseGain.gain.setValueAtTime(0.12, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

    oscillator.connect(gain);
    gain.connect(output);
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(output);

    oscillator.start(now);
    noiseSource.start(now);
    oscillator.stop(now + 0.16);
    noiseSource.stop(now + 0.07);
  }

  playRicochet(position: Vector3): void {
    const context = this.getContext();

    if (!context) {
      return;
    }

    const output = this.createPositionalGain(position, 0.18);
    const now = context.currentTime;

    if (!output) {
      return;
    }

    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(1200, now);
    oscillator.frequency.exponentialRampToValueAtTime(260, now + 0.12);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

    oscillator.connect(gain);
    gain.connect(output);
    oscillator.start(now);
    oscillator.stop(now + 0.14);
  }

  playExplosion(position: Vector3, intensity = 1): void {
    const context = this.getContext();

    if (!context) {
      return;
    }

    const output = this.createPositionalGain(position, 0.34 * intensity);
    const now = context.currentTime;

    if (!output) {
      return;
    }

    const rumble = context.createOscillator();
    const rumbleGain = context.createGain();
    const noiseSource = this.createNoiseSource(false);
    const noiseFilter = context.createBiquadFilter();
    const noiseGain = context.createGain();

    rumble.type = 'sawtooth';
    rumble.frequency.setValueAtTime(84, now);
    rumble.frequency.exponentialRampToValueAtTime(28, now + 0.45);

    rumbleGain.gain.setValueAtTime(0.001, now);
    rumbleGain.gain.exponentialRampToValueAtTime(0.65, now + 0.02);
    rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.46);

    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(900, now);
    noiseGain.gain.setValueAtTime(0.38, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);

    rumble.connect(rumbleGain);
    rumbleGain.connect(output);
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(output);

    rumble.start(now);
    noiseSource.start(now);
    rumble.stop(now + 0.5);
    noiseSource.stop(now + 0.44);
  }

  playShellWhiz(position: Vector3, speed = 1): void {
    const context = this.getContext();

    if (!context) {
      return;
    }

    const output = this.createPositionalGain(position, 0.12 + speed * 0.08);
    const now = context.currentTime;

    if (!output) {
      return;
    }

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1400 + speed * 300, now);
    oscillator.frequency.exponentialRampToValueAtTime(320, now + 0.18);
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    oscillator.connect(gain);
    gain.connect(output);
    oscillator.start(now);
    oscillator.stop(now + 0.2);
  }

  playUiClick(): void {
    const context = this.getContext();

    if (!context || !this.masterBus) {
      return;
    }

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(680, now);
    oscillator.frequency.exponentialRampToValueAtTime(980, now + 0.04);

    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    oscillator.connect(gain);
    gain.connect(this.masterBus);
    oscillator.start(now);
    oscillator.stop(now + 0.06);
  }

  destroy(): void {
    this.channels.forEach((_channel, channelId) => this.removeChannel(channelId));

    if (this.audioContext) {
      void this.audioContext.close();
    }

    this.audioContext = null;
    this.masterBus = null;
    this.compressor = null;
    this.noiseBuffer = null;
  }

  private updateChannel(
    context: AudioContext,
    channel: TankAudioChannel,
    state: AudioTankState
  ): void {
    const speedRatio = MathUtils.clamp(state.speedRatio, 0, 1);
    const band = this.resolveEngineBand(speedRatio);
    const profile = ENGINE_PROFILES[band];
    const now = context.currentTime;
    const attenuation = this.getDistanceAttenuation(state.position, state.team);
    const terrainBias = this.getTerrainNoise(state.terrainType);
    const engineGain = attenuation * profile.gain * (0.34 + state.engineLoad * 0.66);
    const trackGain = attenuation * Math.max(0, speedRatio - 0.06) * (0.16 + state.slipRatio * 0.18 + terrainBias * 0.14);
    const frequencyBoost = 1 + speedRatio * 0.55 + state.engineLoad * 0.18;

    if (channel.band !== band) {
      channel.engineOscillator.type = profile.waveform;
      channel.band = band;
    }

    channel.engineOscillator.frequency.cancelScheduledValues(now);
    channel.engineOscillator.frequency.linearRampToValueAtTime(
      profile.frequency * frequencyBoost,
      now + 0.12
    );

    channel.engineFilter.frequency.cancelScheduledValues(now);
    channel.engineFilter.frequency.linearRampToValueAtTime(
      profile.filter * (0.9 + speedRatio * 0.35),
      now + 0.14
    );

    channel.engineGain.gain.cancelScheduledValues(now);
    channel.engineGain.gain.linearRampToValueAtTime(engineGain, now + 0.16);

    channel.trackFilter.frequency.cancelScheduledValues(now);
    channel.trackFilter.frequency.linearRampToValueAtTime(
      180 + speedRatio * 420 + state.slipRatio * 120 + terrainBias * 90,
      now + 0.12
    );

    channel.trackGain.gain.cancelScheduledValues(now);
    channel.trackGain.gain.linearRampToValueAtTime(trackGain, now + 0.12);

    channel.master.gain.cancelScheduledValues(now);
    channel.master.gain.linearRampToValueAtTime(0.92, now + 0.12);

    if (channel.panner) {
      const relativeX = state.position.x - this.listenerPosition.x;
      const relativeZ = state.position.z - this.listenerPosition.z;
      const panAmount = MathUtils.clamp(relativeX / Math.max(18, Math.abs(relativeZ) + 10), -0.95, 0.95);
      channel.panner.pan.cancelScheduledValues(now);
      channel.panner.pan.linearRampToValueAtTime(panAmount, now + 0.12);
    }
  }

  private getOrCreateChannel(id: string): TankAudioChannel | null {
    const existing = this.channels.get(id);

    if (existing) {
      return existing;
    }

    const context = this.getContext();

    if (!context || !this.masterBus || !this.noiseBuffer) {
      return null;
    }

    const master = context.createGain();
    const engineOscillator = context.createOscillator();
    const engineFilter = context.createBiquadFilter();
    const engineGain = context.createGain();
    const trackSource = this.createNoiseSource(true);
    const trackFilter = context.createBiquadFilter();
    const trackGain = context.createGain();
    const panner = typeof StereoPannerNode === 'undefined'
      ? null
      : new StereoPannerNode(context, { pan: 0 });

    master.gain.value = 0;
    engineFilter.type = 'lowpass';
    engineGain.gain.value = 0;
    trackFilter.type = 'bandpass';
    trackFilter.Q.value = 0.75;
    trackGain.gain.value = 0;

    engineOscillator.connect(engineFilter);
    engineFilter.connect(engineGain);
    engineGain.connect(master);

    trackSource.connect(trackFilter);
    trackFilter.connect(trackGain);
    trackGain.connect(master);

    if (panner) {
      master.connect(panner);
      panner.connect(this.masterBus);
    } else {
      master.connect(this.masterBus);
    }

    const channel: TankAudioChannel = {
      master,
      engineOscillator,
      engineFilter,
      engineGain,
      trackSource,
      trackFilter,
      trackGain,
      panner,
      band: 'idle'
    };

    engineOscillator.type = ENGINE_PROFILES.idle.waveform;
    engineOscillator.frequency.value = ENGINE_PROFILES.idle.frequency;
    engineFilter.frequency.value = ENGINE_PROFILES.idle.filter;
    trackFilter.frequency.value = 180;

    engineOscillator.start();
    trackSource.start();
    this.channels.set(id, channel);

    return channel;
  }

  private createPositionalGain(position: Vector3, baseGain: number): GainNode | null {
    const context = this.getContext();

    if (!context || !this.masterBus) {
      return null;
    }

    const output = context.createGain();
    output.gain.value = baseGain * this.getDistanceAttenuation(position, 'enemy', 1);
    output.connect(this.masterBus);
    return output;
  }

  private resolveEngineBand(speedRatio: number): EngineBand {
    if (speedRatio < 0.08) {
      return 'idle';
    }

    if (speedRatio < 0.34) {
      return 'low';
    }

    if (speedRatio < 0.68) {
      return 'medium';
    }

    return 'high';
  }

  private getDistanceAttenuation(
    position: Vector3,
    team: Team,
    loudnessBias = 0
  ): number {
    const distance = position.distanceTo(this.listenerPosition);
    const maxDistance = team === 'player' ? 42 : 78;
    const teamGain = team === 'player' ? 0.9 : 0.72;
    const falloff = Math.pow(Math.max(0, 1 - distance / maxDistance), 2);

    return MathUtils.clamp((falloff + loudnessBias * 0.06) * teamGain, 0, 1);
  }

  private getTerrainNoise(terrainType: TerrainType): number {
    if (terrainType === 'mud' || terrainType === 'rubble') {
      return 1;
    }

    if (terrainType === 'grass' || terrainType === 'yard') {
      return 0.55;
    }

    return 0.2;
  }

  private getShotProfile(caliber: string): ShotProfile {
    const caliberValue = Number.parseInt(caliber, 10);

    if (caliberValue >= 115) {
      return {
        bodyFrequency: 72,
        crackFrequency: 420,
        duration: 0.42,
        gain: 0.42
      };
    }

    if (caliberValue >= 88) {
      return {
        bodyFrequency: 88,
        crackFrequency: 520,
        duration: 0.34,
        gain: 0.34
      };
    }

    return {
      bodyFrequency: 102,
      crackFrequency: 640,
      duration: 0.28,
      gain: 0.26
    };
  }

  private createNoiseSource(loop: boolean): AudioBufferSourceNode {
    const context = this.getContext();

    if (!context || !this.noiseBuffer) {
      throw new Error('Audio noise buffer was requested before initialization.');
    }

    const source = context.createBufferSource();
    source.buffer = this.noiseBuffer;
    source.loop = loop;
    return source;
  }

  private removeChannel(id: string): void {
    const channel = this.channels.get(id);

    if (!channel) {
      return;
    }

    channel.engineOscillator.stop();
    channel.trackSource.stop();
    channel.master.disconnect();
    this.channels.delete(id);
  }

  private getContext(): AudioContext | null {
    if (typeof AudioContext === 'undefined') {
      return null;
    }

    if (!this.audioContext) {
      this.audioContext = new AudioContext();
      this.compressor = this.audioContext.createDynamicsCompressor();
      this.compressor.threshold.value = -18;
      this.compressor.knee.value = 18;
      this.compressor.ratio.value = 4;
      this.compressor.attack.value = 0.006;
      this.compressor.release.value = 0.22;

      this.masterBus = this.audioContext.createGain();
      this.masterBus.gain.value = 0.85;
      this.environmentFilter = this.audioContext.createBiquadFilter();
      this.environmentFilter.type = 'lowpass';
      this.environmentFilter.frequency.value = 16000;
      this.masterBus.connect(this.environmentFilter);
      this.environmentFilter.connect(this.compressor);
      this.compressor.connect(this.audioContext.destination);
      this.noiseBuffer = this.createNoiseBuffer(this.audioContext);
    }

    return this.audioContext;
  }

  private createNoiseBuffer(context: AudioContext): AudioBuffer {
    const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const data = buffer.getChannelData(0);

    for (let index = 0; index < data.length; index += 1) {
      data[index] = (Math.random() * 2 - 1) * 0.9;
    }

    return buffer;
  }

  private updateEnvironment(context: AudioContext, environment: AmbientAudioState): void {
    if (!this.environmentFilter || !this.masterBus) {
      return;
    }

    const now = context.currentTime;
    const cutoff = environment.interior
      ? 2200 + (1 - environment.enclosure) * 2200
      : 7000 + (1 - environment.wetness) * 5000;
    this.environmentFilter.frequency.cancelScheduledValues(now);
    this.environmentFilter.frequency.linearRampToValueAtTime(cutoff, now + 0.16);
    this.masterBus.gain.cancelScheduledValues(now);
    this.masterBus.gain.linearRampToValueAtTime(
      environment.interior ? 0.76 : 0.85 - environment.wetness * 0.06,
      now + 0.18
    );
  }
}

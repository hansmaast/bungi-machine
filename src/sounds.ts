import {
  AmplitudeEnvelope, Noise, Oscillator, Synth,
} from 'tone';

export const basicSynth = new Synth({
  envelope: {
    attack: 0.01,
    release: 0.2,
    sustain: 0.5,
  },
}).toDestination();

export const sineOsc = new Oscillator({ frequency: 50, type: 'sine' });
export const noiseOsc = new Noise({ type: 'white', volume: -10 });

export const sineEnvSettings = {
  attack: 0.01,
  decay: 0.3,
  sustain: 0.5,
  release: 0.5,
};
export const noiseEnvSettings = {
  attack: 0.1,
  decay: 0.2,
  sustain: 0.5,
  release: 0.3,
};

export const sineAmpEnv = new AmplitudeEnvelope(sineEnvSettings).toDestination();
export const noiseAmpEnv = new AmplitudeEnvelope(noiseEnvSettings).toDestination();

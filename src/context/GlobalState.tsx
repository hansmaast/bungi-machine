// store.js
import {
  Context, createContext, ReactNode, useContext, useEffect, useReducer,
} from 'react';
import { Destination, Sampler, Transport } from 'tone';
import { DRUM, SYNTH } from '../constants';
import { oneBarSixteenNote } from '../helpers/barsAndBeats';
import { SAMPLERS } from '../instruments/samplers';
import { reducer } from './reducer';

export interface IGlobalState {
    tempo: number;
    masterVolume: number;
    selectedDrumSound: string;
    selectedSampler: Sampler;
    selectedSynthSound: string;
    note: string;
    isLooping: boolean;
    loopEnd: string;
    steps: string[];
    activeStep: string | null;
    triggeredKicks: { [index:string] : string } | null;
    triggeredSnares: { [index:string] : string } | null;
    triggeredHiHats: { [index:string] : string } | null;
    triggeredOpenHiHats: { [index:string] : string } | null;
    triggeredToms: { [index:string] : string } | null;
    releaseInSeconds: number;
}

export const clearedSounds = {
  triggeredKicks: {},
  triggeredSnares: {},
  triggeredHiHats: {},
  triggeredOpenHiHats: {},
  triggeredToms: {},
};

const initialState: IGlobalState = {
  tempo: 120,
  masterVolume: 0,
  loopEnd: '1:0:0',
  isLooping: true,
  note: '',
  steps: oneBarSixteenNote,
  activeStep: null,
  selectedSampler: SAMPLERS.CR78,
  selectedDrumSound: DRUM.KICK,
  selectedSynthSound: SYNTH.SQUARE,
  ...clearedSounds,
  releaseInSeconds: 0.03,
};

const store: Context<IGlobalState | any> = createContext(initialState);
const { Provider } = store;

const GlobalState = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  Transport.bpm.value = state.tempo;
  Transport.loop = state.isLooping;
  Transport.loopEnd = state.loopEnd;

  Destination.set({ volume: state.masterVolume });

  useEffect(() => {
    if (state.triggeredKicks[state.activeStep]) {
      state.selectedSampler.triggerAttackRelease('C1', 0.5);
    }
    if (state.triggeredSnares[state.activeStep]) {
      state.selectedSampler.triggerAttackRelease('D1', 0.5);
    }
    if (state.triggeredHiHats[state.activeStep]) {
      state.selectedSampler.triggerAttackRelease('E1', 0.5);
    }
    if (state.triggeredOpenHiHats[state.activeStep]) {
      state.selectedSampler.triggerAttackRelease('F1', 0.5);
    }
    if (state.triggeredToms[state.activeStep]) {
      state.selectedSampler.triggerAttackRelease('G1', 0.5);
    }
  }, [state.activeStep, state.triggeredSteps, state.selectedSampler]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useGlobalState = () => useContext(store);

export { useGlobalState, GlobalState };

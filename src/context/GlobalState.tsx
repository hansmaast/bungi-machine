// store.js
import {
  Context, createContext, ReactNode, useContext, useEffect, useReducer,
} from 'react';
import { Transport } from 'tone';
import { DRUM, SYNTH } from '../constants';
import { oneBarSixteenNote } from '../helpers/barsAndBeats';
import { sampler } from '../instruments/samplers';
import { reducer } from './reducer';

export interface IGlobalState {
    selectedDrumSound: string;
    selectedSynthSound: string;
    note: string;
    tempo: number;
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
  loopEnd: '1:0:0',
  isLooping: true,
  note: '',
  steps: oneBarSixteenNote,
  activeStep: null,
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

  useEffect(() => {
    if (state.triggeredKicks[state.activeStep]) {
      sampler.triggerAttackRelease('C1', 0.5);
    }
    if (state.triggeredSnares[state.activeStep]) {
      sampler.triggerAttackRelease('D1', 0.5);
    }
    if (state.triggeredHiHats[state.activeStep]) {
      sampler.triggerAttackRelease('E1', 0.5);
    }
    if (state.triggeredOpenHiHats[state.activeStep]) {
      sampler.triggerAttackRelease('E1', 0.5);
    }
    if (state.triggeredToms[state.activeStep]) {
      sampler.triggerAttackRelease('F1', 0.5);
    }
  }, [state.activeStep, state.triggeredSteps]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useGlobalState = () => useContext(store);

export { useGlobalState, GlobalState };

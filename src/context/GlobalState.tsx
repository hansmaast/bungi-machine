// store.js
import {
  createContext, ReactNode, useContext, useEffect, useReducer,
} from 'react';
import { Destination, Transport } from 'tone';
import { oneBarSixteenNote } from '../helpers/barsAndBeats';
import { SAMPLERS } from '../instruments/samplers';
import {
  reducer,
} from './reducer';
import { Context, IGlobalState } from './types';

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
  activeStep: '',
  selectedSampler: SAMPLERS.CR78,
  selectedDrumSound: 'KICK',
  selectedDrumPattern: '1',
  ...clearedSounds,
  releaseInSeconds: 0.03,
};

const store = createContext<Context>({ state: initialState, dispatch: () => {} });
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
  }, [state.activeStep]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useGlobalState = () => useContext(store);

export { useGlobalState, GlobalState };

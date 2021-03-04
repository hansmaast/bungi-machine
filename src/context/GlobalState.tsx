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
import { Context, IGlobalState, TriggeredStepsObject } from './types';

export const clearedSounds: TriggeredStepsObject = {
  triggeredKicks: {},
  triggeredSnares: {},
  triggeredHiHats: {},
  triggeredOpenHiHats: {},
  triggeredToms: {},
};

export const clearedPatterns: TriggeredStepsObject[] = [
  { ...clearedSounds },
  { ...clearedSounds },
  { ...clearedSounds },
  { ...clearedSounds },
  { ...clearedSounds },
  { ...clearedSounds },
  { ...clearedSounds },
  { ...clearedSounds },
];
const initialState: IGlobalState = {
  tempo: 120,
  masterVolume: 0,
  loopEnd: '1:0:0',
  isLooping: true,
  steps: oneBarSixteenNote,
  activeStep: '',
  selectedSampler: SAMPLERS.CR78,
  selectedDrumSound: 'KICK',
  selectedDrumPattern: 0,
  activeLoopPatterns: [0, 1, 2, 3],
  loopPatterns: true,
  drumPatterns: clearedPatterns,
  releaseInSeconds: 0.03,
};

const store = createContext<Context>({ state: initialState, dispatch: () => {} });
const { Provider } = store;

const GlobalState = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    // eslint-disable-next-line no-unused-vars
    drumPatterns, selectedDrumPattern, activeStep, selectedSampler,
  } = state;
  Transport.bpm.value = state.tempo;
  Transport.loop = state.isLooping;
  Transport.loopEnd = state.loopEnd;

  Destination.set({ volume: state.masterVolume });

  useEffect(() => {
    if (drumPatterns[selectedDrumPattern].triggeredKicks[activeStep]) {
      selectedSampler.triggerAttackRelease('C1', 0.5);
    }
    if (drumPatterns[selectedDrumPattern].triggeredSnares[activeStep]) {
      selectedSampler.triggerAttackRelease('D1', 0.5);
    }
    if (drumPatterns[selectedDrumPattern].triggeredHiHats[activeStep]) {
      selectedSampler.triggerAttackRelease('E1', 0.5);
    }
    if (drumPatterns[selectedDrumPattern].triggeredOpenHiHats[activeStep]) {
      selectedSampler.triggerAttackRelease('F1', 0.5);
    }
    if (drumPatterns[selectedDrumPattern].triggeredToms[activeStep]) {
      selectedSampler.triggerAttackRelease('G1', 0.5);
    }
  }, [activeStep]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useGlobalState = () => useContext(store);

export { useGlobalState, GlobalState };

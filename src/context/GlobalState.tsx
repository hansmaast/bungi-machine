// store.js
import {
  Context, createContext, ReactNode, useContext, useEffect, useReducer,
} from 'react';
import { DRUM, SYNTH } from '../constants';
import { oneBarSixteenNote } from '../helpers/barsAndBeats';
import { reducer } from './reducer';
import { sineAmpEnv, sineOsc } from '../sounds';

export interface IGlobalState {
    selectedDrumSound: string;
    selectedSynthSound: string;
    note: string;
    tempo: number;
    isLooping: boolean;
    loopEnd: string;
    steps: string[];
    activeStep: string | null;
    triggeredSteps: { [index:string] : string } | null;
    releaseInSeconds: number;
}

const initialState: IGlobalState = {
  tempo: 125,
  loopEnd: '1:0:0',
  isLooping: true,
  note: '',
  steps: oneBarSixteenNote,
  activeStep: null,
  selectedDrumSound: DRUM.KICK,
  selectedSynthSound: SYNTH.SQUARE,
  triggeredSteps: {},
  releaseInSeconds: 0.03,
};

const store: Context<IGlobalState | any> = createContext(initialState);
const { Provider } = store;

const GlobalState = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.triggeredSteps[state.activeStep]) {
      sineOsc.connect(sineAmpEnv).start();
      sineAmpEnv.triggerAttackRelease(state.releaseInSeconds);
    }
  }, [state.activeStep, state.triggeredSteps]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useGlobalState = () => useContext(store);

export { useGlobalState, GlobalState };

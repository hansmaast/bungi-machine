// store.js
import {
  Context, createContext, ReactNode, useContext, useReducer,
} from 'react';
import { DRUM, SYNTH } from '../constants';
import { reducer } from './reducer';

export interface IGlobalState {
    selectedDrumSound: string;
    selectedSynthSound: string;
    note: string;
    tempo: number;
    isLooping: boolean;
    loopEnd: string;
    activeEightStep: string | null;
    activeSixteenStep: string | null;
    triggeredEightSteps: {};
    triggeredSixteenSteps: {};
}

const initialState: IGlobalState = {
  tempo: 125,
  loopEnd: '1:0:0',
  isLooping: true,
  note: '',
  selectedDrumSound: DRUM.KICK,
  selectedSynthSound: SYNTH.SQUARE,
  activeEightStep: null,
  activeSixteenStep: null,
  triggeredEightSteps: {},
  triggeredSixteenSteps: {},
};

const store: Context<IGlobalState | any> = createContext(initialState);
const { Provider } = store;

const ToneProvider = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useGlobalState = () => useContext(store);

export { useGlobalState, ToneProvider };

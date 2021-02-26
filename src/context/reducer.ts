import { persistInLocalStorage, retrieveFromLocalStorage } from '../utils';
import { clearedPatterns } from './GlobalState';
import { getClearedDrumPattern } from './helpers';
import { Action, IGlobalState } from './types';

export const reducer = (state: IGlobalState, action: Action): IGlobalState => {
  switch (action.type) {
    case 'SELECT_DRUM_PRESET':
      return { ...state, selectedSampler: action.payload };
    case 'SELECT_DRUM':
      return { ...state, selectedDrumSound: action.payload };
    case 'SELECT_DRUM_PATTERN':
      return { ...state, selectedDrumPattern: action.payload };
    case 'SET_MASTER_VOLUME':
      return { ...state, masterVolume: action.payload };
    case 'SET_TEMPO':
      return { ...state, tempo: action.payload };
    case 'SET_ACTIVE_STEP':
      return { ...state, activeStep: action.payload };
    case 'SET_TRIGGERED_KICKS':
      // eslint-disable-next-line no-case-declarations
      const newDrumPatternsKick = [...state.drumPatterns];
      newDrumPatternsKick[state.selectedDrumPattern].triggeredKicks = action.payload;
      return { ...state, drumPatterns: newDrumPatternsKick };
    case 'SET_TRIGGERED_SNARES':
      // eslint-disable-next-line no-case-declarations
      const newDrumPatternsSnare = [...state.drumPatterns];
      newDrumPatternsSnare[state.selectedDrumPattern].triggeredSnares = action.payload;
      return { ...state, drumPatterns: newDrumPatternsSnare };
    case 'SET_TRIGGERED_HIHATS':
      // eslint-disable-next-line no-case-declarations
      const newDrumPatternsHiHats = [...state.drumPatterns];
      newDrumPatternsHiHats[state.selectedDrumPattern].triggeredHiHats = action.payload;
      return { ...state, drumPatterns: newDrumPatternsHiHats };
    case 'SET_TRIGGERED_OPEN_HIHATS':
      // eslint-disable-next-line no-case-declarations
      const newDrumPatternsOpenHiHats = [...state.drumPatterns];
      newDrumPatternsOpenHiHats[state.selectedDrumPattern].triggeredOpenHiHats = action.payload;
      return { ...state, drumPatterns: newDrumPatternsOpenHiHats };
    case 'SET_TRIGGERED_TOMS':
      // eslint-disable-next-line no-case-declarations
      const newDrumPatternsToms = [...state.drumPatterns];
      newDrumPatternsToms[state.selectedDrumPattern].triggeredToms = action.payload;
      return { ...state, drumPatterns: newDrumPatternsToms };
    case 'CLEAR_ALL':
      return { ...state, drumPatterns: clearedPatterns };
    case 'CLEAR_PATTERN':
      return { ...state, ...getClearedDrumPattern(action.payload) };
    case 'SAVE_PATTERN':
      persistInLocalStorage(action.payload, { ...state, selectedSampler: null });
      return state;
    case 'LOAD_PATTERN':
      // eslint-disable-next-line no-case-declarations
      const savedState: IGlobalState = retrieveFromLocalStorage(action.payload);
      // could not store selectedSampler as string,
      // so we set it to the current states sampler.
      return { ...savedState, selectedSampler: state.selectedSampler };
    default:
      return state;
  }
};

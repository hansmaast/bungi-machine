import { persistInLocalStorage, retrieveFromLocalStorage } from '../utils';
import { clearedSounds } from './GlobalState';
import { getClearedDrumPattern } from './helpers';
import { Action, IGlobalState } from './types';

export const reducer = (state: IGlobalState, action: Action): IGlobalState => {
  switch (action.type) {
    case 'SELECT_DRUM_PRESET':
      return { ...state, selectedSampler: action.payload };
    case 'SELECT_DRUM':
      return { ...state, selectedDrumSound: action.payload };
    case 'SET_MASTER_VOLUME':
      return { ...state, masterVolume: action.payload };
    case 'SET_TEMPO':
      return { ...state, tempo: action.payload };
    case 'SET_ACTIVE_STEP':
      return { ...state, activeStep: action.payload };
    case 'SET_TRIGGERED_KICKS':
      return { ...state, triggeredKicks: action.payload };
    case 'SET_TRIGGERED_SNARES':
      return { ...state, triggeredSnares: action.payload };
    case 'SET_TRIGGERED_HIHATS':
      return { ...state, triggeredHiHats: action.payload };
    case 'SET_TRIGGERED_OPEN_HIHATS':
      return { ...state, triggeredOpenHiHats: action.payload };
    case 'SET_TRIGGERED_TOMS':
      return { ...state, triggeredToms: action.payload };
    case 'CLEAR_ALL':
      return { ...state, ...clearedSounds };
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

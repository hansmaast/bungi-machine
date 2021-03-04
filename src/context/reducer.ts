/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import { persistInLocalStorage, retrieveFromLocalStorage } from '../utils';
import { getClearedDrumPatterns, getClearedPatternsForDrumType, getUpdatedDrumPatterns } from './helpers';
import { Action, DrumPattern, IGlobalState } from './types';

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
      return { ...state, drumPatterns: getUpdatedDrumPatterns(state, action.payload) };
    case 'SET_TRIGGERED_SNARES':
      return { ...state, drumPatterns: getUpdatedDrumPatterns(state, action.payload) };
    case 'SET_TRIGGERED_HIHATS':
      return { ...state, drumPatterns: getUpdatedDrumPatterns(state, action.payload) };
    case 'SET_TRIGGERED_OPEN_HIHATS':
      return { ...state, drumPatterns: getUpdatedDrumPatterns(state, action.payload) };
    case 'SET_TRIGGERED_TOMS':
      return { ...state, drumPatterns: getUpdatedDrumPatterns(state, action.payload) };
    case 'TOGGLE_LOOP_PATTERNS':
      return { ...state, loopPatterns: !state.loopPatterns };
    case 'TOGGLE_LOOP_SELECTED_PATTERN':
      const index = state.activeLoopPatterns.indexOf(action.payload);
      let activeLoopPatterns: DrumPattern[];
      if (index === -1) {
        activeLoopPatterns = [...state.activeLoopPatterns, action.payload];
      } else {
        activeLoopPatterns = [...state.activeLoopPatterns];
        activeLoopPatterns.splice(index, 1);
      }
      return { ...state, activeLoopPatterns };
    case 'CLEAR_ALL':
      return { ...state, drumPatterns: getClearedDrumPatterns(state.drumPatterns) };
    case 'CLEAR_PATTERN':
      return { ...state, drumPatterns: getClearedPatternsForDrumType(state, action.payload) };
    case 'SAVE_PATTERN':
      persistInLocalStorage(action.payload, { ...state, selectedSampler: null });
      return state;
    case 'LOAD_PATTERN':
      return {
        ...retrieveFromLocalStorage(action.payload),
        selectedSampler: state.selectedSampler,
      };
    default:
      return state;
  }
};

import { DRUM } from '../constants';
import { clearedSounds, IGlobalState } from './GlobalState';

export const ACTIONS = {
  SELECT_DRUM_PRESET: 'SELECT_DRUMPRESET',
  SELECT_DRUM: 'SELECT_DRUM',
  SELECT_SYNTH: 'SELECT_SYNTH',
  SET_MASTER_VOLUME: 'SET_MASTER_VOLUME',
  SET_TEMPO: 'SET_TEMPO',
  SET_ACTIVE_STEP: 'SET_ACTIVE_STEP',
  SET_TRIGGERED_KICKS: 'SET_TRIGGERED_KICKS',
  SET_TRIGGERED_SNARES: 'SET_TRIGGERED_SNARES',
  SET_TRIGGERED_HIHATS: 'SET_TRIGGERED_HIHATS',
  SET_TRIGGERED_OPEN_HIHATS: 'SET_TRIGGERED_OPEN_HIHATS',
  SET_TRIGGERED_TOMS: 'SET_TRIGGERED_TOMS',
  CLEAR_ALL: 'CLEAR_ALL',
  CLEAR_PATTERN: 'CLEAR_PATTERN',
};

interface Action {
    type: string;
    payload: any;
}

function getClearedDrumPattern(selectedDrumSound: string): { [index:string]: {}} {
  switch (selectedDrumSound) {
    case DRUM.KICK:
      return { triggeredKicks: {} };
    case DRUM.SNARE:
      return { triggeredSnares: {} };
    case DRUM.HIHAT:
      return { triggeredHiHats: {} };
    case DRUM.HIHAT_OPEN:
      return { triggeredOpenHiHats: {} };
    case DRUM.TOM:
      return { triggeredToms: {} };
    default:
      return {};
  }
}

export const reducer = (state: IGlobalState | any, action: Action) => {
  switch (action.type) {
    case ACTIONS.SELECT_DRUM_PRESET:
      return { ...state, selectedSampler: action.payload };
    case ACTIONS.SELECT_DRUM:
      return { ...state, selectedDrumSound: action.payload };
    case ACTIONS.SELECT_SYNTH:
      return { ...state, selectedSynthSound: action.payload };
    case ACTIONS.SET_MASTER_VOLUME:
      return { ...state, masterVolume: action.payload };
    case ACTIONS.SET_TEMPO:
      return { ...state, tempo: action.payload };
    case ACTIONS.SET_ACTIVE_STEP:
      return { ...state, activeStep: action.payload };
    case ACTIONS.SET_TRIGGERED_KICKS:
      return { ...state, triggeredKicks: action.payload };
    case ACTIONS.SET_TRIGGERED_SNARES:
      return { ...state, triggeredSnares: action.payload };
    case ACTIONS.SET_TRIGGERED_HIHATS:
      return { ...state, triggeredHiHats: action.payload };
    case ACTIONS.SET_TRIGGERED_OPEN_HIHATS:
      return { ...state, triggeredOpenHiHats: action.payload };
    case ACTIONS.SET_TRIGGERED_TOMS:
      return { ...state, triggeredToms: action.payload };
    case ACTIONS.CLEAR_ALL:
      return { ...state, ...clearedSounds };
    case ACTIONS.CLEAR_PATTERN:
      return { ...state, ...getClearedDrumPattern(action.payload) };
    default:
      return state;
  }
};

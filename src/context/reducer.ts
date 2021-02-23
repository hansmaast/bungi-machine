import { IGlobalState } from './GlobalState';

export const ACTIONS = {
  SELECT_DRUM: 'SELECT_DRUM',
  SELECT_SYNTH: 'SELECT_SYNTH',
  SET_TEMPO: 'SET_TEMPO',
  SET_ACTIVE_STEP: 'SET_ACTIVE_STEP',
  SET_TRIGGERED_KICKS: 'SET_TRIGGERED_KICKS',
  SET_TRIGGERED_SNARES: 'SET_TRIGGERED_SNARES',
  SET_TRIGGERED_HIHATS: 'SET_TRIGGERED_HIHATS',
  SET_TRIGGERED_OPEN_HIHATS: 'SET_TRIGGERED_OPEN_HIHATS',
  SET_TRIGGERED_TOMS: 'SET_TRIGGERED_TOMS',
};

interface Action {
    type: string;
    payload: any;
}

export const reducer = (state: IGlobalState | any, action: Action) => {
  switch (action.type) {
    case ACTIONS.SELECT_DRUM:
      return { ...state, selectedDrumSound: action.payload };
    case ACTIONS.SELECT_SYNTH:
      return { ...state, selectedSynthSound: action.payload };
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
    default:
      return state;
  }
};

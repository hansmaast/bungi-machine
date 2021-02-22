import { IGlobalState } from './GlobalState';

export const ACTIONS = {
  SELECT_DRUM: 'SELECT_DRUM',
  SELECT_SYNTH: 'SELECT_SYNTH',
  SET_TEMPO: 'SET_TEMPO',
  SET_ACTIVE_EIGHT_STEP: 'SET_ACTIVE_EIGHT_STEP',
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
    case ACTIONS.SET_ACTIVE_EIGHT_STEP:
      return { ...state, activeEightStep: action.payload };
    default:
      return state;
  }
};

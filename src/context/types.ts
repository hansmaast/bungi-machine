import { Dispatch } from 'react';
import { Sampler } from 'tone';

export type DrumType = 'KICK' | 'SNARE' | 'HIHAT' | 'HIHAT_OPEN' | 'TOM';
export type DrumPattern = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export interface TriggeredSteps {[key:string]: string | boolean}
export type TriggeredStepsObject = {
  triggeredKicks: TriggeredSteps,
 triggeredSnares: TriggeredSteps,
 triggeredHiHats: TriggeredSteps,
 triggeredOpenHiHats: TriggeredSteps,
 triggeredToms: TriggeredSteps
}

export type IGlobalState = {
    masterVolume: number;
    tempo: number;
    isLooping: boolean;
    loopEnd: string;
    steps: string[];
    activeStep: string;
    selectedSampler: Sampler;
    selectedDrumSound: DrumType;
    activeLoopPatterns: DrumPattern[];
    loopPatterns: boolean;
    selectedDrumPattern: DrumPattern;
    drumPatterns: TriggeredStepsObject[];
    releaseInSeconds: number;
}

export type Action =
| { type: 'SELECT_DRUM_PRESET'; payload: Sampler; }
| { type: 'SELECT_DRUM'; payload: DrumType; }
| { type: 'SELECT_DRUM_PATTERN'; payload: DrumPattern; }
| { type: 'SET_MASTER_VOLUME'; payload: number; }
| { type: 'SET_TEMPO'; payload: number; }
| { type: 'SET_ACTIVE_STEP'; payload: string; } // Could make a type Step fro this, using a regex to match "s:s:s:"
| { type: 'SET_TRIGGERED_KICKS'; payload: TriggeredSteps; }
| { type: 'SET_TRIGGERED_SNARES'; payload: TriggeredSteps; }
| { type: 'SET_TRIGGERED_HIHATS'; payload: TriggeredSteps; }
| { type: 'SET_TRIGGERED_OPEN_HIHATS'; payload: TriggeredSteps; }
| { type: 'SET_TRIGGERED_TOMS'; payload: TriggeredSteps; }
| { type: 'CLEAR_ALL'; payload: null; }
| { type: 'CLEAR_PATTERN'; payload: DrumType; }
| { type: 'SAVE_PATTERN'; payload: string; }
| { type: 'LOAD_PATTERN'; payload: string; }
| { type: 'TOGGLE_LOOP_SELECTED_PATTERN'; payload: DrumPattern}
| { type: 'TOGGLE_LOOP_PATTERNS';};

export type Context = {
    state: IGlobalState;
    dispatch: Dispatch<Action>;
  }

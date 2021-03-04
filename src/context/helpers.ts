/* eslint-disable no-param-reassign */
import {
  DrumType, IGlobalState, TriggeredSteps, TriggeredStepsObject,
} from './types';

export function getClearedDrumPattern(selectedDrumSound: DrumType): { [index:string] : {}} {
  switch (selectedDrumSound) {
    case 'KICK':
      return { triggeredKicks: {} };
    case 'SNARE':
      return { triggeredSnares: {} };
    case 'HIHAT':
      return { triggeredHiHats: {} };
    case 'HIHAT_OPEN':
      return { triggeredOpenHiHats: {} };
    case 'TOM':
      return { triggeredToms: {} };
    default:
      return { triggeredKicks: {} };
  }
}

export function getClearedDrumPatterns(
  drumPatterns: TriggeredStepsObject[],
): TriggeredStepsObject[] {
  const patterns = [...drumPatterns];
  patterns.forEach((pattern) => {
    pattern.triggeredKicks = {};
    pattern.triggeredSnares = {};
    pattern.triggeredHiHats = {};
    pattern.triggeredOpenHiHats = {};
    pattern.triggeredToms = {};
  });
  return patterns;
}

export function getClearedPatternsForDrumType(state: IGlobalState, drumType: DrumType) {
  const updatedPatterns = [...state.drumPatterns];
  updatedPatterns[state.selectedDrumPattern] = {
    ...updatedPatterns[state.selectedDrumPattern],
    ...getClearedDrumPattern(drumType),
  };
  return updatedPatterns;
}

export function getUpdatedDrumPatterns(state: IGlobalState, triggeredSteps: TriggeredSteps) {
  const patterns = [...state.drumPatterns];
  switch (state.selectedDrumSound) {
    case 'KICK':
      patterns[state.selectedDrumPattern].triggeredKicks = triggeredSteps;
      break;
    case 'SNARE':
      patterns[state.selectedDrumPattern].triggeredSnares = triggeredSteps;
      break;
    case 'HIHAT':
      patterns[state.selectedDrumPattern].triggeredHiHats = triggeredSteps;
      break;
    case 'HIHAT_OPEN':
      patterns[state.selectedDrumPattern].triggeredOpenHiHats = triggeredSteps;
      break;
    case 'TOM':
      patterns[state.selectedDrumPattern].triggeredToms = triggeredSteps;
      break;
    default:
      break;
  }
  return patterns;
}

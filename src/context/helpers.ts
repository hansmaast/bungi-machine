import { DrumType, TriggeredStepsObject } from './types';

export function getClearedDrumPattern(selectedDrumSound: DrumType): TriggeredStepsObject {
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
      return {};
  }
}

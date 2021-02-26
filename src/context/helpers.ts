import { DrumType } from './types';

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

import { DRUM } from '../constants';
import { useGlobalState } from '../context/GlobalState';
import { TriggeredSteps, Action } from '../context/types';

import { GridItem } from '../style/gridItem';

export default function BeatStep({ step }: {step: string}) {
  const { state, dispatch } = useGlobalState();
  const {
    activeStep, selectedDrumSound,
    drumPatterns, selectedDrumPattern,
  } = state;
  const {
    triggeredKicks, triggeredSnares,
    triggeredHiHats, triggeredOpenHiHats, triggeredToms,
  } = drumPatterns[selectedDrumPattern];

  let triggeredSteps: TriggeredSteps;
  let action: Action;
  switch (selectedDrumSound) {
    case 'KICK':
      triggeredSteps = triggeredKicks;
      action = {
        type: 'SET_TRIGGERED_KICKS',
        payload: { ...triggeredKicks, [step]: !triggeredKicks[step] },
      };
      break;
    case DRUM.SNARE:
      triggeredSteps = triggeredSnares;
      action = {
        type: 'SET_TRIGGERED_SNARES',
        payload: { ...triggeredSnares, [step]: !triggeredSnares[step] },
      };
      break;
    case DRUM.HIHAT:
      triggeredSteps = triggeredHiHats;
      action = {
        type: 'SET_TRIGGERED_HIHATS',
        payload: { ...triggeredHiHats, [step]: !triggeredHiHats[step] },
      };
      break;
    case DRUM.HIHAT_OPEN:
      triggeredSteps = triggeredOpenHiHats;
      action = {
        type: 'SET_TRIGGERED_OPEN_HIHATS',
        payload: { ...triggeredOpenHiHats, [step]: !triggeredOpenHiHats[step] },
      };
      break;
    case DRUM.TOM:
      triggeredSteps = triggeredToms;
      action = {
        type: 'SET_TRIGGERED_TOMS',
        payload: { ...triggeredToms, [step]: !triggeredToms[step] },
      };
      break;
    default:
      triggeredSteps = triggeredKicks;
      break;
  }
  const toggleStep = () => {
    dispatch(action);
  };

  return (
    <GridItem
      onClick={toggleStep}
      isTouched={activeStep === step}
      bg={triggeredSteps[step] ? 'salmon' : ''}
    >
      { step }
    </GridItem>
  );
}

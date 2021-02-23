import { DRUM } from '../constants';
import { useGlobalState } from '../context/GlobalState';
import { ACTIONS } from '../context/reducer';
import { GridItem } from '../style/gridItem';

export default function BeatStep({ step }: {step: string}) {
  const { state, dispatch } = useGlobalState();
  const { activeStep } = state;

  let ACTION: string;
  let triggeredSteps: {[index:string]: string};
  switch (state.selectedDrumSound) {
    case DRUM.KICK:
      ACTION = ACTIONS.SET_TRIGGERED_KICKS;
      triggeredSteps = state.triggeredKicks;
      break;
    case DRUM.SNARE:
      ACTION = ACTIONS.SET_TRIGGERED_SNARES;
      triggeredSteps = state.triggeredSnares;
      break;
    case DRUM.HIHAT:
      ACTION = ACTIONS.SET_TRIGGERED_HIHATS;
      triggeredSteps = state.triggeredHiHats;
      break;
    case DRUM.HIHAT_OPEN:
      ACTION = ACTIONS.SET_TRIGGERED_OPEN_HIHATS;
      triggeredSteps = state.triggeredOpenHiHats;
      break;
    case DRUM.TOM:
      ACTION = ACTIONS.SET_TRIGGERED_TOMS;
      triggeredSteps = state.triggeredToms;
      break;
    default:
      ACTION = ACTIONS.SET_TRIGGERED_KICKS;
      triggeredSteps = state.triggeredKicks;
      break;
  }

  const toggleStep = () => {
    dispatch({
      type: ACTION,
      payload: { ...triggeredSteps, [step]: !triggeredSteps[step] },
    });
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

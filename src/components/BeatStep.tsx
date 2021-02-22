import { useGlobalState } from '../context/GlobalState';
import { ACTIONS } from '../context/reducer';
import { GridItem } from '../style/gridItem';

export default function BeatStep({ step }: {step: string}) {
  const { state, dispatch } = useGlobalState();
  const { triggeredSteps, activeStep } = state;

  const toggleStep = () => {
    dispatch({
      type: ACTIONS.SET_TRIGGERED_STEPS,
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

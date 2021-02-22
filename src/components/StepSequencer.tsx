import { useGlobalState } from '../context/GlobalState';
import { Grid } from '../style/grid';
import BeatStep from './BeatStep';

interface Props {
  visible: boolean;
  steps: string[];
  oscillator: any;
  envelope: any;
}
export default function StepSequencer(props: Props) {
  const {
    // eslint-disable-next-line no-unused-vars
    visible,
    steps,
    // eslint-disable-next-line no-unused-vars
    oscillator,
    // eslint-disable-next-line no-unused-vars
    envelope,
  } = props;

  // eslint-disable-next-line no-unused-vars
  const { state } = useGlobalState();
  // const { releaseInSeconds, triggeredSteps, activeStep } = state;

  // useEffect(() => {
  //   if (triggeredSteps[activeStep]) {
  //     oscillator.connect(envelope).start();
  //     envelope.triggerAttackRelease(releaseInSeconds);
  //   }
  // }, [activeStep, oscillator, triggeredSteps]);

  return (

    <Grid reverse>
      { steps.map((step) => (
        <BeatStep
          key={step}
          step={step}
        />
      )) }
    </Grid>

  );
}

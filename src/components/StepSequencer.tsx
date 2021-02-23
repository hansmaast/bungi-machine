import { useGlobalState } from '../context/GlobalState';
import { Grid } from '../style/grid';
import BeatStep from './BeatStep';

export default function StepSequencer() {
  // eslint-disable-next-line no-unused-vars
  const { state } = useGlobalState();

  return (

    <Grid reverse>
      { state.steps.map((step: string) => (
        <BeatStep
          key={step}
          step={step}
        />
      )) }
    </Grid>

  );
}

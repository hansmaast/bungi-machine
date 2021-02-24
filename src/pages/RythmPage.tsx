import { Transport } from 'tone';
import { SelectDrumSound } from '../components/SelectDrumSound';
import StepSequencer from '../components/StepSequencer';
import { useGlobalState } from '../context/GlobalState';
import { startRhythm } from '../helpers/actions';
import { Button } from '../style/button';
import { Flex } from '../style/flex';
import { GlobalTempoSlider } from '../components/GlobalTempoSlider';
import { ClearPatternControls } from '../components/ClearPatternControls';

export default function RythmPage() {
  const { dispatch } = useGlobalState();

  return (
    <Flex justifyContent="space-between">
      <h1>Bungi</h1>
      <ClearPatternControls />
      <SelectDrumSampler />
      <GlobalTempoSlider />
      <Button type="button" onClick={() => startRhythm(dispatch)}>
        {Transport.state !== 'started' ? 'Play' : 'Pause'}
      </Button>
      <SelectDrumSound />
      <StepSequencer />
    </Flex>
  );
}

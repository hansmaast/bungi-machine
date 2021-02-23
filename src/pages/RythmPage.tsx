import { Transport } from 'tone';
import { SelectDrumSound } from '../components/SelectDrumSound';
import StepSequencer from '../components/StepSequencer';
import { useGlobalState } from '../context/GlobalState';
import { startRhythm } from '../helpers/actions';
import { Button } from '../style/button';
import { Flex } from '../style/flex';

export default function RythmPage() {
  const { state, dispatch } = useGlobalState();

  Transport.loop = state.isLooping;
  Transport.loopEnd = state.loopEnd;

  return (
    <Flex justifyContent="space-between">
      <h1>Bungi</h1>
      <Button type="button" onClick={() => startRhythm(dispatch)}>
        {Transport.state !== 'started' ? 'Play' : 'Pause'}
      </Button>
      <SelectDrumSound />
      <StepSequencer />
    </Flex>
  );
}

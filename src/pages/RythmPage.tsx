import { Transport } from 'tone';
import { ClearPatternControls } from '../components/ClearPatternControls';
import { SelectDrumSound } from '../components/SelectDrumSound';
import StepSequencer from '../components/StepSequencer';
import { useGlobalState } from '../context/GlobalState';
import { startRhythm } from '../helpers/actions';
import { Button } from '../style/button';
import { Flex } from '../style/flex';
import { Title } from '../style/title';

export default function RythmPage() {
  const { dispatch } = useGlobalState();

  return (
    <Flex>
      <Title>Bungi</Title>
      <ClearPatternControls />
      <Button marginY={0} onClick={() => startRhythm(dispatch)}>
        {Transport.state !== 'started' ? 'Play' : 'Pause'}
      </Button>
      <SelectDrumSound />
      <StepSequencer />
    </Flex>
  );
}

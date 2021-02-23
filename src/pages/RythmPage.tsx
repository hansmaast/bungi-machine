import { Transport } from 'tone';
import StepSequencer from '../components/StepSequencer';
import { useGlobalState } from '../context/GlobalState';
import { startRhythm } from '../helpers/actions';
import { sineAmpEnv, sineOsc } from '../sounds';
import { Button } from '../style/button';
import { Flex } from '../style/flex';

export default function RythmPage() {
  const { state, dispatch } = useGlobalState();

  Transport.loop = state.isLooping;
  Transport.loopEnd = state.loopEnd;

  return (
    <Flex justifyContent="space-between">
      <h1>Rhythm!</h1>
      <Button type="button" onClick={() => startRhythm(dispatch)}>
        {Transport.state !== 'started' ? 'Play' : 'Pause'}
      </Button>
      <header>
        <Flex hideScrollbar borderRightWidth={8} borderColor="transparent" borderRightStyle="solid" p="0" maxWidth="100vw" flexDirection="row" overflowX="scroll" justifyContent="space-between">
          <Button> Kick </Button>
          <Button> Snare </Button>
          <Button> Hi-Closed </Button>
          <Button> Hi-Open </Button>
          <Button> TomTom </Button>
        </Flex>
      </header>
      <StepSequencer
        envelope={sineAmpEnv}
        oscillator={sineOsc}
        steps={state.steps}
        visible
      />
    </Flex>
  );
}

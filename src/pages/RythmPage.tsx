/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import { Draw, start as startTone, Transport } from 'tone';
import { ClearPatternControls } from '../components/ClearPatternControls';
import { SelectDrumPattern } from '../components/SelectDrumPattern';
import { SelectDrumSound } from '../components/SelectDrumSound';
import StepSequencer from '../components/StepSequencer';
import { useGlobalState } from '../context/GlobalState';
import { Button } from '../style/button';
import { Flex } from '../style/flex';
import { Title } from '../style/title';

function getPositionWithoutDecimals() {
  const position = Transport.position.toString();
  return position.slice(0, position.indexOf('.'));
}

let loopIndex = 0;
export default function RythmPage() {
  const { state, dispatch } = useGlobalState();
  const handleLoopClick = () => dispatch({ type: 'TOGGLE_LOOP_PATTERNS' });

  function scheduleRepeat(interval = '16n') {
    Transport.scheduleRepeat((time) => {
      const position = getPositionWithoutDecimals();
      Draw.schedule(() => {
        dispatch({ type: 'SET_ACTIVE_STEP', payload: position });
        if (position === '0:3:3' && state.loopPatterns) {
          loopIndex === state.activeLoopPatterns.length - 1 ? loopIndex = 0 : loopIndex++;

          const payload = state.activeLoopPatterns[loopIndex];

          dispatch({ type: 'SELECT_DRUM_PATTERN', payload });
        }
      }, time);
    }, interval);
  }

  async function startRhythm() {
    if (Transport.state === 'started') {
      return Transport.stop();
    }

    await startTone();

    scheduleRepeat();

    return Transport.start();
  }

  return (
    <Flex>
      <Title>Bungi</Title>
      <ClearPatternControls />
      <Flex flexDirection="row">
        <Button marginY={0} onClick={() => startRhythm()}>
          {Transport.state !== 'started' ? 'Play' : 'Stop'}
        </Button>
        <Button isSelected={state.loopPatterns} marginY={0} onClick={handleLoopClick}>♾</Button>
      </Flex>
      <SelectDrumSound />
      <SelectDrumPattern />
      <StepSequencer />
    </Flex>
  );
}

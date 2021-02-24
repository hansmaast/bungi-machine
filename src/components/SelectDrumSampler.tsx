import { useGlobalState } from '../context/GlobalState';
import { Button } from '../style/button';
import { Flex } from '../style/flex';
import { ACTIONS } from '../context/reducer';
import { SAMPLERS } from '../instruments/samplers';

export function SelectDrumSampler() {
  const { dispatch } = useGlobalState();
  return (
    <Flex flexDirection="row">
      <Button onClick={() => dispatch({
        type: ACTIONS.SELECT_DRUM_PRESET,
        payload: SAMPLERS.TR808,
      })}
      >
        TR808
      </Button>
      <Button onClick={() => dispatch({
        type: ACTIONS.SELECT_DRUM_PRESET,
        payload: SAMPLERS.CR78,
      })}
      >
        CR78
      </Button>
    </Flex>
  );
}

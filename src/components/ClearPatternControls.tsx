import { useGlobalState } from '../context/GlobalState';
import { Button } from '../style/button';
import { Flex } from '../style/flex';

export function ClearPatternControls() {
  const { state, dispatch } = useGlobalState();
  return (
    <Flex flexDirection="row">
      <Button
        type="button"
        onClick={() => dispatch({
          type: 'CLEAR_ALL', payload: null,
        })}
      >
        CLEAR ALL
      </Button>
      <Button
        type="button"
        onClick={() => dispatch({
          type: 'CLEAR_PATTERN',
          payload: state.selectedDrumSound,
        })}
      >
        CLEAR SELECTED
      </Button>
    </Flex>
  );
}

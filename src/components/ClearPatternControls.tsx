import { useGlobalState } from '../context/GlobalState';
import { Button } from '../style/button';
import { Flex } from '../style/flex';
import { ACTIONS } from '../context/reducer';

export function ClearPatternControls() {
  const { state, dispatch } = useGlobalState();
  return (
    <Flex flexDirection="row">
      <Button
        type="button"
        onClick={() => dispatch({
          type: ACTIONS.CLEAR_ALL,
        })}
      >
        CLEAR ALL
      </Button>
      <Button
        type="button"
        onClick={() => dispatch({
          type: ACTIONS.CLEAR_PATTERN,
          payload: state.selectedDrumSound,
        })}
      >
        CLEAR SELECTED
      </Button>
    </Flex>
  );
}

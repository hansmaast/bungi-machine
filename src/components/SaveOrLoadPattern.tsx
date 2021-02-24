import { useGlobalState } from '../context/GlobalState';
import { Button } from '../style/button';
import { ACTIONS } from '../context/reducer';
import { Flex } from '../style/flex';

export function SaveOrLoadPattern() {
  const { dispatch } = useGlobalState();
  return (
    <Flex>
      <Button onClick={() => dispatch({ type: ACTIONS.SAVE_PATTERN, payload: 'test-kit-2' })}>
        SAVE
      </Button>
      <Button onClick={() => dispatch({ type: ACTIONS.LOAD_PATTERN, payload: 'test-kit-2' })}>
        LOAD
      </Button>
    </Flex>
  );
}

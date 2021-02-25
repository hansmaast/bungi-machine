import { useGlobalState } from '../context/GlobalState';
import { Button } from '../style/button';
import { Flex } from '../style/flex';

export function SaveOrLoadPattern() {
  const { dispatch } = useGlobalState();
  return (
    <Flex>
      <Button onClick={() => dispatch({ type: 'SAVE_PATTERN', payload: 'test-kit-2' })}>
        SAVE
      </Button>
      <Button onClick={() => dispatch({ type: 'LOAD_PATTERN', payload: 'test-kit-2' })}>
        LOAD
      </Button>
    </Flex>
  );
}

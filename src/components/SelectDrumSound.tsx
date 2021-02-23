import { DRUM } from '../constants';
import { useGlobalState } from '../context/GlobalState';
import { ACTIONS } from '../context/reducer';
import { Button } from '../style/button';
import { Flex } from '../style/flex';

export function SelectDrumSound() {
  const { state, dispatch } = useGlobalState();

  const handleClick = (e: any) => dispatch({
    type: ACTIONS.SELECT_DRUM,
    payload: e.currentTarget.name,
  });

  const isSelected = (name: string): boolean => state.selectedDrumSound === name;
  return (
    <header>
      <Flex hideScrollbar borderRightWidth={8} borderColor="transparent" borderRightStyle="solid" p="0" maxWidth="100vw" flexDirection="row" overflowX="scroll" justifyContent="space-between">
        <Button
          isSelected={isSelected(DRUM.KICK)}
          name={DRUM.KICK}
          onClick={handleClick}
        >
          Kick
        </Button>
        <Button
          isSelected={isSelected(DRUM.SNARE)}
          name={DRUM.SNARE}
          onClick={handleClick}
        >
          Snare
        </Button>
        <Button
          isSelected={isSelected(DRUM.HIHAT)}
          name={DRUM.HIHAT}
          onClick={handleClick}
        >
          Hi-Closed
        </Button>
        <Button
          isSelected={isSelected(DRUM.HIHAT_OPEN)}
          name={DRUM.HIHAT_OPEN}
          onClick={handleClick}
        >
          Hi-Open
        </Button>
        <Button
          isSelected={isSelected(DRUM.TOM)}
          name={DRUM.TOM}
          onClick={handleClick}
        >
          TomTom
        </Button>
      </Flex>
    </header>
  );
}

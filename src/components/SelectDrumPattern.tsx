import { useGlobalState } from '../context/GlobalState';
import { DrumPattern } from '../context/types';
import { Button } from '../style/button';
import { Grid } from '../style/grid';

export function SelectDrumPattern() {
  const { state, dispatch } = useGlobalState();

  const handleSelection = (pattern: DrumPattern) => {
    dispatch({ type: 'SELECT_DRUM_PATTERN', payload: pattern });
  };

  const isActive = (pattern: DrumPattern) => pattern === state.selectedDrumPattern;

  return (
    <Grid gridTemplateColumns={['repeat(4, 1fr)', 'repeat(8, 1fr)']} gridTemplateRows="1fr" gridGap="0">
      <Button isSelected={isActive('1')} onClick={() => handleSelection('1')}>1</Button>
      <Button isSelected={isActive('2')} onClick={() => handleSelection('2')}>2</Button>
      <Button isSelected={isActive('3')} onClick={() => handleSelection('3')}>3</Button>
      <Button isSelected={isActive('4')} onClick={() => handleSelection('4')}>4</Button>
      <Button isSelected={isActive('5')} onClick={() => handleSelection('5')}>5</Button>
      <Button isSelected={isActive('6')} onClick={() => handleSelection('6')}>6</Button>
      <Button isSelected={isActive('7')} onClick={() => handleSelection('7')}>7</Button>
      <Button isSelected={isActive('8')} onClick={() => handleSelection('8')}>8</Button>
    </Grid>
  );
}

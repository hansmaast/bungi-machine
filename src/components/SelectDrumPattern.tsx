import { useGlobalState } from '../context/GlobalState';
import { DrumPattern } from '../context/types';
import { Button } from '../style/button';
import { Grid } from '../style/grid';

export function SelectDrumPattern() {
  const { state, dispatch } = useGlobalState();

  const handleSelection = (pattern: DrumPattern) => {
    dispatch({ type: 'SELECT_DRUM_PATTERN', payload: pattern });
    if (state.selectedDrumPattern === pattern) {
      dispatch({ type: 'TOGGLE_LOOP_SELECTED_PATTERN', payload: pattern });
    }
  };

  const isSelected = (pattern: DrumPattern) => pattern === state.selectedDrumPattern;
  const isSelectedLoop = (pattern: DrumPattern) => state.activeLoopPatterns.includes(pattern)
    && state.loopPatterns;

  const drumPatterns: DrumPattern[] = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid gridTemplateColumns={['repeat(4, 1fr)', 'repeat(8, 1fr)']} gridTemplateRows="1fr" gridGap="0">
      {drumPatterns.map((pattern) => (
        <Button
          key={pattern}
          isSelectedLoop={isSelectedLoop(pattern)}
          isSelected={isSelected(pattern)}
          onClick={() => handleSelection(pattern)}
        >
          {pattern + 1}
        </Button>
      ))}
    </Grid>
  );
}

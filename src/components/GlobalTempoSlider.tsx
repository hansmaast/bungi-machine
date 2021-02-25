import { useGlobalState } from '../context/GlobalState';
import { Flex } from '../style/flex';
import { StyledSlider } from '../style/slider';

export function GlobalTempoSlider() {
  const { state, dispatch } = useGlobalState();
  return (
    <Flex>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>Tempo</label>
      <StyledSlider
        id="tempo"
        aria-label="Tempo"
        type="range"
        max={250}
        min={1}
        step={1}
        value={state.tempo}
        onChange={(e: any) => dispatch({
          type: 'SET_TEMPO',
          payload: e.currentTarget.value,
        })}
      />
    </Flex>
  );
}

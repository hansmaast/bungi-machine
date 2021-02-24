import { useGlobalState } from '../context/GlobalState';
import { ACTIONS } from '../context/reducer';
import { StyledSlider } from '../style/slider';

export function GlobalTempoSlider() {
  const { state, dispatch } = useGlobalState();
  return (
    <>
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
          type: ACTIONS.SET_TEMPO,
          payload: e.currentTarget.value,
        })}
      />
    </>
  );
}

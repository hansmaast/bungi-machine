import { useGlobalState } from '../context/GlobalState';
import { ACTIONS } from '../context/reducer';
import { StyledSlider } from '../style/slider';

export function MasterVolumeSlider() {
  const { state, dispatch } = useGlobalState();
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>Volume</label>
      <StyledSlider
        id="master-volume"
        aria-label="master-volume"
        type="range"
        max={20}
        min={-80}
        step={0.1}
        value={state.masterVolume}
        onChange={(e: any) => dispatch({
          type: ACTIONS.SET_MASTER_VOLUME,
          payload: e.currentTarget.value,
        })}
      />
    </>
  );
}

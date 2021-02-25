import { useGlobalState } from '../context/GlobalState';
import { Flex } from '../style/flex';
import { StyledSlider } from '../style/slider';

export function MasterVolumeSlider() {
  const { state, dispatch } = useGlobalState();
  return (
    <Flex>
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
          type: 'SET_MASTER_VOLUME',
          payload: e.currentTarget.value,
        })}
      />
    </Flex>
  );
}

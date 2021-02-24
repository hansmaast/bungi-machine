import { Sampler } from 'tone';
import { useGlobalState } from '../context/GlobalState';
import { Button } from '../style/button';
import { Flex } from '../style/flex';
import { ACTIONS } from '../context/reducer';
import { SAMPLERS } from '../instruments/samplers';
import { Title } from '../style/title';

const { TR808, CR78 } = SAMPLERS;

export function SelectDrumSampler() {
  const { state, dispatch } = useGlobalState();
  const { selectedSampler } = state;
  const handleSelection = (sampler :Sampler) => {
    dispatch({
      type: ACTIONS.SELECT_DRUM_PRESET,
      payload: sampler,
    });
  };

  console.log(state.selectedSampler.name);
  return (
    <Flex>
      <Title fontSize={3} fontWeight={500}>
        Select sampler
      </Title>
      <Flex flexDirection="row">
        <Button isActive={selectedSampler.name === 'TR808'} onClick={() => handleSelection(TR808)}>
          TR808
        </Button>
        <Button isActive={state.selectedSampler.name !== 'CR78'} onClick={() => handleSelection(CR78)}>
          CR78
        </Button>
      </Flex>
    </Flex>
  );
}

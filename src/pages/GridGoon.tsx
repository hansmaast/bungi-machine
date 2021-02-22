import { Flex } from '../style/box';
import { Grid } from '../style/grid';
import TriggerPoint from '../components/TriggerPoint';
import { bebopLocrian, numbers } from '../constants';
import { basicSynth } from '../sounds';

export default function GridGoon() {
  return (
    <Flex>
      <Grid>
        {
          numbers.map((number) => {
            let octave: string = '3';
            let note = bebopLocrian[number];
            if (number > 7) {
              note = bebopLocrian[number - bebopLocrian.length];
              octave = '2';
            }
            return (
              <TriggerPoint voice={basicSynth} note={note} octave={octave} />
            );
          })
        }
      </Grid>
    </Flex>
  );
}

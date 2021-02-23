import { Flex } from '../style/flex';
import { Grid } from '../style/grid';
import TriggerPoint from '../components/TriggerPoint';
import { bebopLocrian, numbers } from '../constants';
import { basicSynth } from '../instruments/synthesizers';

export default function GridGoon() {
  return (
    <Flex height="100%">
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

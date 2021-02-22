import * as Tone from 'tone';
import { Flex } from "../style/box";
import { Grid } from "../style/grid";
import { TriggerPoint } from "./TriggerPoint";

export const multiplier = 4;
const numbers = Array.from(Array(multiplier * multiplier).keys());

//create a synth and connect it to the main output (your speakers)
export const synth = new Tone.Synth().toDestination();
const bebopLocrian = [ 'C', 'Db', 'Eb', 'F', 'Gb', 'G', 'Ab', 'Bb'].reverse();

export default function GridGoon() {
    console.log(bebopLocrian);
    return (
        <Flex>
        <Grid>
            {
            numbers.map( (number, i) => {
                let octave: string = "3";
                let note = bebopLocrian[number];
                if (number > 7) {
                    note = bebopLocrian[number - bebopLocrian.length];
                    console.log(number - bebopLocrian.length)
                    octave = "2";    
                }
                return (
                     <TriggerPoint note={note} octave={octave}/>
                )
            })
}
        </Grid>
        </Flex>
    )
}

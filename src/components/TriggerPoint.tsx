import { useState } from "react";
import * as Tone from 'tone';
import { GridItem } from "../style/gridItem";
import { synth } from "../pages/GridGoon";

export default function TriggerPoint({ note, octave }: { note: string; octave: string; }) {
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const handleTouchStart = () => {
        setIsTouched(true);
        //play a middle 'C' for the duration of an 8th note
        // const note: string = getRandomNote(bebopLocrian) + getRandomNumber(2, 4).toString(10);
        console.log(note + octave);
        const now = Tone.now();
        synth.triggerAttack(note + octave, now);

    };

    const handleTouchEnd = () => {
        setIsTouched(false);
        synth.triggerRelease(Tone.now());
    };
    return (
        <GridItem
            isTouched={isTouched}
            // onMouseEnter={handleTouchStart} 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >{note + octave}</GridItem>
    );
};

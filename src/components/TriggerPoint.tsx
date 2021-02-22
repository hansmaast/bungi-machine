import { useState } from 'react';
import * as Tone from 'tone';
import { GridItem } from '../style/gridItem';

const synth = new Tone.Synth({
  envelope: {
    attack: 0.01,
    release: 0.2,
    sustain: 0.5,
  },
}).toDestination();

export default function TriggerPoint({ note, octave }: { note: string; octave: string; }) {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  // Use preventDefault() inside touch event handlers,
  // so the default mouse-emulation handling doesn’t occur.
  const handleTouchStart = (e: any) => {
    e.preventDefault();
    setIsTouched(true);
    // play a middle 'C' for the duration of an 8th note
    // const note: string = getRandomNote(bebopLocrian) + getRandomNumber(2, 4).toString(10);
    const now = Tone.now();
    synth.triggerAttack(note + octave, now);
  };

  const handleTouchEnd = (e: any) => {
    e.preventDefault();
    setIsTouched(false);
    synth.triggerRelease(Tone.now());
  };
  return (
    <GridItem
      isTouched={isTouched}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {note + octave}
    </GridItem>
  );
}

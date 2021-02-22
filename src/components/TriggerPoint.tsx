import { useState } from 'react';
import * as Tone from 'tone';
import { Synth, SynthOptions } from 'tone';
import { GridItem } from '../style/gridItem';

interface Props {
  voice: Synth<SynthOptions>;
  note: string;
  octave: string;
}

export default function TriggerPoint({ voice, note, octave }: Props) {
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const handleTouchStart = (e: any) => {
    e.preventDefault();
    setIsTouched(true);
    voice.triggerAttack(note + octave, Tone.now());
  };

  const handleTouchEnd = (e: any) => {
    e.preventDefault();
    setIsTouched(false);
    voice.triggerRelease(Tone.now());
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

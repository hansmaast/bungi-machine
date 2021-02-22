import * as Tone from 'tone';

export const multiplier = 4;
export const numbers = Array.from(Array(multiplier * multiplier).keys());
// create a synth and connect it to the main output (your speakers)

export const synth = new Tone.Synth().toDestination();
export const bebopLocrian = ['C', 'Db', 'Eb', 'F', 'Gb', 'G', 'Ab', 'Bb'].reverse();

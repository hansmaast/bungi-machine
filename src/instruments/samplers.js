import { Sampler } from 'tone';
/**
 * This file is .js cause .ts caused trouble when importing audio.
 */

import kick from '../assets/drums/CR78/kick.mp3';
import snare from '../assets/drums/CR78/snare.mp3';
import hihat from '../assets/drums/CR78/hihat.mp3';
import tom from '../assets/drums/CR78/tom1.mp3';

export const sampler = new Sampler({
  urls: {
    C1: kick,
    D1: snare,
    E1: hihat,
    F1: tom,
  },
}).toDestination();

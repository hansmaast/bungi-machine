/**
 * This file is .js cause .ts caused trouble when importing audio.
 */
import { Sampler } from 'tone';
import { CR78_URLS } from '../assets/drums/CR78';
import { TR808_URLS } from '../assets/drums/TR808';

const CR78 = new Sampler({
  urls: CR78_URLS,
}).toDestination();

const TR808 = new Sampler({
  urls: TR808_URLS,
}).toDestination();

export const SAMPLERS = {
  CR78,
  TR808,
};

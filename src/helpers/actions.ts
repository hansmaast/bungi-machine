import { Draw, Transport } from 'tone';
import { start as startTone } from 'tone/build/esm/core/Global';

function getPositionWithoutDecimals() {
  const position = Transport.position.toString();
  return position.slice(0, position.indexOf('.'));
}

function scheduleRepeat(setActiveStep: any, interval = '16n') {
  Transport.scheduleRepeat((time) => {
    const position = getPositionWithoutDecimals();

    Draw.schedule(() => {
      setActiveStep(position);
    }, time);
  }, interval);
}

// eslint-disable-next-line import/prefer-default-export
interface Args {
   setActiveEightStep: any;
   setActiveSixteenStep: any;
}
export async function startOrPauseRhythm({ setActiveEightStep, setActiveSixteenStep }: Args) {
  if (Transport.state === 'started') {
    Transport.pause();
    return;
  }
  await startTone();

  scheduleRepeat(setActiveEightStep, '16n');

  scheduleRepeat(setActiveSixteenStep, '16n');

  Transport.start();
}

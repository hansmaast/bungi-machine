import { Draw, Transport } from 'tone';
import { start as startTone } from 'tone/build/esm/core/Global';
import { ACTIONS } from '../context/reducer';

function getPositionWithoutDecimals() {
  const position = Transport.position.toString();
  return position.slice(0, position.indexOf('.'));
}

export function scheduleRepeat(dispatch: any, interval = '16n') {
  Transport.scheduleRepeat((time) => {
    const position = getPositionWithoutDecimals();

    Draw.schedule(() => {
      dispatch({ type: ACTIONS.SET_ACTIVE_STEP, payload: position });
      console.log(position);
    }, time);
  }, interval);
}

// eslint-disable-next-line import/prefer-default-export
export async function startRhythm(dispatch: any) {
  if (Transport.state === 'started') {
    return Transport.pause();
  }

  await startTone();

  scheduleRepeat(dispatch, '16n');

  return Transport.start();
}

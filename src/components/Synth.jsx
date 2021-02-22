// noinspection ES6CheckImport
import {
  Link, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import React from 'react';
import * as Tone from 'tone';
import PropTypes from 'prop-types';
import { chords } from '../helpers/chords';

// create a synth and connect it to the main output (your speakers)
const synth = new Tone.PolySynth(Tone.Synth, {
  maxPolyphony: 5,
  oscillator: {
    type: 'sine',
  },
  envelopeAtom: {
    attack: 0.1,
    decay: 0.2,
    sustain: 0.3,
    release: 0.1,
  },
  volume: -15,
});
export default function Synth() {
  // effects
  const filter = new Tone.Filter(500, 'highpass');
  const lpf = new Tone.Filter(7000, 'lowpass');
  const feedbackDelay = new Tone.FeedbackDelay({
    delayTime: 0.350,
    feedback: 0.55,
    wet: 0.3,
  });

  synth.chain(filter, lpf, feedbackDelay, Tone.Destination);

  const playNotes = (notes = chords.CMaj7) => {
    const now = Tone.now();
    let time = 0;
    const interval = 0.25;
    const triggerAttack = () => {
      notes.forEach((note) => {
        synth.triggerAttack(note, now + time);
        time += interval;
      });
    };
    const triggerRelease = () => {
      synth.triggerRelease(notes);
    };

    const triggerAttackAndRelease = () => {
      triggerAttack();
      synth.triggerRelease(notes, now + (interval * notes.length));
    };

    return {
      triggerAttack,
      triggerRelease,
      triggerAttackAndRelease,
    };
  };
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/four`}>
          <Chord
            text="Four"
            link={{ text: 'One', path: `${match.url}/` }}
            onClick={() => playNotes(chords.FMaj7).triggerAttackAndRelease()}
            onMouseDown={() => playNotes(chords.FMaj7).triggerAttack()}
            onMouseUp={() => playNotes(chords.FMaj7).triggerRelease()}
          />
        </Route>
        <Route path={`${match.path}/three`}>
          <Chord
            text="Three"
            link={{ text: 'Four', path: `${match.url}/four` }}
            onClick={() => playNotes(chords.Em7).triggerAttackAndRelease()}
            onMouseDown={() => playNotes(chords.Em7).triggerAttack()}
            onMouseUp={() => playNotes(chords.Em7).triggerRelease()}
          />
        </Route>
        <Route path={`${match.path}/two`}>
          <Chord
            text="Two"
            link={{ text: 'Three', path: `${match.url}/three` }}
            onClick={() => playNotes(chords.Dm7).triggerAttackAndRelease()}
            onMouseDown={() => playNotes(chords.Dm7).triggerAttack()}
            onMouseUp={() => playNotes(chords.Dm7).triggerRelease()}
          />
        </Route>
        <Route path={`${match.path}/`}>
          <Chord
            onMouseDown={() => playNotes(chords.CMaj7).triggerAttack()}
            onMouseUp={() => playNotes(chords.CMaj7).triggerRelease()}
            text="One"
            link={{ text: 'Two', path: `${match.url}/two` }}
            onClick={() => playNotes(chords.CMaj7).triggerAttackAndRelease()}
          />
        </Route>
      </Switch>
    </>
  );
}

function Chord({
  text, link, onClick, onMouseDown, onMouseUp,
}) {
  return (
    <>
      <h2>
        <span
          tabIndex={0}
          role="button"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          { text }
        </span>
      </h2>
      <Link onClick={onClick} to={link.path}>{ link.text }</Link>
    </>
  );
}

Chord.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
};

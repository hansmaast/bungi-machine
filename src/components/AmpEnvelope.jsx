import PropTypes from 'prop-types';
import Slider from './Slider';

export default function AmpEnvelope({ settings }) {
  return (
    <div>
      {Object.entries(settings).map(
        ([key, value]) => (
          <Slider
            key={key}
            label={key.toLocaleUpperCase('en')}
            value={value}
            onChange={(e) => {
              // eslint-disable-next-line no-param-reassign
              settings[key] = parseFloat(e.target.value);
            }}
          />
        ),
      )}
    </div>
  );
}

AmpEnvelope.propTypes = {
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
};

/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

export default function Slider({ value, label, onChange }) {
  return (
    <label htmlFor="env-input">
      { label }
      <input
        className="env-input"
        aria-label={label}
        type="range"
        max={1}
        min={0.001}
        step={0.001}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

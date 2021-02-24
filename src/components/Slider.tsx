interface Props {
  value: number;
  label: string;
  onChange(): void;
}

export default function Slider({ value, label, onChange }: Props) {
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

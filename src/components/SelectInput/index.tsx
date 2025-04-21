import styles from './styles.module.css';

export type SelectInputProps = {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
};

export function SelectInput({
  label,
  options,
  value,
  onChange,
}: SelectInputProps) {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <select
        className={styles.select}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

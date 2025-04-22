import styles from './styles.module.css';

type ToggleSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
};

export function ToggleSwitch({
  checked,
  onChange,
  label,
  className,
}: ToggleSwitchProps) {
  return (
    <label className={styles.wrapper}>
      {label && (
        <span className={`${styles.label}${className ? ` ${className}` : ''}`}>
          {label}
        </span>
      )}
      <input
        type='checkbox'
        className={styles.input}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <span className={styles.slider} />
    </label>
  );
}

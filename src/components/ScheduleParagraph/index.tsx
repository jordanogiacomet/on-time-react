import styles from './styles.module.css';

type ScheduleParagraphProps = {
  type: 'Time' | 'Place' | 'Notes';
  value: string;
};

export function ScheduleParagraph({ type, value }: ScheduleParagraphProps) {
  return (
    <p className={styles.scheduleParagraph}>
      <span className={styles.scheduleLabel}>{type}</span>
      <span className={styles.scheduleValue}>{value}</span>
    </p>
  );
}

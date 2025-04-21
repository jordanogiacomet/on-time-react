import styles from './styles.module.css';

type ScheduleCardProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export function ScheduleCard({ children, disabled }: ScheduleCardProps) {
  return (
    <div
      className={`${styles.scheduleCardContainer} ${
        disabled ? styles.disabled : ''
      }`}
    >
      {children}
    </div>
  );
}

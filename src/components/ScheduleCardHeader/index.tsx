import styles from './styles.module.css';
import { Square, SquareCheckBig } from 'lucide-react';

type ScheduleCardHeaderProps = {
  title: string;
  disabled?: boolean;
  onToggle: () => void;
};

export function ScheduleCardHeader({
  title,
  disabled,
  onToggle,
}: ScheduleCardHeaderProps) {
  return (
    <div
      className={`${styles.scheduleHeader} ${disabled ? styles.disabled : ''}`}
    >
      <h3 className={styles.title}>{title}</h3>
      <button
        onClick={onToggle}
        type='button'
        aria-label={disabled ? 'Marcar como pendente' : 'Marcar como concluído'}
      >
        {!disabled ? <Square size={20} /> : <SquareCheckBig size={20} />}
      </button>
    </div>
  );
}

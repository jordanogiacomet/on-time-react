import { format, addMonths } from 'date-fns';

import styles from './styles.module.css';
import { MoveLeft, MoveRight } from 'lucide-react';

type CalendarHeaderProps = {
  month: Date;
  onMonthChange: (newMonth: Date) => void;
};

export function CalendarHeader({ month, onMonthChange }: CalendarHeaderProps) {
  return (
    <header className={styles.header}>
      <button
        className={styles.button}
        onClick={() => onMonthChange(addMonths(month, -1))}
      >
        <MoveLeft />
      </button>
      <h2 className={styles.text}>
        {format(month, 'MMMM yyyy').toUpperCase()}
      </h2>
      <button
        className={styles.button}
        onClick={() => onMonthChange(addMonths(month, 1))}
      >
        <MoveRight />
      </button>
    </header>
  );
}

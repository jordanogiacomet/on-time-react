import styles from './styles.module.css';
import { format } from 'date-fns';

export type CalendarGridProps = {
  days: Date[];
  month: Date;
  selected: Date;
  onSelect: (day: Date) => void;
};

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export function CalendarGrid({
  days,
  month,
  selected,
  onSelect,
}: CalendarGridProps) {
  return (
    <div className={styles.calendarGrid}>
      <div className={styles.calendarWeekDays}>
        {WEEKDAYS.map(d => (
          <div key={d} className={styles.calendarWeekDay}>
            {d}
          </div>
        ))}
      </div>

      <div className={styles.days}>
        {days.map(day => {
          const inMonth = day.getMonth() === month.getMonth();
          const isToday =
            format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
          const isSelected =
            format(day, 'yyyy-MM-dd') === format(selected, 'yyyy-MM-dd');

          return (
            <button
              key={day.toISOString()}
              onClick={() => inMonth && onSelect(day)}
              className={[
                styles.calendarDay,
                !inMonth && styles.disabled,
                isToday && styles.today,
                isSelected && styles.selected,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

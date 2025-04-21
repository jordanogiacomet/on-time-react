import { useState } from 'react';
import { generateCalendarDays } from '../../utils/calendar';
import { CalendarHeader } from '../CalendarHeader';
import styles from './styles.module.css';
import { CalendarGrid } from '../CalendarGrid';

export type CalendarProps = {
  value: Date;
  onChange: (day: Date) => void;
};

export function Calendar({ value, onChange }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(value);

  const days = generateCalendarDays(currentMonth);

  return (
    <div className={styles.calendarContainer}>
      <CalendarHeader month={currentMonth} onMonthChange={setCurrentMonth} />
      <CalendarGrid
        days={days}
        month={currentMonth}
        selected={value}
        onSelect={onChange}
      />
    </div>
  );
}

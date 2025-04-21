import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from 'date-fns';

export function generateCalendarDays(month: Date): Date[] {
  const firstOfMonth = startOfMonth(month);
  const lastOfMonth = endOfMonth(month);

  const start = startOfWeek(firstOfMonth, { weekStartsOn: 0 });
  const end = endOfWeek(lastOfMonth, { weekStartsOn: 0 });

  const days: Date[] = [];
  let cursor = start;

  while (cursor <= end) {
    days.push(cursor);
    cursor = addDays(cursor, 1);
  }

  return days;
}

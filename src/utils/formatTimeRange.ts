import { format } from 'date-fns';

export function formatTimeRange(
  start: Date | number | string,
  finish: Date | number | string,
): string {
  const fmt = (d: Date | number | string) =>
    format(new Date(d), 'hh.mm a').toLowerCase();
  return `${fmt(start)} - ${fmt(finish)}`;
}

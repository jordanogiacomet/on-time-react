import { format } from 'date-fns';

export function formatDate(
  dateLike: Date | string | number,
  pattern = 'dd/MM/yyyy',
): string {
  return format(new Date(dateLike), pattern);
}

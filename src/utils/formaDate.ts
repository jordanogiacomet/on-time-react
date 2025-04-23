import { format } from 'date-fns';

export function formatDate(dateLike: Date | string | number): string {
  return format(new Date(dateLike), 'dd/MM/yyyy');
}

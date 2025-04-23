export type NoteModel = {
  id: number;
  title?: string;
  description: string;
  pin: boolean;
  date: Date;
  dateFormatted: string;
};

export type ReminderOffset = 1 | 10 | 15;

export type ReminderUnit = 'minutes';

export type Reminder =
  | { enabled: false }
  | { enabled: true; offset: ReminderOffset; unit: ReminderUnit };

// seu modelo de schedule
export type RepeatOption = 'oneTime' | 'daily' | 'weekly';

export type ScheduleModel = {
  id: number;
  title: string;
  fullDay: boolean;
  start: Date;
  end: Date;
  repeat: RepeatOption;
  reminder: Reminder;
  place: string;
  note?: string;
  completed: boolean;
};

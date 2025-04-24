import type { ScheduleModel } from '../models/Schedule/ScheduleModel';

let instance: ReminderWorkerManager | null = null;

export class ReminderWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(
      new URL('../workers/reminderWorker.ts', import.meta.url),
    );
  }

  static getInstance() {
    if (!instance) instance = new ReminderWorkerManager();
    return instance;
  }

  start(schedules: ScheduleModel[]) {
    const payload = schedules.reduce<
      Array<{ id: number; startTimestamp: number; offsetMs: number }>
    >((acc, s) => {
      if (s.reminder.enabled) {
        acc.push({
          id: s.id,
          startTimestamp: new Date(s.start).getTime(),
          offsetMs: s.reminder.offset * 60_000,
        });
      }
      return acc;
    }, []);

    this.worker.postMessage(payload);
  }

  onReminder(callback: (id: number) => void) {
    this.worker.onmessage = (e: MessageEvent) => callback(e.data.id);
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}

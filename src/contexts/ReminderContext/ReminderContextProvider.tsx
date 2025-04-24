// src/contexts/ReminderContext/ReminderContextProvider.tsx
import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useScheduleContext } from '../ScheduleContext/useScheduleContext';
import { useSettingsContext } from '../SettingsContext/useSettingsContext';
import { ReminderWorkerManager } from '../../workers/ReminderWorkerManager';
import { loadBeep } from '../../utils/loadBeep';

const ReminderContext = createContext({});

export function ReminderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state: scheduleState } = useScheduleContext();
  const { state: settings } = useSettingsContext();

  const playBeepRef = useRef<() => void | null>(null);
  const mgr = ReminderWorkerManager.getInstance();

  // monta o beep quando muda o áudio
  useEffect(() => {
    playBeepRef.current = settings.audioEnabled ? loadBeep() : null;
  }, [settings.audioEnabled]);

  // configura o worker para disparar notificações e áudio
  useEffect(() => {
    mgr.start(scheduleState.schedules);

    mgr.onReminder(id => {
      const sch = scheduleState.schedules.find(s => s.id === id);
      if (!sch || !sch.reminder.enabled) return;

      const { offset, unit } = sch.reminder;

      if (settings.notificationBar && 'Notification' in window) {
        Notification.requestPermission().then(p => {
          if (p === 'granted') {
            new Notification('Reminder', {
              body: `Upcoming: ${sch.title} in ${offset} ${unit}`,
            });
          }
        });
      }

      // toca o beep se habilitado
      playBeepRef.current?.();
    });

    return () => {
      mgr.terminate();
      playBeepRef.current = null;
    };
  }, [
    scheduleState.schedules,
    settings.notificationBar,
    /* note: audioEnabled já controlado acima */
    ,
  ]);

  return (
    <ReminderContext.Provider value={{}}>{children}</ReminderContext.Provider>
  );
}

export const useReminder = () => useContext(ReminderContext);

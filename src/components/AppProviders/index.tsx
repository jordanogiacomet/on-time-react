import React from 'react';
import { ScheduleContextProvider } from '../../contexts/ScheduleContext/ScheduleContextProvider';
import { NoteContextProvider } from '../../contexts/NoteContext/NoteContextProvider';
import { SettingsContextProvider } from '../../contexts/SettingsContext/SettingsContextProvider';
import { ReminderContextProvider } from '../../contexts/ReminderContext/ReminderContextProvider';

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ReminderContextProvider>
      <SettingsContextProvider>
        <ScheduleContextProvider>
          <NoteContextProvider>{children}</NoteContextProvider>
        </ScheduleContextProvider>
      </SettingsContextProvider>
    </ReminderContextProvider>
  );
}

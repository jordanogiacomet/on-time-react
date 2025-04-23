import React from 'react';
import { ScheduleContextProvider } from '../../contexts/ScheduleContext/ScheduleContextProvider';
import { NoteContextProvider } from '../../contexts/NoteContext/NoteContextProvider';

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ScheduleContextProvider>
      <NoteContextProvider>{children}</NoteContextProvider>
    </ScheduleContextProvider>
  );
}

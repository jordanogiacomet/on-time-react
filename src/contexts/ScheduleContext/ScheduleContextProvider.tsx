import React, { useReducer } from 'react';
import { scheduleReducer } from './scheduleReducer';
import { initialScheduleState } from './initialScheduleState';
import { ScheduleContext } from './ScheduleContext';

type ScheduleContextProviderProps = {
  children: React.ReactNode;
};

export function ScheduleContextProvider({
  children,
}: ScheduleContextProviderProps) {
  const [state, dispatch] = useReducer(scheduleReducer, initialScheduleState);

  return (
    <ScheduleContext.Provider value={{ state, dispatch }}>
      {children}
    </ScheduleContext.Provider>
  );
}

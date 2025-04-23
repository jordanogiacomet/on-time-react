import React, { useEffect, useReducer } from 'react';
import { scheduleReducer } from './scheduleReducer';
import { initialScheduleState } from './initialScheduleState';
import { ScheduleContext } from './ScheduleContext';
import { ScheduleStateModel } from '../../models/Schedule/ScheduleStateModel';

type ScheduleContextProviderProps = {
  children: React.ReactNode;
};

export function ScheduleContextProvider({
  children,
}: ScheduleContextProviderProps) {
  const [state, dispatch] = useReducer(
    scheduleReducer,
    initialScheduleState,
    () => {
      const storageState = localStorage.getItem('state');

      if (!storageState) return initialScheduleState;

      const parsedStorageState = JSON.parse(storageState) as ScheduleStateModel;

      return {
        ...parsedStorageState,
      };
    },
  );

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <ScheduleContext.Provider value={{ state, dispatch }}>
      {children}
    </ScheduleContext.Provider>
  );
}

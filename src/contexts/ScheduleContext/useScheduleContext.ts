import { useContext } from 'react';
import { ScheduleContext } from './ScheduleContext';

export function useScheduleContext() {
  return useContext(ScheduleContext);
}

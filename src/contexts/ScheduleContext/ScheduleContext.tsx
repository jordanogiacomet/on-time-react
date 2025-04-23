import React, { createContext } from 'react';
import { ScheduleStateModel } from '../../models/Schedule/ScheduleStateModel';
import { ScheduleActionModel } from './scheduleActions';
import { initialScheduleState } from './initialScheduleState';

type ScheduleContextProps = {
  state: ScheduleStateModel;
  dispatch: React.Dispatch<ScheduleActionModel>;
};

const initialContextValue = {
  state: initialScheduleState,
  dispatch: () => {},
};

export const ScheduleContext =
  createContext<ScheduleContextProps>(initialContextValue);

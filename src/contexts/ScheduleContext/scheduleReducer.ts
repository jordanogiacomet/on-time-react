import { ScheduleStateModel } from '../../models/Schedule/ScheduleStateModel';
import { ScheduleActionModel, ScheduleActionTypes } from './scheduleActions';

export function scheduleReducer(
  state: ScheduleStateModel,
  action: ScheduleActionModel,
): ScheduleStateModel {
  switch (action.type) {
    case ScheduleActionTypes.TOGGLE_SCHEDULE: {
      return {
        ...state,
        schedules: state.schedules.map(schedule =>
          schedule.id === action.payload.id
            ? { ...schedule, completed: !schedule.completed }
            : schedule,
        ),
      };
    }
    case ScheduleActionTypes.SUBMIT_SCHEDULE: {
      const newSchedule = action.payload;
      return {
        ...state,
        schedules: [...state.schedules, newSchedule],
      };
    }
  }

  return state;
}

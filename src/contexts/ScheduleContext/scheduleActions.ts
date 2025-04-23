import { ScheduleModel } from '../../models/Schedule/ScheduleModel';

export enum ScheduleActionTypes {
  TOGGLE_SCHEDULE = 'TOGGLE_SCHEDULE',
  SUBMIT_SCHEDULE = 'SUBMIT_SCHEDULE',
  DELETE_SCHEDULE = 'DELETE_SCHEDULE',
}

export type ScheduleActionWithPayload =
  | {
      type: ScheduleActionTypes.SUBMIT_SCHEDULE;
      payload: ScheduleModel;
    }
  | {
      type: ScheduleActionTypes.TOGGLE_SCHEDULE;
      payload: Pick<ScheduleModel, 'id'>;
    };

export type ScheduleActionWithoutPayload = {
  type: ScheduleActionTypes.DELETE_SCHEDULE;
};

export type ScheduleActionModel =
  | ScheduleActionWithPayload
  | ScheduleActionWithoutPayload;

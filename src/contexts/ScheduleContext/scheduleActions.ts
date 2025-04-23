import { ScheduleModel } from '../../models/ScheduleModel';

export enum ScheduleActionTypes {
  TOGGLE_SCHEDULE = 'TOGGLE_SCHEDULE',
  SUBMIT_FORM = 'SUBMIT_FORM',
  DELETE_SCHEDULE = 'DELETE_SCHEDULE',
}

export type ScheduleActionWithPayload =
  | {
      type: ScheduleActionTypes.SUBMIT_FORM;
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

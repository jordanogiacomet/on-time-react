import { NoteModel } from '../../models/Note/NoteModel';

export enum NoteActionTypes {
  SUBMIT_NOTE = 'SUBMIT_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
  TOGGLE_PIN = 'TOGGLE_PIN',
}

export type NoteActionWithPayload =
  | {
      type: NoteActionTypes.SUBMIT_NOTE;
      payload: NoteModel;
    }
  | { type: NoteActionTypes.TOGGLE_PIN; payload: Pick<NoteModel, 'id'> };

export type NoteActionWithoutPayload = {
  type: NoteActionTypes.DELETE_NOTE;
};

export type NoteActionModel = NoteActionWithPayload | NoteActionWithoutPayload;

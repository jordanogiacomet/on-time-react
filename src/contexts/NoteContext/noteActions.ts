import { NoteModel } from '../../models/Note/NoteModel';

export enum NoteActionTypes {
  SUBMIT_NOTE = 'SUBMIT_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
}

export type NoteActionWithPayload = {
  type: NoteActionTypes.SUBMIT_NOTE;
  payload: NoteModel;
};

export type NoteActionWithoutPayload = {
  type: NoteActionTypes.DELETE_NOTE;
};

export type NoteActionModel = NoteActionWithPayload | NoteActionWithoutPayload;

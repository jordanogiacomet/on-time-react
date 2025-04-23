import { NoteStateModel } from '../../models/Note/NoteStateModel';
import { NoteActionModel, NoteActionTypes } from './noteActions';

export function noteReducer(
  state: NoteStateModel,
  action: NoteActionModel,
): NoteStateModel {
  switch (action.type) {
    case NoteActionTypes.SUBMIT_NOTE: {
      const newNote = action.payload;
      return {
        ...state,
        notes: [...state.notes, newNote],
      };
    }
  }

  return state;
}

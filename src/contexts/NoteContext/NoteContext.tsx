import React, { createContext } from 'react';
import { NoteStateModel } from '../../models/Note/NoteStateModel';
import { NoteActionModel } from './noteActions';
import { initialNoteState } from './initialNoteState';

type NoteContextProps = {
  state: NoteStateModel;
  dispatch: React.Dispatch<NoteActionModel>;
};

const initialContextValue = {
  state: initialNoteState,
  dispatch: () => {},
};

export const NoteContext = createContext<NoteContextProps>(initialContextValue);

import React, { useReducer } from 'react';
import { noteReducer } from './noteReducer';
import { initialNoteState } from './initialNoteState';
import { NoteContext } from './NoteContext';

type NoteContextProviderProps = {
  children: React.ReactNode;
};

export function NoteContextProvider({ children }: NoteContextProviderProps) {
  const [state, dispatch] = useReducer(noteReducer, initialNoteState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
}

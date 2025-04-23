import React, { useEffect, useReducer } from 'react';
import { noteReducer } from './noteReducer';
import { initialNoteState } from './initialNoteState';
import { NoteContext } from './NoteContext';
import { NoteStateModel } from '../../models/Note/NoteStateModel';

type NoteContextProviderProps = {
  children: React.ReactNode;
};

export function NoteContextProvider({ children }: NoteContextProviderProps) {
  const [state, dispatch] = useReducer(noteReducer, initialNoteState, () => {
    const storageState = localStorage.getItem('notes');

    if (!storageState) return initialNoteState;

    const parsedStorageState = JSON.parse(storageState) as NoteStateModel;

    return {
      ...parsedStorageState,
    };
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state));
  }, [state]);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
}

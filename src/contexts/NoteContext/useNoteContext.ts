import { useContext } from 'react';
import { NoteContext } from './NoteContext';

export function useNoteContext() {
  return useContext(NoteContext);
}

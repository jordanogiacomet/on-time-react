import { Search } from 'lucide-react';
import { FloatingActionButton } from '../FloatingActionButton';
import { NoteCard } from '../NoteCard';
import { Fragment } from 'react/jsx-runtime';
import { TextInput } from '../TextInput';
import styles from './styles.module.css';
import { useNoteContext } from '../../contexts/NoteContext/useNoteContext';
import { NoteActionTypes } from '../../contexts/NoteContext/noteActions';

export function NotesSection() {
  const { state, dispatch } = useNoteContext();
  const pinnedNotes = state.notes.filter(n => n.pin);
  const otherNotes = state.notes.filter(n => !n.pin);
  const allNotes = [...pinnedNotes, ...otherNotes];

  function togglePin(id: number) {
    dispatch({
      type: NoteActionTypes.TOGGLE_PIN,
      payload: { id },
    });
  }

  return (
    <Fragment>
      <div className={styles.notesContainer}>
        <TextInput.Root>
          <TextInput.Icon icon={Search} />
          <TextInput.Element
            type='search'
            placeholder='Search'
            id='searchInput'
          />
        </TextInput.Root>
        {allNotes.map(note => (
          <NoteCard
            key={note.id}
            description={note.description}
            date={note.dateFormatted}
            hasPin={note.pin}
            onTogglePin={() => togglePin(note.id)}
          />
        ))}
        {allNotes.length === 0 && (
          <p className={styles.message}>You Didn’t Have Any Notes.</p>
        )}
      </div>
      <FloatingActionButton />
    </Fragment>
  );
}

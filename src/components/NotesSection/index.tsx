import { Search } from 'lucide-react';
import { FloatingActionButton } from '../FloatingActionButton';
import { NoteCard } from '../NoteCard';
import { Fragment } from 'react/jsx-runtime';
import { TextInput } from '../TextInput';
import styles from './styles.module.css';
import { useNoteContext } from '../../contexts/NoteContext/useNoteContext';

export function NotesSection() {
  const { state } = useNoteContext();
  const notesLength = state.notes.length;

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
        {state.notes.map(note => (
          <NoteCard description={note.description} date={note.dateFormatted} />
        ))}
        {notesLength <= 0 && (
          <div className={styles.messageContainer}>
            <p className={styles.message}>You Didn’t Have Any Notes.</p>
          </div>
        )}
      </div>
      <FloatingActionButton />
    </Fragment>
  );
}

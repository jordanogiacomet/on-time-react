import { Search } from 'lucide-react';
import { FloatingActionButton } from '../FloatingActionButton';
import { NoteCard } from '../NoteCard';
import { Fragment } from 'react/jsx-runtime';
import { TextInput } from '../TextInput';
import styles from './styles.module.css';
import { useNoteContext } from '../../contexts/NoteContext/useNoteContext';
import { NoteActionTypes } from '../../contexts/NoteContext/noteActions';
import { showMessage } from '../../adapters/showMessage';
import { useState } from 'react';
import { formatDate } from '../../utils/formaDate';

export function NotesSection() {
  const { state, dispatch } = useNoteContext();
  const [query, setQuery] = useState<string>('');

  const filtered = state.notes.filter(
    note =>
      (note.description.toLowerCase().includes(query) ||
        note.title?.toLowerCase().includes(query)) ??
      false,
  );

  const pinnedNotes = filtered.filter(note => note.pin);
  const otherNotes = filtered.filter(note => !note.pin);

  function togglePin(id: number) {
    showMessage.dismiss();

    dispatch({
      type: NoteActionTypes.TOGGLE_PIN,
      payload: { id },
    });
    state.notes.map(note => {
      if (note.id === id) {
        if (!note.pin) {
          showMessage.success('Note fixed with success!');
        } else {
          showMessage.success('Note unfixed with success!');
        }
      }
    });
  }

  return (
    <Fragment>
      <div className={styles.notesContainer}>
        <TextInput.Root>
          <TextInput.Icon icon={Search} />
          <TextInput.Element
            value={query}
            onChange={e => setQuery(e.target.value)}
            type='search'
            placeholder='Search'
            id='searchInput'
          />
        </TextInput.Root>
        {pinnedNotes.length > 0 && (
          <div className={styles.group}>
            <h4>Pinned</h4>
            {pinnedNotes.map(note => (
              <NoteCard
                key={note.id}
                description={note.description}
                date={formatDate(note.date, 'dd/MM/yyyy')}
                hasPin
                onTogglePin={() => togglePin(note.id)}
              />
            ))}
          </div>
        )}
        {otherNotes.length > 0 && (
          <div className={styles.group}>
            <h4>Others</h4>
            {otherNotes.map(note => (
              <NoteCard
                key={note.id}
                description={note.description}
                date={formatDate(note.date, 'dd/MM/yyyy')}
                hasPin={false}
                onTogglePin={() => togglePin(note.id)}
              />
            ))}
          </div>
        )}
        {filtered.length === 0 && (
          <div className={styles.messageContainer}>
            <p className={styles.message}>No notes found.</p>
          </div>
        )}
      </div>
      <FloatingActionButton />
    </Fragment>
  );
}

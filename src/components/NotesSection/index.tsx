import { Search } from 'lucide-react';
import { FloatingActionButton } from '../FloatingActionButton';
import { NoteCard } from '../NoteCard';
import { Fragment } from 'react/jsx-runtime';
import { TextInput } from '../TextInput';
import styles from './styles.module.css';

export function NotesSection() {
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
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
      <FloatingActionButton />
    </Fragment>
  );
}

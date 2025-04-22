import { Search } from 'lucide-react';
import { TextInput } from '../TextInput';
import styles from './styles.module.css';
import { FloatingActionButton } from '../FloatingActionButton';
import { NoteCard } from '../NoteCard';
import { Fragment } from 'react/jsx-runtime';

export function NotesSection() {
  return (
    <Fragment>
      <div className={styles.notesContainer}>
        <TextInput
          id='search'
          type='text'
          placeholder='Search note'
          icon={<Search size={20} />}
        />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
      <FloatingActionButton />
    </Fragment>
  );
}

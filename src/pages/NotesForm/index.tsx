import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import styles from './styles.module.css';
import { RouterLink } from '../../components/RouterLink';
import { ArrowLeft, EllipsisVertical, Pin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TextInput } from '../../components/TextInput';

export function NotesForm() {
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    document.body.classList.add('notes-new-bg');
    return () => {
      document.body.classList.remove('notes-new-bg');
    };
  }, []);

  return (
    <Fragment>
      <Container>
        <div className={styles.notesFormContainer}>
          <header className={styles.formHeader}>
            <nav className={styles.formNav}>
              <RouterLink href='/home/' className={styles.menuLink}>
                <ArrowLeft />
              </RouterLink>
              <div className={styles.iconsContainer}>
                <Pin />
                <EllipsisVertical />
              </div>
            </nav>
          </header>

          <form className={styles.form}>
            <div className={styles.formRow}>
              <TextInput.Root>
                <TextInput.Element
                  className={styles.input}
                  id='titleInput'
                  type='text'
                  placeholder='Title'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </TextInput.Root>
            </div>
            <div className={styles.formRow}>
              <textarea
                value={note}
                onChange={e => setNote(e.target.value)}
                id='text-area-input'
                className={styles.textArea}
                placeholder='Your text'
              />
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

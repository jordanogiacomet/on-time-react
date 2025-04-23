import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import styles from './styles.module.css';
import { ArrowLeft, EllipsisVertical, Pin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TextInput } from '../../components/TextInput';
import { Header } from '../../components/Header';

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
          <Header.Root>
            <Header.Nav>
              <Header.Link icon={ArrowLeft} href='/home/' />
              <Header.Icons>
                <Header.Action type='button' onClick={() => {}} icon={Pin} />
                <Header.Link icon={EllipsisVertical} href='/settings/' />
              </Header.Icons>
            </Header.Nav>
          </Header.Root>

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

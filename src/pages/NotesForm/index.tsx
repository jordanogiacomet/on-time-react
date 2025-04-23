import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import styles from './styles.module.css';
import { ArrowLeft, Check, EllipsisVertical, Pin, PinOff } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from '../../components/TextInput';
import { Header } from '../../components/Header';
import { TextArea } from '../../components/TextArea';
import { useNoteContext } from '../../contexts/NoteContext/useNoteContext';
import { showMessage } from '../../adapters/showMessage';
import { NoteModel } from '../../models/Note/NoteModel';
import { NoteActionTypes } from '../../contexts/NoteContext/noteActions';
import { formatDate } from '../../utils/formaDate';
import { useNavigate } from 'react-router-dom';

export function NotesForm() {
  const { dispatch } = useNoteContext();

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement>(null);
  const noteTitleInput = useRef<HTMLInputElement>(null);
  const noteDescriptionTextArea = useRef<HTMLTextAreaElement>(null);
  const [pin, setPin] = useState<boolean>(true);

  function handlePin() {
    setPin(prevState => !prevState);
  }

  function handleCreateNewNote(event: React.FormEvent<HTMLFormElement>) {
    showMessage.dismiss();
    event.preventDefault();

    if (!noteTitleInput.current) return;

    const noteTitle = noteTitleInput.current.value.trim();
    if (!noteTitle) {
      showMessage.warn('Write the title of the note!');
      return;
    }

    if (!noteDescriptionTextArea.current) return;

    const noteDescription = noteDescriptionTextArea.current.value.trim();
    if (!noteDescription) {
      showMessage.warn('Write the description of the note!');
      return;
    }

    const date = new Date();
    const dateFormatted = formatDate(date);

    const newNote: NoteModel = {
      id: Date.now(),
      pin: pin,
      title: noteTitle,
      description: noteDescription,
      date,
      dateFormatted,
    };

    dispatch({ type: NoteActionTypes.SUBMIT_NOTE, payload: newNote });
    showMessage.success('Note saved with success!');
    navigate('/home?tab=notes');
  }

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
              <Header.Link icon={ArrowLeft} href='/home?tab=notes' />
              <Header.Icons>
                <Header.Action
                  type='submit'
                  onClick={() => formRef.current?.requestSubmit()}
                  icon={Check}
                />
                <Header.Action
                  type='button'
                  onClick={handlePin}
                  icon={pin ? Pin : PinOff}
                />
                <Header.Link icon={EllipsisVertical} href='/settings/' />
              </Header.Icons>
            </Header.Nav>
          </Header.Root>

          <form
            onSubmit={handleCreateNewNote}
            ref={formRef}
            className={styles.form}
          >
            <div className={styles.formRow}>
              <TextInput.Root>
                <TextInput.Element
                  className={styles.input}
                  id='titleInput'
                  type='text'
                  placeholder='Title'
                  ref={noteTitleInput}
                />
              </TextInput.Root>
            </div>
            <div className={styles.formRow}>
              <TextArea
                ref={noteDescriptionTextArea}
                placeholder='Your text'
                id='descriptionInput'
              />
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

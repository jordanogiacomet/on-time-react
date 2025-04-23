import { ArrowLeft, Check, SquareCheckBig } from 'lucide-react';

import styles from './styles.module.css';
import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import { TextInput } from '../../components/TextInput';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import { useState } from 'react';
import { DateTimeRow } from '../../components/DataTimeRow';
import { SelectInput } from '../../components/SelectInput';
import { Header } from '../../components/Header';

export function ScheduleForm() {
  const [allDay, setAllDay] = useState(false);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [title, setTitle] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const repeatOptions = [
    { value: 'once', label: 'One time' },
    { value: 'daily', label: 'Daily' },
    /* ... */
  ];
  const [repeat, setRepeat] = useState('once');

  const reminderOptions = [
    { value: '5', label: 'Before 5 minutes' },
    { value: '10', label: 'Before 10 minutes' },
    { value: '15', label: 'Before 15 minutes' },
  ];

  const [reminder, setReminder] = useState('5');

  return (
    <Fragment>
      <Container>
        <div className={styles.scheduleFormContainer}>
          <Header.Root>
            <Header.Nav>
              <Header.Link icon={ArrowLeft} href='/home/' />
              <Header.Icons>
                <Header.Action
                  type='button'
                  onClick={() => {}}
                  icon={SquareCheckBig}
                />
                <Header.Action type='button' onClick={() => {}} icon={Check} />
              </Header.Icons>
            </Header.Nav>
          </Header.Root>
          <h2 className={styles.title}>Schedule</h2>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <TextInput.Root>
                <TextInput.Element
                  id='titleInput'
                  type='text'
                  placeholder='Title'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </TextInput.Root>
            </div>
            <div className={styles.formRow}>
              <ToggleSwitch
                checked={allDay}
                onChange={setAllDay}
                label='Fullday'
              />
            </div>
            <div className={styles.formRow}>
              <DateTimeRow
                label='Start from'
                date={startDate}
                onChange={setStartDate}
              />
            </div>
            <div className={styles.formRow}>
              <DateTimeRow
                label='Finish'
                date={endDate}
                onChange={setEndDate}
              />
            </div>
            <div className={styles.formRow}>
              <SelectInput
                label='Repeat'
                options={repeatOptions}
                value={repeat}
                onChange={setRepeat}
              />
            </div>
            <div className={styles.formRow}>
              <SelectInput
                label='Reminder'
                options={reminderOptions}
                value={reminder}
                onChange={setReminder}
              />
            </div>
            <div className={styles.formRow}>
              <TextInput.Root>
                <TextInput.Element
                  id='placeInput'
                  type='text'
                  placeholder='Place'
                  value={place}
                  onChange={e => setPlace(e.target.value)}
                />
              </TextInput.Root>
            </div>
            <div className={styles.formRow}>
              <TextInput.Root>
                <TextInput.Element
                  id='noteInput'
                  type='text'
                  placeholder='Notes'
                  value={note}
                  onChange={e => setNote(e.target.value)}
                />
              </TextInput.Root>
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

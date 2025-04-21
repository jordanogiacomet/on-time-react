import { ArrowLeft, Check, SquareCheckBig } from 'lucide-react';
import { RouterLink } from '../../components/RouterLink';

import styles from './styles.module.css';
import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import { TextInput } from '../../components/TextInput';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import { useState } from 'react';
import { DateTimeRow } from '../../components/DataTimeRow';
import { SelectInput } from '../../components/SelectInput';

export function ScheduleForm() {
  const [allDay, setAllDay] = useState(false);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

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
          <header className={styles.formHeader}>
            <nav className={styles.formNav}>
              <RouterLink href='/home/' className={styles.menuLink}>
                <ArrowLeft />
              </RouterLink>
              <div className={styles.iconsContainer}>
                <SquareCheckBig />
                <Check />
              </div>
            </nav>
          </header>
          <h2 className={styles.title}>Schedule</h2>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <TextInput id='titleInput' type='text' placeholder='Title' />
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
              <TextInput id='placeInput' type='text' placeholder='Place' />
            </div>
            <div className={styles.formRow}>
              <TextInput id='NotesInput' type='text' placeholder='Notes' />
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

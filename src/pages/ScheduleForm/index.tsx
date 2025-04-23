import { ArrowLeft, Check, SquareCheckBig } from 'lucide-react';

import styles from './styles.module.css';
import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import { TextInput } from '../../components/TextInput';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import React, { useRef, useState } from 'react';
import { DateTimeRow } from '../../components/DataTimeRow';
import { SelectInput } from '../../components/SelectInput';
import { Header } from '../../components/Header';
import { useScheduleContext } from '../../contexts/ScheduleContext/useScheduleContext';
import {
  Reminder,
  ReminderOffset,
  RepeatOption,
  ScheduleModel,
} from '../../models/Schedule/ScheduleModel';
import { ScheduleActionTypes } from '../../contexts/ScheduleContext/scheduleActions';
import { useNavigate } from 'react-router-dom';
import { showMessage } from '../../adapters/showMessage';

export function ScheduleForm() {
  const { dispatch } = useScheduleContext();
  const formRef = useRef<HTMLFormElement>(null);
  const [fullDay, setFullDay] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const scheduleNameInput = useRef<HTMLInputElement>(null);
  const schedulePlaceInput = useRef<HTMLInputElement>(null);
  const scheduleNoteInput = useRef<HTMLInputElement>(null);
  const [repeat, setRepeat] = useState<RepeatOption>('oneTime');
  const [reminder, setReminder] = useState<Reminder>({ enabled: false });

  const navigate = useNavigate();

  function handleToggleSwith() {
    setFullDay(prevState => !prevState);
  }

  function handleCreateNewSchedule(event: React.FormEvent<HTMLFormElement>) {
    showMessage.dismiss();
    event.preventDefault();

    if (!scheduleNameInput.current) return;

    const scheduleName = scheduleNameInput.current.value.trim();

    if (!scheduleName) {
      showMessage.warn('Write the name of the schedule!');
      return;
    }

    if (!schedulePlaceInput.current) return;

    const schedulePlace = schedulePlaceInput.current.value.trim();

    if (!schedulePlace) {
      showMessage.warn('Write the place of the schedule!');
      return;
    }

    if (!scheduleNoteInput.current) return;

    const scheduleNote = scheduleNoteInput.current.value.trim();
    if (!scheduleNote) {
      return;
    }

    const newSchedule: ScheduleModel = {
      id: Date.now(),
      title: scheduleName,
      place: schedulePlace,
      note: scheduleNote,
      fullDay,
      start: startDate,
      end: endDate,
      completed: false,
      reminder,
      repeat,
    };

    dispatch({
      type: ScheduleActionTypes.SUBMIT_SCHEDULE,
      payload: newSchedule,
    });
    showMessage.success('Schedule saved with success');
    navigate('/home?tab=schedule');
  }

  return (
    <Fragment>
      <Container>
        <div className={styles.scheduleFormContainer}>
          <Header.Root>
            <Header.Nav>
              <Header.Link icon={ArrowLeft} href='/home?tab=schedule' />
              <Header.Icons>
                <Header.Action
                  type='button'
                  onClick={() => {}}
                  icon={SquareCheckBig}
                />
                <Header.Action
                  type='submit'
                  onClick={() => formRef.current?.requestSubmit()}
                  icon={Check}
                />
              </Header.Icons>
            </Header.Nav>
          </Header.Root>
          <h2 className={styles.title}>Schedule</h2>
          <form
            ref={formRef}
            onSubmit={handleCreateNewSchedule}
            className={styles.form}
          >
            <div className={styles.formRow}>
              <TextInput.Root>
                <TextInput.Element
                  id='titleInput'
                  type='text'
                  placeholder='Title'
                  ref={scheduleNameInput}
                />
              </TextInput.Root>
            </div>
            <div className={styles.formRow}>
              <ToggleSwitch
                id='toggleInputDay'
                checked={fullDay}
                onChange={handleToggleSwith}
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
                options={[
                  { label: 'One time', value: 'oneTime' },
                  { label: 'Daily', value: 'daily' },
                  { label: 'Weekly', value: 'weekly' },
                ]}
                value={repeat}
                onChange={v => setRepeat(v as RepeatOption)}
              />
            </div>
            <div className={styles.formRow}>
              <ToggleSwitch
                id='toggleInputReminder'
                checked={reminder.enabled}
                onChange={enabled => {
                  if (enabled) {
                    setReminder({
                      enabled: true,
                      offset: 5 as ReminderOffset,
                      unit: 'minutes',
                    });
                  } else {
                    setReminder({ enabled: false });
                  }
                }}
                label='Reminder'
              />

              {reminder.enabled && (
                <>
                  <SelectInput
                    label='Notify'
                    options={[
                      { label: '5 minutes before', value: '5' },
                      { label: '10 minutes before', value: '10' },
                      { label: '15 minutes before', value: '15' },
                    ]}
                    value={reminder.offset.toString()}
                    onChange={v => {
                      const o = Number(v) as ReminderOffset;
                      setReminder({
                        enabled: true,
                        offset: o,
                        unit: 'minutes',
                      });
                    }}
                  />
                </>
              )}
            </div>
            <div className={styles.formRow}>
              <TextInput.Root>
                <TextInput.Element
                  id='placeInput'
                  type='text'
                  placeholder='Place'
                  ref={schedulePlaceInput}
                />
              </TextInput.Root>
            </div>
            <div className={styles.formRow}>
              <TextInput.Root>
                <TextInput.Element
                  id='noteInput'
                  type='text'
                  placeholder='Notes'
                  ref={scheduleNoteInput}
                />
              </TextInput.Root>
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

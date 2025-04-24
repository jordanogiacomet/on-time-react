import { Fragment, useState } from 'react';
import { Calendar } from '../Calendar';

import styles from './styles.module.css';
import { ScheduleCard } from '../ScheduleCard';
import { FloatingActionButton } from '../FloatingActionButton';
import { useScheduleContext } from '../../contexts/ScheduleContext/useScheduleContext';
import { formatTimeRange } from '../../utils/formatTimeRange';
import { ScheduleActionTypes } from '../../contexts/ScheduleContext/scheduleActions';
import { compareAsc, isSameDay } from 'date-fns';

export function ScheduleSection() {
  const { state, dispatch } = useScheduleContext();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const filteredPerDay = state.schedules
    .filter(schedule => isSameDay(new Date(schedule.start), selectedDate))
    .sort((a, b) => compareAsc(new Date(a.start), new Date(b.start)));

  const filteredLength = filteredPerDay.length;

  function handleToggle(id: number) {
    dispatch({
      type: ScheduleActionTypes.TOGGLE_SCHEDULE,
      payload: { id },
    });
  }

  return (
    <Fragment>
      <Calendar value={selectedDate} onChange={setSelectedDate} />
      <h2 className={styles.scheduleHeading}>Schedule</h2>
      {filteredLength > 0 && (
        <div className={styles.scheduleCardsContainer}>
          {filteredPerDay.map(schedule => (
            <ScheduleCard
              key={schedule.id}
              disabled={schedule.completed}
              onToggle={() => handleToggle(schedule.id)}
              title={schedule.title}
              time={formatTimeRange(schedule.start, schedule.end)}
              place={schedule.place}
              notes={schedule.note}
            />
          ))}
        </div>
      )}
      {filteredLength <= 0 && (
        <div className={styles.messageContainer}>
          <p className={styles.message}>You Didn’t Have Any Schedule.</p>
        </div>
      )}
      <FloatingActionButton />
    </Fragment>
  );
}

import { Fragment, useState } from 'react';
import { Calendar } from '../Calendar';

import styles from './styles.module.css';
import { ScheduleCard } from '../ScheduleCard';
import { ScheduleCardHeader } from '../ScheduleCardHeader';
import { SquareCheckBig, Square } from 'lucide-react';
import { ScheduleParagraph } from '../ScheduleParagraph';

export function ScheduleSection() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <Fragment>
      <Calendar value={selectedDate} onChange={setSelectedDate} />
      <h2 className={styles.scheduleHeading}>Schedule</h2>
      <div className={styles.scheduleCardsContainer}>
        {' '}
        <ScheduleCard disabled>
          <ScheduleCardHeader
            disabled
            icon={<SquareCheckBig size={20} />}
            title='Meeting with Anomali Team'
          />
          <ScheduleParagraph type='Time' value='07.00 am - 10.00 am' />
          <ScheduleParagraph type='Place' value='Anomali Office' />
          <ScheduleParagraph type='Notes' value='Nothing' />
        </ScheduleCard>
        <ScheduleCard>
          <ScheduleCardHeader
            icon={<Square size={20} />}
            title='Dinner with Anna'
          />
          <ScheduleParagraph type='Time' value='07.00 am - 10.00 am' />
          <ScheduleParagraph type='Place' value='Anomali Office' />
          <ScheduleParagraph type='Notes' value='Nothing' />
        </ScheduleCard>
      </div>
    </Fragment>
  );
}

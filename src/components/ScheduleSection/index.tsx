import { Fragment, useState } from 'react';
import { Calendar } from '../Calendar';

import styles from './styles.module.css';
import { ScheduleCard } from '../ScheduleCard';
import { FloatingActionButton } from '../FloatingActionButton';

type CardData = {
  id: string;
  title: string;
  time: string;
  place: string;
  notes: string;
  completed: boolean;
};

export function ScheduleSection() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [cards, setCards] = useState<CardData[]>([
    {
      id: '1',
      title: 'Meeting with Anomali Team',
      time: '07.00 am - 10.00 am',
      place: 'Anomali Office',
      notes: 'Nothing',
      completed: false,
    },
    {
      id: '2',
      title: 'Dinner with Anna',
      time: '07.00 pm - 09.00 pm',
      place: 'Anna’s Place',
      notes: 'Don’t forget flowers',
      completed: false,
    },
  ]);

  const handleToggle = (id: string) => {
    setCards(prev =>
      prev.map(c => (c.id === id ? { ...c, completed: !c.completed } : c)),
    );
  };

  return (
    <Fragment>
      <Calendar value={selectedDate} onChange={setSelectedDate} />
      <h2 className={styles.scheduleHeading}>Schedule</h2>
      <div className={styles.scheduleCardsContainer}>
        {cards.map(card => (
          <ScheduleCard
            key={card.id}
            disabled={card.completed}
            onToggle={() => handleToggle(card.id)}
            title={card.title}
            time={card.time}
            place={card.place}
            notes={card.notes}
          />
        ))}
      </div>
      <FloatingActionButton />
    </Fragment>
  );
}

import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Tabs } from '../../components/Tabs';
import { Calendar } from '../../components/Calendar';
import { useState } from 'react';

export function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const tabItems = [
    {
      label: 'Schedule',
      content: <Calendar value={selectedDate} onChange={setSelectedDate} />,
    },
    {
      label: 'Notes',
      content: (
        <Container>
          <div>Notes</div>
        </Container>
      ),
    },
  ];

  return (
    <Fragment>
      <Container>
        <Header />
      </Container>
      <Container>
        <Tabs tabs={tabItems} />
      </Container>
    </Fragment>
  );
}

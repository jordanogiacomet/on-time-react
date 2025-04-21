import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Tabs } from '../../components/Tabs';
import { ScheduleSection } from '../../components/ScheduleSection';
import { NotesSection } from '../../components/NotesSection';

export function Home() {
  const tabItems = [
    {
      label: 'Schedule',
      content: <ScheduleSection />,
    },
    {
      label: 'Notes',
      content: <NotesSection />,
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

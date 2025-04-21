import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Tabs } from '../../components/Tabs';
import { CalendarHeader } from '../../components/CalendarHeader';

export function Home() {
  const tabItems = [
    {
      label: 'Schedule',
      content: (
        <Container>
          <CalendarHeader month={Date.now()} />
        </Container>
      ),
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

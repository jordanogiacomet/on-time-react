import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Tabs } from '../../components/Tabs';
import { ScheduleSection } from '../../components/ScheduleSection';
import { NotesSection } from '../../components/NotesSection';
import { BellDotIcon, EllipsisVertical } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Home() {
  const [search, setSearch] = useSearchParams();

  const initialTabIndex = search.get('tab') === 'notes' ? 1 : 0;
  const [selectedIndex, setSelectedIndex] = useState<number>(initialTabIndex);

  useEffect(() => {
    const tabParam = selectedIndex === 0 ? 'schedule' : 'notes';
    setSearch({ tab: tabParam }, { replace: true });
  }, [selectedIndex, setSearch]);

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
        <Header.Root>
          <Header.Nav>
            <Header.Link text='on.time' href='/' />
            <Header.Icons>
              <Header.Link icon={BellDotIcon} href='/notifications/' />
              <Header.Link icon={EllipsisVertical} href='/settings/' />
            </Header.Icons>
          </Header.Nav>
        </Header.Root>
      </Container>
      <Container>
        <Tabs
          tabs={tabItems}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      </Container>
    </Fragment>
  );
}

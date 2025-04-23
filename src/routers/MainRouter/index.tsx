import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Splash } from '../../components/Splash';
import { Home } from '../../pages/Home';
import { ScheduleForm } from '../../pages/ScheduleForm';
import { NotesForm } from '../../pages/NotesForm';
import { Notifications } from '../../pages/Notifications';
import { Settings } from '../../pages/Settings';
import { Help } from '../../pages/Help';
import { About } from '../../pages/About';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home/' element={<Home />} />
        <Route path='/schedule/new' element={<ScheduleForm />} />
        <Route path='/notes/new' element={<NotesForm />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/settings/' element={<Settings />} />
        <Route path='/help/' element={<Help />} />
        <Route path='/about/' element={<About />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

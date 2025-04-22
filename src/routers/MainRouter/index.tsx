import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Splash } from '../../components/Splash';
import { Home } from '../../pages/Home';
import { ScheduleForm } from '../../pages/ScheduleForm';
import { NotesForm } from '../../pages/NotesForm';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home/' element={<Home />} />
        <Route path='/schedule/new' element={<ScheduleForm />} />
        <Route path='/notes/new' element={<NotesForm />} />
      </Routes>
    </BrowserRouter>
  );
}

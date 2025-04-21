import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Splash } from '../../components/Splash';
import { Home } from '../../pages/Home';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

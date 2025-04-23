import './styles/reset.css';
import './styles/theme.css';
import './styles/global.css';
import { MainRouter } from './routers/MainRouter';
import { ScheduleContextProvider } from './contexts/ScheduleContext/ScheduleContextProvider';

export function App() {
  return (
    <ScheduleContextProvider>
      <MainRouter />
    </ScheduleContextProvider>
  );
}

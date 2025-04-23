import './styles/reset.css';
import './styles/theme.css';
import './styles/global.css';
import { MainRouter } from './routers/MainRouter';
import { ScheduleContextProvider } from './contexts/ScheduleContext/ScheduleContextProvider';
import { MessagesContainer } from './components/MessagesContainer';

export function App() {
  return (
    <ScheduleContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </ScheduleContextProvider>
  );
}

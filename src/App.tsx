import './styles/reset.css';
import './styles/theme.css';
import './styles/global.css';
import { MainRouter } from './routers/MainRouter';
import { MessagesContainer } from './components/MessagesContainer';
import { AppProviders } from './components/AppProviders';

export function App() {
  return (
    <AppProviders>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </AppProviders>
  );
}

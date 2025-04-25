import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import styles from './styles.module.css';
import { ArrowLeft, MoonIcon, SunIcon } from 'lucide-react';
import { RouterLink } from '../../components/RouterLink';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import { useSettingsContext } from '../../contexts/SettingsContext/useSettingsContext';
import { SettingsActionTypes } from '../../contexts/SettingsContext/settingsActions';

export function Settings() {
  const { state, dispatch } = useSettingsContext();

  function toggleAudio() {
    dispatch({ type: SettingsActionTypes.TOGGLE_AUDIO });
  }

  function toggleNotificationBar() {
    dispatch({ type: SettingsActionTypes.TOGGLE_NOTIFICATION_BAR });
  }

  function toggleTheme() {
    dispatch({ type: SettingsActionTypes.TOGGLE_THEME });
  }

  return (
    <Fragment>
      <Container>
        <div className={styles.settingsContainer}>
          <header className={styles.settingsHeader}>
            <nav className={styles.settingsNav}>
              <RouterLink href='/home/' className={styles.menuLink}>
                <ArrowLeft />
                <p>Settings</p>
              </RouterLink>
            </nav>
          </header>
          <div className={styles.settingsItensContainer}>
            <div className={styles.item}>
              <p className={styles.settingsOption}>Notification</p>
              <div className={styles.itemContent}>
                <ToggleSwitch
                  id='audioInput'
                  label='Audio'
                  checked={state.audioEnabled}
                  onChange={toggleAudio}
                  className={styles.bar}
                />
                <ToggleSwitch
                  id='notificationInput'
                  label='Notification Bar'
                  checked={state.notificationBar}
                  onChange={toggleNotificationBar}
                  className={styles.bar}
                />
                <button
                  type='button'
                  onClick={toggleTheme}
                  className={styles.themeButton}
                >
                  Theme{' '}
                  {state.theme === 'dark' ? (
                    <SunIcon size={25} />
                  ) : (
                    <MoonIcon size={25} />
                  )}
                </button>
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.settingsOption}>Extras</p>
              <div className={styles.itemContent}>
                <RouterLink className={styles.anchor} href='/help/'>
                  Help
                </RouterLink>
                <RouterLink className={styles.anchor} href='/about/'>
                  About
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

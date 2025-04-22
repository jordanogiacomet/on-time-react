import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';

import styles from './styles.module.css';
import { ArrowLeft } from 'lucide-react';
import { RouterLink } from '../../components/RouterLink';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import { useState } from 'react';

export function Settings() {
  const [bar, setBar] = useState<boolean>(false);

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
                <p>Audio</p>
                <ToggleSwitch
                  label='Notification Bar'
                  checked={bar}
                  onChange={setBar}
                  className={styles.bar}
                />
              </div>
            </div>
            <div className={styles.item}>
              <p className={styles.settingsOption}>Extras</p>
              <div className={styles.itemContent}>
                <p>Help</p>
                <p>About</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

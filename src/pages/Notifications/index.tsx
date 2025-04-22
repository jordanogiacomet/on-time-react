import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';

import styles from './styles.module.css';
import { RouterLink } from '../../components/RouterLink';
import { ArrowLeft } from 'lucide-react';

export function Notifications() {
  return (
    <Fragment>
      <Container>
        <div className={styles.notificationsContainer}>
          <header className={styles.formHeader}>
            <nav className={styles.formNav}>
              <RouterLink href='/home/' className={styles.menuLink}>
                <ArrowLeft />
                <p>Notification</p>
              </RouterLink>
            </nav>
          </header>
          <div className={styles.notificationItensContainer}>
            <div className={styles.item}>
              <p>Dinner with Anna</p>
              <span>20 Sep 2021 08:00 PM</span>
            </div>
            <div className={styles.item}>
              <p>Pay House Tax</p>
              <span>26 Sep 2021 08:00 AM</span>
            </div>
            <div className={styles.item}>
              <p>Make A New Proposal</p>
              <span>20 Sep 2021 08:00 PM</span>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

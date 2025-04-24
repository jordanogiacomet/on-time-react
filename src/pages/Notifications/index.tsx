import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';

import styles from './styles.module.css';
import { RouterLink } from '../../components/RouterLink';
import { ArrowLeft } from 'lucide-react';
import { useScheduleContext } from '../../contexts/ScheduleContext/useScheduleContext';
import { formatDate } from '../../utils/formaDate';

export function Notifications() {
  const { state } = useScheduleContext();

  return (
    <Fragment>
      <Container>
        <div className={styles.notificationsContainer}>
          <header className={styles.notificationsHeader}>
            <nav className={styles.formNav}>
              <RouterLink href='/home/' className={styles.menuLink}>
                <ArrowLeft />
                <p>Notification</p>
              </RouterLink>
            </nav>
          </header>
          <div className={styles.notificationItensContainer}>
            {state.schedules.map(schedule => (
              <div key={schedule.id} className={styles.item}>
                <p>{schedule.title}</p>
                <span>{formatDate(schedule.start, 'dd MMM yyyy hh:mm a')}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

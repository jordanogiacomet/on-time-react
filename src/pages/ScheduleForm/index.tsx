import { ArrowLeft, Check, SquareCheckBig } from 'lucide-react';
import { RouterLink } from '../../components/RouterLink';

import styles from './styles.module.css';
import { Fragment } from 'react/jsx-runtime';
import { Container } from '../../components/Container';
import { TextInput } from '../../components/TextInput';

export function ScheduleForm() {
  return (
    <Fragment>
      <Container>
        <div className={styles.scheduleFormContainer}>
          <header className={styles.formHeader}>
            <nav className={styles.formNav}>
              <RouterLink href='/home/' className={styles.menuLink}>
                <ArrowLeft />
              </RouterLink>
              <div className={styles.iconsContainer}>
                <SquareCheckBig />
                <Check />
              </div>
            </nav>
          </header>
          <h2 className={styles.title}>Schedule</h2>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <TextInput id='meuInput' type='text' placeholder='Title' />
            </div>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

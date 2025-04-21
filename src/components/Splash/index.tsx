import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

export function Splash() {
  return (
    <div className={styles.splash}>
      <h1 className={styles.splashHeading}>on.time</h1>
      <p className={styles.splashText}>
        Make yourself <br></br>more on time
      </p>
      <RouterLink href='/home/' className={styles.splashButton}>
        START
      </RouterLink>
    </div>
  );
}

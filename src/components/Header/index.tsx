import { BellDot, EllipsisVertical } from 'lucide-react';
import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <RouterLink
          aria-label='Go to home'
          title='Go to home'
          className={styles.menuLink}
          href='/'
        >
          on.time
        </RouterLink>
        <div className={styles.iconsContainer}>
          <BellDot />
          <EllipsisVertical />
        </div>
      </nav>
    </header>
  );
}

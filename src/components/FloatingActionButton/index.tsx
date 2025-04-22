// FloatingActionButton.tsx
import { useState } from 'react';
import { Plus, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export function FloatingActionButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.fabContainer} ${open ? styles.open : ''}`}>
      {/* botões filhos */}
      <Link to='/notes/new' className={styles.fabChild}>
        <FileText size={20} />
        <span className={styles.fabLabel}>Note</span>
      </Link>
      <Link to='/schedule/new' className={styles.fabChild}>
        <Calendar size={20} />
        <span className={styles.fabLabel}>Schedule</span>
      </Link>

      {/* FAB principal */}
      <button
        className={styles.fab}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <Plus size={24} />
      </button>
    </div>
  );
}

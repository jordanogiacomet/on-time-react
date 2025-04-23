import { Pin } from 'lucide-react';
import styles from './styles.module.css';

type NoteCardProps = {
  description: string;
  date: string;
  hasPin: boolean;
  onTogglePin: () => void;
};

export function NoteCard({
  description,
  date,
  hasPin,
  onTogglePin,
}: NoteCardProps) {
  return (
    <div className={styles.noteCardContainer}>
      <div className={styles.noteCardInternalContainer}>
        <p className={styles.description}>{description}</p>
        <button
          onClick={onTogglePin}
          className={`${styles.pinButton} ${hasPin ? '' : styles.hiddenPin}`}
          aria-label={hasPin ? 'Unpin note' : 'Pin note'}
        >
          {hasPin && <Pin size={15} />}
        </button>
      </div>
      <p className={styles.date}>{date}</p>
    </div>
  );
}

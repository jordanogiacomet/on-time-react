import { PinOff } from 'lucide-react';
import pinIcon from '../../icons/pin.svg';
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
          className={`${styles.pinButton} ${hasPin ? styles.pinned : ''}`}
          aria-label={hasPin ? 'Unpin note' : 'Pin note'}
        >
          {hasPin && <img src={pinIcon} alt='Pin Icon' />}
          {!hasPin && <PinOff size={20} />}
        </button>
      </div>
      <p className={styles.date}>{date}</p>
    </div>
  );
}

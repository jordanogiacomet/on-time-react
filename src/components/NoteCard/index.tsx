import styles from './styles.module.css';

export function NoteCard() {
  return (
    <div className={styles.noteCardContainer}>
      <p className={styles.description}>
        this morning's meeting, we have to improve the quality of office
        facilities and another...
      </p>
      <p className={styles.date}>28/10/2012</p>
    </div>
  );
}

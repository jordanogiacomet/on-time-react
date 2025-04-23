import styles from './styles.module.css';

type NoteCardProps = {
  description: string;
  date: string;
};

export function NoteCard({ description, date }: NoteCardProps) {
  return (
    <div className={styles.noteCardContainer}>
      <p className={styles.description}>{description}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
}

import { ScheduleCardHeader } from '../ScheduleCardHeader';
import { ScheduleParagraph } from '../ScheduleParagraph';
import styles from './styles.module.css';

type ScheduleCardProps = {
  title: string;
  time: string;
  place: string;
  notes: string;
  disabled: boolean;
  onToggle: () => void;
};

export function ScheduleCard({
  title,
  time,
  place,
  notes,
  disabled,
  onToggle,
}: ScheduleCardProps) {
  return (
    <div
      className={`${styles.scheduleCardContainer} ${
        disabled ? styles.disabled : ''
      }`}
    >
      <ScheduleCardHeader
        title={title}
        disabled={disabled}
        onToggle={onToggle}
      />

      <ScheduleParagraph type='Time' value={time} />
      <ScheduleParagraph type='Place' value={place} />
      <ScheduleParagraph type='Notes' value={notes} />
    </div>
  );
}

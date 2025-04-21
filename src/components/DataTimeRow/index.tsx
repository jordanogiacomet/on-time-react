import React, { useRef } from 'react';
import { CalendarIcon, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import styles from './styles.module.css';

type DateTimeRowProps = {
  label: string;
  date: Date;
  onChange: (date: Date) => void;
};

export function DateTimeRow({ label, date, onChange }: DateTimeRowProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current?.showPicker) {
      inputRef.current.showPicker();
    } else {
      inputRef.current?.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    if (!isNaN(newDate.getTime())) {
      onChange(newDate);
    }
  };

  return (
    <div className={styles.row} onClick={handleClick}>
      <span className={styles.label}>{label}</span>

      <div className={styles.valueContainer}>
        <CalendarIcon size={16} className={styles.icon} />
        <span className={styles.value}>
          {format(date, 'EEE, d MMM yyyy h:mm a')}
        </span>
        <ChevronRight size={16} className={styles.chevron} />
      </div>

      {/* input invisível que abre o picker */}
      <input
        ref={inputRef}
        type='datetime-local'
        className={styles.hiddenInput}
        value={format(date, "yyyy-MM-dd'T'HH:mm")}
        onChange={handleInputChange}
      />
    </div>
  );
}

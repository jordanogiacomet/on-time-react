import React from 'react';
import styles from './styles.module.css';

type ScheduleCardHeaderProps = {
  title: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

export function ScheduleCardHeader({
  title,
  icon,
  disabled,
}: ScheduleCardHeaderProps) {
  return (
    <div
      className={`${styles.scheduleHeader} ${disabled ? styles.disabled : ''}`}
    >
      <h3 className={styles.title}>{title}</h3>
      {icon}
    </div>
  );
}

import React from 'react';
import styles from './styles.module.css';

type HeaderRootProps = {
  children: React.ReactNode;
};

export function HeaderRoot({ children }: HeaderRootProps) {
  return <header className={styles.header}>{children}</header>;
}

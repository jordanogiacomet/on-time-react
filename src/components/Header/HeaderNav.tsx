import React from 'react';
import styles from './styles.module.css';

type HeaderNavProps = {
  children: React.ReactNode;
};

export function HeaderNav({ children }: HeaderNavProps) {
  return <nav className={styles.menu}>{children}</nav>;
}

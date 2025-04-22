import React from 'react';
import styles from './styles.module.css';

type TextInputProps = {
  id: string;
  type: string;
} & React.ComponentProps<'input'>;

export function TextInputElement({ id, type, ...props }: TextInputProps) {
  return <input id={id} type={type} className={styles.input} {...props} />;
}

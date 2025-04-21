import React, { Fragment } from 'react';
import styles from './styles.module.css';

type TextInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function TextInput({ id, type, labelText, ...props }: TextInputProps) {
  return (
    <Fragment>
      {labelText && <label htmlFor={id}>{labelText}t</label>}
      <input className={styles.input} id={id} type={type} {...props} />
    </Fragment>
  );
}

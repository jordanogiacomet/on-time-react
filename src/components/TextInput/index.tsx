import React, { Fragment } from 'react';
import styles from './styles.module.css';

type TextInputProps = {
  id: string;
  labelText?: string;
  icon?: React.ReactNode;
} & React.ComponentProps<'input'>;

export function TextInput({
  id,
  type,
  labelText,
  icon,
  ...props
}: TextInputProps) {
  const hasIcon = Boolean(icon);

  return (
    <Fragment>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <div
        className={`${styles.inputWrapper} ${hasIcon ? styles.withIcon : ''}`}
      >
        {icon && <div className={styles.icon}>{icon}</div>}
        <input id={id} type={type} className={styles.input} {...props} />
      </div>
    </Fragment>
  );
}

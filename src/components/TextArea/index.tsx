import React from 'react';

import styles from './styles.module.css';

type TextAreaProps = {
  ref: React.Ref<HTMLTextAreaElement>;
  id: string;
  placeholder: string;
} & React.ComponentProps<'textarea'>;

export function TextArea({ ref, id, placeholder, ...props }: TextAreaProps) {
  return (
    <textarea
      ref={ref}
      id={id}
      className={styles.textArea}
      placeholder={placeholder}
      {...props}
    />
  );
}

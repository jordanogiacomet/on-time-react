import React from 'react';
import styles from './styles.module.css';
import { TextInput } from '.';

type TextInputRootProps = {
  children: React.ReactNode;
};

export function TextInputRoot({ children }: TextInputRootProps) {
  const hasIcon = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === TextInput.Icon,
  );

  return (
    <div className={`${styles.inputWrapper} ${hasIcon ? styles.withIcon : ''}`}>
      {children}
    </div>
  );
}

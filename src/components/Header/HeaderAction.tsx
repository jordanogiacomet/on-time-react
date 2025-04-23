import React, { ElementType } from 'react';

import styles from './styles.module.css';

type HeaderActionProps = {
  icon: ElementType;
  onClick: () => void;
} & React.ComponentProps<'button'>;

export function HeaderAction({
  icon: Icon,
  onClick,
  ...props
}: HeaderActionProps) {
  return (
    <button className={styles.action} onClick={onClick} {...props}>
      <Icon />
    </button>
  );
}

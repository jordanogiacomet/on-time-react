import { ElementType } from 'react';
import styles from './styles.module.css';

type TextInputIconProps = {
  icon: ElementType;
};

export function TextInputIcon({ icon: Icon }: TextInputIconProps) {
  return <Icon className={styles.icon} />;
}

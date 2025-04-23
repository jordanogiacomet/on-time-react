import { ElementType } from 'react';
import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

type HeaderLinkProps = {
  href: string;
  icon?: ElementType;
  text?: string;
};

export function HeaderLink({ href, icon: Icon, text }: HeaderLinkProps) {
  return (
    <RouterLink className={styles.menuLink} href={href}>
      {Icon && <Icon />}
      {text && <p>{text}</p>}
    </RouterLink>
  );
}

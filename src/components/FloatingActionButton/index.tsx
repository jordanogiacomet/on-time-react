import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type FloatingActionButtonProps = {
  href: string;
} & React.ComponentProps<'a'>;

export function FloatingActionButton({
  href,
  ...props
}: FloatingActionButtonProps) {
  return (
    <Link className={styles.fab} to={href} {...props}>
      <Plus size={24} />
    </Link>
  );
}

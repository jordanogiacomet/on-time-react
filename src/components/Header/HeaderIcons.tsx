import styles from './styles.module.css';

type HeaderIconsProps = {
  children: React.ReactNode;
};

export function HeaderIcons({ children }: HeaderIconsProps) {
  return <div className={styles.iconsContainer}>{children}</div>;
}

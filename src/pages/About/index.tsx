// src/pages/About/index.tsx
import { Fragment } from 'react/jsx-runtime';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../../components/Container';
import { RouterLink } from '../../components/RouterLink';
import pkg from '../../../package.json';
import styles from './styles.module.css';
import { useState } from 'react';

export function About() {
  const [version] = useState(pkg.version);
  const author = pkg.author || 'Unknown';
  const license = pkg.license || 'N/A';
  const repoUrl = pkg.repository?.url
    ?.replace(/^(git\+|git:\/\/)/, 'https://')
    .replace(/\.git$/, '');

  return (
    <Fragment>
      <Container>
        <header className={styles.aboutHeader}>
          <nav className={styles.aboutNav}>
            <RouterLink href='/settings' className={styles.menuLink}>
              <ArrowLeft />
              <p>About</p>
            </RouterLink>
          </nav>
        </header>
      </Container>

      {/* Content */}
      <Container>
        <div className={styles.aboutContent}>
          <h1 className={styles.title}>{pkg.name}</h1>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.label}>Version:</span>
              <span className={styles.value}>{version}</span>
            </li>
            <li>
              <span className={styles.label}>Author:</span>
              <span className={styles.value}>{author}</span>
            </li>
            <li>
              <span className={styles.label}>License:</span>
              <span className={styles.value}>{license}</span>
            </li>
            {repoUrl && (
              <li>
                <span className={styles.label}>Repository:</span>
                <a
                  href={repoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  {repoUrl.replace(/^https?:\/\//, '')}
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </Fragment>
  );
}

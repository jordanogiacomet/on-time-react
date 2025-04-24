// src/pages/Help/index.tsx
import { Fragment } from 'react';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import helpMd from '../../content/help.md?raw'; //
import { Container } from '../../components/Container';
import { RouterLink } from '../../components/RouterLink';
import styles from './styles.module.css';

export function Help() {
  return (
    <Fragment>
      <Container>
        <header className={styles.helpHeader}>
          <nav className={styles.helpNav}>
            <RouterLink href='/settings/' className={styles.menuLink}>
              <ArrowLeft />
              <p>Help</p>
            </RouterLink>
          </nav>
        </header>
        <article className={styles.markdown}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{helpMd}</ReactMarkdown>
        </article>
      </Container>
    </Fragment>
  );
}

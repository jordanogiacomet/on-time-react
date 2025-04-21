import React, { useState } from 'react';
import styles from './styles.module.css';

type Tab = {
  label: string;
  content: React.ReactNode;
};

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.tabs}>
      <div role='tablist' className={styles.tabsList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            role='tab'
            aria-selected={active === index}
            className={`${styles.button} ${
              active === index ? `${styles.active}` : ''
            }`}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role='tabpanel' className={styles.tabPanel}>
        {tabs[active].content}
      </div>
    </div>
  );
}

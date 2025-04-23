import React, { useState } from 'react';
import styles from './styles.module.css';

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
};

export function Tabs({ tabs, selectedIndex, onSelect }: TabsProps) {
  const [internalIndex, setInternalIndex] = useState(0);

  // define qual índice está ativo
  const active = selectedIndex ?? internalIndex;

  function handleClick(index: number) {
    if (onSelect) {
      onSelect(index);
    } else {
      setInternalIndex(index);
    }
  }

  return (
    <div className={styles.tabs}>
      <div role='tablist' className={styles.tabsList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            role='tab'
            aria-selected={active === index}
            className={`${styles.button} ${
              active === index ? styles.active : ''
            }`}
            onClick={() => handleClick(index)}
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

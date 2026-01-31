import React from 'react';
import styles from './styles/Navigation.module.css';
import { sections } from './constant';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <ul className={styles.navList}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
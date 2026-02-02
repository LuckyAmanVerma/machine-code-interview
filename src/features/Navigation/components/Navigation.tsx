import React,{useState,useEffect} from 'react';
import styles from '../styles/navigation.module.css';
import { sections,keySections } from '../constant';

const Navigation: React.FC = ({children}: {children?: React.ReactNode}) => {
  const [selected,setSelected]=useState<string>('');
  const setSelectedSection = (section: string) => {
    setSelected(section);
  };

  useEffect(() => {
    const selectedTab = window.location.hash.replace('#', '');
    if(selectedTab){
      setSelectedSection(keySections[selectedTab as keyof typeof keySections] || '');
    }
  }, []);

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <ul className={styles.navlist}>
        {sections.map((section) => (
          <li key={section} className={selected === section ? styles.active : ''}
          >
            <a
              href={`#${section.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedSection(section)}
              
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
};

export default Navigation;
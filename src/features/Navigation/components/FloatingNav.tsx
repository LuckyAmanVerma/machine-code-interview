import React, { useState,useEffect } from "react";
import styles from "../styles/floatingNav.module.css";
import { sections,keySections } from "../constant";

const FloatingNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected,setSelected]=useState<string>('');
  const setSelectedSection = (section: string) => {
    setSelected(section);
  };

  useEffect(() => {
    const selectedTab = window.location.hash.replace('#', '');
    if(selectedTab){
      setSelectedSection(keySections[selectedTab as keyof typeof keySections] || '');
    }
  }, [open]);
  return (
    <>
      <button
      tabIndex={0}
        className={styles.moreBtn}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        +
      </button>
      <nav className={styles.navbar} aria-label="Floating Navigation">
        {open && (<ul className={styles.navlist}>
          {sections.map((section) => (
            <li key={section} className={selected === section ? styles.active : ''}>
              <a
                href={`#${section.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={()=>setTimeout(()=>setOpen(false),100)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>)}


      </nav>
    </>
  );
};

export default FloatingNav;
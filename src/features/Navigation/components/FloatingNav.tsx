import React, { useState } from "react";
import styles from "../styles/floatingNav.module.css";
import {sections} from "../constant";

const FloatingNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar} aria-label="Floating Navigation">
          <button
            className={styles.moreBtn}
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
           +
          </button>

          {open && (<ul className={styles.navlist}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>)}

     
    </nav>
  );
};

export default FloatingNav;
import React from "react";
import styles from "../styles/index.module.css";
import profilePic from "@/assets/profile_pic.png";
const Page1: React.FC = () => {
  return (
    <section className={styles.aboutMe} id="about-me">
        <img src={profilePic} width="200" alt="About Me" />
          <h2><span className={`${styles.bigChar} ${styles.imageBackground}`} >Hi</span>, I'm Aman Verma</h2>
  <h2 className={styles.position}>Senior Software Engineer</h2>
  <span className={styles.description}> with 7+ years of experience building scalable, high-performance web applications. I specialize in frontend system design, focusing on clean UI architecture, performance optimization, and maintainable component systems. I enjoy working at scale, driving architectural decisions, and delivering user-centric products that last.</span>


<p>
  Outside of engineering, I enjoy mentoring teams, exploring new technologies, and refining processes that balance technical depth with user-centric design.
</p>

<div className={styles.contactSection}>
  <h3 className={styles.contactTitle}>Core Expertise</h3>
  <div className={styles.contactLinks}>
    <a className={styles.contactLink}>
      Frontend Architecture 
    </a>
    <a  className={styles.contactLink}>
      React.js
    </a>
    <a  className={styles.contactLink}>
      Node.js
    </a>
    <a  className={styles.contactLink}>
      Typescript
    </a>
    <a  className={styles.contactLink}>
      System Design
    </a>
  </div>
</div>

<div className={styles.contactSection}>
  <h3 className={styles.contactTitle}>Get in Touch</h3>
  <div className={styles.contactLinks}>
    <a href="mailto:luckyamanverma@gmail.com" className={styles.contactLink}>
      <span className={styles.contactIcon}><i className="fa-regular fa-envelope"></i></span>
      Email
    </a>
    <a href="https://github.com/LuckyAmanVerma" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
      <span className={styles.contactIcon}>
       <i className="fa-brands fa-github"></i>
       </span>
      GitHub
    </a>
    <a href="https://drive.google.com/file/d/1UkcMarKJ3RD1wf9zpoaUSS8fUk5F_SXJ/view" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
      <span className={styles.contactIcon}><i className="fa-regular fa-file"></i></span>
      Resume
    </a>
    <a href="https://www.linkedin.com/in/aman-verma-bb6806141/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
      <span className={styles.contactIcon}>
        <i className="fa-brands fa-linkedin-in"></i>
      </span>
      LinkedIn
    </a>
  </div>
</div>
    </section>
  );
};
export default Page1;
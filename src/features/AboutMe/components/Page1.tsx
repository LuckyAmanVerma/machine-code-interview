import React from "react";
import styles from "../styles/index.module.css";
import profilePic from "@/assets/profile_pic.png";
const Page1: React.FC = () => {
  return (
    <section className={styles.aboutMe} id="about-me">
        <img src={profilePic} width="200" alt="About Me" />
          <h2><span className={`${styles.bigChar} ${styles.imageBackground}`} >Hi</span>, I'm Aman Verma</h2>
  <h2 className={styles.position}>Senior Software Engineer</h2> with 7+ years of experience building scalable, high-performance web applications. I specialize in frontend system design, focusing on clean UI architecture, performance optimization, and maintainable component systems. I enjoy working at scale, driving architectural decisions, and delivering user-centric products that last.


<p>
  Outside of engineering, I enjoy mentoring teams, exploring new technologies, and refining processes that balance technical depth with user-centric design.
</p>
    </section>
  );
};
export default Page1;
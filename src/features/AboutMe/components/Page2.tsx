import React from "react";
import styles from "../styles/page2.module.css";
import profilePic from "@/assets/coding-workspace.png";
const Page2: React.FC = () => {
  return (
    <section className={styles.aboutMe} id="about-me">
      <img src={profilePic} width="200" alt="About Me" />
      <h2><span className={`${styles.bigChar} ${styles.imageBackground}`} >My</span> Frontend Approach</h2>
      <p>I design frontend architectures with long-term scalability in mind, combining modular feature-based structures, reusable component systems, and performance-conscious patterns. The goal is to create UIs that remain fast, consistent, and maintainable as complexity increases.</p>
      <ul>
        <li>Apply proven design patterns for reusable and maintainable code</li>
        <li>Follow SOLID principles for flexible and testable systems</li>
        <li>Use feature-based architecture and atomic design for scale</li>
        <li>Build consistent UI using design tokens and responsive layouts</li>
        <li>Ensure accessibility (WCAG) with semantic HTML</li>
        <li>Optimize performance with Core Web Vitals (LCP, FID, CLS)</li>
      </ul>

    </section>
  );
};
export default Page2;
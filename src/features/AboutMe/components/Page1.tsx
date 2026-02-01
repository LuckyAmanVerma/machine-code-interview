import React from "react";
import styles from "../styles/index.module.css";
import profilePic from "@/assets/profile_pic.png";
const Page1: React.FC = () => {
  return (
    <section className={styles.aboutMe} id="about-me">
        <img src={profilePic} width="200" alt="About Me" />
        <p>
          <h2><span className={`${styles.bigChar} ${styles.imageBackground}`} >H</span>i, I'm Aman Verma</h2>
  <h2 style={{display:"inline"}}>Senior Software Engineer</h2> with 7+ years of experience designing and building scalable, high-performance web applications using React, TypeScript, Node.js,MongoDB and modern JavaScript. Strong expertise in frontend system design, including UI architecture, micro-frontend ecosystems, Atomic design, scalable state management, and performance optimization. Proven ability to lead teams, drive architectural decisions, and deliver robust, user-centric solutions at scale.
</p>

<p>
  My approach to building scalable applications includes:
</p>

<p>
  • Applying proven Design Patterns to ensure maintainable and reusable code structures.<br/>
  • Following SOLID Principles to create flexible, extensible, and testable components.<br/>
  • Using Feature-Based Design for modular organization and clear separation of concerns.<br/>
  • Implementing centralized design tokens and responsive layouts for consistency across teams.<br/>
  • Ensuring accessibility compliance with WCAG guidelines and semantic HTML for inclusive experiences.<br/>
  • Optimizing performance by monitoring and improving Core Web Vitals (LCP, FID, CLS).<br/>
  • Leveraging atomic design methodology to build scalable UI systems with reusable components.<br/>
</p>

<p>
  Outside of engineering, I enjoy mentoring teams, exploring new technologies, and refining processes that balance technical depth with user-centric design.
</p>
    </section>
  );
};
export default Page1;
import React from "react";
import styles from "../styles/index.module.css";
import profilePic from "@/assets/coding-workspace.png";
import ChipText from "@/CustomComponent/ChipText";
import { ICompanyDetail } from "@/Interfaces/CompanyDetail";


const CompanyDetails = ({ company }: { company: ICompanyDetail }) => {
  return (
    <section className={styles.workExperience} id={`work-experience-${company.company_name}`} key={company.company_name}>
      <span className={styles.chipContainer}>
        <ChipText data={company.techStack.map(techData => ({ key: techData, label: techData }))} />
      </span>
      <img src={profilePic} width="200" alt="About Me" />
      <a aria-label="company_link" title={`Go to ${company.company_url} `} 
      href={company.company_url} target="_blank" rel="noopener noreferrer">
        <h2>
          <span className={`${styles.bigChar} ${styles.imageBackground}`} >
            {company.company_name.charAt(0)}
          </span>
          {company.company_name.slice(1,company.company_name.length)}
        </h2>
      </a>

      <p>{company.description} <br />
        <b>From {company.duration}</b>
      </p>

      <ul>
        {company.responsibilities.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default CompanyDetails;
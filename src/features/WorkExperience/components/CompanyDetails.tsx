import React from "react";
import styles from "../styles/index.module.css";
import ChipText from "@/CustomComponent/ChipText";
import { ICompanyDetail } from "@/Interfaces/CompanyDetail";


const CompanyDetails = ({ company }: { company: ICompanyDetail }) => {
  return (
    <section className={styles.workExperience} id={`work-experience-${company.company_name}`} key={company.company_name}>

      <div className={styles.topContainer}>
        <section className={styles.leftAlign}>
          <img src={company.logo} className={styles.companyLogo} alt="Company Logo" />
          <a aria-label="company_link" title={`Go to ${company.company_url} `}
            href={company.company_url} target="_blank" rel="noopener noreferrer">
            <h2 className={styles.companyName}>
              {company.company_name}
            </h2>
          </a>
        </section>

        <section className={styles.rightAlign}>
          <span className={styles.chipContainer} aria-label="Tech Stack">
            <ChipText data={company.techStack.map(techData => ({ key: techData, label: techData }))} />
          </span>
        </section>

      </div>


      <p className={styles.duration}>{company.description} <br />
        <b>From {company.duration}</b>
      </p>

      <ul className={styles.responsibilitiesList}>
        {company.responsibilities.map((item: string, index: number) => (
          <li key={index} className={styles.responsibilityItem}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default CompanyDetails;
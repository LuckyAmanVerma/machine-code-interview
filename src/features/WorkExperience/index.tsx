import React from "react";
import CompanyDetails from "./components/CompanyDetails";
import CompanyData from "./constant/companyData";
import { ICompanyDetail } from "@/Interfaces/CompanyDetail";

import Carousel from "../Carousel";
const WorkExperience: React.FC = () => {
  return (
    <Carousel>
      {
        CompanyData.map((company: ICompanyDetail) => (
          <CompanyDetails key={company.company_name} company={{...company}} />
        ))
      }
    </Carousel>
  )
};
export default WorkExperience;
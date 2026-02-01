import React from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Carousel from "../Carousel";
const AboutMe: React.FC = () => {
  return (
    <Carousel>
      <Page1/>
      <Page2/>
    </Carousel>
  )
};
export default AboutMe;
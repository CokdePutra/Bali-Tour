import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import { HeroImage } from "../constants/constants";

const Activities = () => {
  return (
    <>
      <Navbar />
      <Hero backgroundImage={HeroImage.Activities} />
    </>
  );
};
export default Activities;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import { HeroImage } from "../constants/constants";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero backgroundImage={HeroImage.Home} />
        <div className="popular-destination">
          <Card
            src="./images/NJ_BubbleGum_18.jpg"
            title="Kecak Dance Uluwatu"
          />
        </div>
      </div>
    </>
  );
};
export default Home;

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
        <Hero
          backgroundImage={HeroImage.Home}
          title="Welcome to Bagus Bali Tour & Transport"
          desc="Discover the beauty of Bali with us"
        />
        <div className="popular-destination">
          <h2 className="Title mt-16">POPULAR DESTINATION</h2>
          <Card
            src="./images/NJ_BubbleGum_18.jpg"
            title="Kecak Dance Uluwatu"
            price="500000"
          />
          <Card
            src="./images/NJ_BubbleGum_18.jpg"
            title="Kecak Dance Uluwatu"
            price="500000"
          />
        </div>
      </div>
    </>
  );
};
export default Home;

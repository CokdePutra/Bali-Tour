import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import { HeroImage } from "../constants/constants";
import ButtonBook from "../components/Button/ButtonBook";

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
          <h2 className="Title mt-16 text-center text-4xl font-bold">
            POPULAR DESTINATION
          </h2>
          <div className="grid gap-6 mt-8 md:grid-cols-2 m-10">
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
          {/* <ButtonBook textButton="Discover More" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;

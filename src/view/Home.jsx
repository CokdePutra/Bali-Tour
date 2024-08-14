import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import { CardAllActivities, HeroImage } from "../constants/constants";
// import Loader from "../components/Loader";
// import { CardMostPopular } from "../constants/constants";
// import { ActivitiesData } from "../api"; // Import the API connection function

const Home = () => {
  const popularActivities = CardAllActivities.filter(
    (activity) => activity.popular === true
  );
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero
          backgroundImage={HeroImage.Home}
          title="Your Bali, Your Way Exquisite Moments Through Personalized Tours."
          desc="Your Journey to Paradise Begins Here!"
        />
        <div className="popular-destination mt-16 m-5">
          <h2 className="Title text-4xl">POPULAR DESTINATION</h2>
          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 m-10">
            <Card CardValue={popularActivities} />
          </div>
          {/* <ButtonBook textButton="Discover More" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;

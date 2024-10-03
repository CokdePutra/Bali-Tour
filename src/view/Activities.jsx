import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import { CardAllActivities, HeroImage } from "../constants/constants";
import Loader from "../components/Loader"; // Ensure the path is correct

const Activities = () => {
  const initialActivitiesToShow = 6; // Number of activities to show initially
  const additionalActivitiesToShow = 6; // Number of activities to load when "See More" is clicked

  // Load saved visible activities from localStorage, or show the initial activities if none are saved
  const savedActivities =
    JSON.parse(localStorage.getItem("visibleActivities")) || [];
  const [visibleActivities, setVisibleActivities] = useState(
    savedActivities.length > 0
      ? savedActivities
      : CardAllActivities.slice(0, initialActivitiesToShow)
  );
  const [loading, setLoading] = useState(false);

  // Save visible activities to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "visibleActivities",
      JSON.stringify(visibleActivities)
    );
  }, [visibleActivities]);

  const handleSeeMore = () => {
    setLoading(true);

    // Simulate a network request delay
    setTimeout(() => {
      const nextActivities = CardAllActivities.slice(
        visibleActivities.length,
        visibleActivities.length + additionalActivitiesToShow
      );
      setVisibleActivities((prevActivities) => [
        ...prevActivities,
        ...nextActivities,
      ]);
      setLoading(false);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <>
      <Navbar />
      <Hero backgroundImage={HeroImage.Activities} title="Activities" />
      <h1 className="Title mt-[3rem] md:my-[4rem]">Our Best Activities</h1>
      <div className="flex-col grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 m-10">
        <Card CardValue={visibleActivities} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        visibleActivities.length < CardAllActivities.length && (
          <button
            onClick={handleSeeMore}
            className="mx-auto my-8 block poppins-semibold text-black py-2 px-4">
            See More..
          </button>
        )
      )}
      <Footer />
    </>
  );
};

export default Activities;

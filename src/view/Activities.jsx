import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import { CardAllActivities, HeroImage } from "../constants/constants";
import Loader from "../components/utils/Loader";

const Activities = () => {
  const initialActivitiesToShow = 6;
  const additionalActivitiesToShow = 6;

  const savedActivities =
    JSON.parse(localStorage.getItem("visibleActivities")) || [];
  const [visibleActivities, setVisibleActivities] = useState(
    savedActivities.length > 0
      ? savedActivities
      : CardAllActivities.slice(0, initialActivitiesToShow)
  );
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("Most Popular");

  useEffect(() => {
    localStorage.setItem(
      "visibleActivities",
      JSON.stringify(visibleActivities)
    );
  }, [visibleActivities]);

  const handleSeeMore = () => {
    setLoading(true);

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
    }, 1000);
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    const sortedActivities = [...visibleActivities].sort((a, b) => {
      switch (selectedOption) {
        case "Most Popular":
          return b.popular - a.popular;
        case "Cheaper":
          return (
            parseInt(a.price.replace(/\./g, ""), 10) -
            parseInt(b.price.replace(/\./g, ""), 10)
          );
        case "Fancy":
          return (
            parseInt(b.price.replace(/\./g, ""), 10) -
            parseInt(a.price.replace(/\./g, ""), 10)
          );
        case "A-Z":
          return a.title.localeCompare(b.title);
        case "Z-A":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    setVisibleActivities(sortedActivities);
  };

  return (
    <>
      <Navbar />
      <Hero backgroundImage={HeroImage.Activities} title="Activities" />
      <h2 className="Title mt-[3rem] md:my-[4rem]" data-aos="fade-up">
        Our Best Activities
      </h2>

      {/* Sorting Dropdown */}
      <div className="flex justify-end m-8" data-aos="fade-up">
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="dropDown-select p-3 pl-4 pr-10 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out">
          <option value="Most Popular">Most Popular</option>
          <option value="Cheaper">Cheaper</option>
          <option value="Fancy">Fancy</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>

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

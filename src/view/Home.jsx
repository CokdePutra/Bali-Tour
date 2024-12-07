import React, { useEffect, useState } from "react";
import { CardAllActivities, HeroImage } from "../constants/constants";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Forms/Contact";
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
        <Navbar className="bg-gray-800"></Navbar>

        <Hero
          backgroundImage={HeroImage.Home}
          title="Your Bali, Your Way Exquisite Moments Through Personalized Tours."
          desc="Your Journey to Paradise Begins Here!"
        />

        {/* section Popular */}
        <div className="popular-destination mt-16 m-5">
          <h2 className="TitleSection" data-aos="zoom-in">
            POPULAR DESTINATION
          </h2>
          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 m-10">
            <Card CardValue={popularActivities} />
          </div>
          <NavLink
            to="/Activities"
            className="mx-auto my-8 block poppins-semibold text-black py-2 px-4">
            Discover More..
          </NavLink>
          {/* <ButtonBook textButton="Discover More" /> */}
        </div>

        {/* section About Us */}
        <div className="about-us mt-16 m-5 place-content-center flex flex-col">
          <h2 className="TitleSection" data-aos="zoom-in">
            About Us
          </h2>
          <div className="w-full lg:flex gap-3 mt-10">
            <div
              className="left lg:w-1/2 m-4 flex justify-center"
              data-aos="fade-up">
              <img
                src="./images/hero_image2.png"
                alt=""
                className="w-[30rem] h-[25rem] object-cover"
              />
            </div>
            <div
              className="right lg:w-1/2 m-4 mt-10 justify-center"
              data-aos="fade-up">
              <h3 className="Title text-2xl mt-10">
                We Are BAGUS BALI TOUR & TRANSPORT
              </h3>
              <p className="text-justify">
                Welcome to our presence on the web! My name is Bagus and I am
                the owner of Bagus Bali Tour & Transport. We are a professional
                organizer for Bali tour packages. I was born and raised in Bali.
                I am a husband, a father of three.I learned English through my
                customers bit by bit everytime I take my customers on tour. I
                enjoy to show the beautiful island of Bali to customers from
                around the world. I have gained great friendships over the years
                and have been blessed to be able to work in a job that I love.
              </p>
            </div>
          </div>
        </div>

        {/* section Choose Us */}
        <div className="choose-us mt-16 m-5 place-content-center">
          <h2 className="TitleSection" data-aos="fade-up">
            Why Choose Us
          </h2>
          <div className="content m-4 content-center justify-center md:flex md:flex-wrap gap-[2rem]">
            <div
              className="reason md:w-[22rem] lg:w-[30rem]"
              data-aos="fade-up">
              <h3 className="Title text-2xl mt-10">Experienced Drivers</h3>
              <p className="Desc text-justify">
                All of our drivers are English speaking and are from the area.
                You will have access to local knowledge and your driver can
                answer most of the questions you may have. An optional
                professional guide is available upon request at an extra charge.
              </p>
            </div>
            <div
              className="reason md:w-[22rem] lg:w-[30rem]"
              data-aos="fade-up">
              <h3 className="Title text-2xl mt-10">100% Kids Friendly</h3>
              <p className="Desc text-justify">
                Myeslf and several of my drivers have kids as well. Kids play a
                large part in Balinese culture and they are included in social
                life early on. We are always happy to have the “little ones”
                with us on tour.
              </p>
            </div>
            <div
              className="reason md:w-[22rem] lg:w-[30rem]"
              data-aos="fade-up">
              <h3 className="Title text-2xl mt-10">Independent</h3>
              <p className="Desc text-justify">
                All of our drivers are English speaking and are from the area.
                You will have access to local knowledge and your driver can
                answer most of the questions you may have. An optional
                professional guide is available upon request at an extra charge.
              </p>
            </div>
            <div
              className="reason md:w-[22rem] lg:w-[30rem]"
              data-aos="fade-up">
              <h3 className="Title text-2xl mt-10">Lots of Positive Reviews</h3>
              <p className="Desc text-justify">
                Myeslf and several of my drivers have kids as well. Kids play a
                large part in Balinese culture and they are included in social
                life early on. We are always happy to have the “little ones”
                with us on tour.
              </p>
            </div>
          </div>
        </div>

        {/* section Contact Us */}
        <Contact />

        {/* end section */}
        <Footer />
      </div>
    </>
  );
};

export default Home;

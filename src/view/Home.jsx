import React, { useEffect, useState } from "react";
import { CardAllActivities, HeroImage } from "../constants/constants";
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
        <Navbar />

        <Hero
          backgroundImage={HeroImage.Home}
          title="Your Bali, Your Way Exquisite Moments Through Personalized Tours."
          desc="Your Journey to Paradise Begins Here!"
        />

        {/* section Popular */}
        <div className="popular-destination mt-16 m-5">
          <h1 className="TitleSection">POPULAR DESTINATION</h1>
          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 m-10">
            <Card CardValue={popularActivities} />
          </div>
          <Link
            to="/Activities"
            className="mx-auto my-8 block poppins-semibold text-black py-2 px-4">
            Discover More..
          </Link>
          {/* <ButtonBook textButton="Discover More" /> */}
        </div>

        {/* section About Us */}
        <div className="about-us mt-16 m-5 min-h-lvh place-content-center">
          <h1 className="TitleSection">About Us</h1>
          <div className="w-full lg:flex gap-3 mt-10">
            <div className="left lg:w-1/2 m-4 flex justify-center">
              <img
                src="./images/hero_image2.png"
                alt=""
                className="w-[30rem] h-[25rem] object-cover"
              />
            </div>
            <div className="right lg:w-1/2 m-4 justify-center">
              <h2 className="Title text-2xl mt-10">
                We Are BAGUS BALI TOUR & TRANSPORT
              </h2>
              <p className="Desc text-justify">
                Welcome to our presence on the web! My name is Gusti and I am
                the owner of Bali Driver Private Tour. We are a professional
                organizer for Bali tour packages and provide English speaking
                drivers for all your tour and transport needs while you are on
                Bali. I was born and raised in Bali. I am a husband, a father of
                two and a taxi and now tour driver for the past 12 years. I
                learned English in my 5 years as a bartender working for an
                international cruise ship company. I have had the pleasure to
                show our beautiful country to customers from around the world. I
                have gained great friendships over the years and have been
                blessed to be able to work in a job that I love.
              </p>
            </div>
          </div>
        </div>

        {/* section Choose Us */}
        <div className="choose-us mt-16 m-5 place-content-center">
          <h1 className="TitleSection">Why Choose Us</h1>
          <div className="content m-4 content-center justify-center md:flex md:flex-wrap gap-[2rem]">
            <div className="reason md:w-[22rem] lg:w-[30rem]">
              <h2 className="Title text-2xl mt-10">Experienced Drivers</h2>
              <p className="Desc text-justify">
                All of our drivers are English speaking and are from the area.
                You will have access to local knowledge and your driver can
                answer most of the questions you may have. An optional
                professional guide is available upon request at an extra charge.
              </p>
            </div>
            <div className="reason md:w-[22rem] lg:w-[30rem]">
              <h2 className="Title text-2xl mt-10">100% Kids Friendly</h2>
              <p className="Desc text-justify">
                Myeslf and several of my drivers have kids as well. Kids play a
                large part in Balinese culture and they are included in social
                life early on. We are always happy to have the “little ones”
                with us on tour.
              </p>
            </div>
            <div className="reason md:w-[22rem] lg:w-[30rem]">
              <h2 className="Title text-2xl mt-10">Independent</h2>
              <p className="Desc text-justify">
                All of our drivers are English speaking and are from the area.
                You will have access to local knowledge and your driver can
                answer most of the questions you may have. An optional
                professional guide is available upon request at an extra charge.
              </p>
            </div>
            <div className="reason md:w-[22rem] lg:w-[30rem]">
              <h2 className="Title text-2xl mt-10">Lots of Positive Reviews</h2>
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

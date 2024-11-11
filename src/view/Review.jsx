import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import { HeroImage } from "../constants/constants";

const Review = () => {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage={HeroImage.Home}
        title="Review"
        // desc="Your Journey to Paradise Begins Here!"
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sample reviews */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="User Review"
              className="w-full"
            />
            <div className="p-5">
              <h4 className="text-lg font-semibold mb-1">"Awesome Support"</h4>

              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/50"
                  className="w-10 h-10 rounded-full mr-4"
                  alt="Aron Smith"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-left">
                    Aron Smith
                  </p>
                  <p className="text-gray-400 text-xs">
                    Lorem ipsum is simply dummy text
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* More reviews can be added here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;

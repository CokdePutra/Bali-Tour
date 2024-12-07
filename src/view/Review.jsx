import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import { HeroImage } from "../constants/constants"; // Import Hero background image
import { ReviewTour } from "../constants/reviewData"; // Import review data

// Component to render individual star icons based on rating
const RatingStars = ({ rating }) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, index) => {
        if (index < Math.floor(rating)) {
          return <FaStar key={index} />;
        } else if (
          rating - Math.floor(rating) >= 0.5 &&
          index === Math.floor(rating)
        ) {
          return <FaStarHalfAlt key={index} />;
        } else {
          return <FaRegStar key={index} />;
        }
      })}
    </div>
  );
};

// Main Review component
const Review = () => {
  return (
    <>
      <Navbar />
      <Hero backgroundImage={HeroImage.Home} title="Review" />

      <div className="max-w-full md:max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Render each review dynamically */}
          {ReviewTour.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden mb-5">
              <div className="p-5 m-3">
                {/* Review Header: Profile image and user details */}
                <div className="flex items-center">
                  <img
                    src={review.profileImage}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    alt={review.name}
                  />
                  <div>
                    <p className="text-gray-900 font-semibold">{review.name}</p>
                    <p className="text-gray-400 text-xs text-left">
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-justify my-5">{review.text}</p>

                {/* Display Stars */}
                <RatingStars rating={review.stars} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Review;

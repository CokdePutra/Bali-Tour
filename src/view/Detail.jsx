// src/view/Detail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardAllActivities } from "../constants/constants"; // Update the path if needed
import Loader from "../components/utils/Loader";
import ButtonBook from "../components/Button/ButtonBook";

const Detail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    // Find the activity based on the ID
    const foundActivity = CardAllActivities.find(
      (activity) => activity.id === parseInt(id)
    );
    setActivity(foundActivity);
  }, [id]);

  if (!activity) return <Loader />; // Show Loader while loading

  // Generate WhatsApp link with a message
  const createWhatsAppLink = () => {
    const phoneNumber = "6281337882648"; // Replace with the actual WhatsApp number
    const message = `Hello, I'm interested in booking ${activity.title} starting from IDR ${activity.price} per Car.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <>
      <div className="content w-full max-w-xs md:max-w-xl h-auto bg-white rounded-[30px] shadow-lg flex flex-col items-center mx-auto my-[3rem] pb-[2rem] lg:max-w-auto drop-shadow-2xl">
        <img
          src={"/" + activity.image}
          alt={activity.title}
          className="w-full h-auto md:h-[25rem] mb-4 rounded-[30px] object-cover"
        />
        <h1 className="w-4/5 text-3xl font-bold mb-4">{activity.title}</h1>
        <div className="w-4/5 m-5">
          <p className="text-lg font-bold mb-2">Tour Description</p>
          {activity.desc.split("\n").map((line, index) => (
            <p key={index} className="text-base text-justify mb-4 mx-[1rem]">
              {line}
            </p>
          ))}
        </div>
        <div className="w-3/5 my-[1rem]">
          <p className="text-2xl font-bold mb-2">Include :</p>
          <ul className="text-left" style={{ listStyleType: "disc" }}>
            {activity.include.map((item, index) => (
              <li key={index} className="text-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/5 my-[1rem]">
          <p className="text-2xl font-bold mb-2">Prices</p>
          <p className="text-xl font-semibold">
            Price start from IDR {activity.price}{" "}
            <span className="font-normal">per car</span>
          </p>
        </div>

        {/* Add more details or components as needed */}
        <div className="flex w-4/5 mx-[1rem]">
          <div className="w-full text-left py-5 flex justify-start items-center ">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}>
              Back
            </a>
          </div>
          <div className="w-full py-5 flex justify-end">
            <ButtonBook
              textButton="Book"
              className="left-0"
              onClick={() => window.open(createWhatsAppLink(), "_blank")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

// src/view/Detail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardAllActivities } from "../constants/constants"; // Update the path if needed
import Loader from "../components/Loader"; // Import the Loader component
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

  return (
    <>
      <div className="content w-full max-w-xs h-auto bg-white rounded-[30px] shadow-lg flex flex-col items-center mx-auto my-[3rem] py-[2rem] lg:max-w-auto drop-shadow-2xl">
        <img
          src={"/" + activity.image}
          alt={activity.title}
          className="w-full h-auto mb-4 rounded-[30px]"
        />
        <h1 className="w-4/5 text-3xl font-bold mb-4">{activity.title}</h1>
        <div className="w-4/5 m-5">
          <p className="text-lg font-bold mb-2">Tour Description</p>
          <p className="text-base text-justify mb-4 mx-[1rem]">
            {activity.desc}
          </p>
        </div>
        <div className="w-4/5 mx-[1rem]">
          <p className="text-2xl font-bold mb-2">Prices</p>
          <p className="text-xl font-semibold">
            Price start from IDR .{activity.price}{" "}
            <span className="font-normal">per person</span>
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
            {/* <ButtonBook textButton="Back" className="left-0" /> */}
            <ButtonBook textButton="Book" className="left-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

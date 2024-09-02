// src/view/Detail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardAllActivities } from "../constants/constants"; // Update the path if needed
import Loader from "../components/Loader"; // Import the Loader component

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
    <div className="activity-detail p-4">
      <h1 className="text-3xl font-bold mb-4">{activity.title}</h1>
      <img
        src={"/" + activity.image}
        alt={activity.title}
        className="w-full h-auto mb-4"
      />
      <p className="text-lg mb-4">{activity.desc}</p>
      <p className="text-xl font-semibold">Price: IDR {activity.price}</p>
      {/* Add more details or components as needed */}
    </div>
  );
};

export default Detail;

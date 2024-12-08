import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardAllActivities } from "../constants/constants"; // Update path if needed
import Loader from "../components/utils/Loader";
import ButtonBook from "../components/Button/ButtonBook";

// Reusable components
const TourDescription = ({ description }) => (
  <div className="w-4/5 m-5">
    <p className="text-lg font-bold mb-2">Tour Description</p>
    {description.split("\n").map((line, index) => (
      <p key={index} className="text-base text-justify mb-4 mx-[1rem]">
        {line}
      </p>
    ))}
  </div>
);

const TourInclude = ({ include }) => (
  <div className="w-3/5 my-[1rem]">
    <p className="text-2xl font-bold mb-2">Include:</p>
    <ul className="text-left" style={{ listStyleType: "disc" }}>
      {include.map((item, index) => (
        <li key={index} className="text-xl">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const PriceSection = ({ price }) => (
  <div className="w-3/5 my-[1rem]">
    <p className="text-2xl font-bold mb-2">Prices</p>
    <p className="text-xl font-semibold text-left">
      Price start from IDR {price} <span className="font-normal">per car</span>
    </p>
    <p className="text-s text-justify w-full mt-5 text-gray-500">
      *Additional hours are available at an additional charge of IDR 100k/hour*
    </p>
  </div>
);

const TourOptions = ({
  tours,
  selectedTours,
  onSelectTour,
  selectedCategory,
}) => (
  <div className="w-3/5 my-[1rem]">
    <p className="text-2xl font-bold mb-2">Choose Tour:</p>
    <p className="text-s mb-3 text-gray-500">
      Please choose up to 3 tours from the options below.
    </p>

    {tours.map((tourCategory, index) => (
      <div key={index}>
        <h3 className="text-xl font-bold m-5">{tourCategory.title}</h3>
        <ul className="text-left my-5" style={{ listStyleType: "circle" }}>
          {tourCategory.activities.map((tour, index) => {
            const isDisabled =
              selectedCategory && selectedCategory !== tourCategory.title;
            return (
              <li
                key={index}
                className={`text-xl cursor-pointer ${
                  selectedTours.includes(tour)
                    ? "font-bold text-blue-500"
                    : isDisabled
                    ? "text-gray-500 cursor-not-allowed"
                    : ""
                }`}
                onClick={() =>
                  !isDisabled && onSelectTour(tour, tourCategory.title)
                }>
                {tour}
              </li>
            );
          })}
        </ul>
      </div>
    ))}

    {selectedTours.length > 0 && (
      <p className="text-lg mt-2">Selected Tours: {selectedTours.join(", ")}</p>
    )}
  </div>
);

const Detail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [activity, setActivity] = useState(null);
  const [selectedTours, setSelectedTours] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category

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
    const message = `Hello, I'm interested in booking ${
      activity.title
    } starting from IDR ${
      activity.price
    } per Car. Selected tours: ${selectedTours.join(", ")}.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Handle selecting a tour
  const handleTourSelection = (tour, categoryTitle) => {
    if (selectedTours.includes(tour)) {
      // If already selected, deselect it
      const updatedTours = selectedTours.filter((t) => t !== tour);
      setSelectedTours(updatedTours);

      // Reset selected category if no tours from the category are selected
      if (
        !updatedTours.some((t) =>
          activity.choosedTour.some((category) =>
            category.activities.includes(t)
          )
        )
      ) {
        setSelectedCategory(null);
      }
    } else if (selectedTours.length < 3) {
      // Select the tour if limit not reached
      setSelectedTours([...selectedTours, tour]);
      setSelectedCategory(categoryTitle); // Track the selected category
    } else {
      alert("You can select up to 3 tours only.");
    }
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

        <TourDescription description={activity.desc} />
        <TourInclude include={activity.include} />
        {activity.choosedTour && activity.choosedTour.length > 0 && (
          <TourOptions
            tours={activity.choosedTour}
            selectedTours={selectedTours}
            onSelectTour={handleTourSelection}
            selectedCategory={selectedCategory} // Pass selected category
          />
        )}
        <PriceSection price={activity.price} />

        <div className="flex w-4/5 mx-[1rem]">
          <div className="w-full text-left py-5 flex justify-start items-center">
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

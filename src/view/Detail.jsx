import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardAllActivities } from "../constants/constants";
import Loader from "../components/utils/Loader";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FiArrowLeft, FiHeart, FiShare2, FiClock, FiCreditCard } from "react-icons/fi";

// Reusable components
const TourDescription = ({ description }) => (
  <div className="mb-8">
    <h2 className="text-2xl poppins-bold mb-3">About This Experience</h2>
    {description.split("\n").map((line, index) =>
      line.trim() ? (
        <p key={index} className="Desc text-desc-color text-justify mb-3">
          {line}
        </p>
      ) : null
    )}
  </div>
);

const TourInclude = ({ include }) => (
  <div className="mb-8 pt-6 border-t border-gray-200">
    <h2 className="text-2xl poppins-bold mb-3">What&apos;s Included</h2>
    <ul className="text-left" style={{ listStyleType: "disc" }}>
      {include.map((item, index) => (
        <li key={index} className="Desc text-desc-color ml-5">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const TourOptions = ({ tours, selectedTours, onSelectTour, selectedCategory }) => (
  <div className="mb-8 pt-6 border-t border-gray-200">
    <h2 className="text-2xl poppins-bold mb-2">Choose Tour</h2>
    <p className="Desc text-desc-color mb-3">Please choose up to 3 tours from the options below.</p>

    {tours.map((tourCategory, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-xl poppins-bold mb-2">{tourCategory.title}</h3>
        <ul className="text-left" style={{ listStyleType: "circle" }}>
          {tourCategory.activities.map((tour, i) => {
            const isDisabled = selectedCategory && selectedCategory !== tourCategory.title;
            return (
              <li
                key={i}
                className={`Desc ml-5 cursor-pointer ${
                  selectedTours.includes(tour)
                    ? "poppins-bold text-secondary-color"
                    : isDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-desc-color"
                }`}
                onClick={() => !isDisabled && onSelectTour(tour, tourCategory.title)}>
                {tour}
              </li>
            );
          })}
        </ul>
      </div>
    ))}

    {selectedTours.length > 0 && (
      <p className="Desc poppins-medium mt-2">Selected Tours: {selectedTours.join(", ")}</p>
    )}
  </div>
);

const extractDuration = (include) => {
  const match = include.join(" ").match(/(\d+)\s*Hours?\s*Trip/i);
  return match ? `${match[1]} Hours` : null;
};

const Detail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [selectedTours, setSelectedTours] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [participants, setParticipants] = useState(1);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const foundActivity = CardAllActivities.find((a) => a.id === parseInt(id));
    setActivity(foundActivity);
    window.scrollTo(0, 0);
  }, [id]);

  if (!activity) return <Loader />;

  const unitPrice = parseInt(activity.price.replace(/\./g, ""), 10);
  const totalPrice = unitPrice * participants;
  const formatIDR = (n) => n.toLocaleString("id-ID");

  const createWhatsAppLink = () => {
    const phoneNumber = "6281337882648";
    const message = `Hello, I'm interested in booking ${activity.title}.\nDate: ${
      selectedDate || "-"
    }\nParticipants: ${participants}\nTotal: IDR ${formatIDR(totalPrice)}${
      selectedTours.length ? `\nSelected tours: ${selectedTours.join(", ")}` : ""
    }`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleTourSelection = (tour, categoryTitle) => {
    if (selectedTours.includes(tour)) {
      const updatedTours = selectedTours.filter((t) => t !== tour);
      setSelectedTours(updatedTours);
      if (
        !updatedTours.some((t) =>
          activity.choosedTour.some((category) => category.activities.includes(t))
        )
      ) {
        setSelectedCategory(null);
      }
    } else if (selectedTours.length < 3) {
      setSelectedTours([...selectedTours, tour]);
      setSelectedCategory(categoryTitle);
    } else {
      alert("You can select up to 3 tours only.");
    }
  };

  const duration = extractDuration(activity.include);

  const handleShare = async () => {
    const shareData = { title: activity.title, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled share, nothing to do
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 Navlink poppins-medium mb-6">
          <FiArrowLeft /> Back to Activities
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column: content */}
          <div className="lg:col-span-2">
            <div className="relative">
              <img
                src={"/" + activity.image}
                alt={activity.title}
                className="w-full h-[18rem] md:h-[26rem] rounded-[20px] object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className="bg-white/90 rounded-full p-2 shadow"
                  aria-label="Save to favorites">
                  <FiHeart
                    className={liked ? "text-secondary-color" : "text-color-title"}
                    fill={liked ? "currentColor" : "none"}
                  />
                </button>
                <button onClick={handleShare} className="bg-white/90 rounded-full p-2 shadow" aria-label="Share">
                  <FiShare2 className="text-color-title" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <span className="bg-gray-100 text-color-title text-sm poppins-medium px-3 py-1 rounded-full">
                Activity
              </span>
              {duration && (
                <span className="flex items-center gap-1 text-desc-color text-sm">
                  <FiClock /> {duration}
                </span>
              )}
              {activity.popular && (
                <span className="bg-secondary-color/10 text-secondary-color text-sm poppins-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl poppins-bold mt-3 mb-2">{activity.title}</h1>
            <p className="text-2xl poppins-bold text-secondary-color mb-6">
              IDR {activity.price}{" "}
              <span className="text-base font-normal text-desc-color">/ {activity.priceUnit || "trip"}</span>
            </p>

            <TourDescription description={activity.desc} />
            <TourInclude include={activity.include} />
            {activity.choosedTour && activity.choosedTour.length > 0 && (
              <TourOptions
                tours={activity.choosedTour}
                selectedTours={selectedTours}
                onSelectTour={handleTourSelection}
                selectedCategory={selectedCategory}
              />
            )}
          </div>

          {/* Right column: booking widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl poppins-bold mb-4">Book This Experience</h3>

              <label className="Label poppins-medium">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary-color"
              />

              <label className="Label poppins-medium">Participants</label>
              <div className="flex items-center gap-4 mb-5">
                <button
                  onClick={() => setParticipants((p) => Math.max(1, p - 1))}
                  className="w-9 h-9 rounded-lg border border-gray-300 poppins-bold hover:bg-gray-50">
                  -
                </button>
                <span className="poppins-bold text-lg">{participants}</span>
                <button
                  onClick={() => setParticipants((p) => p + 1)}
                  className="w-9 h-9 rounded-lg border border-gray-300 poppins-bold hover:bg-gray-50">
                  +
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4 text-desc-color">
                <div className="flex justify-between mb-2">
                  <span>
                    IDR {activity.price} x {participants} participant{participants > 1 ? "s" : ""}
                  </span>
                  <span>IDR {formatIDR(totalPrice)}</span>
                </div>
                <div className="flex justify-between poppins-bold text-color-title text-lg">
                  <span>Total</span>
                  <span>IDR {formatIDR(totalPrice)}</span>
                </div>
              </div>

              <button
                onClick={() => window.open(createWhatsAppLink(), "_blank")}
                className="w-full flex items-center justify-center gap-2 bg-secondary-color hover:bg-secondary-shadow text-white py-3 rounded-xl poppins-bold transition-all duration-300">
                <FiCreditCard /> Book Experience
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                You&apos;ll be redirected to WhatsApp to confirm your reservation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;

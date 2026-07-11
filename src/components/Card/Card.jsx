import { Link } from "react-router-dom";
import { FiClock } from "react-icons/fi";

const extractDuration = (include = []) => {
  const match = include.join(" ").match(/(\d+)\s*Hours?\s*Trip/i);
  return match ? `${match[1]} Hours` : null;
};

const getSubtitle = (priceUnit) =>
  priceUnit === "person" ? "Photo session" : "Private car trip";

const Card = ({ CardValue }) => {
  return (
    <>
      {CardValue.map(
        ({ id, title, price, image, popular, include = [], priceUnit }) => {
          const duration = extractDuration(include);
          const unit = priceUnit || "trip";
          return (
            <div
              data-aos="zoom-in"
              key={id}
              className="group w-full max-w-xs bg-white rounded-[30px] shadow-lg flex flex-col items-center mx-auto mt-8 lg:max-w-md drop-shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative w-full h-[13rem] overflow-hidden rounded-[30px]">
                <img
                  src={image}
                  alt={title}
                  title={title}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                {popular && (
                  <span className="absolute px-3 py-1 text-xs text-white rounded-full top-3 left-3 bg-secondary-color poppins-bold">
                    Popular
                  </span>
                )}
                {duration && (
                  <span className="absolute flex items-center gap-1 px-3 py-1 text-xs rounded-full bottom-3 right-3 bg-white/90 text-color-title poppins-medium">
                    <FiClock /> {duration}
                  </span>
                )}
              </div>
              <div className="w-full p-0 px-5 pb-5 content md:p-2">
                <h3 className="Title-card !m-0 !mb-1">{title}</h3>
                <p className="text-sm text-desc-color !mb-2">
                  {getSubtitle(priceUnit)}
                </p>
                <p className="mb-4">
                  <span className="text-2xl poppins-bold text-secondary-color">
                    IDR {price}
                  </span>{" "}
                  <span className="text-sm text-desc-color">/ {unit}</span>
                </p>
                <Link to={`/activities/${id}`} className="block w-full">
                  <button className="w-full py-2 transition-all duration-300 border-2 border-secondary-color text-secondary-color poppins-bold rounded-xl hover:bg-secondary-color hover:text-white">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          );
        },
      )}
    </>
  );
};

export default Card;

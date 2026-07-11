import { BiLogoWhatsapp } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

const WhatsAppFloat = ({
  message = "Looking for your next Bali adventure? Let's plan it together!",
}) => {
  const createWhatsAppLink = () => {
    const phoneNumber = "6281337882648";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed z-50 hidden max-w-md md:block bottom-4 right-4">
      <div className="flex items-center gap-3 py-2 pl-3 pr-2 bg-white border border-gray-100 rounded-full shadow-xl">
        <div className="relative shrink-0">
          <FaRegUserCircle
            className="text-primary-color"
            style={{ fontSize: "2.5rem" }}
          />
          <span
            className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full"
            style={{ backgroundColor: "#2cd46b" }}></span>
        </div>
        <p className="flex-1 text-sm poppins-medium text-color-title">
          {message}
        </p>
        <button
          onClick={() => window.open(createWhatsAppLink(), "_blank")}
          className="flex items-center gap-2 px-4 py-2 text-sm text-white rounded-full poppins-bold whitespace-nowrap"
          style={{ backgroundColor: "#25D366" }}>
          <BiLogoWhatsapp style={{ fontSize: "1.2rem" }} />
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;

import ButtonBook from "../Button/ButtonBook";
import { BiLogoWhatsapp, BiLogoGmail } from "react-icons/bi";

const iconWA = { color: "#2cd46b", fontSize: "2rem", minWidth: "2rem" };
const iconEmail = { color: "#eb493b", fontSize: "2rem", minWidth: "2rem" };

const createWhatsAppLink = () => {
  const phoneNumber = "6281337882648"; // Replace with the actual WhatsApp number
  const message = `Hello, I'm interested to the tour`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const Footer = () => {
  return (
    <>
      <footer className="w-full mt-16 text-left bg-primary-color">
        <div className="flex flex-col justify-between w-full gap-12 p-10 mx-auto container-footer md:flex-row bg-primary">
          <div className="my-3 section" data-aos="fade-up">
            <h4 className="w-auto m-0 mt-2 mb-2 text-2xl text-left Title text-secondary-color">
              BAGUS BALIKU TOUR & TRANSPORT
            </h4>
            <h5 className="mt-2 mb-2 text-lg text-footer-text">
              Have any questions? Contact us!
            </h5>
            <div className="flex flex-col gap-4 social-media">
              <div className="flex items-center gap-2 whatsapp">
                <BiLogoWhatsapp style={iconWA} />
                <a
                  href=""
                  className="text-lg text-footer-text"
                  onClick={() => window.open(createWhatsAppLink(), "_blank")}>
                  +62 813-3788-2648
                </a>
              </div>
              <div className="flex items-center gap-2 email">
                <BiLogoGmail style={iconEmail} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hendraidabagus81@gmail.com"
                  className="text-lg text-footer-text">
                  hendraidabagus81@gmail.com
                </a>
              </div>

              {/* <div className="flex items-center gap-2 facebook">
                <BiLogoFacebookCircle style={iconFacebook} />
                <a href="" className="text-lg text-footer-text">
                  @balitourtoday
                </a>
              </div> */}
            </div>
          </div>
          <div className="my-3 section" data-aos="fade-up">
            <h4 className="w-auto m-0 mt-2 mb-2 text-2xl text-left Title text-secondary-color">
              Our Services
            </h4>
            <div className="grid our-service">
              <a href="/" className="text-lg text-footer-text">
                Pickup
              </a>
              <a href="" className="text-lg text-footer-text">
                Transfer
              </a>
              <a href="" className="text-lg text-footer-text">
                Trips
              </a>
              <a href="" className="text-lg text-footer-text">
                Shopping by
              </a>
            </div>
          </div>
          <div className="my-3 section" data-aos="fade-up">
            <h4 className="w-auto m-0 mt-2 mb-2 text-2xl text-left Title text-secondary-color">
              Book Your Trip Now!
            </h4>
            <h5 className="mt-2 mb-2 text-lg text-footer-text">
              Let us know your tour needs and we will get in contact with you
            </h5>
            <ButtonBook
              textButton="BOOK NOW"
              className="hidden text-white md:block"
              onClick={() => window.open(createWhatsAppLink(), "_blank")}
            />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

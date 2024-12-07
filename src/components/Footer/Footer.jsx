import React from "react";
import ButtonBook from "../Button/ButtonBook";
import {
  BiLogoWhatsapp,
  BiLogoGmail,
  BiLogoFacebookCircle,
} from "react-icons/bi";

const iconWA = { color: "#2cd46b", fontSize: "2rem", minWidth: "2rem" };
const iconEmail = { color: "#eb493b", fontSize: "2rem", minWidth: "2rem" };
const iconFacebook = { color: "#1f7bf2", fontSize: "2rem", minWidth: "2rem" };

const createWhatsAppLink = () => {
  const phoneNumber = "6281239199662"; // Replace with the actual WhatsApp number
  const message = `Hello, I'm interested to the tour`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const Footer = () => {
  return (
    <>
      <footer className="bg-primary-color mt-16 w-full text-left">
        <div className="container-footer w-full mx-auto flex flex-col md:flex-row justify-between gap-12 p-10 bg-primary">
          <div className="section my-3" data-aos="fade-up">
            <h4 className="Title text-left m-0 w-auto text-secondary-color text-2xl mt-2 mb-2">
              BAGUS BALIKU TOUR & TRANSPORT
            </h4>
            <h5 className="text-footer-text text-lg mt-2 mb-2">
              Have any questions? Contact us!
            </h5>
            <div className="social-media flex flex-col gap-4">
              <div className="whatsapp flex items-center gap-2">
                <BiLogoWhatsapp style={iconWA} />
                <a href="" className="text-footer-text text-lg">
                  +62 813-3788-2648
                </a>
              </div>
              <div className="email flex items-center gap-2">
                <BiLogoGmail style={iconEmail} />
                <a href="" className="text-footer-text text-lg">
                  hendraidabagus81@gmail.com
                </a>
              </div>
              {/* <div className="facebook flex items-center gap-2">
                <BiLogoFacebookCircle style={iconFacebook} />
                <a href="" className="text-footer-text text-lg">
                  @balitourtoday
                </a>
              </div> */}
            </div>
          </div>
          <div className="section my-3" data-aos="fade-up">
            <h4 className="Title text-left m-0 w-auto text-secondary-color text-2xl mt-2 mb-2">
              Our Services
            </h4>
            <div className="our-service grid">
              <a href="/" className="text-footer-text text-lg">
                Pickup
              </a>
              <a href="" className="text-footer-text text-lg">
                Transfer
              </a>
              <a href="" className="text-footer-text text-lg">
                Trips
              </a>
              <a href="" className="text-footer-text text-lg">
                Shopping by
              </a>
            </div>
          </div>
          <div className="section my-3" data-aos="fade-up">
            <h4 className="Title text-left m-0 w-auto text-secondary-color text-2xl mt-2 mb-2">
              Book Your Trip Now!
            </h4>
            <h5 className="text-footer-text text-lg mt-2 mb-2">
              Let us know your tour needs and we will get in contact with you
            </h5>
            <ButtonBook
              textButton="BOOK NOW"
              className="text-white md:block hidden"
              onClick={() => window.open(createWhatsAppLink(), "_blank")}
            />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

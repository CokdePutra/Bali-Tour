import React from "react";
import {
  BiLogoWhatsapp,
  BiLogoGmail,
  BiLogoFacebookCircle,
} from "react-icons/bi";

const iconWA = { color: "#2cd46b", fontSize: "2rem", minWidth: "2rem" };
const iconEmail = { color: "#eb493b", fontSize: "2rem", minWidth: "2rem" };
const iconFacebook = { color: "#1f7bf2", fontSize: "2rem", minWidth: "2rem" };

const Footer = () => {
  return (
    <>
      <footer className="bg-primary-color mt-16 w-full text-left">
        <div className="container-footer w-full mx-auto flex flex-col md:flex-row justify-between gap-12 p-10 bg-primary">
          <div className="section" data-aos="fade-up">
            <h2 className="Title text-left m-0 w-auto text-secondary-color text-2xl mt-2 mb-2">
              BAGUS BALI TOUR & TRANSPORT
            </h2>
            <h3 className="text-footer-text text-lg mt-2 mb-2">
              Have any questions? Contact us!
            </h3>
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
                  hendraidabagus@gmail.com
                </a>
              </div>
              <div className="facebook flex items-center gap-2">
                <BiLogoFacebookCircle style={iconFacebook} />
                <a href="" className="text-footer-text text-lg">
                  @balitourtoday
                </a>
              </div>
            </div>
          </div>
          <div className="section" data-aos="fade-up">
            <h2 className="Title text-left m-0 w-auto text-secondary-color text-2xl mt-2 mb-2">
              Our Services
            </h2>
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
          <div className="section]" data-aos="fade-up">
            <h2 className="Title text-left m-0 w-auto text-secondary-color text-2xl mt-2 mb-2">
              Book Your Trip Now!
            </h2>
            <h3 className="text-footer-text text-lg mt-2 mb-2">
              Let us know your tour needs and we will get in contact with you
            </h3>
            <button className="button-book-now bg-[#dc834e] text-white py-2 px-4 rounded mt-4">
              BOOK NOW!
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

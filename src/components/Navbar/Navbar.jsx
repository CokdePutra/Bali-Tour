import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonBook from "../Button/ButtonBook";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll detection
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // onscroll script
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1); // Set threshold for scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const createWhatsAppLink = () => {
    const phoneNumber = "6281337882648"; // Replace with the actual WhatsApp number
    const message = `Hello, I'm interested in the tour`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const toContactUs = (event) => {
    event.preventDefault();

    if (window.location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const contactUsSection = document.getElementById("Contact");
      if (contactUsSection) {
        window.scrollTo({
          top: contactUsSection.offsetTop - 125,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <nav
      ref={navbarRef}
      className={`w-full sticky top-0 z-50 poppins-regular ${
        isScrolled ? "bg-white" : "bg-transparent"
      } transition-colors duration-300`}>
      <div className="flex justify-between items-center p-4 mx-[2rem] mt-[-1.5rem]">
        {/* Desktop Title */}
        <div
          className={`${
            isScrolled ? "text-black" : "text-white"
          } poppins-bold text-sm md:hidden lg:block lg:text-3xl`}>
          <NavLink to="/">BAGUS BALIKU TOUR & TRANSPORT</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center bg-transparent">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              isOpen ? "text-black" : "text-white"
            }`}>
            <svg
              className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`absolute poppins-bold left-0 w-full md:static md:flex md:items-center md:justify-center md:w-auto ${
            isOpen ? "bg-white md:bg-transparent" : "hidden"
          } transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-40 md:mt-0">
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                `Navlink relative ${
                  isScrolled ? "text-black" : "text-black md:text-white"
                } ${isActive ? "underline" : ""} py-2 md:py-0`
              }
              onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink
              to="/PickupTransfer"
              className={({ isActive }) =>
                `Navlink relative ${
                  isScrolled ? "text-black" : "text-black md:text-white"
                } ${isActive ? "underline" : ""} py-2 md:py-0`
              }
              onClick={() => setIsOpen(false)}>
              Pickup/Transfer
            </NavLink>
            <NavLink
              to="/Activities"
              className={({ isActive }) =>
                `Navlink relative ${
                  isScrolled ? "text-black" : "text-black md:text-white"
                } ${isActive ? "underline" : ""} py-2 md:py-0`
              }
              onClick={() => setIsOpen(false)}>
              Activities
            </NavLink>
            <button
              className={`Navlink relative py-2 md:py-0 ${
                isScrolled ? "text-black" : "text-black md:text-white"
              }`}
              onClick={toContactUs}>
              Contact
            </button>
            <NavLink
              to="/review"
              className={`Navlink relative py-2 md:py-0 ${
                isScrolled ? "text-black" : "text-black md:text-white"
              }`}
              onClick={() => setIsOpen(false)}>
              Review
            </NavLink>
          </div>
        </div>

        {/* Button */}
        <ButtonBook
          textButton="BOOK NOW"
          className="text-white md:block hidden"
          onClick={() => window.open(createWhatsAppLink(), "_blank")}
        />
      </div>
    </nav>
  );
};

export default Navbar;

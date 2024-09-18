import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ButtonBook from "../Button/ButtonBook";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

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

  return (
    <nav
      ref={navbarRef}
      className="relative w-full bg-transparent z-50 poppins-regular">
      <div className="flex justify-between items-center p-4 mx-[2rem]">
        {/* Desktop Title */}
        <div className="text-white poppins-bold text-3xl lg:block hidden">
          <NavLink to="/">BAGUS BALI TOUR & TRANSPORT</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center bg-transparent">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              isOpen ? "text-black" : "text-white"
            }`}>
            <svg
              className="w-6 h-6"
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
          className={`absolute poppins-bold left-0 w-full md:static md:flex md:items-center md:justify-center md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen
              ? "top-0 -z-10 absolute block shadow-lg md:shadow-none"
              : "hidden"
          }`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-16 md:mt-0">
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                `Navlink relative ${isActive ? "underline" : ""} py-2 md:py-0`
              }
              onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink
              to="/PickupTransfer"
              className={({ isActive }) =>
                `Navlink relative ${isActive ? "underline" : ""} py-2 md:py-0`
              }
              onClick={() => setIsOpen(false)}>
              Pickup/Transfer
            </NavLink>
            <NavLink
              to="/Activities"
              className={({ isActive }) =>
                `Navlink relative ${isActive ? "underline" : ""} py-2 md:py-0`
              }
              onClick={() => setIsOpen(false)}>
              Activities
            </NavLink>
            <a
              href="/#Contact"
              className="Navlink relative py-2 md:py-0"
              onClick={() => {
                setIsOpen(false);
                document
                  .getElementById("Contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}>
              Contact
            </a>
            <NavLink
              to="/Review"
              className={({ isActive }) =>
                `Navlink relative ${isActive ? "underline" : ""} py-2 md:py-0`
              }
              onClick={() => setIsOpen(false)}>
              Review
            </NavLink>
          </div>
        </div>

        {/* Button */}
        <ButtonBook
          textButton="BOOK NOW"
          className="text-white md:block hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;

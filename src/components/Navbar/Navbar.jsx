import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonBook from "../Button/buttonBook";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-transparent poppins-regular">
      <div className="flex justify-between items-center">
        <div className="text-black poppins-bold text-2xl">
          BAGUS BALI TOUR & TRANSPORT
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none">
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
        <div
          className={`flex-1 justify-center items-center md:flex ${
            isOpen ? "block" : "hidden"
          } md:block`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 relative">
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                `relative text-black hover:underline transition-all duration-300 ${
                  isActive ? "underline" : ""
                } py-2 md:py-0 ${isOpen ? "absolute left-0 top-0" : ""}`
              }>
              Home
            </NavLink>
            <NavLink
              to="/Pickup&Transfer"
              className={({ isActive }) =>
                `relative text-black hover:underline transition-all duration-300 ${
                  isActive ? "underline" : ""
                } py-2 md:py-0`
              }>
              Pickup/Transfer
            </NavLink>
            <NavLink
              to="/Activities"
              className={({ isActive }) =>
                `relative text-black hover:underline transition-all duration-300 ${
                  isActive ? "underline" : ""
                } py-2 md:py-0`
              }>
              Activities
            </NavLink>
            <a
              href="/#Contact"
              className="relative text-black hover:underline transition-all duration-300 py-2 md:py-0">
              Contact
            </a>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `relative text-black hover:underline transition-all duration-300 ${
                  isActive ? "underline" : ""
                } py-2 md:py-0`
              }>
              Review
            </NavLink>
          </div>
        </div>
        <ButtonBook />
      </div>
    </nav>
  );
};

export default Navbar;

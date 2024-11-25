import React from "react";

const ButtonBook = ({ textButton, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary-color text-white w-auto px-[1rem] lg:px-[1.5rem] py-[0.6rem] rounded-[10px] hover:bg-secondary-shadow transition-all duration-300 poppins-bold md:mt-0 md:block ${className}`}>
      {textButton}
    </button>
  );
};
export default ButtonBook;

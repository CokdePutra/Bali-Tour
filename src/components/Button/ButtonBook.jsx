import React from "react";

const ButtonBook = ({ textButton, className }) => {
  return (
    <button
      className={`bg-secondary-color text-white h-[3rem] w-auto px-[1.5rem] py-[.8rem] rounded-[10px] hover:bg-secondary-shadow transition-all duration-300 poppins-bold md:mt-0 md:block ${className}`}>
      {textButton}
    </button>
  );
};
export default ButtonBook;

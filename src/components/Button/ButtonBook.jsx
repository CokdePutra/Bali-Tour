import React from "react";

const ButtonBook = ({ textButton, className }) => {
  return (
    <button
      className={`bg-secondary-color mt-4  text-white px-[1.5rem] py-[0.8rem] rounded-[10px] hover:bg-secondary-shadow transition-all duration-300 poppins-bold md:mt-0 md:block ${className}`}>
      {textButton}
    </button>
  );
};
export default ButtonBook;

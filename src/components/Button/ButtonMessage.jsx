import React from "react";

const ButtonMessage = ({ textButton, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 ransition-all duration-300 poppins-bold md:mt-0 md:block ${className}`}>
      {textButton}
    </button>
  );
};
export default ButtonMessage;

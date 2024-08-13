import React from "react";
import ButtonBook from "../Button/ButtonBook";

const Card = ({ src, title, price }) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-[30px] shadow-lg flex flex-col items-center mx-auto mt-8 lg:max-w-md drop-shadow-2xl">
      {/* <div className="rounded-[30px] flex items-center justify-center mb-4 "> */}
      <img
        src={src}
        alt=""
        className="w-full h-[auto] rounded-[30px] relative object-cover"
      />
      {/* </div> */}
      <h1 className="Title-card">{title}</h1>
      <h3>From</h3>
      <div className="flex space-between w-full justify-around m-5">
        <p className="poppins-bold my-4 text-2xl">IDR {price}</p>
        <ButtonBook textButton="More" />
      </div>
    </div>
  );
};
export default Card;

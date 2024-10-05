import React from "react";
import { Link } from "react-router-dom";
import ButtonBook from "../Button/ButtonBook";

const Card = ({ CardValue }) => {
  return (
    <>
      {CardValue.map(({ id, title, price, image }) => (
        <div
          key={id}
          className="w-full max-w-xs bg-white rounded-[30px] shadow-lg flex flex-col items-center mx-auto mt-8 lg:max-w-md drop-shadow-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-[13rem] rounded-[30px] relative object-cover"
          />
          <div className="content w-full p-0 md:p-2">
            <h1 className="Title-card ">{title}</h1>
            <h3>From</h3>
            <p className="poppins-bold my-4 text-2xl text-left w-full px-5">
              IDR {price}
            </p>
            <Link to={`/activities/${id}`}>
              {/* <ButtonBook textButton="More" className="float-right mb-5 mr-5" /> */}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

import React from "react";

const Card = ({ src, title, price }) => {
  return (
    <div
      className="w-[20rem] bg-white rounded-[30px] shadow-md flex flex-col items-center m-10 
    drop-shadow-2xl justify-center">
      {/* <div className="rounded-[30px] flex items-center justify-center mb-4 "> */}
      <img
        src={src}
        alt=""
        className="w-full h-[180px] rounded-[30px] relative object-cover"
      />
      {/* </div> */}
      <h1 className="Title-card">{title}</h1>
      <h3>From</h3>
      <p className="poppins-bold my-4">IDR {price}</p>
    </div>
  );
};
export default Card;

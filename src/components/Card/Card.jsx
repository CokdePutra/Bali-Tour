import React from "react";

const Card = ({ src, title, desc }) => {
  return (
    <div
      className="w-[20rem] bg-white rounded-[30px] shadow-md flex flex-col items-center m-10 
    drop-shadow-2xl border-2 border-color-gold-card justify-center">
      {/* <div className="rounded-[30px] flex items-center justify-center mb-4 "> */}
      <img
        src={src}
        alt=""
        className="w-full h-[220px] rounded-[30px] relative object-cover"
      />
      {/* </div> */}
      <h1 className="text-3xl mb-2 kodchasan-bold">{title}</h1>
      <p className="text-gray-600 jura-medium">{desc}</p>
    </div>
  );
};
export default Card;

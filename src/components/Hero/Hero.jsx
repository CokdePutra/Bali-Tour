import React from "react";

const Hero = ({ backgroundImage, title, desc }) => {
  const sectionStyle = {
    backgroundImage: `url("${encodeURI(backgroundImage)}")`,
    height: "calc(var(--vh, 1vh) * 100)", // Fix for iOS viewport height
  };

  return (
    <div
      className="relative w-full bg-cover bg-center overflow-hidden flex items-center justify-center poppins-medium mt-[-82px]"
      style={sectionStyle}>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="Title">{title}</h1>
        <p className="Desc">{desc}</p>
      </div>
    </div>
  );
};

export default Hero;

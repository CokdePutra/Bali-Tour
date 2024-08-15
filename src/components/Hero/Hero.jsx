import React from "react";

const Hero = ({ backgroundImage, title, desc }) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className="relative w-full h-screen bg-fixed bg-cover bg-center overflow-hidden flex items-center justify-center poppins-medium -mt-[82px]"
      style={sectionStyle}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="Title">{title}</h1>
        <p className="Desc">{desc}</p>
      </div>
    </div>
  );
};

export default Hero;

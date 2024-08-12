import React from "react";

const Hero = ({ backgroundImage }) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className="relative w-full h-screen bg-fixed bg-cover bg-center flex items-center justify-center poppins-medium"
      style={sectionStyle}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-3xl md:text-5xl font-bold poppins-bold mb-6">
          Welcome to Bagus Bali Tour & Transport
        </h1>
        <p className="text-lg md:text-xl poppins-regular mb-10">
          Discover the beauty of Bali with us
        </p>
      </div>
    </div>
  );
};

export default Hero;

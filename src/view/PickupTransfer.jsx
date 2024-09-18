import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { HeroImage } from "../constants/constants";

const Pickup = () => {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage={HeroImage.PickupTransfer}
        title="Pickup & Transfer"
      />
      <div className="content lg:flex lg:justify-around p-5 m-5">
        <div className="left">
          <h1 className="Title-card mt-10">Airport Pickup/Drop Off</h1>
          <ul>
            <li className="Desc">
              IDR 350,000 Airport (to/from) Kuta or Legian
            </li>
            <li className="Desc">
              IDR 350,000 Airport (to/from) Kuta or Legian
            </li>
            <li className="Desc">
              IDR 350,000 Airport (to/from) Kuta or Legian
            </li>
            <li className="Desc">
              IDR 350,000 Airport (to/from) Kuta or Legian
            </li>
            <li className="Desc">
              IDR 350,000 Airport (to/from) Kuta or Legian
            </li>
          </ul>
        </div>
        <div className="right">
          <h2 className="Title-card mt-10">Hotel Transfer</h2>
          <ul>
            <li className="Desc">IDR 325,000 Seminyak (to/from) Kuta</li>
            <li className="Desc">IDR 325,000 Seminyak (to/from) Kuta</li>
            <li className="Desc">IDR 325,000 Seminyak (to/from) Kuta</li>
            <li className="Desc">IDR 325,000 Seminyak (to/from) Kuta</li>
            <li className="Desc">IDR 325,000 Seminyak (to/from) Kuta</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Pickup;

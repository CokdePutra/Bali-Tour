import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { HeroImage, ServiceDetail } from "../constants/constants";
import ButtonBook from "../components/Button/ButtonBook";

const Pickup = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter services based on the search query
  const filteredServices = ServiceDetail.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Hero
        backgroundImage={HeroImage.PickupTransfer}
        title="Pickup & Transfer"
      />
      <div className="md:flex w-auto place-content-center my-10">
        <label
          htmlFor="service-search"
          className="mr-2 font-semibold text-lg text-gray-700">
          Search Service:
        </label>
        <input
          type="text"
          id="service-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-primary-color px-2 py-1 rounded-[4px] w-auto"
          placeholder="Where you want to go..."
        />
      </div>
      <div className="w-full flex justify-center my-5">
        <table className="w-4/5 max-w-2xl border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Services</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 text-left">
                  {service.name}
                </td>
                <td className="border border-gray-300 p-2">
                  Rp {service.price}
                </td>
                <td className="border border-gray-300 p-2">
                  <ButtonBook textButton="Book" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm">Note : this price is /transfer and /car</p>
      <Footer />
    </>
  );
};

export default Pickup;

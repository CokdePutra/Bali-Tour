import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Pickup from "./view/PickupTransfer";
import Activities from "./view/Activities";
import Detail from "./view/Detail";
import Review from "./view/Review";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Animates only once on scroll
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PickupTransfer" element={<Pickup />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<Detail />} />
        <Route path="/review" element={<Review />} />
        {/* Uncomment and create the NotFound component to handle undefined routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

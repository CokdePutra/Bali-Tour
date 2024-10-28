import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Pickup from "./view/PickupTransfer";
import Activities from "./view/Activities";
import Detail from "./view/Detail";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PickupTransfer" element={<Pickup />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<Detail />} />
        {/* Uncomment and create the NotFound component to handle undefined routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

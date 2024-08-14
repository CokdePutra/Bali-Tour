import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Activities from "./view/Activities";
import Detail from "./view/Detail";
// import NotFound from "./view/NotFound"; // Make sure to create this component
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<Detail />} />
          {/* <Route path="*" element={<NotFound />} />{" "} */}
          {/* Handles all undefined routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

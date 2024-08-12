import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Activities from "./view/Activities";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/home" element={<Home />} /> */}
          {/* <Route path="/Pickup&Transfer" element={<Pickup />} /> */}
          <Route path="/Activities" element={<Activities />} />
          {/* <Route path="/da" element={<MoreActivities />} /> */}
          {/* <Route path="/under" element={<UnderConstruction />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

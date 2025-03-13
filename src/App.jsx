import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Facebike from "./pages/Facebike";
import "./assets/styles/About.css";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facebike" element={<Facebike />} />
      </Routes>
    </Router>
  );
};

export default App;


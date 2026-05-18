import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Facebike from "./pages/Facebike";
import Frutas from "./pages/Frutas";
import Japi from "./pages/Japi";
import Capelas from "./pages/Capelas";
import Marcia from "./pages/Marcia";


import Sidebar from "./components/Sidebar";

import "./App.css";

const App = () => {

  return (

    <Router>

      <div className="layout">

        <Sidebar />

        <div className="page-content">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/facebike"
              element={<Facebike />}
            />

            <Route
              path="/aventuras/rota-das-frutas"
              element={<Frutas />}
            />
            <Route
               path="/aventuras/serra-do-japi"
              element={<Japi />}
            />
            <Route
              path="/aventuras/rota-das-capelas"
              element={<Capelas />}
            />
            <Route
              path="/aventuras/marcia"
              element={<Marcia />}
            />

          </Routes>

        </div>

      </div>

    </Router>

  );

};

export default App;
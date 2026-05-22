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
import Cananeia from "./pages/Cananeia";
import Guaxu from "./pages/Guaxu";
import Jaguariuna from "./pages/Jaguariuna";
import Caminho from "./pages/Caminho";
import Graciosa from "./pages/Graciosa";
import Pontal from "./pages/Pontal";
import Curitiba from "./pages/Curitiba";
import Santa from "./pages/Santa";
import Riopardo from "./pages/Riopardo";
import Brotas from "./pages/Brotas";
import Ana from "./pages/Ana";
import Cananeia2023 from "./pages/Cananeia2023";
import Ilha from "./pages/Ilha.jsx";
import Ilhabela from "./pages/Ilhabela.jsx";
import SaoSebastiao from "./pages/SaoSebastiao.jsx";
import Horto from "./pages/Horto.jsx";
import Esqueleto from "./pages/Esqueleto.jsx";
import Pico from "./pages/Pico.jsx";
import Canta from "./pages/Canta.jsx";
import Piracicaba from "./pages/Piracicaba.jsx";
import Paraitinga from "./pages/Paraitinga.jsx";
import Anjos from "./pages/Anjos.jsx";
import Caminhofe from "./pages/Caminhofe.jsx";
import Amigos from "./pages/Amigos.jsx";
import Lugares from "./pages/Lugares.jsx";
import Blog from "./pages/Blog.jsx";
import Castas from "./pages/blog/Castas.jsx";



import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";


const App = () => {

  return (

    <Router>

      <ScrollToTop />

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
              <Route
              path="/aventuras/cananeia"
              element={<Cananeia />}
            />
              <Route
              path="/aventuras/rota-do-cafe"
              element={<Guaxu />}
            />
              <Route
              path="/aventuras/jaguariuna"
              element={<Jaguariuna />}
            />
              <Route
              path="/aventuras/caminho-da-fe"
              element={<Caminho />}
            />
              <Route
              path="/aventuras/serra-da-graciosa"
              element={<Graciosa />}
            />
              <Route
              path="/aventuras/pontal-do-parana"
              element={<Pontal />}
            />
              <Route
              path="/aventuras/curitiba"
              element={<Curitiba />}
            />
              <Route
              path="/aventuras/santa-olimpia"
              element={<Santa />}
            />
              <Route
              path="/aventuras/rio-pardo"
              element={<Riopardo />}
            />
              <Route
              path="/aventuras/brotas-torrinha"
              element={<Brotas />}
            />
              <Route
              path="/aventuras/analandia"
              element={<Ana />}
            />
              <Route
              path="/aventuras/cananeia-2023"
              element={<Cananeia2023 />}
            />

            <Route
              path="/aventuras/ilha-comprida"
              element={<Ilha />}
            />

            <Route
              path="/aventuras/ilha-bela"
              element={<Ilhabela />}
            />

            <Route
              path="/aventuras/sao-sebastiao"
              element={<SaoSebastiao />}
            />

            <Route
              path="/aventuras/horto-florestal"
              element={<Horto />}
            />

            <Route
              path="/aventuras/ponte-do-esqueleto"
              element={<Esqueleto />}
            />

            <Route
              path="/aventuras/pico-do-gaviao"
              element={<Pico />}
            />

            <Route
              path="/aventuras/cantagalo"
              element={<Canta />}
            />

            <Route
              path="/aventuras/piracicaba"
              element={<Piracicaba />}
            />

            <Route
              path="/aventuras/sao-luis-do-paraitinga"
              element={<Paraitinga />}
            />

            <Route
              path="/aventuras/caminho-dos-anjos"
              element={<Anjos />}
            />

              <Route
              path="/aventuras/caminho-da-fe-2015"
              element={<Caminhofe />}
            />
              <Route
              path="/amigos"
              element={<Amigos />}
            />
              <Route
              path="/lugares"
              element={<Lugares />}
            />
              <Route
              path="/blog"
              element={<Blog />}
            />
              <Route
              path="/blog/castas-e-crencas"
              element={<Castas />}
            />

          </Routes>

        </div>

      </div>

    </Router>

  );

};

export default App;
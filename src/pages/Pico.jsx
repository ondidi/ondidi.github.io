import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "pgav (1).webp",
  "pgav (2).webp",
  "pgav (3).webp",
  "pgav (4).webp",
  "pgav (5).webp",
  "pgav (6).webp",
  "pgav (7).webp",
  "pgav (8).webp",
  "pgav (9).webp",

];

const Pico = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Pico do Gavião - SP/Minas
          </h1>

          <p className="gallery-date">
            Publicado em 01/06/2018
          </p>

        </div>

        <p className="gallery-description">
            Em 2018, meu amigo Rodrigo Torres e eu embarcamos em uma jornada de pedal incrível. Partindo de Rio Claro, percorremos 157 quilômetros ao longo de três dias inesquecíveis. O desafio foi potencializado devido ao peso extra que carregávamos em nossas bicicletas. No entanto, como diz o ditado, "o que é difícil, vale a pena." E as fotos que capturamos durante a viagem são a prova viva disso.s.

        </p>

      </div>

      {/* GRID */}

      <div className="gallery-grid">

        {fotos.map((foto, index) => (

          <div
            className="photo-card"
            key={index}
          >

            <img
              src={`/img/pico/${foto}`}
              alt="Pico do Gavião"
            />

            <div className="photo-footer">

              <span>
                PICO DO GAVIÃO
              </span>

              <div className="photo-actions">

                <img
                  src={copiarIcon}
                  alt="Copiar"
                />

                <img
                  src={enviarIcon}
                  alt="Enviar"
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Pico;
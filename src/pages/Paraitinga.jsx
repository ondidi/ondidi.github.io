import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "parai (1).webp",
  "parai (2).webp",
  "parai (3).webp",
  "parai (4).webp",
  "parai (5).webp",
  "parai (6).webp",
  "parai (7).webp",
  "parai (8).webp",
  "parai (9).webp",
  "parai (10).webp",
  "parai (11).webp",

];

const Paraitinga = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            São Luís do Paraitinga - SP
          </h1>

          <p className="gallery-date">
            Publicado em 24/06/2017
          </p>

        </div>

        <p className="gallery-description">

            São Luiz do Paraitinga, localizada no Vale do Paraíba, aqui em São Paulo, foi um pedal muito interessante. Trilhas, cachoeiras e muita estrada. Fiz este pedal na companhia dos amigos Erick e Alessandro. A cidade fica no topo da Serra do Mar e foi rota da coroa portuguesa. História pura.

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
              src={`/img/paraitinga/${foto}`}
              alt="Sao Luis do Paraitinga - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                PARAITINGA
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

export default Paraitinga;
import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "IC (1).webp",
  "IC (2).webp",
  "IC (3).webp",
  "IC (4).webp",
  "IC (5).webp",
  "IC (6).webp",
  "IC (7).webp",
  "IC (8).webp",
  "IC (9).webp",
  "IC (10).webp",
  "IC (11).webp",
  "IC (12).webp",

];

const Ilha = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Ilha Comprida - SP
          </h1>

          <p className="gallery-date">
            Publicado em 17/09/2023
          </p>

        </div>

        <p className="gallery-description">

        Foram 144 quilômetros de estrada e praia que se estenderam por praticamente toda a extensão da Ilha Comprida, culminando na chegada a Cananéia. Essa jornada de pedal foi, sem dúvida, exaustiva, mas também incrivelmente emocionante, repleta de paisagens deslumbrantes e experiências memoráveis ao longo do caminho.

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
              src={`/img/ilhacomprida/${foto}`}
              alt="Cana"
            />

            <div className="photo-footer">

              <span>
                ILHA COMPRIDA
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

export default Ilha;
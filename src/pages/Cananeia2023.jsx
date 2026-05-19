import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "CAN (1).webp",
  "CAN (2).webp",
  "CAN (3).webp",
  "CAN (4).webp",
  "CAN (5).webp",
  "CAN (6).webp",
  "CAN (7).webp",
  "CAN (8).webp",
  "CAN (9).webp",
  "CAN (10).webp",
  "CAN (11).webp",
  "CAN (12).webp",
];

const Cananeia2023 = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Cananéia - SP

          </h1>

          <p className="gallery-date">
            Publicado em 16/09/2023
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
              src={`/img/cananeia/${foto}`}
              alt="Cananeia2023"
            />

            <div className="photo-footer">

              <span>
                CANANEIA 2023
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

export default Cananeia2023;
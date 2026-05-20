import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "HF-1.jpg",
  "HF-2.jpg",
  "HF-3.jpg",
  "HF-4.jpg",
  "HF-5.jpg",
  "HF-6.jpg",

];

const Horto = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Horto Florestal
          </h1>

          <p className="gallery-date">
            Publicado em 05/03/2023
          </p>

        </div>

        <p className="gallery-description">

            Para quem mora em Rio Claro, SP, o Horto Florestal é como uma extensão de casa. Explorar a floresta de bike e depois seguir para um café aconchegante em Cascalho é uma experiência verdadeiramente reconfortante. A Andrea Castanho tem sido uma parceira incrível nesses pedais e, como ela costuma exclamar, "Ai que tudoooooooooooooooo!". Sem dúvida, compartilho totalmente desse sentimento com ela.

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
              src={`/img/horto/${foto}`}
              alt="Horto Florestal"
            />

            <div className="photo-footer">

              <span>
                HORTO & BAR
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

export default Horto;
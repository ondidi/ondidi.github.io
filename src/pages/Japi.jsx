import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "japi1.webp",
  "japi2.webp",
  "japi3.webp",
  "japi4.webp",
  "japi5.webp",
  "japi6.webp",
  "japi7.webp",
  "japi8.webp",
  "japi9.webp",
  "japi10.webp",
  "japi11.webp",
  "japi12.webp",
  "japi13.webp",
  "japi14.webp",

];

const Japi = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Jundiaí – SP
          </h1>

          <p className="gallery-date">
            Publicado em 11 de abril de 2026
          </p>

        </div>

        <p className="gallery-description">

        Pedalar pela Serra do Japi é uma experiência que mistura esforço e recompensa o tempo todo. As trilhas são cercadas por mata densa, com trechos úmidos, sombra constante e aquele friozinho característico da região. Em vários pontos, a água cruza o caminho — seja em pequenas nascentes ou cachoeiras. As subidas exigem, mas os mirantes compensam. E muito. O mais curioso é a sensação de isolamento: mesmo estando perto de São Paulo.

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
              src={`/img/japi/${foto}`}
              alt="Japi"
            />

            <div className="photo-footer">

              <span>
                SERRA DO JAPI
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

export default Japi;
import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "RF1.webp",
  "RF2.webp",
  "RF3.webp",
  "RF4.webp",
  "RF5.webp",
  "RF6.webp",
  "RF7.webp",
  "RF8.webp",
  "RF9.webp",
  "RF10.webp",
  "RF11.webp",

];

const Frutas = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Louveira/Vinhedo – SP
          </h1>

          <p className="gallery-date">
            Publicado em 12 de abril de 2026
          </p>

        </div>

        <p className="gallery-description">

          Aproveitando a região de Jundiaí,
          fiz um pedal pela Rota das Frutas,
          no trecho mais curto entre Vinhedo
          e Louveira.
          A paisagem muda completamente,
          diferentemente da Serra do Japi:
          mais gastronômica e etílica,
          cercada por parreirais e com pouca
          estrada de terra.
          Um pedal leve, daqueles para
          curtir o caminho — e, claro,
          as paradas.

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
              src={`/img/rota-frutas/${foto}`}
              alt="Rota das Frutas"
            />

            <div className="photo-footer">

              <span>
                ROTA DAS FRUTAS
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

export default Frutas;
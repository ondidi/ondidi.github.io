import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "CA (1).webp",
  "CA (2).webp",
  "CA (3).webp",
  "CA (4).webp",
  "CA (5).webp",
  "CA (6).webp",
  "CA (7).webp",
  "CA (8).webp",
  "CA (9).webp",
  "CA (10).webp",
  "CA (11).webp",
  "CA (12).webp",
  "CA (13).webp",
  "CA (14).webp",
  "CA (15).webp",

];

const Anjos = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Caminho dos Anjos - MG
          </h1>

          <p className="gallery-date">
            Publicado em 14/06/2015
          </p>

        </div>

        <p className="gallery-description">

            Essa incrível jornada por diversas cidades históricas em Minas Gerais foi compartilhada com meu amigo Erik Aceiro. Foi uma aventura com nossas bikes repleta de descobertas, encontros memoráveis e alguns desafios ao longo do caminho. Percorremos um trecho significativo da icônica Estrada Real, e essa experiência se tornou inesquecível, permanecendo viva em nossas memórias até hoje. Valeu "Erikão".

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
              src={`/img/anjos/${foto}`}
              alt="Caminho"
            />

            <div className="photo-footer">

              <span>
                CAMINHO DOS ANJOS
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

export default Anjos;
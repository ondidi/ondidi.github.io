import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "ilha (1).webp",
  "ilha (2).webp",
  "ilha (3).webp",
  "ilha (4).webp",
  "ilha (5).webp",
  "ilha (6).webp",
  "ilha (7).webp",
  "ilha (8).webp",
  "ilha (9).webp",

];

const Ilhabela = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Ilhabela/Castelhanos
          </h1>

          <p className="gallery-date">
            Publicado em 14/10/2023
          </p>

        </div>

        <p className="gallery-description">

            O percurso entre São Sebastião à deslumbrante Praia de Castelhanos em Ilhabela pode ser tecnicamente curto, com aproximadamente 42 quilômetros de extensão de onde eu parti, mas desafia os ciclistas com mais de 1600 metros de elevação acumulada. Contudo, cada pedalada nesse trajeto é recompensada por paisagens espetaculares, tornando-o uma jornada que transcende a mera aventura. O parque, em seu entorno, revela-se como um oásis de maravilhas naturais, proporcionando uma experiência verdadeiramente inesquecível para o ciclista que deseja estar junto à natureza.

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
              src={`/img/ilhabela/${foto}`}
              alt="Ilha"
            />

            <div className="photo-footer">

              <span>
                ILHABELA/CASTELHANOS
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

export default Ilhabela;
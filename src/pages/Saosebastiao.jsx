import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "SB (1).webp",
  "SB (2).webp",
  "SB (3).webp",
  "SB (4).webp",
  "SB (5).webp",
  "SB (6).webp",


];

const SaoSebastiao = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            São Sebastião - SP
          </h1>

          <p className="gallery-date">
            Publicado em 13/10/2023
          </p>

        </div>

        <p className="gallery-description">

            São Sebastião oferece um cenário único, onde o passado se entrelaça harmoniosamente com o moderno. Com seus casarões com mais de 300 anos à beira-mar e um charmoso calçadão convidativo, o local proporciona o cenário perfeito para passeios de bike pelas ciclovias e momentos de descontração nos aconchegantes bares na orla. Pedalar enquanto aprecia a paisagem deslumbrante e trombar pessoas bonitas foi uma experiência verdadeiramente gratificante. Estava há tempos na minha agenda.

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
              src={`/img/saosebastiao/${foto}`}
              alt="Saosebstião"
            />

            <div className="photo-footer">

              <span>
                SÃO SEBASTIÃO
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

export default SaoSebastiao;
import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "eskleto0.webp",
  "eskleto1.webp",
  "eskleto2.webp",
  "eskleto3.webp",
  "eskleto4.webp",
  "eskleto5.webp",

];

const Esqueleto = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Ponte do Esqueleto - Limeira - SP
          </h1>

          <p className="gallery-date">
            Publicado em 10/07/2021
          </p>

        </div>

        <p className="gallery-description">

            Neste local, reza a lenda, foi erguido para atender ao ambicioso projeto de expansão de uma linha de trem de alta velocidade para o Interior. No entanto, o projeto não foi concluído e o que restou é carinhosamente chamado pelos ciclistas de "Ponte do Esqueleto". Essa imponente estrutura pode ser avistada por quem trafega pela Rodovia dos Bandeirantes, em Limeira. A sensação de pedalar aqui provoca aquele "friozinho", pois um dos lados da ponte não possui guarda-corpo, proporcionando uma experiência única. O trajeto como um todo é repleto de beleza e emoção, desde a subida do Morro Azul até as trilhas desafiadoras que se estendem além da ponte.

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
              src={`/img/esq/${foto}`}
              alt="Esqueleto"
            />

            <div className="photo-footer">

              <span>
                ESQUELETO
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

export default Esqueleto;
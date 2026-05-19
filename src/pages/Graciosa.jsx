import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "gra (1).webp",
  "gra (2).webp",
  "gra (3).webp",
  "gra (4).webp",
  "gra (5).webp",
  "gra (6).webp",
  "gra (7).webp",
  "gra (8).webp",
  "gra (9).webp",
  "gra (10).webp",
  "gra (11).webp",
  "gra (12).webp",
  "gra (13).webp",
  "gra (14).webp",

];

const Graciosa = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Graciosa/Morretes
          </h1>

          <p className="gallery-date">
            Publicado em 25 de março de 2025
          </p>

        </div>

        <p className="gallery-description">

          A Serra da Graciosa encanta pela beleza e charme. A percorri de carro e outra vez no tradicional passeio trem/van. Este pedal foi difícil, foram quase 70 km de extensão, descendo e subindo do Portal até Morretes. Um desnível de quase 1000 metros. O tempo mais do que ajudou, sol forte, mesmo à sombra o desgaste testou todos os limites da resistência. Não sabia, mas o trajeto faz parte da Estrada Real, que era utilizada desde o período colonial para o transporte de mercadorias entre o litoral e Curitiba. Uma jornada exaustiva, mas que voltaria a fazer.

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
              src={`/img/graciosa/${foto}`}
              alt="Graciosa"
            />

            <div className="photo-footer">

              <span>
                SERRA DA GRACIOSA
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

export default Graciosa;
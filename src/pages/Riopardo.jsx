import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "IMG_2110.JPG",
  "Rio-pardo (0).webp",
  "Rio-pardo (1).webp",
  "Rio-pardo (2).webp",
  "Rio-pardo (3).webp",
  "Rio-pardo (4).webp",
  "Rio-pardo (5).webp",
  "Rio-pardo (6).webp",
  "Rio-pardo (7).webp",
  "Rio-pardo (8).webp",
  "Rio-pardo (9).webp",
  "Rio-pardo (10).webp",
  "Rio-pardo (11).webp",
  "Rio-pardo (12).webp",
  
];

const Riopardo = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            São José do Rio Pardo - SP
          </h1>

          <p className="gallery-date">
            Publicado em 17 de Dezembro de 2023
          </p>

        </div>

        <p className="gallery-description">

          Este pedal também estava guardado na "gaveta" há um bom tempo. A ideia era percorrer um trecho pequeno de aproximadamente 60 quilômetros em São José do Rio Pardo. Como tudo que está próximo de Minas tem muitas subidas, por aqui não é diferente, então ter cautela na jornada faz toda a diferença. Mas, como os grandes amores valem a pena, aqui não seria menos apaixonante, pois a cidade é cercada por uma atmosfera histórica e cultural maravilhosa. O ponto alto foi a visita à Fazenda Fortaleza, com sua estrutura imponente composta por casarões, terreiros, cachoeiras, usina hidrelétrica e áreas agrícolas, que refletem a arquitetura típica das fazendas que foram essenciais para o desenvolvimento da economia brasileira, principalmente no contexto da produção de café. Acredito que está tudo contado. Rio Pardo tem muito a oferecer, e a certeza de voltar é garantida.

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
              src={`/img/riopardo/${foto}`}
              alt="São José Rio Pardo - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                Rio Pardo
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

export default Riopardo;
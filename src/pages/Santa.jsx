import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "StaOlimpia (0).webp",
  "StaOlimpia (1).webp",
  "StaOlimpia (2).webp",
  "StaOlimpia (3).webp",
  "StaOlimpia (4).webp",
  "StaOlimpia (5).webp",
  "StaOlimpia (6).webp",
  "StaOlimpia (7).webp",
  "StaOlimpia (8).webp",
  "StaOlimpia (9).webp",
  "StaOlimpia (10).webp",
  "StaOlimpia (11).webp",
  "StaOlimpia (12).webp",
  "StaOlimpia (13).webp",
 
];

const Santa = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Santa Olímpia, Piracicaba - SP
          </h1>

          <p className="gallery-date">
            Publicado em 20 de Julho de 2024
          </p>

        </div>

        <p className="gallery-description">

          A Festa da Polenta de Santa Olimpia é, sem dúvida, um evento que combina desafio, cultura e confraternização. É uma tradição que há muitos anos tem minha presença garantida. Ciclistas de diversas regiões se reúnem para participar deste evento que, além de celebrar a cultura local, proporciona um desafio físico amplo. Ao longo do percurso, encontramos pessoas agradáveis, tornando a pedalada ainda mais especial. Este ano, tive a companhia dos amigos Rodrigo e Eli. Pedalar ao lado de bons amigos é sempre um incentivo extra para superar "as pedras" que encontramos pelo caminho. Outra coisa, e muito importante: recepção dos voluntários é algo a ser destacado, eles são impecáveis em todos os detalhes, desde a organização até a acolhida calorosa. E, claro, a comida é maravilhosa, com a polenta sendo a estrela da festa. Saborear os pratos típicos após um longo pedal é uma recompensa e tanto

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
              src={`/img/staolimpia/${foto}`}
              alt="Santa Olimpia - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                FESTA DA POLENTA
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

export default Santa;
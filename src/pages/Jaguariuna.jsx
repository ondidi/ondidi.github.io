import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "T1.webp",
  "T2.webp",
  "T3.webp",
  "T4.webp",
  "T5.webp",
  "T6.webp",
  "T7.webp",
  "T8.webp",

];

const Trem = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Camp/Jaguariúna - SP
          </h1>

          <p className="gallery-date">
            Publicado em 13 de setembro de 2025
          </p>

        </div>

        <p className="gallery-description">

          Fiz um pedal entre Campinas e Jaguariúna margeando a antiga linha férrea por onde ainda passa a charmosa Maria Fumaça. A rota tem trechos muito bem preservados e cenários que misturam natureza, história e aquela sensação gostosa de pedalar em um clima nostálgico foi muito gostoso. Em alguns pontos, o visual faz a gente diminuir o ritmo só para apreciar. O trajeto oferece opções para todos os gostos — desde passeios tranquilos até desafios mais técnicos de MTB — e fiz tudo isso com amigos, o que deixou a experiência ainda mais divertida. No fim, ficou aquela alegria simples de quem viveu um dia leve, conectando paisagem, aventura e boa companhia.

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
              src={`/img/trem/${foto}`}
              alt="Cana"
            />

            <div className="photo-footer">

              <span>
                CAFÉ COM TREM
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

export default Trem;
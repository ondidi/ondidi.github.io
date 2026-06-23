import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "gruta (1).webp",
  "gruta (2).webp",
  "gruta (3).webp",
  "gruta (4).webp",
  "gruta (5).webp",
  "gruta (6).webp",

];

const Canta = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Gruta Cantagalo - Ipeúna - SP
          </h1>

          <p className="gallery-date">
            Publicado em 10/02/2018
          </p>

        </div>

        <p className="gallery-description">

            Existem pedais que nós repetimos incansavelmente, e o Cantagalo em Ipeúna é definitivamente um deles. Fui levado a essa incrível trilha pela generosidade do meu amigo e companheiro de pedal, Alexandre D'bronzo, um ser humano dedicado e de um coração verdadeiramente único. Aliás, a grande maioria das nossas aventuras de pedal contou com a participação da nossa galera fiel, incluindo o Rodrigo, Ronei, João, Gasbarro, e as maravilhosas Andrea e Bia. Juntos, compartilhamos experiências que enriquecem nossas vidas e fortalecem nossa amizade a cada pedalada.

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
              src={`/img/gruta/${foto}`}
              alt="Gruta de Ipeúna - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                GRUTA IPEÚNA
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

export default Canta;
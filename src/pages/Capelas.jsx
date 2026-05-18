import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "Capelas1.webp",
  "Capelas2.webp",
  "Capelas3.webp",
  "Capelas4.webp",
  "Capelas5.webp",
  "Capelas6.webp",
  "Capelas7.webp",
  "Capelas8.webp",
  "Capelas9.webp",
  "Capelas10.webp",
  "Capelas11.webp",
  "Capelas12.webp",
  "Capelas13.webp",
  "Capelas14.webp",
  "Capelas15.webp",
  "Capelas16.webp",
  "Capelas17.webp",
  "Capelas18.webp",
  "Capelas19.webp",
  "Capelas20.webp",
  "Capelas21.webp",
  "Capelas22.webp",
  "Capelas23.webp",
  "Capelas24.webp",

];

const Capelas = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Serra Negra - SP
          </h1>

          <p className="gallery-date">
            Publicado em 2 de março de 2026
          </p>

        </div>

        <p className="gallery-description">

          Percorri a Rota das Capelas, em Serra Negra, inicialmente movido pela curiosidade. Não imaginava que o desafio seria tão expressivo.

          O trajeto passa por capelas históricas e por pontos que favorecem tanto o ciclismo quanto uma caminhada contemplativa.

          A paisagem impõe respeito: estradas de terra, silêncio e uma sucessão de subidas longas e trechos bastante íngremes.

          Apesar dos cerca de 67 km, a dificuldade é elevada.

          É um percurso que exige preparo, constância e disciplina nas subidas.

          Aproveitei o final de semana para estender a aventura até Monte Alegre do Sul, ali bem próximo.

          No total, foram mais de 80 km percorridos, com altimetria acumulada próxima de 2.500 metros, incluindo a subida ao Morro do Cristo.

          Foi um daqueles desafios que testam as pernas - e, de certa forma, também organizam a mente.

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
              src={`/img/capelas/${foto}`}
              alt="Rota das Capelas"
            />

            <div className="photo-footer">

              <span>
                ROTA DAS CAPELAS
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

export default Capelas;
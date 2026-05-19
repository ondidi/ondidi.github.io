import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "CAF1.webp",
  "CAF2.webp",
  "CAF3.webp",
  "CAF4.webp",
  "CAF5.webp",
  "CAF6.webp",
  "CAF7.webp",
  "CAF8.webp",
  "CAF9.webp",
  "CAF10.webp",
  "CAF11.webp",
  "CAF12.webp",

];

const Guaxu = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Guaxupé - MG
          </h1>

          <p className="gallery-date">
            Publicado em 6 de dezembro de 2025
          </p>

        </div>

        <p className="gallery-description">

          Pedalar pela Rota do Café, em Guaxupé, foi uma experiência intensa. Entre fazendas centenárias e belas paisagens, o percurso virou um verdadeiro teste de resistência: mais de 40 km com cerca de 2 mil metros de altimetria acumulada. O ponto mais alto marcou 1.221 metros no Garmin. Fui solo. Como diz o ditado, sozinho a gente vai mais rápido, mas acompanhado vai mais longe. No meu caso, fui rápido… e pouco. À noite curti a cidade, linda, maravilhossa, super enfeitada para o Natal

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
              src={`/img/guaxu/${foto}`}
              alt="Cana"
            />

            <div className="photo-footer">

              <span>
                ROTA DO CAFÉ
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

export default Guaxu;
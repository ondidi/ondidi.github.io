import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "god (1).webp",
  "god (2).webp",
  "god (3).webp",
  "god (4).webp",
  "god (5).webp",

];

const Piracicaba = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Piracicaba - SP
          </h1>

          <p className="gallery-date">
            Publicado em 10/02/2017
          </p>

        </div>

        <p className="gallery-description">

            Essa pequena porção de terra, conhecida como Godinhos, no Município de Piracicaba, SP, foi meu embarque no mundo, na casa que apareço de bike. Este lugar tem uma importância imensurável em minha vida. Me leva a uma conexão entre o real e imaginário. Foi aqui que minha mãe me deu o nome de Diógenes, em homenagem ao famoso filósofo. Minha família possuía uma propriedade rural onde abrigou três gerações de descendentes de italianos que vieram em busca de uma vida melhor no Brasil. Foi neste ambiente rústico, desprovido de energia elétrica e outras conveniências, que minha conexão com este mundo começou. Na foto em P&B minha família e eu junto ao meu pai.

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
              src={`/img/godinho/${foto}`}
              alt="Bairro Godinho"
            />

            <div className="photo-footer">

              <span>
                BAIRRO GODINHOS
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

export default Piracicaba;
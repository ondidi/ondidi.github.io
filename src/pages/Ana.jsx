import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "ana0.webp",
  "ana1.webp",
  "ana2.webp",
  "ana3.webp",
  "ana4.webp",
  "ana5.webp",
  "ana6.webp",
 
];

const Ana = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Analândia - SP
          </h1>

          <p className="gallery-date">
            Publicado em 19/08/2023
          </p>

        </div>

        <p className="gallery-description">

          Este pedal em Analândia é uma homenagem à Frida Kahlo, cujo o quadro, título da poesia, inspirou a música "Viva la Vida" do Coldplay, repleta de significados e referências. No entanto, o que realmente se destaca nesta história é a inspiração que a pintura de Kahlo nos proporciona: a ideia de que nunca é tarde para se redescobrir. Além disso, ela nos ensina uma importante lição: todas as formas de poder são inúteis, uma vez que a natureza segue leis eternas, concedendo vida, mas também retirando-a. Quando combinamos arte com poesia, isso se torna um elemento revolucionário em nossa alma. De qualquer forma, essa conexão que me inspira ressoa como uma canção em homenagem à vida, que recomeça a cada dia. Antes de concluir, não posso deixar de mencionar o quão incrível foi esse passeio de pedal e como a companhia das amigas Andrea e Silene tornou o dia ainda mais especial. A você e a todos que amam a vida livre, "Viva la Vida"

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
              src={`/img/ana/${foto}`}
              alt="Ana"
            />

            <div className="photo-footer">

              <span>
                ANALANDIA
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

export default Ana;
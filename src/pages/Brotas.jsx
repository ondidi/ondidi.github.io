import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "Brotas-torrinha (1).webp",
  "Brotas-torrinha (2).webp",
  "Brotas-torrinha (3).webp",
  "Brotas-torrinha (4).webp",
  "Brotas-torrinha (5).webp",
  "Brotas-torrinha (6).webp",
  "Brotas-torrinha (7).webp",
  "Brotas-torrinha (8).webp",
  "Brotas-torrinha (9).webp",
  "brotas-torrinha-00.webp",
  
];

const Brotas = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Brotas/Torrinha - SP
          </h1>

          <p className="gallery-date">
            Publicado em 14/10/2023
          </p>

        </div>

        <p className="gallery-description">

          Todos os pedais têm uma história, mas este foi ao som e "companhia" de Lulu, "foi bom ter ver de novo aqui... Surpresa certa te encontrar... o que for da vida não nos deterá". Simples, porém profunda a metáfora. Isso porque já estive em Brotas em um tour com o grande amigo Rodrigo Torres. Uma jornada épica de 160 quilômetros. Rever este pedal, agora e com outras ideias na cabeça, implica em entender que os eventos da nossa vida são realmente influenciados por fatores imprevisíveis. Tudo tem uma razão e um propósito. Por isso é que eu estou aqui compartilhando este momento. A aceitação da incerteza, a maneira de lidar com a complexidade realmente estão além do controle e imprevisibilidade da vida. Então, "... não há lógica no que o acaso decidir". Me dobro em reverência e respeito ao mistério, mas sem crendices e deuses, sou mais aquele que aprecia a complexidade e diversidade do mundo como modelos de crescimento. Tá contado. Beijos a todos.

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
              src={`/img/Brotas-torrinha/${foto}`}
              alt="Brotas"
            />

            <div className="photo-footer">

              <span>
                BROTAS-TORRINHA
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

export default Brotas;
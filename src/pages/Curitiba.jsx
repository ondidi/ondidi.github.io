import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "cur1.webp",
  "cur2.webp",
  "cur3.webp",
  "cur4.webp",
  "cur5.webp",
  "cur6.webp",
  "cur7.webp",
  "cur8.webp",
  "cur9.webp",
  "cur10.webp",
  "cur11.webp",
  "cur12.webp",
  "cur13.webp",
  "cur14.webp",
  "cur15.webp",
  "cur16.webp",
  "cur17.webp",

];

const Curitiba = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Curitiba - PR
          </h1>

          <p className="gallery-date">
            Publicado em 22 de Março de 2025
          </p>

        </div>

        <p className="gallery-description">

          Explorar Curitiba sobre duas rodas, foi uma experiência incrível! O tempo ajudou, clima de começo de outono, fresquinho, sem muito calor, deixou tudo mais agradável para pedalar e, claro, fazer bons registros. A capital paranaense é um convite ao turismo, e percorrê-la de bicicleta foi um sonho realizado. Aqui tenho boas lembranças, que trazem aquela sensação gostosa de nostalgia. Devo ter pedalado mais de 70 quilômetros, e o melhor; sem gastar um litro de combustível, apenas água no "motor".

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
              src={`/img/curitiba/${foto}`}
              alt="Curitiba"
            />

            <div className="photo-footer">

              <span>
                CURITIBA
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

export default Curitiba;
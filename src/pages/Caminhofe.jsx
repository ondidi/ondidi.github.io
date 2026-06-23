import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "caminho_1.webp",
  "caminho_2.webp",
  "caminho_3.webp",
  "caminho_4.webp",
  "caminho_5.webp",
  "caminho_6.webp",
  "caminho_7.webp",
  "caminho_8.webp",
  "caminho_9.webp",
  "caminho_10.webp",
  "caminho_11.webp",
  "caminho_12.webp",
  "caminho_13.webp",
  "caminho_14.webp",
  "caminho_15.webp",
  "caminho_16.webp",

];

const Caminhofe = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Caminho da Fé 2015
          </h1>

          <p className="gallery-date">
            Publicado em 01/04/2015
          </p>

        </div>

        <p className="gallery-description">

            Muitas vezes, a chegada não representa o fim, mas o reaprendizado de um monte de coisa. Acredito que Paulo Coelho tenha inspirado muita gente a embarcar em peregrinações. Ao longo da minha vida, fiz muitas delas, a pé ou de bicicleta. A minha aventura de 2015 foi particularmente emocionante. Percorri 465 quilômetros sozinho, em busca de autoencontro, reflexão e harmonia. A beleza da pedalada mística ao longo do Caminho da Fé não me tornou uma pessoa melhor ou pior, e eu não encontrei o que "procuro". Pois na vida, muitas vezes, não encontramos aquilo que não existe dentro de nós.

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
              src={`/img/caminhofe/${foto}`}
              alt="Caminho da fé - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                CAMINHO DA FÉ 2025
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

export default Caminhofe;
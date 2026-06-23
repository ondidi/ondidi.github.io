import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "MP0.webp",
  "MP1.webp",
  "MP2.webp",
  "MP3.webp",
  "MP4.webp",
  "MP5.webp",
  "MP6.webp",
  "MP7.webp",
  "MP8.webp",
  "MP9.webp",
  "MP10.webp",
  "MP11.webp",
  "MP12.webp",
  "MP13.webp",
  "MP14.webp",
  "MP15.webp",
  "MP16.webp",
  "MP17.webp",
  "MP18.webp",
  "MP19.webp",
  "MP20.webp",
  "MP21.webp",
];

const Marcia = () => {
    const compartilharFoto = async (foto) => {

    const imageUrl =
      `/img/marcia/${foto}`;

    try {

      const response =
        await fetch(imageUrl);

      const blob =
        await response.blob();

      const file = new File(

        [blob],
        foto,

        { type: blob.type }

      );

      if (navigator.canShare &&
          navigator.canShare({ files: [file] })) {

        await navigator.share({

          title: "Rota Marcia Prado",
          text: "Confira esta foto 🚴",
          files: [file],

        });

      } else {

        alert(
          "Seu navegador não suporta compartilhamento de imagem."
        );

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            São Paulo a Santos - SP
          </h1>

          <p className="gallery-date">
            Publicado em 1° de fevereiro de 2026
          </p>

        </div>

        <p className="gallery-description">

            Percorrer a Rota Márcia Prado, que liga São Paulo a Santos passando por São Bernardo do Campo, foi uma experiência marcante, dessas que ficam no corpo e na memória. Além da beleza do trajeto e da sensação única de descer a serra pedalando, há algo a mais nesse caminho. Conheci a história de Márcia Regina de Andrade Prado ainda em vida, quando eu trabalhava em São Paulo, na Alesp. Foi também naquele período que retomei o hábito de pedalar, muito influenciado pelo meu filho. Hoje, cruzar essa rota e ver seu nome eternizado ao longo do percurso traz um sentimento especial. Não se trata apenas de um trajeto ciclístico, mas de uma conquista construída na resistência, no risco e na coragem de quem ousou ocupar as ruas em um país que quase nunca pensa no ciclista. Entre túneis, curvas e a companhia de tantos outros ciclistas, a liberdade aparece de forma concreta: no vento, no movimento contínuo e na sensação de pertencimento. É um percurso que mistura paisagem, história e emoção. Valeu, grupo. A estrada segue viva — e nós seguimos pedalando.

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
              src={`/img/marcia/${foto}`}
              alt="Rota Márcia Prado - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                MÁRCIA PRADO
              </span>

              <div className="photo-actions">

              <a
                href={`/img/marcia/${foto}`}
                download
              >

                <img
                  src={copiarIcon}
                  alt="Baixar"
                />

              </a>

              <button
                onClick={() => compartilharFoto(foto)}
                className="share-button"
              >

                <img
                  src={enviarIcon}
                  alt="Compartilhar"
                />

              </button>


              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Marcia;
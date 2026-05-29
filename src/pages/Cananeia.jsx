import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "PCJ1.webp",
  "PCJ2.webp",
  "PCJ3.webp",
  "PCJ4.webp",
  "PCJ5.webp",
  "PCJ6.webp",
  "PCJ7.webp",
  "PCJ8.webp",
  "PCJ9.webp",
  "PCJ10.webp",
  "PCJ11.webp",
  "PCJ12.webp",
  "PCJ13.webp",
  "PCJ14.webp",
  "PCJ15.webp",
  "PCJ16.webp",
  "PCJ17.webp",
  "PCJ18.webp",
  "PCJ19.webp",
  "PCJ20.webp",

];

const Cananeia = () => {
    const compartilharFoto = async (foto) => {

    const imageUrl =
      `/img/cananeia/${foto}`;

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

          title: "Cananéia/ilhas",
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
            Cananéia/Ilhas
          </h1>

          <p className="gallery-date">
            Publicado em 15 de dezembro de 2025
          </p>

        </div>

        <p className="gallery-description">

        Cada pedal carrega uma história, e toda história percorre uma jornada que nem sempre pode ser dita — seja pelas palavras, seja pelas imagens. Nesta última cicloviagem, segui acompanhado de um time muito bacana: com alguns já havia pedalado antes, outros encontrei pelo próprio caminho. Este foi um ano de muitas aventuras e pedais marcantes. Um ano mais leve, mais romântico e, sobretudo, de astral elevado. Viver não é apenas o que se registra, mas o todo — com tudo aquilo que o destino nos oferece. A chuva e o sol, o dia e a noite, as vitórias e as derrotas. Em tudo, há sempre algo que ensina, algo que vale. Assim, encerro este pedal de 2025, com as belas paisagens de Jacupiranga, Cananéia, Ilha Comprida e Ilha do Cardoso, e fecho um ano em que cumpri grande parte daquilo que desejo como ser humano: ser impecável com as palavras, não levar nada pelo lado pessoal, não tirar conclusões e o mais importante, buscar fazer sempre o melhor.

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
              src={`/img/cana/${foto}`}
              alt="Cana"
            />

            <div className="photo-footer">

              <span>
                ILHAS
              </span>

              <div className="photo-actions">

              <a
                href={`/img/cana/${foto}`}
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

export default Cananeia;
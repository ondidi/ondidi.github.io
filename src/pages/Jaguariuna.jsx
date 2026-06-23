import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "T1.webp",
  "T2.webp",
  "T3.webp",
  "T4.webp",
  "T5.webp",
  "T6.webp",
  "T7.webp",
  "T8.webp",

];

const Trem = () => {
    const compartilharFoto = async (foto) => {

    const imageUrl =
      `/img/trem/${foto}`;

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

          title: "Camp/Jagauriúna",
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
            Camp/Jaguariúna - SP
          </h1>

          <p className="gallery-date">
            Publicado em 13 de setembro de 2025
          </p>

        </div>

        <p className="gallery-description">

          Fiz um pedal entre Campinas e Jaguariúna margeando a antiga linha férrea por onde ainda passa a charmosa Maria Fumaça. A rota tem trechos muito bem preservados e cenários que misturam natureza, história e aquela sensação gostosa de pedalar em um clima nostálgico foi muito gostoso. Em alguns pontos, o visual faz a gente diminuir o ritmo só para apreciar. O trajeto oferece opções para todos os gostos — desde passeios tranquilos até desafios mais técnicos de MTB — e fiz tudo isso com amigos, o que deixou a experiência ainda mais divertida. No fim, ficou aquela alegria simples de quem viveu um dia leve, conectando paisagem, aventura e boa companhia.

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
              src={`/img/trem/${foto}`}
              alt="Jaguariúna - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                CAFÉ COM TREM
              </span>

            <div className="photo-actions">

              <a
                href={`/img/trem/${foto}`}
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

export default Trem;
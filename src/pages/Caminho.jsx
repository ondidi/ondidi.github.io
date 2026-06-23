import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "AP1.webp",
  "AP2.webp",
  "AP3.webp",
  "AP4.webp",
  "AP5.webp",
  "AP6.webp",
  "AP7.webp",
  "AP8.webp",
  "AP9.webp",
  "AP10.webp",
  "AP11.webp",
  "AP12.webp",
  "AP13.webp",
  "AP14.webp",
  "AP15.webp",
  "AP16.webp",

];

const Caminho = () => {
    const compartilharFoto = async (foto) => {

    const imageUrl =
      `/img/aparecida/${foto}`;

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

          title: "Rio Pardo/Aparecida",
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
            Rio Pardo/Aparecida - SP
          </h1>

          <p className="gallery-date">
            Publicado em 17 de julho de 2025
          </p>

        </div>

        <p className="gallery-description">

        Não foi dessa vez que usei bike moderna ou apoio logístico — fui com a mesma bicicleta de 10 anos atrás, equipada com alforjes de 14 kg, mais comida, água e todo o peso das vestes, minhas e da parceira. Meu propósito era claro: zerar o percurso. Isso significa não colocar o pé no chão nem nas subidas mais teimosas — inclusive a famosa e temida Serra da Luminosa, que costuma testar até os mais experientes. Partimos de São José do Rio Pardo, em vez de Rio Claro, como já fiz. Essa pequena mudança aumentou — e muito — o desafio. A altimetria acumulada passou dos 10.000 metros e a distância originalmente planejada de 357 km acabou se transformando em 418 km de pura vivência. Essa travessia não foi apenas um esforço físico; foi um lembrete luminoso de que sempre podemos recomeçar, de que existe força onde às vezes achamos só cansaço e que a fé — seja ela qual for — é também capacidade de seguir em frente, reinventar nossos passos e acolher novas versões de nós mesmos.

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
              src={`/img/aparecida/${foto}`}
              alt="Cana"
            />

            <div className="photo-footer">

              <span>
                CAMINHO DA FÉ 2025
              </span>

              <div className="photo-actions">

                <a
                  href={`/img/aparecida/${foto}`}
                  download
                >

                  <img
                    src={copiarIcon}
                    alt="Caminho da Fé - Diógenes Pasqualini"
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

export default Caminho;
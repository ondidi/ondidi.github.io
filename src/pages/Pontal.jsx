import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "Ponta (1).webp",
  "Ponta (2).webp",
  "Ponta (3).webp",
  "Ponta (4).webp",
  "Ponta (5).webp",
  "Ponta (6).webp",
  "Ponta (7).webp",
  "Ponta (8).webp",
  "Ponta (9).webp",
  "Ponta (10).webp",
  "Ponta (11).webp",
  "Ponta (12).webp",
  "Ponta (13).webp",
  "Ponta (14).webp",
  "Ponta (15).webp",
  "Ponta (16).webp",

];

const Pontal = () => {
    const compartilharFoto = async (foto) => {

    const imageUrl =
      `/img/pontal/${foto}`;

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

          title: "Pontal do Parané",
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
            Pontal do Paraná - PR
          </h1>

          <p className="gallery-date">
            Publicado em 23 de Março de 2025
          </p>

        </div>

        <p className="gallery-description">

        A descida da serra pela Estrada do Café foi desafiadora. A logistica era não pedalar por boa parte de Curitiba. Então planejei um pedal misto carro/bike/ônibus: deixei o carro no início da serra e pedalei até o Pontal, explorando boa parte das praias paranaenses. Foram mais de 120 km, sendo 80 km de rodovia e o restante pelas praias, combinando trechos urbanos, a emocionante descida da Serra do Mar e a beleza do litoral paranaense. O percurso passa por cenários incríveis, e a sensação de descer a serra é como estar em uma montanha-russa natural, com curvas que revelam vistas de tirar o fôlego. Chegando ao litoral, o destaque ficou por conta da infraestrutura bem planejada para ciclistas e pedestres. Algumas praias contam com ciclofaixas separadas dos carros, tornando o passeio ainda mais seguro e agradável. Seja para desafiar seus limites, apreciar a natureza ou simplesmente curtir um pedal longo e recompensador, essa rota é altamente recomendada!

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
              src={`/img/pontal/${foto}`}
              alt="Pontal do Paraná - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                PRAIAS PARANÁ
              </span>

              <div className="photo-actions">

                <a
                  href={`/img/pontal/${foto}`}
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

export default Pontal;
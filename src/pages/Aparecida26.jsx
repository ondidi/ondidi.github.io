import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "paris (7).webp",
  "paris (1).webp",
  "paris (2).webp",
  "paris (3).webp",
  "paris (4).webp",
  "paris (5).webp",
  "paris (6).webp",
  "paris (8).webp",
  "paris (9).webp",
  "paris (10).webp",
  "paris (11).webp",
  "paris (12).webp",
  "paris (13).webp",
  "paris (14).webp",
  "paris (15).webp",
  "paris (16).webp",
  "paris (17).webp",
  "paris (18).webp",
  "paris (19).webp",
  "paris (20).webp",
  "paris (21).webp",
  "paris (22).webp",
  "paris (23).webp",
  "paris (24).webp",
  "paris (25).webp",
  "paris (26).webp",
  "paris (27).webp",
  "paris (28).webp",
  "paris (29).webp",
  "paris (30).webp",
  "paris (31).webp",
  "paris (32).webp",
  "paris (33).webp",
  "paris (34).webp",
  "paris (35).webp",
  "paris (36).webp",
  "paris (37).webp",
  "paris (38).webp",
  "paris (39).webp",
  "paris (40).webp",
  "paris (41).webp",
  "paris (42).webp",
  "paris (43).webp",
  "paris (44).webp",

  

];

const Aparecida26 = () => {
    const compartilharFoto = async (foto) => {

    const imageUrl =
      `/img/aparecida26/${foto}`;

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

          title: "Aparecida 2026",
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
            Aparecida 2026
          </h1>

          <p className="gallery-date">
            Publicado em 20 de junho de 2026
          </p>

        </div>

        <p className="gallery-description">

            O caminho transforma. Nunca é o mesmo.

            Neste ano, diferentemente das outras vezes em que o percorri, encontrei um velho amigo: silencioso, humilde e verdadeiro.

            Nele, o cansaço já não tem tanta importância. A distância entre as cidades deixa de ser desafio. A jornada de bicicleta tem o poder de nos conduzir de volta a nós mesmos.

            Aprendi algo novo com um missionário que encontrei, em oração, compartilhou ele algumas palavras de sabedoria:

            "O que importa não é o caminho, mas aquilo que o caminho trará para você."

            Então compreendi que não é a pedalada que nos transforma, mas a peregrinação que realizamos todos os dias dentro da alma. O caminho é apenas uma metáfora, um horizonte que se renova a cada amanhecer, convidando-nos a seguir adiante em direção ao nosso verdadeiro destino.

            E talvez seja esse o maior ensinamento da jornada: descobrir que a chegada não está no fim da estrada, mas na pessoa que nos tornamos enquanto caminhamos.

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
              src={`/img/aparecida26/${foto}`}
              alt="Caminho da Fé 2026 - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                CAMINHO DA FÉ 2026
              </span>

              <div className="photo-actions">

                <a
                  href={`/img/aparecida/${foto}`}
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

export default Aparecida26;
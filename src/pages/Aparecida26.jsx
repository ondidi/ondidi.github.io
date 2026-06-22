import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [

  "aparecida26 (37).webp",
  "aparecida26 (1).webp",
  "aparecida26 (2).webp",
  "aparecida26 (3).webp",
  "aparecida26 (4).webp",
  "aparecida26 (5).webp",
  "aparecida26 (6).webp",
  "aparecida26 (7).webp",
  "aparecida26 (8).webp",
  "aparecida26 (9).webp",
  "aparecida26 (10).webp",
  "aparecida26 (11).webp",
  "aparecida26 (12).webp",
  "aparecida26 (13).webp",
  "aparecida26 (14).webp",
  "aparecida26 (15).webp",
  "aparecida26 (16).webp",
  "aparecida26 (17).webp",
  "aparecida26 (18).webp",
  "aparecida26 (19).webp",
  "aparecida26 (20).webp",
  "aparecida26 (21).webp",
  "aparecida26 (22).webp",
  "aparecida26 (23).webp",
  "aparecida26 (24).webp",
  "aparecida26 (25).webp",
  "aparecida26 (26).webp",
  "aparecida26 (27).webp",
  "aparecida26 (28).webp",
  "aparecida26 (29).webp",
  "aparecida26 (30).webp",
  "aparecida26 (31).webp",
  "aparecida26 (32).webp",
  "aparecida26 (33).webp",
  "aparecida26 (34).webp",
  "aparecida26 (35).webp",
  "aparecida26 (36).webp",
  "aparecida26 (38).webp",
  
];

const Aparecida26 = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Caminho da Fé - 2026
          </h1>

          <p className="gallery-date">
            Publicado em 13/06/2026
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
              alt="Caminho"
            />

            <div className="photo-footer">

              <span>
                CAMINHO DA FÉ 2026
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

export default Aparecida26;
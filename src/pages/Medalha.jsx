import React from "react";
import "../assets/styles/Gallery.css";

import copiarIcon from "/img/icons/copiar.svg";
import enviarIcon from "/img/icons/enviar.svg";

const fotos = [
  "medalha (1).webp",
  "medalha (2).webp",
  "medalha (3).webp",
  "medalha (4).webp",
  "medalha (5).webp",
  "medalha (6).webp",
  "medalha (7).webp",
  "medalha (8).webp",
  "medalha (9).webp",
  "medalha (10).webp",
  "medalha (11).webp",
  "medalha (12).webp",
  "medalha (13).webp",
  "medalha (14).webp",
  "medalha (15).webp",
  "medalha (16).webp",
  "medalha (17).webp",
  "medalha (18).webp",
  "medalha (19).webp",
];

const PASTA = "/img/medalha";

const Medalha = () => {
  const compartilharFoto = async (foto) => {
    const imageUrl = `${PASTA}/${foto}`;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const file = new File([blob], foto, {
        type: blob.type,
      });

      if (
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title: "Medalha Milagrosa",
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
      <div className="gallery-info">
        <div className="gallery-box">
          <h1 className="gallery-title">
            Medalha Milagrosa
          </h1>

          <p className="gallery-date">
            Publicado em 19 de julho de 2026
          </p>
        </div>

        <p className="gallery-description">
          O Caminho da Medalha Milagrosa é um percurso que integra um dos trechos do tradicional Caminho da Fé. Mais do que uma rota para bicicletas, foi uma oportunidade genuína de rever e fazer amigos.

            Durante o trajeto, a conversa flui naturalmente entre uma subida e outra. Histórias são compartilhadas, surgem muitas risadas e cada parada se transforma em mais um capítulo da aventura.

            No final da jornada, a medalha é apenas uma lembrança do percurso. O verdadeiro prêmio é voltar para casa com a sensação de ter vivido um excelente dia, fortalecido antigas amizades e conquistado novas. Porque algumas aventuras terminam quando o pedal acaba, mas as boas amizades continuam por muito tempo.
        </p>
      </div>

      <div className="gallery-grid">
        {fotos.map((foto) => (
          <div className="photo-card" key={foto}>
            <img
              src={`${PASTA}/${foto}`}
              alt="Medalha Milagrosa - Diógenes Pasqualini"
            />

            <div className="photo-footer">
              <span>Monte Sião - Borda</span>

              <div className="photo-actions">
                <a
                  href={`${PASTA}/${foto}`}
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

export default Medalha;
import "../assets/styles/Gallery.css";

const fotos = [


  "lug-1.webp",
  "lug-2.webp",
  "lug-3.webp",
  "lug-4.webp",
  "lug-5.webp",
  "lug-6.webp",
  "lug-7.webp",
  "lug-8.webp",
  "lug-9.webp",
  "lug-10.webp",
  "lug-11.webp",
  "lug-12.webp",
  "lug-13.webp",
  "lug-14.webp",
  "lug-15.webp",
  "lug-16.webp",
  "lug-17.webp",
  "lug-18.webp",
  "lug-19.webp",
  "lug-20.webp",
  "lug-21.webp",
  "lug-22.webp",
  "lug-23.webp",
  "lug-24.webp",
  "lug-25.webp",
  "lug-26.webp",
  "lug-27.webp",
  "lug-28.webp",
  "lug-29.webp",
  "lug-30.webp",
  "lug-31.webp",
  "lug-32.webp",
 
];

const Lugares = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Lugares que eu curti
          </h1>

          <p className="gallery-date">
            Publicado ao longo da história
          </p>

        </div>

        <p className="gallery-description">

          Nem todo registro significa a mesma coisa para todos.
          O que toca alguém pode passar despercebido por outro — porque viver um momento é sempre algo íntimo, impossível de reproduzir por completo em uma fotografia.

          Cada pedaço de chão por onde passei carrega um pouco dessa essência.
          E muitas vezes, não foram os cartões-postais ou os lugares mais famosos que ficaram marcados a mim, mas sim um ângulo esquecido, uma luz inesperada, um detalhe simples que quase ninguém percebeu. Como no amor e nas grandes conquistas, as vezes, a beleza está escondida em pequenos detalhes.

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
              src={`/img/lugares/${foto}`}
              alt="Lugares"
            />

            <div className="photo-footer">

              <span>
                INSTANTÂNEO
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Lugares;
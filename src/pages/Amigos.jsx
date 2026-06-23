import "../assets/styles/Gallery.css";

const fotos = [

  "amig (0).webp",
  "amig (2).webp",
  "amig (3).webp",
  "amig (4).webp",
  "amig (5).webp",
  "amig (6).webp",
  "amig (7).webp",
  "amig (8).webp",
  "amig (9).webp",
  "amig (1).webp",
  "amig (9).webp",
  "amig (10).webp",
  "amig (11).webp",
  "amig (12).webp",
  "amig (13).webp",
  "amig (14).webp",
  "amig (15).webp",
  "amig (16).webp",
  "amig (17).webp",
  "amig (18).webp",
  "amig (19).webp",
  "amig (20).webp",
  "amig (21).webp",
  "amig (22).webp",
  "amig (23).webp",
  "amig (24).webp",
  "amig (25).webp",
  "amig (26).webp",
  "amig (27).webp",
  "amig (28).webp",
  "amig (29).webp",
  "amig (30).webp",
  "amig (31).webp",
  "amig (32).webp",
  "amig (33).webp",
  "amig (34).webp",
  "amig (35).webp",
  "amig (36).webp",
  "amig (37).webp",
  "amig (38).webp",
  "amig (39).webp",
  "amig (40).webp",
  "amig (41).webp",
  "amig (42).webp",
  "amig (43).webp",
  "amig (44).webp",

];

const Amigos = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Amigos de jornada
          </h1>

          <p className="gallery-date">
            Publicado ao longo da história
          </p>

        </div>

        <p className="gallery-description">

          O pedal aproxima pessoas diferentes,
          porém movidas por algo parecido.
          Fiz muitas amizades ao longo dos caminhos.
          Histórias, risadas, conversas e tanto
          compartilhamento, amores, dores, sabores, conhecimento, alento, talento que até hoje acalento...

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
              src={`/img/amigos/${foto}`}
              alt="Amigos - Diógenes Pasqualini"
            />

            <div className="photo-footer">

              <span>
                GALERIA DOS AMIGOS
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Amigos;
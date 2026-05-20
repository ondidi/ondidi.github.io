import "../assets/styles/Gallery.css";

const fotos = [


  "new (7).webp",
  "new (8).webp",
  "new (9).webp",
  "Face (1).webp",
  "Face (2).webp",
  "Face (3).webp",
  "Face (4).webp",
  "Face (5).webp",
  "Face (6).webp",
  "Face (7).webp",
  "Face (8).webp",
  "Face (9).webp",
  "Face (10).webp",
  "Face (11).webp",
  "Face (12).webp",
  "Face (13).webp",
  "Face (14).webp",
  "Face (15).webp",
  "Face (16).webp",
  "Face (17).webp",
  "Face (18).webp",
  "Face (19).webp",
  "Face (20).webp",
  "Face (21).webp",
  "Face (22).webp",
  "Face (23).webp",
  "Face (24).webp",
  "Face (25).webp",
  "Face (26).webp",
  "Face (27).webp",
  "Face (28).webp",
  "Face (29).webp",
  "Face (30).webp",
  "Face (31).webp",
  "Face (32).webp",

];

const Lugares = () => {

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-info">

        <div className="gallery-box">

          <h1 className="gallery-title">
            Pedaços do mundo
          </h1>

          <p className="gallery-date">
            Publicado ao longo da história
          </p>

        </div>

        <p className="gallery-description">

            Lorem, ipusm, doted, mistk, carmt sillus vini vidi vice. Ametn com padb dicatus alimentus ribus ipusm carmm

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
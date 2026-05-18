import { Link } from "react-router-dom";
import "../assets/styles/Sidebar.css";

const adventures = [

  {
    title: "Rota das frutas",
    year: 2026,
    date: "2026-04-12",
    image: "/img/rota-frutas/thumb.webp",
    slug: "rota-das-frutas"
  },

  {
    title: "Serra do Japi",
    year: 2026,
    date: "2026-03-20",
    image: "/img/japi/thumb.webp",
    slug: "serra-do-japi"
  },

  {
    title: "Rota das Capelas",
    year: 2026,
    date: "2026-03-02",
    image: "/img/capelas/thumb.webp",
    slug: "rota-das-capelas"
  },

  {
    title: "Márcia",
    year: 2026,
    date: "2026-02-15",
    image: "/img/marcia/thumb.webp",
    slug: "marcia"
  },

  {
    title: "Cananéia",
    year: 2025,
    date: "2025-12-10",
    image: "/img/cana/thumb.webp",
    slug: "cananeia"
  },

  {
    title: "Rota do café",
    year: 2025,
    date: "2025-11-21",
    image: "/img/guaxu/thumb.webp",
    slug: "rota-do-cafe"
  },

  {
    title: "Jaguariúna",
    year: 2025,
    date: "2025-10-08",
    image: "/img/trem/thumb.webp",
    slug: "jaguariuna"
  },

  {
    title: "Caminho da Fé",
    year: 2025,
    date: "2025-09-15",
    image: "/img/aparecida/thumb.webp",
    slug: "caminho-da-fe"
  },

  {
    title: "Serra da Graciosa",
    year: 2025,
    date: "2025-08-04",
    image: "/img/graciosa/thumb.webp",
    slug: "serra-da-graciosa"
  },

  {
    title: "Pontal do Paraná",
    year: 2025,
    date: "2025-07-19",
    image: "/img/pontal/thumb.webp",
    slug: "pontal-do-parana"
  },

  {
    title: "Curitiba",
    year: 2025,
    date: "2025-06-11",
    image: "/img/curitiba/thumb.webp",
    slug: "curitiba"
  },

  {
    title: "Santa Olímpia",
    year: 2024,
    date: "2024-11-03",
    image: "/img/staolimpia/thumb.webp",
    slug: "santa-olimpia"
  },

  {
    title: "Rio Pardo",
    year: 2023,
    date: "2023-12-10",
    image: "/img/riopardo/thumb.webp",
    slug: "rio-pardo"
  },

  {
    title: "Brotas/Torrinha",
    year: 2023,
    date: "2023-11-05",
    image: "/img/gruta/thumb.webp",
    slug: "brotas-torrinha"
  },

  {
    title: "Analândia",
    year: 2023,
    date: "2023-10-12",
    image: "/img/ana/thumb.webp",
    slug: "analandia"
  },

  {
    title: "Ilha Comprida",
    year: 2023,
    date: "2023-09-14",
    image: "/img/ilhacomprida/thumb.webp",
    slug: "ilha-comprida"
  },

  {
    title: "Ilhabela",
    year: 2023,
    date: "2023-08-20",
    image: "/img/ilhabela/thumb.webp",
    slug: "ilha-bela"
  },

  {
    title: "São Sebastião",
    year: 2023,
    date: "2023-07-18",
    image: "/img/saosebastiao/thumb.webp",
    slug: "sao-sebastiao"
  },

  {
    title: "Horto Florestal",
    year: 2023,
    date: "2023-06-02",
    image: "/img/horto/thumb.jpg",
    slug: "horto-florestal"
  },

  {
    title: "Ponte do Esqueleto",
    year: 2021,
    date: "2021-10-14",
    image: "/img/esq/thumb.webp",
    slug: "ponte-do-esqueleto"
  },

  {
    title: "Pico do Gavião",
    year: 2018,
    date: "2018-11-09",
    image: "/img/pico/thumb.webp",
    slug: "pico-do-gaviao"
  },

  {
    title: "Cantagalo",
    year: 2018,
    date: "2018-08-11",
    image: "/img/gruta/thumb.webp",
    slug: "cantagalo"
  },

  {
    title: "Piracicaba",
    year: 2017,
    date: "2017-12-18",
    image: "/img/godinho/thumb.webp",
    slug: "piracicaba"
  },

  {
    title: "São Luis do Paraitinga",
    year: 2017,
    date: "2017-10-07",
    image: "/img/paraitinga/thumb.webp",
    slug: "sao-luis-do-paraitinga"
  },

  {
    title: "Cananéia",
    year: 2017,
    date: "2017-05-21",
    image: "/img/cana/thumb.webp",
    slug: "cananeia-2017"
  },

  {
    title: "Caminho dos Anjos",
    year: 2015,
    date: "2015-09-19",
    image: "/img/anjos/thumb.webp",
    slug: "caminho-dos-anjos"
  },

  {
    title: "Caminho da Fé",
    year: 2015,
    date: "2015-06-14",
    image: "/img/caminhofe/thumb.webp",
    slug: "caminho-da-fe-2015"
  }

];

const Sidebar = () => {

  const sortedAdventures = [...adventures].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (

    <aside className="sidebar">

      <div className="sidebar-header">

        <h1 className="logo">
          Ondids
        </h1>

        <p className="sidebar-subtitle">
          Seja bem-vindo
        </p>

      </div>

      <nav className="sidebar-nav">

        {/* INÍCIO */}

        <Link to="/" className="menu-home">

          <img
            src="/img/icons/home.svg"
            alt="Home"
            className="menu-icon"
          />

          <span>Início</span>

        </Link>

        {/* PEDALADAS */}

        <h3 className="menu-section">
          PEDALADAS
        </h3>

        <div className="adventure-list">

          {sortedAdventures.map((item) => (

            <Link
              key={item.id}
              to={`/aventuras/${item.slug}`}
              className="menu-item"
            >

              <img
                src={item.image}
                alt={item.title}
                className="menu-thumb"
              />

              <div className="menu-info">

                <span className="menu-title">
                  {item.title}
                </span>

                <small className="menu-year">
                  {item.year}
                </small>

              </div>

            </Link>

          ))}

        </div>

        {/* DIVISOR */}

        <div className="menu-divider"></div>

        {/* LINKS INFERIORES */}

        <div className="menu-footer-links">

          <Link to="/amigos" className="footer-link">

            <img
              src="/img/icons/amigos.svg"
              alt="Amigos"
              className="footer-icon"
            />

            <span>Amigos</span>

          </Link>

          <Link to="/lugares" className="footer-link">

            <img
              src="/img/icons/lugares.svg"
              alt="Lugares"
              className="footer-icon"
            />

            <span>Lugares</span>

          </Link>

          <a
            href="https://wa.me/123456"
            className="footer-link"
          >

            <img
              src="/img/icons/whats.svg"
              alt="WhatsApp"
              className="footer-icon"
            />

            <span>WhatsApp</span>

          </a>

          <a
            href="#"
            className="footer-link"
          >

            <img
              src="/img/icons/contato.svg"
              alt="Contato"
              className="footer-icon"
            />

            <span>Contato</span>

          </a>

        </div>

      </nav>

    </aside>

  );

};

export default Sidebar;
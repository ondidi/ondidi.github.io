import "../assets/styles/Home.css";
import { Link } from "react-router-dom";
import { adventures } from "../data/adventures";

const Home = () => {

  const recentRides =
    [...adventures]
      .sort(
        (a, b) =>
          new Date(b.date) -
          new Date(a.date)
      )
      .slice(0, 4);

  return (

    <div className="home">

      {/* HERO */}

      <section className="hero">

        <img
          src="/img/imghome/imgcapa.webp"
          alt="Ondids"
          className="hero-image"
        />

        <div className="hero-overlay">

          <h1 className="hero-title">
            A VIDA É UMA IDEIA EM
            MOVIMENTO.
            <br />
            A JORNADA É O CAMINHO.
          </h1>

          <p className="hero-subtitle">
            Viver não é chegar.
            <br />
            Mas continuar.
          </p>

        </div>

      </section>

      {/* RECENT RIDES */}

      <section className="recent-section">

        <div className="recent-header">

          <img
            src="/img/icons/bike.svg"
            alt="Bike"
            className="recent-icon"
          />

          <h2>
            ÚLTIMOS PEDAIS
          </h2>

        </div>

        <div className="rides-grid">

          {recentRides.map((ride) => (

            <div
              key={ride.id}
              className="ride-card"
            >

              <img
                src={ride.image}
                alt={ride.title}
                className="ride-image"
              />

              <div className="ride-content">

                <span className="ride-city">
                  {ride.city}
                </span>

                <h3 className="ride-title">
                  {ride.title}
                </h3>

                <div className="ride-info">

                  <span>

                    <img
                      src="/img/icons/distance.svg"
                      alt="Distância"
                      className="info-icon"
                    />

                    {ride.km}

                  </span>

                  <span>

                    <img
                      src="/img/icons/dificult.svg"
                      alt="Dificuldade"
                      className="info-icon"
                    />

                    {ride.level}

                  </span>

                </div>

                <Link
                  to={`/aventuras/${ride.slug}`}
                  className="ride-button"
                >
                  Ver pedal
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          &copy; 2026 - Diógenes (Didi)
          Pasqualini. Todos os direitos
          reservados.
        </p>

      </footer>

    </div>

  );

};

export default Home;
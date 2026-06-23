import { Link } from "react-router-dom";
import "../assets/styles/Sidebar.css";
import { adventures } from "../data/adventures";

const Sidebar = ({ menuOpen, setMenuOpen }) => {

  const sortedAdventures = [...adventures].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (

    <aside className={`sidebar ${menuOpen ? "open" : ""}`}>

      <button
        className="close-menu"
        onClick={() => setMenuOpen(false)}
      >

        <img
          src="/img/icons/fechar.svg"
          alt="Fechar"
        />

      </button>

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
            key={item.slug}
            to={`/aventuras/${item.slug}`}
            className="menu-item"
            onClick={() => setMenuOpen(false)}
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
            href="https://wa.me/5519997094329"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              src="/img/icons/whats.svg"
              alt="WhatsApp"
              className="footer-icon"
            />

            <span>WhatsApp</span>

          </a>

          <Link
            to="/blog"
            className="footer-link"
          >

            <img
              src="/img/icons/blog.svg"
              alt="Blog"
              className="footer-icon"
            />

            <span>Blog</span>

          </Link>

        </div>

      </nav>

    </aside>

  );

};

export default Sidebar;
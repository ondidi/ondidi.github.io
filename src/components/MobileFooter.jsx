import { Link } from "react-router-dom";

import "../assets/styles/MobileFooter.css";

const MobileFooter = () => {

  return (

    <footer className="mobile-footer">

      <Link to="/" className="mobile-footer-item">

        <img
          src="/img/icons/home.svg"
          alt="Home"
        />

      </Link>

      <Link to="/amigos" className="mobile-footer-item">

        <img
          src="/img/icons/amigos.svg"
          alt="Amigos"
        />

      </Link>

      <Link to="/lugares" className="mobile-footer-item">

        <img
          src="/img/icons/lugares.svg"
          alt="Lugares"
        />

      </Link>

      <a
        href="https://wa.me/"
        className="mobile-footer-item"
      >

        <img
          src="/img/icons/whatsapp.svg"
          alt="WhatsApp"
        />

      </a>

      <Link to="/blog" className="mobile-footer-item">

        <img
          src="/img/icons/blog.svg"
          alt="Blog"
        />

      </Link>

    </footer>

  );

};

export default MobileFooter;
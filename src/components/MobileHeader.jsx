import "../assets/styles/MobileHeader.css";

const MobileHeader = ({ setMenuOpen }) => {

  return (

    <header className="mobile-header">

      <button
        className="mobile-header-button"
        onClick={() => setMenuOpen(true)}
      >

        <img
          src="/img/icons/hamburguer.svg"
          alt="Menu"
        />

      </button>

      <h1 className="mobile-header-logo">
        On Dids
      </h1>

    </header>

  );

};

export default MobileHeader;
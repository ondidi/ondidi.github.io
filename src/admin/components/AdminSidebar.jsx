import "./AdminSidebar.css";

export default function AdminSidebar({
    menuOpen,
    setMenuOpen
  }) {
  return (
    <aside className={`admin-sidebar ${menuOpen ? "open" : ""}`}>

      <button
        className="admin-close-menu"
        onClick={() => setMenuOpen(false)}
      >

        <img
          src="/img/icons/fechar.svg"
          alt="Fechar"
        />

      </button>

      <div className="admin-logo">

        <h1>On Dids</h1>

        <span>Administrator</span>

      </div>

      <nav className="admin-menu">

        <a
          href="/admin/dashboard"
          onClick={() => setMenuOpen(false)}
        >

          <img
            src="/img/icons/home.svg"
            alt="Dashboard"
          />

          Dashboard

        </a>

        <a
          href="/admin/pedaladas"
          onClick={() => setMenuOpen(false)}
        >

          <img
            src="/img/icons/bike.svg"
            alt="Pedaladas"
          />

          Pedaladas

        </a>

        <a
          href="/admin/blog"
          onClick={() => setMenuOpen(false)}
        >

          <img
            src="/img/icons/blog.svg"
            alt="Blog"
          />

          Blog

        </a>

      </nav>

    </aside>
  );
}
import "./AdminSidebar.css";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      <div className="admin-logo">

        <h1>On Dids</h1>

        <span>Administrator</span>

      </div>

      <nav className="admin-menu">

        <a href="/admin/dashboard">

          <img
            src="/img/icons/home.svg"
            alt="Dashboard"
          />

          Dashboard

        </a>

        <a href="/admin/pedaladas">

          <img
            src="/img/icons/bike.svg"
            alt="Pedaladas"
          />

          Pedaladas

        </a>

        <a href="/admin/blog">

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
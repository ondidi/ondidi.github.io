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
          🏠 Dashboard
        </a>

        <a href="/admin/pedaladas">
          🚴 Pedaladas
        </a>

        <a href="/admin/blog">
          📝 Blog
        </a>

      </nav>

    </aside>
  );
}
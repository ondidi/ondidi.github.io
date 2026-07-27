"use client";

import Link from "next/link";

import "../styles/AdminSidebar.css";

interface AdminSidebarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function AdminSidebar({
  menuOpen,
  setMenuOpen,
}: AdminSidebarProps) {
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
        <Link
          href="/admin"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/img/icons/home.svg"
            alt="Dashboard"
          />
          Dashboard
        </Link>

        <Link
          href="/admin/pedaladas"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/img/icons/bike.svg"
            alt="Pedaladas"
          />
          Pedaladas
        </Link>

        <Link
          href="/admin/blog"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/img/icons/blog.svg"
            alt="Blog"
          />
          Blog
        </Link>
      </nav>
    </aside>
  );
}
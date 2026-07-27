"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

import "../styles/AdminHeader.css";

interface AdminHeaderProps {
  setMenuOpen: (open: boolean) => void;
}

export default function AdminHeader({
  setMenuOpen,
}: AdminHeaderProps) {
  const router = useRouter();

  async function sair() {
    await supabase.auth.signOut();

    router.replace("/admin/login");
  }

  return (
    <div className="admin-header">
      <button
        className="admin-menu-button"
        onClick={() => setMenuOpen(true)}
      >
        <img
          src="/img/icons/hamburguer.svg"
          alt="Menu"
        />
      </button>

      <h1>Portal Ondids</h1>

      <div className="admin-header-actions">
        <div className="admin-notification">
          <img
            src="/img/icons/alert.svg"
            alt="Notificações"
          />

          <span>3</span>
        </div>

        <img
          src="/img/blog/didifotocircular.webp"
          alt="Administrador"
          className="admin-avatar"
        />

        <img
          src="/img/icons/deslogar.svg"
          alt="Sair"
          title="Sair"
          className="logout-icon"
          onClick={sair}
        />
      </div>
    </div>
  );
}
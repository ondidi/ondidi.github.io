"use client";

import { useState } from "react";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";
import ElementsRodantes from "@/admin/components/maintenance/ElementsRodantes";

export default function ElementosRodantesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AdminSidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="admin-content">
        <AdminHeader
          setMenuOpen={setMenuOpen}
        />

        <ElementsRodantes />
      </main>
    </>
  );
}
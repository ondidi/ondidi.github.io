"use client";

import { useState } from "react";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";
import MaintenanceDashboard from "@/admin/components/maintenance/MaintenanceDashboard";

export default function ManutencaoPage() {
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

        <MaintenanceDashboard />
      </main>
    </>
  );
}
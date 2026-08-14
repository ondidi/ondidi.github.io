"use client";

import { useState } from "react";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";
import StatisticsAdmin from "@/admin/components/statistics/StatisticsAdmin";

export default function EstatisticasAdminPage() {
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

        <StatisticsAdmin />
      </main>
    </>
  );
}
"use client";

import { useState } from "react";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";
import MetricCard from "@/admin/components/MetricCard";

import "@/admin/styles/Dashboard.css";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const metrics = [
    {
      icon: "/img/icons/pedaladas1.svg",
      title: "Pedaladas",
      value: 27,
      growth: "+2 este mês",
    },
    {
      icon: "/img/icons/textos.svg",
      title: "Textos publicados",
      value: 7,
      growth: "+2 este mês",
    },
    {
      icon: "/img/icons/visualizacoes.svg",
      title: "Visualizações",
      value: 160,
      growth: "+8 este mês",
    },
    {
      icon: "/img/icons/inscrito.svg",
      title: "Inscritos",
      value: 270,
      growth: "+22 este mês",
    },
    {
      icon: "/img/icons/calendario.svg",
      title: "Semana",
      value: 160,
      growth: "+8 este mês",
    },
    {
      icon: "/img/icons/visitante.svg",
      title: "Visitantes",
      value: 160,
      growth: "+8 este mês",
    },
  ];

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

        <div className="dashboard-grid">
          {metrics.map((item) => (
            <MetricCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={item.value}
              growth={item.growth}
            />
          ))}
        </div>
      </main>
    </>
  );
}
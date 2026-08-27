"use client";

import { useState } from "react";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";
import "@/admin/components/maintenance/maintenance.css";

export default function PneuDianteiroPage() {
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

        <main className="maintenance-page">

          <div className="maintenance-detail-header">
            <a href="/admin/manutencao/elementos-rodantes">
              ‹
            </a>

            <div>
              <span>ELEMENTOS RODANTES</span>
              <h1>Pneu dianteiro</h1>
            </div>
          </div>

          <div className="component-status">
            <span className="maintenance-status ok">
              EM DIA
            </span>
          </div>

          <section className="component-overview">

            <div className="component-overview-row">
              <div>
                <span>INSTALAÇÃO</span>
                <strong>13/06/2026</strong>
              </div>

              <div>
                <span>KM NA DATA</span>
                <strong>65.344 km</strong>
              </div>
            </div>

            <div className="component-overview-row">
              <div>
                <span>KM ATUAL</span>
                <strong>67.874 km</strong>
              </div>

              <div>
                <span>USO DESDE A INSTALAÇÃO</span>
                <strong>2.530 km</strong>
              </div>
            </div>

          </section>

          <section className="component-reference">
            <h2>REFERÊNCIA</h2>

            <div className="reference-card">
              <span>Critério de avaliação</span>
              <strong>Desgaste do pneu</strong>

              <p>
                Avaliar visualmente as condições do pneu,
                considerando desgaste, cortes, deformações
                e ressecamento.
              </p>
            </div>
          </section>

          <section className="maintenance-history">
            <h2>HISTÓRICO</h2>

            <div className="history-card">

              <div className="history-date">
                13/06/2026
              </div>

              <div className="history-content">
                <strong>Substituição</strong>
                <span>65.344 km</span>
              </div>

            </div>
          </section>

          <button className="maintenance-add">
            <span>+</span>
            <small>
              Registrar<br />
              manutenção
            </small>
          </button>

        </main>
      </main>
    </>
  );
}
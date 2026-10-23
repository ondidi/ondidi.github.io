"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import MaintenanceItem from "./MaintenanceItem";
import "./maintenance.css";

import { supabase } from "@/lib/supabase";

import {
  buscarQuilometragemAtual,
  buscarQuilometragemEntre,
  buscarQuilometragemNaData,
} from "@/services/maintenance.service";

  export default function ElementsRodantes() {
  const [pneuData, setPneuData] = useState({
    date: "Carregando...",
    mileage: "Carregando...",
    since: "Carregando...",
  });

  const [arosData, setArosData] = useState({
    date: "Carregando...",
    mileage: "Carregando...",
    since: "Carregando...",
  });
  const [cubosData, setCubosData] = useState({
    date: "Carregando...",
    mileage: "Carregando...",
    since: "Carregando...",
  });

  useEffect(() => {
    async function carregarPneus() {
      const { data: ciclo, error } = await supabase
      .from("maintenance_component_cycles")
      .select("id, installed_at")
      .eq(
        "component_id",
        "a94e243f-50dc-4553-8bc8-e14af4aed900"
      )
      .eq("is_current", true)
      .single();

      if (error || !ciclo) {
        console.error(
          "Erro ao carregar ciclo dos pneus:",
          error
        );
        return;
      }

      const dataInstalacao = ciclo.installed_at;

      const dataAtual = new Date()
        .toISOString()
        .split("T")[0];

      const [
        kmNaInstalacao,
        kmAtual,
        kmDesdeInstalacao,
      ] = await Promise.all([
        buscarQuilometragemNaData(dataInstalacao),
        buscarQuilometragemAtual(),
        buscarQuilometragemEntre(
          dataInstalacao,
          dataAtual
        ),
      ]);

      setPneuData({
        date: new Date(
          `${dataInstalacao}T00:00:00`
        ).toLocaleDateString("pt-BR"),

        mileage: `${Math.round(
          kmNaInstalacao
        ).toLocaleString("pt-BR")} km`,

        since: `${Math.round(
          kmDesdeInstalacao
        ).toLocaleString("pt-BR")} km`,
      });
    }

    carregarPneus();
  }, []);
  useEffect(() => {
    async function carregarAros() {
      const { data: ciclo, error } = await supabase
        .from("maintenance_component_cycles")
        .select("id, installed_at")
        .eq(
          "component_id",
          "7d21265a-87db-467e-b98c-52b060b14a55"
        )
        .eq("is_current", true)
        .single();

      if (error || !ciclo) {
        console.error(
          "Erro ao carregar ciclo dos aros:",
          error
        );
        return;
      }

      const dataInstalacao = ciclo.installed_at;

      const [
        kmNaInstalacao,
        kmAtual,
      ] = await Promise.all([
        buscarQuilometragemNaData(dataInstalacao),
        buscarQuilometragemAtual(),
      ]);

      setArosData({
        date: new Date(
          `${dataInstalacao}T00:00:00`
        ).toLocaleDateString("pt-BR"),

        mileage: `${Math.round(
          kmNaInstalacao
        ).toLocaleString("pt-BR")} km`,

        since: `${Math.round(
          kmAtual - kmNaInstalacao
        ).toLocaleString("pt-BR")} km`,
      });
    }

    carregarAros();
  }, []);

  useEffect(() => {
    async function carregarCubos() {
      const { data: ciclo, error } = await supabase
        .from("maintenance_component_cycles")
        .select("id, installed_at")
        .eq(
          "component_id",
          "69a7233b-cf0b-4b1f-b26e-97beb6758843"
        )
        .eq("is_current", true)
        .single();

      if (error || !ciclo) {
        console.error(
          "Erro ao carregar ciclo dos cubos:",
          error
        );
        return;
      }

      const dataInstalacao = ciclo.installed_at;

      const [
        kmNaInstalacao,
        kmAtual,
      ] = await Promise.all([
        buscarQuilometragemNaData(dataInstalacao),
        buscarQuilometragemAtual(),
      ]);

      setCubosData({
        date: new Date(
          `${dataInstalacao}T00:00:00`
        ).toLocaleDateString("pt-BR"),

        mileage: `${Math.round(
          kmNaInstalacao
        ).toLocaleString("pt-BR")} km`,

        since: `${Math.round(
          kmAtual - kmNaInstalacao
        ).toLocaleString("pt-BR")} km`,
      });
    }

    carregarCubos();
  }, []);

  const components = [
    {
      name: "Pneus",
      service: "Última troca",
      date: pneuData.date,
      mileage: pneuData.mileage,
      sinceLabel: "Desde a troca",
      since: pneuData.since,
      next: "Avaliar desgaste",
      status: "EM DIA",
      statusType: "ok" as const,
      icon: "pneu.svg",
      slug: "pneus",
    },
    {
      name: "Câmaras",
      service: "Última troca",
      date: "13/06/2026",
      mileage: "65.344 km",
      sinceLabel: "Desde a troca",
      since: "2.530 km",
      next: "Avaliar condição",
      status: "EM DIA",
      statusType: "ok" as const,
      icon: "camara.svg",
      slug: "camaras",
    },
    {
      name: "Aros",
      service: "Instalação",
      date: arosData.date,
      mileage: arosData.mileage,
      sinceLabel: "Desde a instalação",
      since: arosData.since,
      next: "Inspeção",
      status: "EM DIA",
      statusType: "ok" as const,
      icon: "roda.svg",
      slug: "aros",
    },
    {
      name: "Cubos",
      service: "Instalação",
      date: cubosData.date,
      mileage: cubosData.mileage,
      sinceLabel: "Desde a instalação",
      since: cubosData.since,
      next: "Inspeção",
      status: "EM DIA",
      statusType: "ok" as const,
      icon: "cubo.svg",
      slug: "cubos",
    },
  ];

  return (
    <main className="maintenance-page">

      <div className="maintenance-detail-header">
        <a href="/admin/manutencao">‹</a>

        <div>
          <span>MANUTENÇÃO</span>
          <h1>Elementos rodantes</h1>
        </div>
      </div>

      <p className="maintenance-detail-description">
        Pneus, câmaras, rodas e cubos
      </p>

      <div className="maintenance-category-summary">
        <strong>4 / 6</strong>
        <span>itens em dia</span>
      </div>

      <section className="maintenance-history">
        <h2>COMPONENTES</h2>

        <div className="maintenance-item-list">
          {components.map((item) => (
            <Link
              key={item.name}
              href={`/admin/manutencao/elementos-rodantes/${item.slug}`}
              className="maintenance-item-link"
            >
              <MaintenanceItem {...item} />
            </Link>
          ))}
        </div>
      </section>

      <button
        className="maintenance-add"
        aria-label="Adicionar componente"
      >
        <span>+</span>
        <small>
          Adicionar<br />
          componente
        </small>
      </button>

    </main>
  );
}
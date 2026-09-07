"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";
import "@/admin/components/maintenance/maintenance.css";
import MaintenanceEventModalCubos from "@/admin/components/maintenance/MaintenanceEventModalCubos";

import {
  buscarQuilometragemAtual,
  buscarQuilometragemNaData,
} from "@/services/maintenance.service";

export default function CubosPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [eventModalOpen, setEventModalOpen] =
    useState(false);

  const [cycleId, setCycleId] =
    useState<string | null>(null);

  const [kmInstalacao, setKmInstalacao] =
    useState<number | null>(null);

  const [kmAtual, setKmAtual] =
    useState<number | null>(null);

  const [kmUso, setKmUso] =
    useState<number | null>(null);

  const [dataInstalacao, setDataInstalacao] =
    useState<string | null>(null);

  const [historicos, setHistoricos] = useState<
    {
      data: string;
      tipo: string;
      mileage: number | null;
      resultado: string | null;
      observacao: string | null;
    }[]
  >([]);

  useEffect(() => {
    async function carregarDados() {
      const { data: ciclo, error } =
        await supabase
          .from("maintenance_component_cycles")
          .select(
            "id, component_id, installed_at"
          )
          .eq(
            "component_id",
            "69a7233b-cf0b-4b1f-b26e-97beb6758843"
          )
          .eq("is_current", true)
          .single();

      if (error || !ciclo) {
        console.error(
          ">>> ERRO CUBOS:",
          error
        );
        return;
      }

      const dataDoCiclo = ciclo.installed_at;

      setCycleId(ciclo.id);
      setDataInstalacao(dataDoCiclo);

      const kmNaInstalacao =
        await buscarQuilometragemNaData(
          dataDoCiclo
        );

      const kmAtualBike =
        await buscarQuilometragemAtual();

      const kmUsoCalculado =
        kmAtualBike - kmNaInstalacao;

      setKmInstalacao(kmNaInstalacao);
      setKmAtual(kmAtualBike);
      setKmUso(kmUsoCalculado);

      const {
        data: eventos,
        error: eventosError,
      } = await supabase
        .from("maintenance_events")
        .select(
          "event_date, event_type, mileage, reason, inspection_result, notes"
        )
        .eq("cycle_id", ciclo.id)
        .order("event_date", {
          ascending: false,
        });

      if (eventosError) {
        console.error(
          ">>> ERRO HISTÓRICO CUBOS:",
          eventosError
        );
        return;
      }

      setHistoricos(
        (eventos ?? []).map((evento) => ({
          data: evento.event_date,
          tipo: evento.event_type,
          mileage: evento.mileage,
          resultado:
            evento.inspection_result,
          observacao: evento.notes,
        }))
      );
    }

    carregarDados();
  }, []);

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
              <h1>Cubos</h1>
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

                <strong>
                  {dataInstalacao
                    ? new Date(
                        `${dataInstalacao}T00:00:00`
                      ).toLocaleDateString(
                        "pt-BR"
                      )
                    : "Carregando..."}
                </strong>
              </div>

              <div>
                <span>KM NA DATA</span>

                <strong>
                  {kmInstalacao !== null
                    ? `${kmInstalacao.toLocaleString(
                        "pt-BR",
                        {
                          maximumFractionDigits: 0,
                        }
                      )} km`
                    : "Calculando..."}
                </strong>
              </div>

            </div>

            <div className="component-overview-row">

              <div>
                <span>KM ATUAL</span>

                <strong>
                  {kmAtual !== null
                    ? `${kmAtual.toLocaleString(
                        "pt-BR",
                        {
                          maximumFractionDigits: 0,
                        }
                      )} km`
                    : "Calculando..."}
                </strong>
              </div>

              <div>
                <span>
                  USO DESDE A INSTALAÇÃO
                </span>

                <strong>
                  {kmUso !== null
                    ? `${kmUso.toLocaleString(
                        "pt-BR",
                        {
                          maximumFractionDigits: 0,
                        }
                      )} km`
                    : "Calculando..."}
                </strong>
              </div>

            </div>

          </section>

          <section className="component-reference">

            <h2>REFERÊNCIA</h2>

            <div className="reference-card">

              <span>
                Critério de avaliação
              </span>

              <strong>
                Condição do cubo
              </strong>

              <p>
                Avaliar a condição dos cubos,
                verificando folgas, ruídos,
                funcionamento dos rolamentos
                e eventuais danos.
              </p>

            </div>

          </section>

          <section className="maintenance-history">

            <h2>HISTÓRICO</h2>

            {historicos.map(
              (evento, index) => (
                <div
                  className="history-card"
                  key={`${evento.data}-${evento.tipo}-${index}`}
                >

                  <div className="history-date">
                    {new Date(
                      `${evento.data}T00:00:00`
                    ).toLocaleDateString(
                      "pt-BR"
                    )}
                  </div>

                  <div className="history-content">

                    <strong>
                      {evento.tipo ===
                      "replacement"
                        ? "Substituição"
                        : evento.tipo ===
                          "inspection"
                        ? "Inspeção"
                        : evento.tipo ===
                          "repair"
                        ? "Reparo"
                        : evento.tipo}
                    </strong>

                    <strong>
                      {evento.mileage !== null
                        ? `${evento.mileage.toLocaleString(
                            "pt-BR",
                            {
                              maximumFractionDigits: 0,
                            }
                          )} km`
                        : "—"}
                    </strong>

                    {evento.resultado && (
                      <span>
                        Resultado:{" "}
                        {evento.resultado}
                      </span>
                    )}

                    {evento.observacao && (
                      <span>
                        {evento.observacao}
                      </span>
                    )}

                  </div>

                </div>
              )
            )}

          </section>

          <button
            className="maintenance-add"
            onClick={() =>
              setEventModalOpen(true)
            }
            aria-label="Registrar manutenção"
          >
            <span>+</span>

            <small>
              Registrar
              <br />
              manutenção
            </small>
          </button>

        </main>

        {eventModalOpen &&
          cycleId && (

          <MaintenanceEventModalCubos
            componentName="Cubos"
            cycleId={cycleId}
            onClose={() =>
              setEventModalOpen(false)
            }
          />

        )}

      </main>
    </>
  );
}
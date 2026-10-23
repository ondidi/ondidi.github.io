"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";
import "@/admin/components/maintenance/maintenance.css";
import MaintenanceEventModal from "@/admin/components/maintenance/MaintenanceEventModal";

import {
  buscarQuilometragemAtual,
  buscarQuilometragemEntre,
  buscarQuilometragemNaData,
} from "@/services/maintenance.service";

export default function PneuDianteiroPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);

  const [pneuMenuOpen, setPneuMenuOpen] = useState<
    "dianteiro" | "traseiro" | null
  >(null);

const [historicoOpen, setHistoricoOpen] = useState(false);

  const [kmInstalacao, setKmInstalacao] = useState<number | null>(null);
  const [kmAtual, setKmAtual] = useState<number | null>(null);
  const [kmUso, setKmUso] = useState<number | null>(null);

  const [dataInstalacao, setDataInstalacao] =
    useState<string | null>(null);

  const [cycleId, setCycleId] = useState<string | null>(null);
  const [componentId, setComponentId] =
    useState<string | null>(null);

  const [historico, setHistorico] = useState<{
    data: string;
    tipo: string;
    motivo: string | null;
  } | null>(null);
  const [eventModalType, setEventModalType] = useState<
    "inspection" | "rotation" | "replacement"
  >("inspection");

  const [historicoMileage, setHistoricoMileage] =
    useState<number | null>(null);
  
  const [historicos, setHistoricos] = useState<
    {
      data: string;
      tipo: string;
      mileage: number | null;
      resultado: string | null;
      observacao: string | null;
    }[]
  >([]);

  const [historicosAnteriores, setHistoricosAnteriores] =
  useState<
    {
      cycleId: string;
      dataInicio: string;
      dataFim: string | null;
      kmNaInstalacao: number | null;
      eventos: {
        event_date: string;
        event_type: string;
        reason: string | null;
        mileage: number | null;
        inspection_result: string | null;
        notes: string | null;
      }[];
    }[]
  >([]);

  useEffect(() => {
    async function carregarDados() {
      const { data: ciclo, error: cicloError } =
        await supabase
          .from("maintenance_component_cycles")
          .select("id, component_id, installed_at")
          .eq(
            "component_id",
            "a94e243f-50dc-4553-8bc8-e14af4aed900"
          )
          .eq("is_current", true)
          .single();

      if (cicloError || !ciclo) {
        console.error("Erro ao carregar ciclo:", {
          message: cicloError?.message,
          code: cicloError?.code,
          details: cicloError?.details,
          hint: cicloError?.hint,
        });
        return;
      }

      const dataDoCiclo = ciclo.installed_at;

      setCycleId(ciclo.id);
      setComponentId(ciclo.component_id);
      setDataInstalacao(dataDoCiclo);

      const dataAtual = new Date()
        .toISOString()
        .split("T")[0];

      const [
        kmNaInstalacao,
        kmAtualBike,
        kmUsoCalculado,
      ] = await Promise.all([
        buscarQuilometragemNaData(dataDoCiclo),
        buscarQuilometragemAtual(),
        buscarQuilometragemEntre(
          dataDoCiclo,
          dataAtual
        ),
      ]);

      setKmInstalacao(kmNaInstalacao);
      setKmAtual(kmAtualBike);
      setKmUso(kmUsoCalculado);

      
    const { data: eventos, error: erroEventos } = await supabase
      .from("maintenance_events")
      .select(
        "event_date, event_type, reason, mileage, inspection_result, notes"
      )
      .eq("cycle_id", ciclo.id)
      .order("event_date", { ascending: false });

    console.log("CICLO CONSULTADO:", ciclo.id);
    console.log("ERRO NA CONSULTA:", erroEventos);
    console.log("EVENTOS RETORNADOS:", eventos);


      if (erroEventos) {
        console.error("Erro ao carregar histórico:", erroEventos);
        return;
      }

      const evento = eventos?.[0];

      console.log(
        ">>> EVENTO CARREGADO:",
        evento
      );

      if (evento) {
        setHistorico({
          data: evento.event_date,
          tipo: evento.event_type,
          motivo: evento.reason,
        });

        setHistoricoMileage(evento.mileage);
      }
        setHistoricos(
      (eventos ?? []).map((evento) => ({
        data: evento.event_date,
        tipo: evento.event_type,
        mileage: evento.mileage,
        resultado: evento.inspection_result,
        observacao: evento.notes,
      }))
    );
        const { data: ciclosAnteriores, error: ciclosAnterioresError } =
      await supabase
        .from("maintenance_component_cycles")
        .select("id, installed_at, removed_at")
        .eq(
          "component_id",
          ciclo.component_id
        )
        .eq("is_current", false)
        .order("installed_at", {
          ascending: false,
        });

    if (ciclosAnterioresError) {
      console.error(
        "Erro ao carregar históricos anteriores:",
        ciclosAnterioresError
      );
    } else {
      const historicosComEventos = await Promise.all(
        (ciclosAnteriores ?? []).map(
          async (cicloAnterior) => {
            const { data: eventosAnteriores, error } =
              await supabase
                .from("maintenance_events")
                .select(
                  "event_date, event_type, reason, mileage, inspection_result, notes"
                )
                .eq(
                  "cycle_id",
                  cicloAnterior.id
                )
                .order("event_date", {
                  ascending: false,
                });

            if (error) {
              console.error(
                "Erro ao carregar eventos do ciclo anterior:",
                error
              );
            }

            const eventosComKm = await Promise.all(
            (eventosAnteriores ?? []).map(
              async (evento) => {

                if (evento.mileage !== null) {
                  return evento;
                }

                const kmDoEvento =
                  await buscarQuilometragemNaData(
                    evento.event_date
                  );

                return {
                  ...evento,
                  mileage: kmDoEvento,
                };
              }
            )
          );

          const kmNaInstalacaoAnterior =
            await buscarQuilometragemNaData(
              cicloAnterior.installed_at
            );

          return {
            cycleId: cicloAnterior.id,
            dataInicio: cicloAnterior.installed_at,
            dataFim: cicloAnterior.removed_at,
            kmNaInstalacao: kmNaInstalacaoAnterior,
            eventos: eventosComKm,
          };
          }
        )
      );

      console.log(
        ">>> HISTÓRICOS ANTERIORES COM EVENTOS:",
        historicosComEventos
      );

      setHistoricosAnteriores(
        historicosComEventos.map((cicloAnterior) => ({
          cycleId: cicloAnterior.cycleId,
          dataInicio: cicloAnterior.dataInicio,
          dataFim: cicloAnterior.dataFim,
          kmNaInstalacao: cicloAnterior.kmNaInstalacao,
          eventos: cicloAnterior.eventos,
        }))
      );
    }
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
            <a href="/admin/manutencao">
              ‹
            </a>

            <div>
              <span>ELEMENTOS RODANTES</span>
              <h1>Pneus</h1>
            </div>

            <div className="maintenance-component-navigation">
              <button type="button" disabled>
                ‹
              </button>

              <span>1/4</span>

              <button
              type="button"
              onClick={() =>
                router.push(
                  "/admin/manutencao/elementos-rodantes/camaras"
                )
              }
            >
              ›
            </button>
            </div>
          </div>

          <div className="pneus-list">

            <article className="pneu-card">

              <div className="pneu-card-header">
              <div>
                <h2>Pneu</h2>
                <span>Dianteiro</span>
              </div>

              <button
                type="button"
                className="pneu-menu-button"
                aria-label="Opções do pneu dianteiro"
                onClick={() =>
                  setPneuMenuOpen(
                    pneuMenuOpen === "dianteiro" ? null : "dianteiro"
                  )
                }
              >
                ⋮
              </button>
            </div>

              {pneuMenuOpen === "dianteiro" && (
                <div className="pneu-component-menu">
                  <button
                    type="button"
                    onClick={() => {
                      setPneuMenuOpen(null);
                      setEventModalType("inspection");
                      setEventModalOpen(true);
                    }}
                  >
                    Inspeção
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPneuMenuOpen(null);
                      setEventModalType("rotation");
                      setEventModalOpen(true);
                    }}
                  >
                    Rodízio
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPneuMenuOpen(null);
                      setEventModalType("replacement");
                      setEventModalOpen(true);
                    }}
                  >
                    Substituição
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPneuMenuOpen(null);
                      setHistoricoOpen(true);
                    }}
                  >
                    Ver histórico
                  </button>
                </div>
              )}

              <div className="pneu-card-data">

                <div>
                  <span>Última troca:</span>

                  <strong>
                    {dataInstalacao
                      ? new Date(
                          `${dataInstalacao}T00:00:00`
                        ).toLocaleDateString("pt-BR")
                      : "Carregando..."}
                  </strong>

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

                <div>
                  <span>Desde a troca</span>

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

            </article>


            <article className="pneu-card">

              <div className="pneu-card-header">
                <div>
                  <h2>Pneu</h2>
                  <span>Traseiro</span>
                </div>

                <button
                  type="button"
                  className="pneu-menu-button"
                  aria-label="Opções do pneu traseiro"
                  onClick={() =>
                    setPneuMenuOpen(
                      pneuMenuOpen === "traseiro"
                        ? null
                        : "traseiro"
                    )
                  }
                >
                  ⋮
                </button>
                {pneuMenuOpen === "traseiro" && (
                  <div className="pneu-component-menu">
                    <button
                      type="button"
                      onClick={() => {
                        setPneuMenuOpen(null);
                        setEventModalType("inspection");
                        setEventModalOpen(true);
                      }}
                    >
                      Inspeção
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPneuMenuOpen(null);
                        setEventModalType("rotation");
                        setEventModalOpen(true);
                      }}
                    >
                      Rodízio
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPneuMenuOpen(null);
                        setEventModalType("replacement");
                        setEventModalOpen(true);
                      }}
                    >
                      Substituição
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPneuMenuOpen(null);
                        setHistoricoOpen(true);
                      }}
                    >
                      Ver histórico
                    </button>
                  </div>
                )}
              </div>

              <div className="pneu-card-data">

                <div>
                  <span>Última troca:</span>

                  <strong>
                    {dataInstalacao
                      ? new Date(
                          `${dataInstalacao}T00:00:00`
                        ).toLocaleDateString("pt-BR")
                      : "Carregando..."}
                  </strong>

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

                <div>
                  <span>Desde a troca</span>

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

            </article>

          </div>
          {historicoOpen && (
            <div className="pneu-history-card">

              <button
                type="button"
                className="pneu-history-close"
                onClick={() => setHistoricoOpen(false)}
                aria-label="Fechar histórico"
              >
                ×
              </button>

              <div className="pneu-history-header">
                ...
              </div>

              <div className="pneu-history-list">
                {historicos.map((item, index) => (
                  <div
                    key={`${item.data}-${item.tipo}-${index}`}
                    className="pneu-history-item"
                  >
                    <div>
                      <span>
                        {new Date(item.data + "T00:00:00").toLocaleDateString(
                          "pt-BR"
                        )}
                      </span>
                    </div>

                    <div>
                      <strong>
                        {item.tipo === "inspection"
                          ? "Inspeção"
                          : item.tipo === "rotation"
                            ? "Rodízio"
                            : item.tipo === "replacement"
                              ? "Substituição"
                              : item.tipo}
                      </strong>

                      <span>
                        {item.mileage !== null
                          ? `${Math.round(item.mileage).toLocaleString("pt-BR")} km`
                          : "—"}
                      </span>
                    </div>

                    {(item.resultado || item.observacao) && (
                      <div className="pneu-history-details">
                        {item.resultado && (
                          <span>
                            Resultado: {item.resultado}
                          </span>
                        )}

                        {item.observacao && (
                          <span>{item.observacao}</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {eventModalOpen &&
            cycleId &&
            componentId && (
              <MaintenanceEventModal
              componentName={
                eventModalType === "inspection"
                  ? "INSPEÇÃO"
                  : eventModalType === "rotation"
                    ? "RODÍZIO"
                    : "SUBSTITUIÇÃO"
              }
              cycleId={cycleId}
              componentId={componentId}
              initialEventType={eventModalType}
              showEventTypeSelector={false}
              onClose={() => setEventModalOpen(false)}
            />
          )}

        </main>
      </main>
    </>
  );
}
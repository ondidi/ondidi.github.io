"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";
import "@/admin/components/maintenance/maintenance.css";
import MaintenanceEventModal from "@/admin/components/maintenance/MaintenanceEventModal";

import {
  buscarQuilometragemAtual,
  buscarQuilometragemEntre,
  buscarQuilometragemNaData,
  buscarQuilometragemNaDataDeInstalacao,
} from "@/services/maintenance.service";

export default function CamarasPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [eventModalType, setEventModalType] = useState<
    "inspection" | "rotation" | "replacement"
  >("inspection");
  const [historicoOpen, setHistoricoOpen] = useState(false);

  const [cameraMenuOpen, setCameraMenuOpen] = useState<
    "dianteira" | "traseira" | null
  >(null);

  const [kmInstalacao, setKmInstalacao] =
    useState<number | null>(null);

  const [kmAtual, setKmAtual] =
    useState<number | null>(null);

  const [kmUso, setKmUso] =
    useState<number | null>(null);

  const [dataInstalacao, setDataInstalacao] =
    useState<string | null>(null);

  const [cycleId, setCycleId] =
    useState<string | null>(null);

  const [componentId, setComponentId] =
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
          .select(
            "id, component_id, installed_at"
          )
          .eq(
            "component_id",
            "2d0ce64b-313b-4eec-8c95-6c12296c58d3"
            )
          .eq("is_current", true)
          .single();

      if (cicloError || !ciclo) {
                console.error(
        ">>> ERRO CÂMARAS:",
        JSON.stringify(cicloError, null, 2)
        );
        return;
      }

      const dataDoCiclo =
        ciclo.installed_at;

      setCycleId(ciclo.id);
      setComponentId(ciclo.component_id);
      setDataInstalacao(dataDoCiclo);

      const dataAtual =
        new Date()
          .toISOString()
          .split("T")[0];

      const [
        kmNaInstalacao,
        kmAtualBike,
        ] = await Promise.all([
        buscarQuilometragemNaDataDeInstalacao(
            dataDoCiclo
        ),
        buscarQuilometragemAtual(),
        ]);

const kmUsoCalculado =
  kmAtualBike - kmNaInstalacao;

      setKmInstalacao(
        kmNaInstalacao
      );

      setKmAtual(
        kmAtualBike
      );

      setKmUso(
        kmUsoCalculado
      );

      const {
        data: eventos,
        error: eventosError,
      } = await supabase
        .from("maintenance_events")
        .select(
          "event_date, event_type, reason, mileage, inspection_result, notes"
        )
        .eq(
          "cycle_id",
          ciclo.id
        )
        .order("event_date", {
          ascending: false,
        });

      if (eventosError) {
        console.error(
          "Erro ao carregar histórico:",
          eventosError
        );
        return;
      }

      setHistoricos(
        (eventos ?? []).map(
          (evento) => ({
            data: evento.event_date,
            tipo: evento.event_type,
            mileage: evento.mileage,
            resultado:
              evento.inspection_result,
            observacao:
              evento.notes,
          })
        )
      );

      const {
        data: ciclosAnteriores,
        error: ciclosAnterioresError,
      } = await supabase
        .from("maintenance_component_cycles")
        .select(
          "id, installed_at, removed_at"
        )
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
        const historicosComEventos =
          await Promise.all(
            (ciclosAnteriores ?? []).map(
              async (cicloAnterior) => {
                const {
                  data: eventosAnteriores,
                  error,
                } = await supabase
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

                const eventosComKm =
                  await Promise.all(
                    (eventosAnteriores ?? []).map(
                      async (evento) => {
                        if (
                          evento.mileage !== null
                        ) {
                          return evento;
                        }

                        const kmDoEvento =
                          await buscarQuilometragemNaData(
                            evento.event_date
                          );

                        return {
                          ...evento,
                          mileage:
                            kmDoEvento,
                        };
                      }
                    )
                  );

                const kmNaInstalacaoAnterior =
                  await buscarQuilometragemNaData(
                    cicloAnterior.installed_at
                  );

                return {
                  cycleId:
                    cicloAnterior.id,
                  dataInicio:
                    cicloAnterior.installed_at,
                  dataFim:
                    cicloAnterior.removed_at,
                  kmNaInstalacao:
                    kmNaInstalacaoAnterior,
                  eventos:
                    eventosComKm,
                };
              }
            )
          );

        setHistoricosAnteriores(
          historicosComEventos.map(
            (cicloAnterior) => ({
              cycleId:
                cicloAnterior.cycleId,
              dataInicio:
                cicloAnterior.dataInicio,
              dataFim:
                cicloAnterior.dataFim,
              kmNaInstalacao:
                cicloAnterior.kmNaInstalacao,
              eventos:
                cicloAnterior.eventos,
            })
          )
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
              <span>
                ELEMENTOS RODANTES
              </span>

              <h1>Câmaras</h1>
            </div>

            <div className="maintenance-component-navigation">

              <button
                type="button"
                onClick={() =>
                  router.push(
                    "/admin/manutencao/elementos-rodantes/pneus"
                  )
                }
              >
                ‹
              </button>

              <span>2/4</span>

              <button
                type="button"
                onClick={() =>
                  router.push(
                    "/admin/manutencao/elementos-rodantes/aros"
                  )
                }
              >
                ›
              </button>

            </div>

          </div>

          <div className="pneus-list">

            {/* CÂMARA DIANTEIRA */}
            <article className="pneu-card">

              
          <div className="pneu-card-header">
            <div>
              <h2>Câmara</h2>
              <span>Dianteira</span>
            </div>

            <button
              type="button"
              className="pneu-menu-button"
              aria-label="Opções da câmara dianteira"
              onClick={() =>
                setCameraMenuOpen(
                  cameraMenuOpen === "dianteira" ? null : "dianteira"
                )
              }
            >
              ⋮
            </button>

            {cameraMenuOpen === "dianteira" && (
              <div className="pneu-component-menu">
                <button
                  type="button"
                  onClick={() => {
                    setEventModalType("inspection");
                    setCameraMenuOpen(null);
                    setEventModalOpen(true);
                  }}
                >
                  Inspeção
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEventModalType("rotation");
                    setCameraMenuOpen(null);
                    setEventModalOpen(true);
                  }}
                >
                  Rodízio
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEventModalType("replacement");
                    setCameraMenuOpen(null);
                    setEventModalOpen(true);
                  }}
                >
                  Substituição
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setHistoricoOpen(true);
                    setCameraMenuOpen(null);
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
                      ? new Date(dataInstalacao).toLocaleDateString(
                          "pt-BR"
                        )
                      : "Carregando..."}
                  </strong>

                  <strong>
                    {kmInstalacao !== null
                      ? `${kmInstalacao.toLocaleString("pt-BR")} km`
                      : "Calculando..."}
                  </strong>
                </div>

                <div>
                  <span>Desde a troca</span>

                  <strong>
                    {kmUso !== null
                      ? `${kmUso.toLocaleString("pt-BR")} km`
                      : "Calculando..."}
                  </strong>
                </div>

              </div>

            </article>

            {/* CÂMARA TRASEIRA */}
            <article className="pneu-card">

              <div className="pneu-card-header">

                <div>
                  <h2>Câmara</h2>
                  <span>Traseira</span>
                </div>

                <button
                  type="button"
                  className="pneu-menu-button"
                  aria-label="Opções da câmara traseira"
                  onClick={() =>
                    setCameraMenuOpen(
                      cameraMenuOpen === "traseira"
                        ? null
                        : "traseira"
                    )
                  }
                >
                  ⋮
                </button>

                {cameraMenuOpen === "traseira" && (
                  <div className="pneu-component-menu">
                    <button
                      type="button"
                      onClick={() => {
                        setEventModalType("inspection");
                        setCameraMenuOpen(null);
                        setEventModalOpen(true);
                      }}
                    >
                      Inspeção
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEventModalType("rotation");
                        setCameraMenuOpen(null);
                        setEventModalOpen(true);
                      }}
                    >
                      Rodízio
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEventModalType("replacement");
                        setCameraMenuOpen(null);
                        setEventModalOpen(true);
                      }}
                    >
                      Substituição
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setHistoricoOpen(true);
                        setCameraMenuOpen(null);
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
                      ? new Date(dataInstalacao).toLocaleDateString(
                          "pt-BR"
                        )
                      : "Carregando..."}
                  </strong>

                  <strong>
                    {kmInstalacao !== null
                      ? `${kmInstalacao.toLocaleString("pt-BR")} km`
                      : "Calculando..."}
                  </strong>
                </div>

                <div>
                  <span>Desde a troca</span>

                  <strong>
                    {kmUso !== null
                      ? `${kmUso.toLocaleString("pt-BR")} km`
                      : "Calculando..."}
                  </strong>
                </div>

              </div>

            </article>

          </div>
          {historicoOpen && (
            <div className="pneu-history-card">
              <div className="pneu-history-header">
                <h3>Histórico</h3>

                <button
                  type="button"
                  className="pneu-history-close"
                  onClick={() => setHistoricoOpen(false)}
                  aria-label="Fechar histórico"
                >
                  ×
                </button>
              </div>

              {historicos.length === 0 ? (
                <p>Nenhum evento registrado.</p>
              ) : (
                <div className="pneu-history-list">
                  {historicos.map((evento, index) => (
                    <div key={index} className="pneu-history-item">
                      <strong>{evento.tipo}</strong>

                      <span>
                        {new Date(evento.data).toLocaleDateString("pt-BR")}
                      </span>

                      {evento.mileage !== null && (
                        <span>
                          {evento.mileage.toLocaleString("pt-BR")} km
                        </span>
                      )}

                      {evento.resultado && (
                        <span>{evento.resultado}</span>
                      )}

                      {evento.observacao && (
                        <p>{evento.observacao}</p>
                      )}
                    </div>
                  ))}
                                    {historicosAnteriores.map((ciclo) => (
                    <div
                      key={ciclo.cycleId}
                      className="pneu-history-item"
                    >
                      <strong>Ciclo anterior</strong>

                      <span>
                        Instalação:{" "}
                        {new Date(ciclo.dataInicio).toLocaleDateString(
                          "pt-BR"
                        )}
                      </span>

                      {ciclo.dataFim && (
                        <span>
                          Retirada:{" "}
                          {new Date(ciclo.dataFim).toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                      )}

                      {ciclo.kmNaInstalacao !== null && (
                        <span>
                          Km na instalação:{" "}
                          {ciclo.kmNaInstalacao.toLocaleString("pt-BR")} km
                        </span>
                      )}

                      {ciclo.eventos.map((evento, index) => (
                        <div
                          key={index}
                          className="pneu-history-item"
                        >
                          <strong>{evento.event_type}</strong>

                          <span>
                            {new Date(
                              evento.event_date
                            ).toLocaleDateString("pt-BR")}
                          </span>

                          {evento.mileage !== null && (
                            <span>
                              {evento.mileage.toLocaleString("pt-BR")} km
                            </span>
                          )}

                          {evento.inspection_result && (
                            <span>
                              {evento.inspection_result}
                            </span>
                          )}

                          {evento.notes && (
                            <p>{evento.notes}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
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
"use client";

import { useEffect, useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);

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

            <a href="/admin/manutencao/elementos-rodantes">
              ‹
            </a>

            <div>
              <span>
                ELEMENTOS RODANTES
              </span>

              <h1>Câmaras</h1>
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
                <span>
                  INSTALAÇÃO
                </span>

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
                <span>
                  KM NA DATA
                </span>

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
                <span>
                  KM ATUAL
                </span>

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
                Condição da câmara
              </strong>

              <p>
                Avaliar visualmente a
                condição da câmara,
                verificando vazamentos,
                deformações, ressecamento
                e danos.
              </p>

            </div>

          </section>

          <section className="maintenance-history">

            <h2>HISTÓRICO</h2>

            {/* CICLO ATUAL */}

            <div className="history-card">

              <div className="history-date">
                {dataInstalacao
                  ? new Date(
                      `${dataInstalacao}T00:00:00`
                    ).toLocaleDateString(
                      "pt-BR"
                    )
                  : "Carregando..."}
              </div>

              <div className="history-content">

                <strong>
                  Instalação
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

            </div>

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
                          "rotation"
                          ? "Rodízio"
                          : "Inspeção"}
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

            {/* HISTÓRICOS ANTERIORES */}

            {historicosAnteriores.length > 0 && (
              <>

                <div
                  style={{
                    margin: "24px 0",
                    borderTop:
                      "1px solid #D9B26C",
                  }}
                />

                {historicosAnteriores.map(
                  (cicloAnterior) => (
                    <div
                      key={
                        cicloAnterior.cycleId
                      }
                    >

                      {cicloAnterior.eventos.map(
                        (evento, index) => (
                          <div
                            className="history-card"
                            key={`${evento.event_date}-${evento.event_type}-${index}`}
                          >

                            <div className="history-date">
                              {new Date(
                                `${evento.event_date}T00:00:00`
                              ).toLocaleDateString(
                                "pt-BR"
                              )}
                            </div>

                            <div className="history-content">

                              <strong>
                                {evento.event_type ===
                                "replacement"
                                  ? "Substituição"
                                  : evento.event_type ===
                                    "rotation"
                                    ? "Rodízio"
                                    : "Inspeção"}
                              </strong>

                              <strong>
                                {evento.mileage !==
                                null
                                  ? `${evento.mileage.toLocaleString(
                                      "pt-BR",
                                      {
                                        maximumFractionDigits: 0,
                                      }
                                    )} km`
                                  : "—"}
                              </strong>

                              {evento.inspection_result && (
                                <span>
                                  Resultado:{" "}
                                  {
                                    evento.inspection_result
                                  }
                                </span>
                              )}

                              {evento.notes && (
                                <span>
                                  {evento.notes}
                                </span>
                              )}

                            </div>

                          </div>
                        )
                      )}

                    </div>
                  )
                )}

              </>
            )}

          </section>

          <button
            className="maintenance-add"
            onClick={() =>
              setEventModalOpen(true)
            }
          >
            <span>+</span>

            <small>
              Registrar
              <br />
              manutenção
            </small>
          </button>

          {eventModalOpen &&
            cycleId &&
            componentId && (
              <MaintenanceEventModal
                componentName="Câmaras"
                cycleId={cycleId}
                componentId={componentId}
                onClose={() =>
                  setEventModalOpen(false)
                }
              />
            )}

        </main>
      </main>
    </>
  );
}
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
} from "@/services/maintenance.service";

export default function PneuDianteiroPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);

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

      const { data: eventos, error: eventosError } =
        await supabase
          .from("maintenance_events")
          .select(
            "event_date, event_type, reason, mileage, inspection_result, notes"
          )
          .eq("cycle_id", ciclo.id)
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
              <h1>Pneus</h1>
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
                      ).toLocaleDateString("pt-BR")
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
                Desgaste do pneu
              </strong>

              <p>
                Avaliar visualmente as
                condições do pneu,
                considerando desgaste,
                cortes, deformações
                e ressecamento.
              </p>

            </div>

          </section>

          <section className="maintenance-history">

  <h2>HISTÓRICO</h2>

  {historicos.map((evento, index) => (
              <div className="history-card" key={`${evento.data}-${evento.tipo}-${index}`}>

                <div className="history-date">
                  {new Date(
                    `${evento.data}T00:00:00`
                  ).toLocaleDateString("pt-BR")}
                </div>

                <div className="history-content">

                  <strong>
                    {evento.tipo === "replacement"
                      ? "Substituição"
                      : evento.tipo === "rotation"
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
                      Resultado: {evento.resultado}
                    </span>
                  )}

                  {evento.observacao && (
                    <span>
                      {evento.observacao}
                    </span>
                  )}

                </div>

              </div>
            ))}

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
                componentName="Pneus"
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
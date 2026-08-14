"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import PerformanceChart from "./PerformanceChart";
import styles from "./StatisticsPerformance.module.css";

export interface PerformanceDay {
  dia: string;
  distancia: number;
  altimetria: number;
}

function formatarData(date: Date) {
  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const dia = String(date.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

export default function StatisticsPerformance() {
  const [dados, setDados] = useState<PerformanceDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarSemana() {
      setLoading(true);

      const hoje = new Date();

      /*
       * Semana atual:
       * Domingo → Sábado
       */
      const inicioSemana = new Date(hoje);
      inicioSemana.setHours(0, 0, 0, 0);
      inicioSemana.setDate(
        hoje.getDate() - hoje.getDay()
      );

      const fimSemana = new Date(inicioSemana);
      fimSemana.setDate(
        inicioSemana.getDate() + 6
      );

      const dataInicio = formatarData(inicioSemana);
      const dataFim = formatarData(fimSemana);

      const { data, error } = await supabase
        .from("atividades")
        .select(
          "data, distancia, ganho_elevacao"
        )
        .gte("data", dataInicio)
        .lte("data", dataFim)
        .order("data", {
          ascending: true,
        });

      if (error) {
        console.error(
          "Erro ao carregar desempenho semanal:",
          error
        );

        setDados([]);
        setLoading(false);
        return;
      }

      const atividades = data ?? [];

      const diasSemana = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb",
      ];

      const resultado: PerformanceDay[] =
        diasSemana.map((dia, index) => {
          const dataDia = new Date(inicioSemana);

          dataDia.setDate(
            inicioSemana.getDate() + index
          );

          const dataFormatada =
            formatarData(dataDia);

          const atividadesDoDia =
            atividades.filter(
              (atividade) =>
                atividade.data === dataFormatada
            );

          const distancia =
            atividadesDoDia.reduce(
              (total, atividade) =>
                total +
                Number(
                  atividade.distancia ?? 0
                ),
              0
            );

          const altimetria =
            atividadesDoDia.reduce(
              (total, atividade) =>
                total +
                Number(
                  atividade.ganho_elevacao ?? 0
                ),
              0
            );

          return {
            dia,
            distancia,
            altimetria,
          };
        });

      console.log(
        "DESEMPENHO SEMANAL:",
        resultado
      );

      setDados(resultado);
      setLoading(false);
    }

    carregarSemana();
  }, []);
  const totalSemana = dados.reduce(
  (total, dia) => total + dia.distancia,
  0
);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>
          DESEMPENHO — ÚLTIMOS 7 DIAS
        </h2>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span
            className={
              styles.distanceIndicator
            }
          />
          <span>Distância (km)</span>
        </div>

        <div className={styles.legendItem}>
          <span
            className={
              styles.elevationIndicator
            }
          />
          <span>Altimetria (m)</span>
        </div>
      </div>

      {loading ? (
        <div>Carregando...</div>
      ) : (
        <PerformanceChart data={dados} />
      )}
    </section>
  );
}
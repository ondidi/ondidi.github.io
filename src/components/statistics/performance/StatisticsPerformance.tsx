"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import PerformanceChart from "./PerformanceChart";
import styles from "./StatisticsPerformance.module.css";

export interface PerformanceDay {
  dia: string;
  distancia: number;
  altimetria: number;
  tipo: string;
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

      hoje.setHours(0, 0, 0, 0);

      /*
       * Últimos 7 dias:
       * Hoje + os 6 dias anteriores.
       *
       * Exemplo:
       * Domingo 16/08
       * → Segunda 10/08 até Domingo 16/08
       */
      const inicioSemana = new Date(hoje);

      inicioSemana.setDate(
        hoje.getDate() - 6
      );

      const dataInicio =
        formatarData(inicioSemana);

      const dataFim =
        formatarData(hoje);

      const { data, error } = await supabase
        .from("atividades")
        .select(
          "data, distancia, ganho_elevacao, tipo"
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

      const resultado: PerformanceDay[] = [];

      for (let index = 0; index < 7; index++) {
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

        const tipo =
          atividadesDoDia.length > 0
            ? atividadesDoDia[
                atividadesDoDia.length - 1
              ].tipo ?? ""
            : "";

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

        const dia =
          dataDia
            .toLocaleDateString("pt-BR", {
              weekday: "short",
            })
            .replace(".", "")
            .replace(/^./, (letra) =>
              letra.toUpperCase()
            );

        resultado.push({
          dia,
          distancia,
          altimetria,
          tipo,
        });
        }

        console.log(
          "DESEMPENHO SEMANAL:",
          resultado
        );

        setDados(resultado);
        setLoading(false);
        }

        carregarSemana();
        }, []);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>
          DESEMPENHO SEMANAL
        </h2>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span
            className={
              styles.distanceIndicator
            }
          />

          <span>
            Distância (km)
          </span>
        </div>

        <div className={styles.legendItem}>
          <span
            className={
              styles.elevationIndicator
            }
          />

          <span>
            Altimetria (m)
          </span>
        </div>
      </div>

      {loading ? (
        <div>
          Carregando...
        </div>
      ) : (
        <PerformanceChart data={dados} />
      )}
    </section>
  );
}
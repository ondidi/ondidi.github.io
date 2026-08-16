"use client";

import { useEffect, useState } from "react";
import {
  Bike,
  Mountain,
  Heart,
  Flame,
  Clock,
  CalendarDays,
  Repeat,
  TrendingUp,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

import MetricCard from "./MetricCard";
import styles from "./StatisticsToday.module.css";

export default function StatisticsToday() {
  const [metricas, setMetricas] = useState({
    distancia: 0,
    altimetria: 0,
    calorias: 0,
    segundos: 0,
    fcMedia: 0,
    pedalSemana: 0,
    totalMes: 0,
    totalAno: 0,
    terrenos: [] as string[],
  });

  useEffect(() => {
    async function carregarEstatisticas() {
      const hoje = new Date();

      const formatarDataLocal = (date: Date) => {
        const ano = date.getFullYear();
        const mes = String(date.getMonth() + 1).padStart(2, "0");
        const dia = String(date.getDate()).padStart(2, "0");

        return `${ano}-${mes}-${dia}`;
      };

      const dataHoje = formatarDataLocal(hoje);
      const inicioAno = new Date(
      hoje.getFullYear(),
      0,
      1
    );

const dataInicioAno = formatarDataLocal(inicioAno);

      const inicioSemana = new Date(hoje);

      const diaSemana = inicioSemana.getDay();

      const diasDesdeSegunda =
        diaSemana === 0 ? 6 : diaSemana - 1;

      inicioSemana.setDate(
        inicioSemana.getDate() - diasDesdeSegunda
      );

      const dataInicioSemana = formatarDataLocal(inicioSemana);

      const { data, error } = await supabase
        .from("atividades")
        .select(
          "data, distancia, ganho_elevacao, calorias, duracao, fc_media, terreno"
        )
        .gte("data", dataInicioAno)
        .lte("data", dataHoje);

      if (error) {
        console.error(
          "Erro ao carregar estatísticas:",
          error
        );
        return;
      }

      let distancia = 0;
      let altimetria = 0;
      let calorias = 0;
      let segundos = 0;
      let pedalSemana = 0;
      let totalMes = 0;
      let totalAno = 0;

      const frequencias: number[] = [];
      const terrenos = new Set<string>();

      (data || []).forEach((atividade) => {
      const distanciaAtividade =
        Number(atividade.distancia ?? 0);

      totalAno += distanciaAtividade;

      if (
        atividade.data.startsWith(
          dataHoje.substring(0, 7)
        )
      ) {
        totalMes += distanciaAtividade;
      }

      if (
        atividade.data >= dataInicioSemana &&
        atividade.data <= dataHoje
      ) {
        pedalSemana += distanciaAtividade;
      }

      // Estatísticas de HOJE
      if (atividade.data === dataHoje) {

        if (atividade.terreno) {
          terrenos.add(atividade.terreno);
        }

        distancia += distanciaAtividade;

        altimetria += Number(
          atividade.ganho_elevacao ?? 0
        );

        calorias += Number(
          atividade.calorias ?? 0
        );

        if (atividade.fc_media != null) {
          frequencias.push(
            Number(atividade.fc_media)
          );
        }

        if (atividade.duracao) {
          const [
            horas,
            minutos,
            segundosAtividade,
          ] = atividade.duracao
            .split(":")
            .map(Number);

          segundos +=
            horas * 3600 +
            minutos * 60 +
            segundosAtividade;
        }
      }
    });

      const fcMedia =
        frequencias.length > 0
          ? Math.round(
              frequencias.reduce(
                (total, valor) => total + valor,
                0
              ) / frequencias.length
            )
          : 0;

      setMetricas({
        distancia,
        altimetria,
        calorias,
        segundos,
        fcMedia,
        pedalSemana,
        totalMes,
        totalAno,
        terrenos: Array.from(terrenos),
      });
    }

    carregarEstatisticas();
  }, []);

  const horas = Math.floor(
    metricas.segundos / 3600
  );

  const minutos = Math.floor(
    (metricas.segundos % 3600) / 60
  );

  const tempo = `${horas}h${String(minutos).padStart(
    2,
    "0"
  )}`;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Bike size={22} strokeWidth={1.8} />
        <h2>HOJE</h2>
      </div>

      <div className={styles.metrics}>
        <MetricCard
          label="Pedal"
          value={metricas.distancia.toFixed(2)}
          unit="km"
          icon={<Bike size={28} strokeWidth={1.8} />}
        />
        <MetricCard
          label="Terreno"
          value={
            metricas.terrenos.length > 0
              ? metricas.terrenos
                  .map((terreno) => {
                    if (terreno === "terra") return "Terra";
                    if (terreno === "asfalto") return "Asfalto";
                    if (terreno === "trilha") return "Trilha";

                    return terreno;
                  })
                  .join(" + ")
              : "—"
          }
          unit=""
          icon={
            <Mountain
              size={28}
              strokeWidth={1.8}
            />
          }
        />

        <MetricCard
          label="Altimetria"
          value={Math.round(
            metricas.altimetria
          ).toString()}
          unit="m"
          icon={
            <Mountain
              size={28}
              strokeWidth={1.8}
            />
          }
        />

        <MetricCard
          label="FC média"
          value={metricas.fcMedia.toString()}
          unit="bpm"
          icon={
            <Heart
              size={28}
              strokeWidth={1.8}
            />
          }
        />

        <MetricCard
          label="Calorias"
          value={Math.round(
            metricas.calorias
          ).toLocaleString("pt-BR")}
          unit="kcal"
          icon={
            <Flame
              size={28}
              strokeWidth={1.8}
            />
          }
        />

        <MetricCard
          label="Tempo"
          value={tempo}
          unit=""
          icon={
            <Clock
              size={28}
              strokeWidth={1.8}
            />
          }
        />

        <MetricCard
          label="Últimos 7 dias"
          value={Math.round(metricas.pedalSemana).toString()}
          unit="km"
          icon={
            <Repeat
              size={28}
              strokeWidth={1.8}
            />
          }
        />
        <MetricCard
          label="Mês atual"
          value={Math.round(metricas.totalMes).toString()}
          unit="km"
          icon={
            <CalendarDays
              size={28}
              strokeWidth={1.8}
            />
          }
        />

        <MetricCard
          label="Ano corrente"
          value={Math.round(metricas.totalAno).toString()}
          unit="km"
          icon={
            <TrendingUp
              size={28}
              strokeWidth={1.8}
            />
          }
        />
      </div>
    </section>
  );
}
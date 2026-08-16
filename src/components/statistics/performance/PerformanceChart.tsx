"use client";
import styles from "./PerformanceChart.module.css";

import { useEffect, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { PerformanceDay } from "./StatisticsPerformance";

interface PerformanceChartProps {
  data: PerformanceDay[];
}

export default function PerformanceChart({
  data,
}: PerformanceChartProps) {
  const ordemDias = [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
    "Dom",
  ];

  const hoje = new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
  })
    .format(new Date())
    .replace(".", "")
    .replace(/^./, (letra) => letra.toUpperCase());

  const indiceHoje = ordemDias.indexOf(hoje);

  const ordemAtual = [
    ...ordemDias.slice(indiceHoje + 1),
    ...ordemDias.slice(0, indiceHoje + 1),
  ];

  const dadosOrdenados = [...data].sort(
    (a, b) =>
      ordemAtual.indexOf(a.dia) -
      ordemAtual.indexOf(b.dia)
  );

  const maiorDistancia = Math.max(
    ...dadosOrdenados.map((item) => item.distancia),
    0
  );

  const maiorAltimetria = Math.max(
    ...dadosOrdenados.map((item) => item.altimetria),
    0
  );

  /*
   * A escala da distância sobe conforme os dados.
   * Exemplo:
   * 102 km → escala até 110
   * 153 km → escala até 160
   */
  const escalaDistancia =
    maiorDistancia > 0
      ? Math.ceil(maiorDistancia / 10) * 10
      : 10;

  /*
   * A altimetria sobe em blocos de 500 m.
   */
  const escalaAltimetria =
    maiorAltimetria > 0
      ? Math.ceil(maiorAltimetria / 500) * 500
      : 500;

  /*
   * Gera os valores do eixo de distância
   * sempre de 10 em 10.
   */
  const ticksDistancia = Array.from(
    {
      length: escalaDistancia / 10 + 1,
    },
    (_, index) => index * 10
  );

  return (
    <div className={styles.chart}>
      <ResponsiveContainer
        width="100%"
        height={230}
      >
        <ComposedChart
          data={dadosOrdenados}
          margin={{
            top: 10,
            right: 18,
            left: 0,
            bottom: 0,
          }}
        >
          {ticksDistancia.map((valor) => (
            <ReferenceLine
              key={valor}
              y={valor}
              yAxisId="distance"
              stroke="var(--color-border)"
              strokeWidth={1}
            />
          ))}

          <XAxis
            dataKey="dia"
            interval={0}
            tick={{
              fontSize: 11,
              fill: "var(--color-text)",
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            yAxisId="distance"
            orientation="left"
            domain={[0, escalaDistancia]}
            ticks={ticksDistancia}
            tick={{
              fontSize: 11,
              fill: "var(--color-text)",
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            yAxisId="elevation"
            orientation="right"
            domain={[0, escalaAltimetria]}
            tick={{
              fontSize: 11,
              fill: "var(--color-text)",
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Bar
            yAxisId="distance"
            dataKey="distancia"
            fill="var(--color-primary)"
            radius={[3, 3, 0, 0]}
            barSize={20}
          />

          <Line
            yAxisId="elevation"
            type="monotone"
            dataKey="altimetria"
            stroke="var(--color-text)"
            strokeWidth={2.5}
            dot={{
              r: 4,
              fill: "var(--color-text)",
            }}
            activeDot={{
              r: 5,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
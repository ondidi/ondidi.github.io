"use client";
import styles from "./PerformanceChart.module.css";

import { useEffect, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
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
  const formatarTipo = (tipo: string) => {
    if (tipo === "treino") return "Treino";
    if (tipo === "longao") return "Longão";
    if (tipo === "aventura") return "Aventura";

    return "";
  };

  return (
    <div className={styles.chart}>
      <ResponsiveContainer
        width="100%"
        height={280}
      >
        <ComposedChart
          data={dadosOrdenados}
          margin={{
            top: 10,
            right: 18,
            left: 0,
            bottom: 30,
          }}
          barCategoryGap="55%"
          barGap={8}
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
            height={42}
            axisLine={false}
            tickLine={false}
            tick={({ x, y, payload }) => {
              const item = dadosOrdenados.find(
                (dia) => dia.dia === payload.value
              );

              const tipo = item
                ? formatarTipo(item.tipo)
                : "";

              const sigla =
                tipo === "Treino"
                  ? "T"
                  : tipo === "Longão"
                  ? "L"
                  : tipo === "Aventura"
                  ? "A"
                  : "";

              const posX = Number(x);
              const posY = Number(y);

              return (
                <g
                  transform={`translate(${posX}, ${posY + 10})`}
                >
                  <text
                    x={0}
                    y={0}
                    textAnchor="middle"
                    fill="var(--color-text)"
                    fontSize={10}
                  >
                    {payload.value}
                  </text>
                  {sigla && (
                  <>
                    <circle
                      cx={0}
                      cy={34}
                      r={15}
                      fill={
                      tipo === "Treino"
                        ? "var(--color-text)"
                        : tipo === "Longão"
                        ? "var(--color-primary)"
                        : "var(--color-text)"
                    }
                    />

                    <text
                      x={0}
                      y={38}
                      textAnchor="middle"
                      fill="white"
                      fontSize={10}
                      fontWeight={800}
                    >
                      {sigla}
                    </text>
                  </>
                )}

                  
                </g>
              );
            }}
          />

          <YAxis
            yAxisId="distance"
            orientation="left"
            domain={[0, escalaDistancia]}
            ticks={ticksDistancia}
            tick={{
              fontSize: 12,
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
              fontSize: 12,
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

          <Bar
            yAxisId="elevation"
            dataKey="altimetria"
            fill="var(--color-text)"
            radius={[3, 3, 0, 0]}
            barSize={18}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className={styles.activityLegend}>
        T - Treino&nbsp;&nbsp;|&nbsp;&nbsp;
        L - Longão&nbsp;&nbsp;|&nbsp;&nbsp;
        A - Aventura
      </div>
    </div>
  );
}
"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styles from "./YearChart.module.css";
import { useEffect, useState } from "react";

export interface YearMonth {
  mes: string;
  distancia: number;
  altimetria: number;
}

interface YearChartProps {
  data: YearMonth[];
}

export default function YearChart({
  data,
}: YearChartProps) {
  const maiorDistancia = Math.max(
    ...data.map((item) => item.distancia),
    0
  );

  const maiorAltimetria = Math.max(
    ...data.map((item) => item.altimetria),
    0
  );
  const [mobile, setMobile] = useState(false);

    useEffect(() => {
    const verificarTela = () => {
        setMobile(window.innerWidth <= 600);
    };

    verificarTela();

    window.addEventListener("resize", verificarTela);

    return () => {
        window.removeEventListener("resize", verificarTela);
    };
    }, []);

  const escalaDistancia =
    maiorDistancia > 0
      ? Math.ceil(maiorDistancia / 100) * 100
      : 100;

  const escalaAltimetria =
    maiorAltimetria > 0
      ? Math.ceil(maiorAltimetria / 500) * 500
      : 500;

    const abreviarMes = (mes: string) => {
  if (!mobile) return mes;

  const abreviacoes: Record<string, string> = {
        Jan: "J",
        Fev: "F",
        Mar: "M",
        Abr: "A",
        Mai: "M",
        Jun: "J",
        Jul: "J",
        Ago: "A",
        Set: "S",
        Out: "O",
        Nov: "N",
        Dez: "D",
    };

    return abreviacoes[mes] ?? mes;
    };

  return (
    <div className={styles.chart}>
      <ResponsiveContainer
        width="100%"
        height={310}
      >
        <ComposedChart
            data={data}
            margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 10,
            }}
            barCategoryGap="10%"
            barGap={2}
            >
          <CartesianGrid
            stroke="var(--color-border)"
            strokeWidth={1}
            vertical={false}
          />

          <XAxis
            dataKey="mes"
            interval={0}
            height={30}
            tickMargin={6}
            tick={({ x, y, payload }) => (
                <text
                x={x}
                y={y}
                textAnchor="middle"
                fill="var(--color-text)"
                fontSize={11}
                >
                {abreviarMes(payload.value)}
                </text>
            )}
            axisLine={false}
            tickLine={false}
            />

          <YAxis
            yAxisId="distance"
            orientation="left"
            width={mobile ? 40 : 50}
            domain={[0, escalaDistancia]}
            tick={{
              fontSize: 10,
              fill: "var(--color-text)",
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            yAxisId="elevation"
            orientation="right"
            width={mobile ? 40 : 50}
            domain={[0, escalaAltimetria]}
            tick={{
              fontSize: 10,
              fill: "var(--color-text)",
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Bar
            yAxisId="distance"
            dataKey="distancia"
            name="Distância"
            fill="var(--color-primary)"
            radius={[3, 3, 0, 0]}
            barSize={8}
          />

          <Bar
            yAxisId="elevation"
            dataKey="altimetria"
            name="Altimetria"
            fill="var(--color-text)"
            radius={[3, 3, 0, 0]}
            barSize={8}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
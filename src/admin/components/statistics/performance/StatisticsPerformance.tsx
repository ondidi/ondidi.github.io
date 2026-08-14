"use client";

import { useEffect, useMemo, useState } from "react";

import { supabase } from "@/lib/supabase";

import styles from "./StatisticsPerformance.module.css";

interface Atividade {
  data: string;
  distancia: number | null;
  ganho_elevacao: number | null;
}

interface DiaPerformance {
  data: string;
  label: string;
  distancia: number;
  altimetria: number;
}

function formatarDataLocal(date: Date) {
  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const dia = String(date.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

function criarLabel(date: Date, hoje: boolean) {
  if (hoje) {
    return "Hoje";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
  })
    .format(date)
    .replace(".", "")
    .replace(/^./, (letra) => letra.toUpperCase());
}

export default function StatisticsPerformance() {
  console.log(">>> StatisticsPerformance CARREGOU <<<");

  const [dias, setDias] = useState<DiaPerformance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarPerformance() {
      setLoading(true);

      const hoje = new Date();

      const inicio = new Date(hoje);
      inicio.setHours(0, 0, 0, 0);

      // Domingo da semana atual
      inicio.setDate(inicio.getDate() - inicio.getDay());

      const fim = new Date(inicio);
      fim.setDate(inicio.getDate() + 6);

      const dataInicio = formatarDataLocal(inicio);
      const dataFim = formatarDataLocal(fim);

      const { data, error } = await supabase
        .from("atividades")
        .select("data, distancia, ganho_elevacao")
        .gte("data", dataInicio)
        .lte("data", dataFim)
        .order("data", {
          ascending: true,
        });

      if (error) {
        console.error(
          "Erro ao carregar desempenho dos últimos 7 dias:",
          error
        );

        setDias([]);
        setLoading(false);
        return;
      }

      const atividades = (data ?? []) as Atividade[];

      console.log("ATIVIDADES:", atividades);
      console.log("PERÍODO:", dataInicio, "até", dataFim);

      const resultado: DiaPerformance[] = [];

      for (let i = 0; i < 7; i++) {
        const dia = new Date(inicio);
        dia.setDate(inicio.getDate() + i);

        const data = formatarDataLocal(dia);

        const atividadesDoDia = atividades.filter(
          (atividade) => atividade.data === data
        );
        console.log(
          "DIA:",
          data,
          "ATIVIDADES:",
          atividadesDoDia,
          "DISTÂNCIA:",
          atividadesDoDia.reduce(
            (total, atividade) =>
              total + Number(atividade.distancia ?? 0),
            0
          )
        );

        const distancia = atividadesDoDia.reduce(
          (total, atividade) =>
            total + Number(atividade.distancia ?? 0),
          0
        );

        const altimetria = atividadesDoDia.reduce(
          (total, atividade) =>
            total + Number(atividade.ganho_elevacao ?? 0),
          0
        );

        resultado.push({
          data,
          label: criarLabel(dia, false),
          distancia,
          altimetria,
        });
      }

      setDias(resultado);
      setLoading(false);
    }

    carregarPerformance();
  }, []);

  const escalas = useMemo(() => {
    const maiorDistancia = Math.max(
      ...dias.map((dia) => dia.distancia),
      0
    );

    const maiorAltimetria = Math.max(
      ...dias.map((dia) => dia.altimetria),
      0
    );

    return {
      distancia: maiorDistancia > 0
        ? Math.ceil(maiorDistancia / 10) * 10
        : 10,

      altimetria: maiorAltimetria > 0
        ? Math.ceil(maiorAltimetria / 500) * 500
        : 500,
    };
  }, [dias]);

  const chart = {
    width: 700,
    height: 220,
    left: 42,
    right: 42,
    top: 18,
    bottom: 38,
  };

  const plotWidth =
    chart.width - chart.left - chart.right;

  const plotHeight =
    chart.height - chart.top - chart.bottom;

  const step =
    dias.length > 1
      ? plotWidth / (dias.length - 1)
      : plotWidth;

  const getX = (index: number) =>
    chart.left + index * step;

  const getBarHeight = (value: number) =>
    (value / escalas.distancia) * plotHeight;

  const getLineY = (value: number) =>
    chart.top +
    plotHeight -
    (value / escalas.altimetria) * plotHeight;

  const pontosLinha = dias.map((dia, index) => ({
    x: getX(index),
    y: getLineY(dia.altimetria),
  }));

  function criarPathSuave() {
    if (pontosLinha.length === 0) {
      return "";
    }

    if (pontosLinha.length === 1) {
      return `M ${pontosLinha[0].x} ${pontosLinha[0].y}`;
    }

    let path = `M ${pontosLinha[0].x} ${pontosLinha[0].y}`;

    for (let i = 0; i < pontosLinha.length - 1; i++) {
      const atual = pontosLinha[i];
      const proximo = pontosLinha[i + 1];

      const anterior =
        pontosLinha[i - 1] ?? atual;

      const seguinte =
        pontosLinha[i + 2] ?? proximo;

      const controle1X =
        atual.x +
        (proximo.x - anterior.x) / 6;

      const controle1Y =
        atual.y +
        (proximo.y - anterior.y) / 6;

      const controle2X =
        proximo.x -
        (seguinte.x - atual.x) / 6;

      const controle2Y =
        proximo.y -
        (seguinte.y - atual.y) / 6;

      path +=
        ` C ${controle1X} ${controle1Y},` +
        ` ${controle2X} ${controle2Y},` +
        ` ${proximo.x} ${proximo.y}`;
    }

    return path;
  }

  const linhasGrade = 4;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>DESEMPENHO — ÚLTIMOS 7 DIAS</h2>

        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <span
              className={`${styles.legendLine} ${styles.distance}`}
            />
            Distância (km)
          </span>

          <span className={styles.legendItem}>
            <span
              className={`${styles.legendLine} ${styles.elevation}`}
            />
            Altimetria (m)
          </span>
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>
          Carregando...
        </div>
      ) : (
        <div className={styles.chartWrapper}>
          <svg
            className={styles.chart}
            viewBox={`0 0 ${chart.width} ${chart.height}`}
            preserveAspectRatio="none"
          >
            {/* GRADE + EIXOS */}
            {Array.from({
              length: linhasGrade + 1,
            }).map((_, index) => {
              const y =
                chart.top +
                (plotHeight / linhasGrade) * index;

              const distanciaValor =
                escalas.distancia -
                (escalas.distancia /
                  linhasGrade) *
                  index;

              const altimetriaValor =
                escalas.altimetria -
                (escalas.altimetria /
                  linhasGrade) *
                  index;

              return (
                <g key={index}>
                  <line
                    x1={chart.left}
                    x2={
                      chart.width -
                      chart.right
                    }
                    y1={y}
                    y2={y}
                    className={styles.gridLine}
                  />

                  <text
                    x={chart.left - 10}
                    y={y + 4}
                    textAnchor="end"
                    className={styles.axisLabel}
                  >
                    {Math.round(
                      distanciaValor
                    )}
                  </text>

                  <text
                    x={
                      chart.width -
                      chart.right +
                      10
                    }
                    y={y + 4}
                    textAnchor="start"
                    className={styles.axisLabel}
                  >
                    {Math.round(
                      altimetriaValor
                    )}
                  </text>
                </g>
              );
            })}

            {/* BARRAS */}
            {dias.map((dia, index) => {
              const x = getX(index);
              const barHeight =
                getBarHeight(dia.distancia);

              const barWidth = Math.min(
                18,
                step * 0.34
              );

              return (
                <rect
                  key={`bar-${dia.data}`}
                  x={x - barWidth / 2}
                  y={
                    chart.top +
                    plotHeight -
                    barHeight
                  }
                  width={barWidth}
                  height={barHeight}
                  rx="1.5"
                  className={styles.bar}
                />
              );
            })}

            {/* LINHA DE ALTIMETRIA */}
            <path
              d={criarPathSuave()}
              className={styles.elevationPath}
            />

            {/* PONTOS */}
            {pontosLinha.map((ponto, index) => (
              <circle
                key={`point-${dias[index].data}`}
                cx={ponto.x}
                cy={ponto.y}
                r="4"
                className={styles.point}
              />
            ))}

            {/* LABELS DOS DIAS */}
            {dias.map((dia, index) => (
              <text
                key={`label-${dia.data}`}
                x={getX(index)}
                y={
                  chart.height -
                  12
                }
                textAnchor="middle"
                className={styles.dayLabel}
              >
                {dia.label}
              </text>
            ))}
          </svg>
        </div>
      )}
    </section>
  );
}
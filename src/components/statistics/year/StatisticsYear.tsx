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


import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import YearChart from "./YearChart";
import { CalendarDays } from "lucide-react";
import styles from "./StatisticsYear.module.css";

interface YearMonth {
  mes: string;
  distancia: number;
  altimetria: number;
}

export default function StatisticsYear() {
  const [dados, setDados] = useState<YearMonth[]>([]);

  useEffect(() => {
    async function carregarAno() {
      const hoje = new Date();

      const anoAtual = hoje.getFullYear();

      const inicioAno = `${anoAtual}-01-01`;
      const fimAno = `${anoAtual}-12-31`;

      const { data, error } = await supabase
        .from("atividades")
        .select(
          "data, distancia, ganho_elevacao"
        )
        .gte("data", inicioAno)
        .lte("data", fimAno)
        .order("data", {
          ascending: true,
        });

      if (error) {
        console.error(
          "Erro ao carregar desempenho anual:",
          error
        );
        return;
      }

      const atividades = data ?? [];

      const nomesMeses = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ];

      const resultado: YearMonth[] =
        nomesMeses.map((mes, index) => {

          const mesNumero = String(
            index + 1
          ).padStart(2, "0");

          const atividadesDoMes =
            atividades.filter((atividade) =>
              atividade.data.startsWith(
                `${anoAtual}-${mesNumero}`
              )
            );

          const distancia =
            atividadesDoMes.reduce(
              (total, atividade) =>
                total +
                Number(
                  atividade.distancia ?? 0
                ),
              0
            );

          const altimetria =
            atividadesDoMes.reduce(
              (total, atividade) =>
                total +
                Number(
                  atividade.ganho_elevacao ?? 0
                ),
              0
            );

          return {
            mes,
            distancia,
            altimetria,
            };
            });

            console.log(
            "DESEMPENHO ANUAL:",
            resultado
            );

            setDados(resultado);
    }

    carregarAno();
    }, []);
    return (
    <section className={styles.container}>
        <div className={styles.header}>
        <CalendarDays size={22} strokeWidth={1.8} />
        <h2>DESEMPENHO ANUAL</h2>
        </div>

        <div className={styles.legend}>
        <div className={styles.legendItem}>
            <span className={styles.distanceIndicator} />
            <span>Distância (km)</span>
        </div>

        <div className={styles.legendItem}>
            <span className={styles.elevationIndicator} />
            <span>Altimetria (m)</span>
        </div>
        </div>

        <YearChart data={dados} />
    </section>
    );
}
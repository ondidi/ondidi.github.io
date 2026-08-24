import { supabase } from "@/lib/supabase";
import { adventures } from "@/data/adventures";

export interface HistoricalStatistics {
  pedaladas: number;
  quilometros: number;
  calorias: number;
  altimetria: number;
}

export async function carregarEstatisticasHistoricas(): Promise<HistoricalStatistics> {
  const { data, error } = await supabase
    .from("atividades")
    .select(
      "distancia, calorias, ganho_elevacao"
    );

  if (error) {
    console.error(
      "Erro ao carregar estatísticas históricas:",
      error
    );

    return {
      pedaladas: 0,
      quilometros: 0,
      calorias: 0,
      altimetria: 0,
    };
  }

  const atividades = data ?? [];

  const pedaladas = atividades.length;

  const quilometros = atividades.reduce(
    (total, atividade) =>
      total + Number(atividade.distancia ?? 0),
    0
  );

  const calorias = atividades.reduce(
    (total, atividade) =>
      total + Number(atividade.calorias ?? 0),
    0
  );

  const altimetria = atividades.reduce(
    (total, atividade) =>
      total +
      Number(atividade.ganho_elevacao ?? 0),
    0
  );

  return {
    pedaladas,
    quilometros,
    calorias,
    altimetria,
  };
}
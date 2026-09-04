import { supabase } from "@/lib/supabase";

/**
 * Retorna a quilometragem atual da bike,
 * usando todas as atividades registradas.
 */
export async function buscarQuilometragemAtual(): Promise<number> {
  const { data: atividades, error } = await supabase
    .from("atividades")
    .select("distancia");

  if (error) {
    console.error(
      "Erro ao buscar quilometragem atual:",
      error
    );

    return 0;
  }

  return (atividades ?? []).reduce(
    (total, atividade) =>
      total + Number(atividade.distancia ?? 0),
    0
  );
}

/**
 * Retorna quantos quilômetros foram rodados
 * depois de uma determinada data.
 */
export async function buscarQuilometragemEntre(
  dataInicial: string,
  dataFinal: string
): Promise<number> {
  const { data: atividades, error } = await supabase
    .from("atividades")
    .select("distancia")
    .gt("data", dataInicial)
    .lte("data", dataFinal);

  if (error) {
    console.error(
      "Erro ao buscar quilometragem do período:",
      error
    );

    return 0;
  }

  return (atividades ?? []).reduce(
    (total, atividade) =>
      total + Number(atividade.distancia ?? 0),
    0
  );
}

/**
 * Calcula a quilometragem da bike em uma determinada data.
 *
 * Regra:
 * KM atual - KM rodado depois da data = KM na data.
 */
export async function buscarQuilometragemNaData(
  data: string
): Promise<number> {
  const dataAtual = new Date().toISOString().split("T")[0];

  const [kmAtual, kmDepois] = await Promise.all([
    buscarQuilometragemAtual(),
    buscarQuilometragemEntre(data, dataAtual),
  ]);

  return kmAtual - kmDepois;
}

export async function buscarQuilometragemNaDataDeInstalacao(
  data: string
): Promise<number> {
  const dataAtual = new Date()
    .toISOString()
    .split("T")[0];

  const { data: atividades, error } = await supabase
    .from("atividades")
    .select("distancia")
    .gte("data", data)
    .lte("data", dataAtual);

  if (error) {
    console.error(
      "Erro ao buscar quilometragem desde a instalação:",
      error
    );
    return 0;
  }

  const kmDesdeInstalacao =
    (atividades ?? []).reduce(
      (total, atividade) =>
        total + Number(atividade.distancia ?? 0),
      0
    );

  const kmAtual =
    await buscarQuilometragemAtual();

  return kmAtual - kmDesdeInstalacao;
}

export interface RegistrarEventoManutencao {
  cycleId: string;
  eventDate: string;
  eventType: "inspection" | "rotation" | "replacement";
  mileage: number;
  reason?: string | null;
  inspectionResult?: string | null;
  notes?: string | null;
}

export async function registrarEventoManutencao(
  evento: RegistrarEventoManutencao
): Promise<boolean> {
  const { error } = await supabase
    .from("maintenance_events")
    .insert({
      cycle_id: evento.cycleId,
      event_date: evento.eventDate,
      event_type: evento.eventType,
      mileage: evento.mileage,
      reason: evento.reason ?? null,
      inspection_result: evento.inspectionResult ?? null,
      notes: evento.notes ?? null,
    });

  if (error) {
    console.error(
      "Erro ao registrar evento de manutenção:",
      {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      }
    );

    return false;
  }

  return true;
}
export async function processarSubstituicaoManutencao(
  cycleId: string,
  eventDate: string,
  reason: string | null,
  notes: string | null
): Promise<string | null> {
  const { data, error } = await supabase.rpc(
    "processar_substituicao_manutencao",
    {
      p_cycle_id: cycleId,
      p_event_date: eventDate,
      p_reason: reason,
      p_notes: notes,
    }
  );

  if (error) {
    console.error(
      "Erro ao processar substituição:",
      {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      }
    );

    return null;
  }

  return data;
}
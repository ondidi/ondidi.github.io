import { supabase } from "@/lib/supabase";

import { adventures } from "@/data/adventures";

export type StatisticsOverview = {
    rides: number;
    distance: number;
    hours: number;
    calories: number;
    elevation: number;
    states: number;
    countries: number;
    adventures: number;
};

class StatisticsService {

    async getOverview(): Promise<StatisticsOverview> {

        const { data, error } = await supabase
            .from("atividades")
            .select(
                "distancia, duracao, calorias, ganho_elevacao"
            );

        if (error) {
            console.error(
                "Erro ao carregar estatísticas:",
                error
            );

            return {
                rides: 0,
                distance: 0,
                hours: 0,
                calories: 0,
                elevation: 0,
                states: 0,
                countries: 0,
                adventures: 0,
            };
        }

        const atividades = data ?? [];

        const rides = atividades.length;

        const distance = atividades.reduce(
            (total, atividade) =>
                total +
                Number(atividade.distancia ?? 0),
            0
        );

        const calories = atividades.reduce(
            (total, atividade) =>
                total +
                Number(atividade.calorias ?? 0),
            0
        );

        const elevation = atividades.reduce(
            (total, atividade) =>
                total +
                Number(
                    atividade.ganho_elevacao ?? 0
                ),
            0
        );

        let totalSegundos = 0;

        atividades.forEach((atividade) => {

            if (!atividade.duracao) return;

            const [
                horas,
                minutos,
                segundos,
            ] = atividade.duracao
                .split(":")
                .map(Number);

            totalSegundos +=
                horas * 3600 +
                minutos * 60 +
                segundos;
        });

        const hours =
            totalSegundos / 3600;

        return {
            rides,
            distance,
            hours,
            calories,
            elevation,

            // Ainda não temos esses dados históricos.
            states: 6,
            countries: 2,

            adventures: adventures.length,
        };

    }

}

export default new StatisticsService();
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
    averageYearDistance: number;
    averageSpeed: number;
    longestRide: number;
    longestRideYear: number;
};
class StatisticsService {

    async getOverview(): Promise<StatisticsOverview> {

        const { data, error } = await supabase
            .from("atividades")
            .select(
                "distancia, duracao, calorias, ganho_elevacao, data"
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
                averageYearDistance: 0,
                averageSpeed: 0,
                longestRide: 0,
                longestRideYear: 0,
            };
        }

        const atividades = data ?? [];

        // --------------------------------
        // PEDALADAS
        // --------------------------------

        const rides = atividades.length;


        // --------------------------------
        // DISTÂNCIA
        // --------------------------------

        const distance = atividades.reduce(
            (total, atividade) =>
                total +
                Number(atividade.distancia ?? 0),
            0
        );


        // --------------------------------
        // CALORIAS
        // --------------------------------

        const calories = atividades.reduce(
            (total, atividade) =>
                total +
                Number(atividade.calorias ?? 0),
            0
        );


        // --------------------------------
        // ALTIMETRIA
        // --------------------------------

        const elevation = atividades.reduce(
            (total, atividade) =>
                total +
                Number(
                    atividade.ganho_elevacao ?? 0
                ),
            0
        );


        // --------------------------------
        // HORAS
        // --------------------------------

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


        // --------------------------------
        // MÉDIA KM / ANO
        // --------------------------------

        const years = new Set(
            atividades
                .filter((atividade) => atividade.data)
                .map((atividade) =>
                    new Date(
                        atividade.data
                    ).getFullYear()
                )
        );

        const averageYearDistance =
            years.size > 0
                ? distance / years.size
                : 0;


        // --------------------------------
        // VELOCIDADE MÉDIA
        // --------------------------------

        const averageSpeed =
            hours > 0
                ? distance / hours
                : 0;


        // --------------------------------
        // PEDAL MAIS LONGO
        // --------------------------------

        const maiorPedal =
            atividades.length > 0
                ? atividades.reduce((maior, atividade) => {

                    const distanciaAtual =
                        Number(atividade.distancia ?? 0);

                    const distanciaMaior =
                        Number(maior.distancia ?? 0);

                    return distanciaAtual > distanciaMaior
                        ? atividade
                        : maior;

                })
                : null;

        const longestRide =
            maiorPedal
                ? Number(maiorPedal.distancia ?? 0)
                : 0;

        const longestRideYear =
            maiorPedal?.data
                ? new Date(
                    maiorPedal.data
                ).getFullYear()
                : 0;

        console.log("MAIOR PEDAL:", maiorPedal);
        console.log("ANO DO MAIOR PEDAL:", longestRideYear);


        // --------------------------------
        // RESULTADO
        // --------------------------------

        return {

            rides,

            distance,

            hours,

            calories,

            elevation,

            // Temporariamente mantidos
            // até termos esses dados estruturados.
            states: 6,

            countries: 2,

            adventures:
                adventures.length,

            averageYearDistance,

            averageSpeed,

            longestRide,
            longestRideYear,

        };

    }

}

export default new StatisticsService();
"use client";

import {
    Bike,
    MapPin,
    Clock3,
    Flame,
    Mountain,
    Globe,
    Trophy,
    Route,
    Gauge,
    CalendarDays,
} from "lucide-react";

import { useEffect, useState } from "react";

import statisticsService, {

    StatisticsOverview as StatisticsOverviewType

} from "@/services/statistics.service";

import OverviewCard from "./OverviewCard";

import styles from "./StatisticsOverview.module.css";

function formatCompact(value: number | undefined): string {

    if (value === undefined || value === null) {
        return "0";
    }

    if (value >= 1_000_000) {
        return `${(value / 1_000_000)
            .toFixed(1)
            .replace(".", ",")} M`;
    }

    if (value >= 1_000) {
        return `${(value / 1_000)
            .toFixed(1)
            .replace(".", ",")} K`;
    }

    return value.toLocaleString("pt-BR");
}

export default function StatisticsOverview() {

    const [overview, setOverview] =
        useState<StatisticsOverviewType | null>(null);

    useEffect(() => {

        async function load() {

            const data =
                await statisticsService.getOverview();

            setOverview(data);

        }

        load();

    }, []);

    if (!overview) return null;

    return (

        <section className={styles.overview}>

            <div className={`${styles.row} ${styles.secondRow}`}>

                <OverviewCard
                    icon={<Bike />}
                    title="PEDALADAS"
                    subtitle="REGISTRADAS"
                    value={overview.rides}
                />

                <OverviewCard
                    icon={<MapPin />}
                    title="QUILÔMETROS"
                    subtitle="PEDALADOS"
                    value={formatCompact(overview.distance)}
                    unit="Quilômetros"
                />

                <OverviewCard
                    icon={<Clock3 />}
                    title="HORAS"
                    subtitle="EM MOVIMENTO"
                    value={formatCompact(overview.hours)}
                    unit="Horas"
                />

                <OverviewCard
                    icon={<Flame />}
                    title="CALORIAS"
                    subtitle="QUEIMADAS"
                    value={formatCompact(overview.calories)}
                    unit="Kilocalorias"
                />

            </div>

            <div className={styles.row}>

                <OverviewCard
                    icon={<Mountain />}
                    title="ALTIMETRIA"
                    subtitle="ACUMULADA"
                    value={formatCompact(overview.elevation)}
                    unit="Metros"
                />

                <OverviewCard
                    icon={<Globe />}
                    title="ESTADOS"
                    subtitle="VISITADOS"
                    value={overview.states}
                />

                <OverviewCard
                    icon={<Globe />}
                    title="PAÍSES"
                    subtitle="VISITADOS"
                    value={overview.countries}
                />

                <OverviewCard
                    icon={<Trophy />}
                    title="AVENTURAS"
                    subtitle="PUBLICADAS"
                    value={overview.adventures}
                />

            </div>

            <div className={styles.row}>

                <OverviewCard
                    icon={<Route />}
                    title="MÉDIA"
                    subtitle="KM / ANO"
                    value={Math.round(overview.averageYearDistance).toLocaleString("pt-BR")}
                    unit="Quilômetros"
                />

                <OverviewCard
                    icon={<Gauge />}
                    title="VELOCIDADE"
                    subtitle="MÉDIA"
                    value={overview.averageSpeed.toLocaleString(
                        "pt-BR",
                        {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                        }
                    )}
                    unit="km/h"
                />

                <OverviewCard
                    icon={<Trophy />}
                    title="PEDAL"
                    subtitle="MAIS LONGO"
                    value={formatCompact(overview.longestRide)}
                    unit="Quilômetros"
                />

                <OverviewCard
                    icon={<CalendarDays />}
                    title="ANO"
                    subtitle="DO PEDAL"
                    value={overview.longestRideYear}
                />

            </div>

        </section>

    );

}
"use client";

import {
    Bike,
    MapPin,
    Clock3,
    Flame,
    Mountain,
    Globe,
    Trophy,
} from "lucide-react";

import { useEffect, useState } from "react";

import statisticsService, {

    StatisticsOverview as StatisticsOverviewType

} from "@/services/statistics.service";

import OverviewCard from "./OverviewCard";

import styles from "./StatisticsOverview.module.css";

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
                    value={overview.distance.toLocaleString("pt-BR")}
                    unit="Quilômetros"
                />

                <OverviewCard
                    icon={<Clock3 />}
                    title="HORAS"
                    subtitle="EM MOVIMENTO"
                    value={overview.hours.toLocaleString("pt-BR")}
                    unit="Horas"
                />

                <OverviewCard
                    icon={<Flame />}
                    title="CALORIAS"
                    subtitle="QUEIMADAS"
                    value={overview.calories.toLocaleString("pt-BR")}
                    unit="Kilocalorias"
                />

            </div>

            <div className={styles.row}>

                <OverviewCard
                    icon={<Mountain />}
                    title="ALTIMETRIA"
                    subtitle="ACUMULADA"
                    value={overview.elevation.toLocaleString("pt-BR")}
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

        </section>

    );

}
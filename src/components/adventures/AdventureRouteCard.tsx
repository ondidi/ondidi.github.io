"use client";

import { Download, Share2 } from "lucide-react";

import AdventureRouteMap from "./AdventureRouteMap";
import styles from "./AdventureRouteCard.module.css";

type Props = {
    gpx: string;
};

export default function AdventureRouteCard({ gpx }: Props) {
    return (
        <article className={styles.card}>

            <div className={styles.map}>
                <AdventureRouteMap gpx={gpx} />
            </div>

            <div className={styles.footer}>

                <h3 className={styles.title}>
                    REGISTRO DO PEDAL
                </h3>

                <div className={styles.actions}>

                    <a
                        href={gpx}
                        download
                        className={styles.iconButton}
                        title="Baixar rota GPX"
                    >
                        <Download size={20} />
                    </a>

                    <button
                        type="button"
                        className={styles.iconButton}
                        title="Compartilhar"
                        onClick={async () => {
                            const url = window.location.href;

                            if (navigator.share) {
                                await navigator.share({
                                    title: "Pedal Olímpia",
                                    text: "Confira esta aventura no Ondids.",
                                    url,
                                });
                            } else {
                                await navigator.clipboard.writeText(url);
                                alert("Link copiado!");
                            }
                        }}
                    >
                        <Share2 size={20} />
                    </button>

                </div>

            </div>

        </article>
    );
}
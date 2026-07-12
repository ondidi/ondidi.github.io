import { Bike } from "lucide-react";

import AdventureGallery from "@/components/adventures/AdventureGallery";

import styles from "./CardAdventure.module.css";

export default function CardAdventure() {

    return (

        <section className={styles.section}>

            <header className={styles.header}>

                <Bike
                    size={28}
                    className={styles.icon}
                />

                <h2 className={styles.title}>
                    ÚLTIMOS PEDAIS
                </h2>

            </header>

            <AdventureGallery />

        </section>

    );

}
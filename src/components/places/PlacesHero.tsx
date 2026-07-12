import Image from "next/image";

import styles from "./PlacesHero.module.css";

export default function PlacesHero() {

    return (

        <section className={styles.hero}>

            <Image
                src="/img/lugares/tophero.webp"
                alt="Lugares inesquecíveis"
                fill
                priority
                className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>

                <span className={styles.year}>
                    Registros desde 2013
                </span>

                <h1 className={styles.title}>
                    Lugares inesquecíveis
                </h1>

            </div>

        </section>

    );

}
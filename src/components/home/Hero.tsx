import Image from "next/image";

import styles from "./Hero.module.css";

export default function Hero() {
    return (

        <section className={styles.hero}>

            <Image
                src="/img/home/hero.webp"
                alt="Ondids"
                width={1600}
                height={900}
                priority
                className={styles.image}
            />

            <div className={styles.overlay}>

                <h1 className={styles.title}>
                    A vida é uma ideia em movimento.
                </h1>

                <p className={styles.subtitle}>
                    A JORNADA É O CAMINHO. VIVER NÃO É CHEGAR, MAS PROSSEGUIR.
                </p>

            </div>

        </section>

    );
}
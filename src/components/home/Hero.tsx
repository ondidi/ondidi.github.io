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
                    A vida se organiza em movimento.
                </h1>

                <p className={styles.subtitle}>
                    A JORNADA É O CAMINHO.
                </p>

                <p className={styles.subtitle}>
                    Viver não é chegar, mas seguir.
                </p>

            </div>

        </section>

    );
}
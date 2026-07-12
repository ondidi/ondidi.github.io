import Image from "next/image";

import styles from "./FriendsHero.module.css";

export default function FriendsHero() {

    return (

        <section className={styles.hero}>

            <Image
                src="/img/amigos/tophero.webp"
                alt="Amigos de pedal"
                fill
                priority
                className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>

                <span className={styles.year}>
                    DESDE 2015
                </span>

                <h1 className={styles.title}>
                    Facebike
                </h1>

            </div>

        </section>

    );

}
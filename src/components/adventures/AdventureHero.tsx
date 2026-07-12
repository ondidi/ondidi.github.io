import Image from "next/image";

import styles from "./AdventureHero.module.css";

type Props = {
    adventure: {
        menu: {
            title: string;
            year: number;
        };
        hero: {
            image: string;
            title: string;
        
        };
    };
};

export default function AdventureHero({ adventure }: Props) {

    return (

        <section className={styles.hero}>

            <Image
                src={adventure.hero.image}
                alt={adventure.menu.title}
                fill
                priority
                className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>

                <span className={styles.year}>
                    {adventure.menu.year}
                </span>

                <h1 className={styles.title}>
                    {adventure.hero.title}
                </h1>

            </div>

        </section>

    );

}
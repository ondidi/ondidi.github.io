import Image from "next/image";
import Link from "next/link";

import { MapPinned, Bike, Mountain } from "lucide-react";

import styles from "./AdventureCard.module.css";

type AdventureCardProps = {
    adventure: {
        slug: string;
        menu: {
            title: string;
            image: string;
        };
        home: {
            city: string;
            distance: number;
            difficulty: string;
            date: string;
        };
    };
};

export default function AdventureCard({
    adventure,
}: AdventureCardProps) {

    return (

        <article className={styles.card}>

            <Image
                src={adventure.menu.image}
                alt={adventure.menu.title}
                width={420}
                height={260}
                className={styles.image}
            />

            <div className={styles.content}>

                <span className={styles.city}>
                    {adventure.home.city}
                </span>

                <h3 className={styles.title}>
                    {adventure.menu.title}
                </h3>

                <div className={styles.info}>

                    <span>
                        <MapPinned size={16} />
                        {adventure.home.distance} km
                    </span>

                    <span>
                        <Mountain size={16} />
                        {adventure.home.difficulty}
                    </span>
                    <span>
                        <Image
                            src="/img/icons/calendario.svg"
                            alt="Calendário"
                            width={16}
                            height={16}
                        />

                        {new Date(adventure.home.date).toLocaleDateString("pt-BR")}
                    </span>
                    

                </div>

                <Link
                    href={`/aventuras/${adventure.slug}`}
                    className={styles.button}
                >
                    Ver pedal
                </Link>

            </div>

        </article>

    );

}
import { adventures } from "@/data/adventures";

import AdventureCard from "./AdventureCard";

import styles from "./AdventureGallery.module.css";

export default function AdventureGallery() {

    const featured = adventures

        .filter(adventure => adventure.home.featured)

        .sort(
            (a, b) =>
                new Date(b.home.date).getTime() -
                new Date(a.home.date).getTime()
        )

        .slice(0, 4);

                console.log(featured.map(a => ({
            title: a.menu.title,
            date: a.home.date
        })));

    return (

        <section className={styles.gallery}>

            {featured.map((adventure) => (

                <AdventureCard
                    key={adventure.id}
                    adventure={adventure}
                />

            ))}

        </section>

    );

}
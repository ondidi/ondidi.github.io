import { adventures } from "@/data/adventures";
import styles from "./AdventureInfo.module.css";

type Props = {
    adventure: (typeof adventures)[number];
};

export default function AdventureInfo({
    adventure,
}: Props) {

    return (

        <section className={styles.container}>

            <div className={styles.header}>

                <div className={styles.box}>

                    <h2 className={styles.title}>
                        {adventure.menu.title}
                    </h2>

                    <p className={styles.date}>
                        Publicado em {adventure.info.published}
                    </p>

                </div>

                <div className={styles.text}>

                    <p>
                        {adventure.info.description}
                    </p>

                </div>

            </div>

        </section>

    );

}
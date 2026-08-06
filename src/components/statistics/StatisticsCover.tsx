import styles from "./StatisticsCover.module.css";

import StatisticsOverview from "./StatisticsOverview";

export default function StatisticsHero() {

    return (

        <section className={styles.hero}>

            <div className={styles.overlay}>

                <span className={styles.kicker}>
                    2009 <strong>→</strong> 2026
                </span>

                <h1>ESTATÍSTICAS</h1>

                <p className={styles.subtitle}>
                    17 anos de registros
                </p>

            </div>

            <div className={styles.floatingCards}>

                <StatisticsOverview />

            </div>

        </section>

    );

}
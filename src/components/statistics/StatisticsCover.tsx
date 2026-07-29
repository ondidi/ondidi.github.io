import styles from "./StatisticsHero.module.css";

export default function StatisticsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>

        <span className={styles.kicker}>
          2009 <strong>→</strong> Hoje
        </span>

        <h1>ESTATÍSTICAS</h1>

        <p className={styles.subtitle}>
          17 anos de pedal
        </p>

      </div>
    </section>
  );
}
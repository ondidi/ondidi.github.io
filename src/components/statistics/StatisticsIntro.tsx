import styles from "./StatisticsConstruction.module.css";

export default function StatisticsConstruction() {
  return (
    <section className={styles.container}>

      <div className={styles.card}>

        <span className={styles.badge}>
          EM CONSTRUÇÃO
        </span>

        <h2>
          Um novo capítulo está chegando.
        </h2>

        <p>

          Aqui vou organizar 17 anos de registros de minhas pedaladas, mas a aventura começou antes, há exatos 20 anos. Com a popularização dos Aplicativos, foi possível registar, isso bem antes do Strava aparecer.

        </p>

        <div className={styles.grid}>

          <span>🚴 Quilômetros pedalados</span>

          <span>⏱ Horas em movimento</span>

          <span>🔥 Calorias acumuladas</span>

          <span>🏔 Altimetria</span>

          <span>📈 Evolução por ano</span>

          <span>🏆 Recordes</span>

          <span>🗺 Estados visitados</span>

          <span>📅 Linha do tempo</span>

        </div>

      </div>

    </section>
  );
}
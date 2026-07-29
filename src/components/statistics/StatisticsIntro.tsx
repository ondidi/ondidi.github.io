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

          Estamos organizando milhares de quilômetros percorridos
          desde 2009 para transformar essa trajetória em um painel
          completo de estatísticas.

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
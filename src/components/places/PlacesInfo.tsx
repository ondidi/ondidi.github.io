import styles from "./PlacesInfo.module.css";

export default function PlacesInfo() {

    return (

        <section className={styles.container}>

            <div className={styles.header}>

                <div className={styles.box}>

                    <h2 className={styles.title}>
                        Lugares que eu curti
                    </h2>

                    <p className={styles.date}>
                        Publicado ao longo da história
                    </p>

                </div>

                <div className={styles.text}>

                    <p>
                        Nem todo registro significa a mesma coisa para todos. O que toca alguém pode passar despercebido por outro — porque viver um momento é sempre algo íntimo, impossível de reproduzir por completo em uma fotografia. Cada pedaço de chão por onde passei carrega um pouco dessa essência. E muitas vezes, não foram os cartões-postais ou os lugares mais famosos que ficaram marcados a mim, mas sim um ângulo esquecido, uma luz inesperada, um detalhe simples que quase ninguém percebeu. Como no amor e nas grandes conquistas, as vezes, a beleza está escondida em pequenos detalhes.
                    </p>

                </div>

            </div>

        </section>

    );

}
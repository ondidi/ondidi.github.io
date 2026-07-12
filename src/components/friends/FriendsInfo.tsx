import styles from "./FriendsInfo.module.css";

export default function FriendsInfo() {

    return (

        <section className={styles.container}>

            <div className={styles.header}>

                <div className={styles.box}>

                    <h2 className={styles.title}>
                        Amigos de pedal
                    </h2>

                    <p className={styles.date}>
                        Publicado ao longo da história
                    </p>

                </div>

                <div className={styles.text}>

                    <p>
                        O pedal aproxima pessoas diferentes, porém movidas por algo parecido. Fiz muitas amizades ao longo dos caminhos. Histórias, risadas, conversas e tanto compartilhamento, amores, dores, sabores, conhecimento, alento, talento que até hoje acalento....
                    </p>

                </div>

            </div>

        </section>

    );

}
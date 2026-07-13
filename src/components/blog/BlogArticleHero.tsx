import styles from "./BlogArticleHero.module.css";

type Props = {
    artigo: any;
};

export default function BlogArticleHero({ artigo }: Props) {

    return (

        <section className={styles.hero}>

            <h1 className={styles.title}>
                {artigo.titulo}
            </h1>

            <p className={styles.subtitle}>
                {artigo.chamada}
            </p>

        </section>

    );

}
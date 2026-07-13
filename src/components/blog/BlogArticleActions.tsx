import styles from "./BlogArticleActions.module.css";

type Props = {
    artigo: any;
};

export default function BlogArticleActions({ artigo }: Props) {

    return (

        <section className={styles.actions}>

            <span className={styles.label}>
                Compartilhe este artigo
            </span>

        </section>

    );

}
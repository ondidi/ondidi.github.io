import styles from "./BlogArticleContent.module.css";

type Props = {
    artigo: any;
};

export default function BlogArticleContent({ artigo }: Props) {

    return (

        <article className={styles.article}>

            <div className={styles.content}>

                {artigo.texto_completo}

            </div>

        </article>

    );

}
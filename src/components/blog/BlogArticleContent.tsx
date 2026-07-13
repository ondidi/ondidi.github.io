import styles from "./BlogArticleContent.module.css";

type Props = {
    artigo: any;
    fontSize: number;
};

export default function BlogArticleContent({

    artigo,
    fontSize

}: Props) {

    return (

        <article className={styles.article}>

            <div

                className={styles.content}

                style={{

                    fontSize: `${fontSize}rem`

                }}

            >

                {artigo.texto_completo}

            </div>

        </article>

    );

}
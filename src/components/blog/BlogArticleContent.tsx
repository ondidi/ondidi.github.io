import styles from "./BlogArticleContent.module.css";

type Props = {
    artigo: any;
    fontScale: number;
};

export default function BlogArticleContent({

    artigo,
    fontScale

}: Props) {

    return (

        <article className={styles.article}>

            <div

                className={styles.content}

                style={{

                    fontSize: `calc(1em + ${fontScale}rem)`

                }}

            >

                {artigo.texto_completo}

            </div>

        </article>

    );

}
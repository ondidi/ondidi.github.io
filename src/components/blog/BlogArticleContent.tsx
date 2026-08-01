import styles from "./BlogArticleContent.module.css";

type Props = {
    artigo: any;
    fontScale: number;
};

export default function BlogArticleContent({

    artigo,
    fontScale

}: Props) {

    console.log(JSON.stringify(artigo.texto_completo));

    return (

        <article className={styles.article}>

            <div
                className={styles.content}
                style={{
                    fontSize: `calc(1em + ${fontScale}rem)`
                }}
            >

                {artigo.texto_completo
                    ?.split(/\r?\n/)
                    .filter((paragrafo: string) => paragrafo.trim() !== "")
                    .map((paragrafo: string, index: number) => (
                        <p key={index}>{paragrafo}</p>
                    ))}

            </div>

        </article>

    );

}
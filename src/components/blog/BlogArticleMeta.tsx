"use client";

import Image from "next/image";

import styles from "./BlogArticleMeta.module.css";

type Props = {
    artigo: any;
};

export default function BlogArticleMeta({ artigo }: Props) {

    return (

        <section className={styles.meta}>

            <div className={styles.item}>

                <Image
                    src="/img/icons/calendario.svg"
                    alt="Publicado"
                    width={18}
                    height={18}
                />

                <span>
                    Publicado em: {artigo.data_publicacao}
                </span>

            </div>

            <div className={styles.item}>

                <Image
                    src="/img/icons/leitura.svg"
                    alt="Tempo de leitura"
                    width={18}
                    height={18}
                />

                <span>
                    Tempo de leitura: {artigo.tempo_leitura}
                </span>

            </div>

            <div className={styles.fontControls}>

                <button>A+</button>

                <button>A-</button>

            </div>
            <div className={styles.item}>

                <Image
                    src="/img/icons/send.svg"
                    alt="Compartilhar"
                    width={18}
                    height={18}
                />

                <button
                    className={styles.shareButton}
                    onClick={() => navigator.share({
                        title: artigo.titulo,
                        text: artigo.chamada,
                        url: window.location.href
                    })}
                >

                    Compartilhar

                </button>

            </div>

        </section>

    );

}
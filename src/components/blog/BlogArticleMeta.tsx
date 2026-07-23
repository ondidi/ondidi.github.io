"use client";

import Image from "next/image";

import styles from "./BlogArticleMeta.module.css";

type Props = {
    artigo: any;
    increase: () => void;
    decrease: () => void;
};

export default function BlogArticleMeta({

    artigo,
    increase,
    decrease

}: Props) {

    async function compartilhar() {

        if (navigator.share) {

            await navigator.share({

                title: artigo.titulo,
                text: artigo.chamada,
                url: window.location.href

            });

        }

    }
    function formatarData(data: string) {

    const [ano, mes, dia] = data.split("-");

    return `${dia}/${mes}/${ano}`;

    }

    return (

        <section className={styles.meta}>

            <div className={styles.top}>

                <div className={styles.item}>

                    <Image
                        src="/img/icons/calendario.svg"
                        alt="Publicado"
                        width={18}
                        height={18}
                    />

                    <span>{formatarData(artigo.data_publicacao)}</span>

                </div>

                <div className={styles.item}>

                    <Image
                        src="/img/icons/leitura.svg"
                        alt="Tempo de leitura"
                        width={18}
                        height={18}
                    />

                    <span>{artigo.tempo_leitura}</span>

                </div>

            </div>

            <div className={styles.bottom}>

                <button
                    className={styles.fontButton}
                    onClick={increase}
                >
                    A+
                </button>

                <button
                    className={styles.fontButton}
                    onClick={decrease}
                >
                    A-
                </button>

                <button
                    className={styles.shareButton}
                    onClick={compartilhar}
                >

                    <Image
                        src="/img/icons/send.svg"
                        alt="Compartilhar"
                        width={18}
                        height={18}
                    />

                    <span>Compartilhar</span>

                </button>

            </div>

        </section>

    );

}
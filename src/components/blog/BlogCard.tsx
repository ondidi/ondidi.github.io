import Link from "next/link";
import styles from "./BlogCard.module.css";
import Image from "next/image";

type Props = {
    artigo: any;
};

export default function BlogCard({ artigo }: Props) {

    if (!artigo) return null;

    return (

        <article className={styles.card}>

            <h2 className={styles.title}>
                {artigo.titulo}
            </h2>

            <span className={styles.date}>
                {artigo.data_publicacao}
            </span>

            <p className={styles.description}>
                {artigo.chamada}
            </p>

            <Link
                href={`/blog/${artigo.slug}`}
                className={styles.readMore}
            >

                <Image
                    src="/img/icons/ler.svg"
                    alt="Ler"
                    width={16}
                    height={16}
                />

                <span>Ler</span>

            </Link>

        </article>

    );

}
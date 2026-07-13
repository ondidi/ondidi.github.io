import Image from "next/image";
import Link from "next/link";
import styles from "./BlogFeatured.module.css";

type Props = {
    artigo: any;
};

export default function BlogFeatured({ artigo }: Props) {

    if (!artigo) return null;

    return (

        <section className={styles.featured}>

            <div className={styles.content}>

                <span className={styles.label}>
                    Publicação mais recente
                </span>

                <h1 className={styles.title}>
                    {artigo.titulo}
                </h1>

                <p className={styles.description}>
                    {artigo.chamada}
                </p>

                <Link
                    href={`/blog/${artigo.slug}`}
                    className={styles.readMore}
                >
                    Ler o texto
                    <span>→</span>
                </Link>

            </div>

            <div className={styles.image}>

                <Image
                    src={artigo.imagem_principal}
                    alt={artigo.titulo}
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                />

            </div>

        </section>

    );

}
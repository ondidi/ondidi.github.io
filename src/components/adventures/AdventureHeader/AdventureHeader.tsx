import styles from "./AdventureHeader.module.css";

type AdventureHeaderProps = {
    title: string;
    publishedAt: string;
};

export default function AdventureHeader({
    title,
    publishedAt,
}: AdventureHeaderProps) {
    return (
        <section className={styles.header}>

            <h1 className={styles.title}>
                {title}
            </h1>

            <p className={styles.date}>
                Publicado em {publishedAt}
            </p>

        </section>
    );
}
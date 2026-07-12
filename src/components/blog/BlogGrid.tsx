import BlogCard from "./BlogCard";
import styles from "./BlogGrid.module.css";

type Props = {
    artigos: any[];
};

export default function BlogGrid({ artigos }: Props) {

    return (

        <section>

            <h2>Últimas publicações</h2>

            <div className={styles.grid}>

                {artigos.map((artigo) => (

                    <BlogCard
                        key={artigo.id}
                        artigo={artigo}
                    />

                ))}

            </div>

        </section>

    );

}
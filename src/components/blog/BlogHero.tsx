import Image from "next/image";
import Link from "next/link";

import styles from "./BlogHero.module.css";

export default function BlogHero() {

    return (

        <header className={styles.hero}>

            <div className={styles.brand}>

                <Image
                    src="/img/blog/didifotocircular.webp"
                    alt="Diógenes Pasqualini"
                    width={54}
                    height={54}
                    className={styles.avatar}
                />

                <Image
                    src="/img/blog/logoblog.webp"
                    alt="Blog do Dids"
                    width={290}
                    height={70}
                    priority
                />

            </div>

            <nav className={styles.menu}>

                <Link href="/blog">
                    Início
                </Link>

                <Link href="/blog/textos">
                    Textos
                </Link>

            </nav>

        </header>

    );

}
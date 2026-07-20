import Image from "next/image";
import styles from "./BlogAuthor.module.css";

export default function BlogAuthor() {

    return (

        <section className={styles.author}>

            <div className={styles.bio}>

                <div className={styles.social}>

                    <a
                        href="https://www.linkedin.com/in/didibr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="LinkedIn"
                    >
                        <Image
                            src="/img/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={28}
                            height={28}
                        />
                    </a>

                    <a
                        href="mailto:didispbr@gmail.com"
                        className={styles.socialLink}
                        aria-label="Enviar e-mail"
                    >
                        <Image
                            src="/img/icons/contato.svg"
                            alt="E-mail"
                            width={28}
                            height={28}
                        />
                    </a>

                </div>

                <div className={styles.presentation}>

                    <h3>Diógenes Pasqualini</h3>

                    <p>
                        Este <b>Blog</b> eu o mantenho pelos textos que publico
                        regularmente em mídia impressa.
                    </p>

                </div>

            </div>

            <div className={styles.separator} />

            <div className={styles.academic}>

                <p>
                    <b>Mestre e Doutor em Comunicação.</b> Especialista em Marketing
                    Político e Propaganda Eleitoral. Estudou nas Universidades
                    <b> Unimep</b> - Piracicaba, <b>USP</b> e <b>PUC</b> por 12 anos.
                </p>

            </div>

            <div className={styles.separator} />

            <div className={styles.professional}>

                <p>
                    <b>Tecnologia e Informação.</b> Na <b>TI</b> encontrou uma nova
                    oportunidade de Comunicação e desenvolvimento de Projetos.
                    Atua na Empresa <b>Softpark</b> Tecnologia Ltda.
                </p>

            </div>

        </section>

    );

}
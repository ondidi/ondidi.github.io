import Image from "next/image";

import styles from "./BlogAuthor.module.css";

export default function BlogAuthor() {

    return (

        <section className={styles.author}>

            <div className={styles.social}>

                <Image
                    src="/img/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                />

                <Image
                    src="/img/icons/contato.svg"
                    alt="Contato"
                    width={28}
                    height={28}
                />

            </div>

            <div>

                <h3>Diógenes Pasqualini</h3>

                <p>
                    Este <b>Blog</b> eu o mantenho pelos textos que publico regularmente
                    em mídia impressa.
                </p>

            </div>

            <div>

                <p>
                    <b>Mestre e Doutor em Comunicação.</b> Especialista em Marketing
                    Político e Propaganda Eleitoral. Estudou nas Universidades <b>Unimep</b>  - Piracicaba, <b>USP</b> - Universidade de São Paulo e <b>PUC</b>  - Pontifícia Universidade de São Paulo por 12 anos.
                </p>

            </div>

            <div>

                <p>
                    <b>Tecnologia e Informação.</b> Na <b>TI</b> encontrou uma nova
                    oportunidade de Comunicação e desenvolvimento de Projetos.
                    Atua na Empresa <b>Softpark</b> Tecnologia Ltda, em São Paulo.
                </p>

            </div>

        </section>

    );

}
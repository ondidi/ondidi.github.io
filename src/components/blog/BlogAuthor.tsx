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
                    Este Blog é alimentado pelos textos que publico regularmente
                    em mídia impressa.
                </p>

            </div>

            <div>

                <p>
                    Mestre e Doutor em Comunicação. Especialista em Marketing
                    Político e Propaganda Eleitoral. Estudou nas Universidades
                    Unimep - Piracicaba, USP - Universidade de São Paulo e
                    PUC - Pontifícia Universidade de São Paulo por 12 anos.
                </p>

            </div>

            <div>

                <p>
                    Tecnologia e Informação. Na TI encontrou uma nova
                    oportunidade de Comunicação e desenvolvimento de Projetos.
                    Atua na Empresa Softpark Tecnologia Ltda, em São Paulo.
                </p>

            </div>

        </section>

    );

}
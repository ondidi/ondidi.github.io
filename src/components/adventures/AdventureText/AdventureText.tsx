import styles from "./AdventureText.module.css";

type AdventureTextProps = {
    text: string;
};

export default function AdventureText({
    text,
}: AdventureTextProps) {

    return (

        <section className={styles.text}>

            <p>{text}</p>

        </section>

    );

}
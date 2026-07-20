import styles from "./AdventureContent.module.css";

type AdventureContentProps = {
    children: React.ReactNode;
};

export default function AdventureContent({
    children,
}: AdventureContentProps) {

    return (

        <section className={styles.content}>

            {children}

        </section>

    );

}
import styles from "./SidebarHeader.module.css";

type SidebarHeaderProps = {
    showLogo?: boolean;
};

export default function SidebarHeader({
    showLogo = true,
}: SidebarHeaderProps) {

    return (

        <header className={styles.header}>

            <div>

                {showLogo && (
                    <h1 className={styles.logo}>
                        Ondids
                    </h1>
                )}

                <p className={styles.subtitle}>
                    Seja bem-vindo
                </p>

            </div>

        </header>

    );

}
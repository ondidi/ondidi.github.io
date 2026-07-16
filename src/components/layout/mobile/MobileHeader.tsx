"use client";

import HamburgerIcon from "./HamburgerIcon";
import CloseIcon from "./CloseIcon";

import styles from "./MobileHeader.module.css";

type MobileHeaderProps = {
    open: boolean;
    onMenuClick: () => void;
};

export default function MobileHeader({
    open,
    onMenuClick,
}: MobileHeaderProps) {

    return (

        <header className={styles.header}>

            <button
                className={styles.button}
                onClick={onMenuClick}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
            >

                {open
                    ? <CloseIcon />
                    : <HamburgerIcon />
                }

            </button>

            <h1 className={styles.logo}>
                Ondids
            </h1>

        </header>

    );

}
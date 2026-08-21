import Link from "next/link";

import SidebarAdventureList from "./SidebarAdventureList";

import styles from "./SidebarMenu.module.css";

export default function SidebarMenu() {

    return (

        <nav className={styles.menu}>

          <Link
            href="/"
            className={styles.home}
            >
            <img
              src="/img/icons/home.svg"
              alt="Início"
              className={styles.icon}
            />

          <span>Início</span>
          </Link>
          <h2 className={styles.title}>
            AVENTURAS
          </h2>
          
        </nav>

    );

}
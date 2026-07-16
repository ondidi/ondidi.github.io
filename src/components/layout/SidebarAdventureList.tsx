"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { adventures } from "@/data/adventures";
import styles from "./SidebarAdventureList.module.css";

export default function SidebarAdventureList() {

  const sortedAdventures = [...adventures].sort(
    (a, b) =>
      new Date(b.home.date).getTime() -
      new Date(a.home.date).getTime()
  );

  return (

    <div className={styles.adventureList}>

      {sortedAdventures
      // .filter(adventure => adventure.home.featured)
      .map((adventure) => (

        <Link
          key={adventure.id}
          href={`/aventuras/${adventure.slug}`}
          className={styles.menuItem}
        >

          <Image
            src={adventure.menu.image}
            alt={adventure.menu.title}
            width={52}
            height={52}
            className={styles.menuThumb}
          />

          <div className={styles.menuInfo}>

            <span className={styles.menuTitle}>
              {adventure.menu.title}
            </span>

            <small className={styles.menuYear}>
              {adventure.menu.year}
            </small>

          </div>

        </Link>

      ))}

    </div>

  );

}
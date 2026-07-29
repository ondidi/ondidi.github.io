import Link from "next/link";

import {
  Users,
  MapPin,
  BarChart3,
  BookOpen,
} from "lucide-react";

import styles from "./SidebarFooter.module.css";

export default function SidebarFooter() {
  return (
    <footer className={styles.footer}>

      <Link href="/amigos" className={styles.item}>
        <Users />
        <span>Amigos</span>
      </Link>

      <Link href="/lugares" className={styles.item}>
        <MapPin />
        <span>Lugares</span>
      </Link>

      <Link href="/estatisticas" className={styles.item}>
        <img
          src="/img/icons/estatistica.svg"
          alt="Estatísticas"
          width={20}
          height={20}
        />
        <span>Estatísticas</span>
      </Link>

      <Link href="/blog" className={styles.item}>
        <BookOpen />
        <span>Blog</span>
      </Link>

    </footer>
  );
}
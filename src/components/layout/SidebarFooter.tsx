import Link from "next/link";

import {
  Users,
  MapPin,
  MessageCircle,
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

      <Link href="/whatsapp" className={styles.item}>
        <MessageCircle />
        <span>WhatsApp</span>
      </Link>

      <Link href="/blog" className={styles.item}>
        <BookOpen />
        <span>Blog</span>
      </Link>

    </footer>
  );
}
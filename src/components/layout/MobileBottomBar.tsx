"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    House,
    Users,
    MapPinned,
    BarChart3,
    BookOpen,
} from "lucide-react";

import styles from "./MobileBottomBar.module.css";

export default function MobileBottomBar() {

    const pathname = usePathname();

    const isActive = (path: string) =>
        pathname === path;

    return (

        <nav className={styles.bar}>

            <Link
                href="/"
                className={`${styles.item} ${isActive("/") ? styles.active : ""}`}
            >
                <House size={20} />
                <span>Início</span>
            </Link>

            <Link
                href="/amigos"
                className={`${styles.item} ${isActive("/amigos") ? styles.active : ""}`}
            >
                <Users size={20} />
                <span>Amigos</span>
            </Link>

            <Link
                href="/lugares"
                className={`${styles.item} ${isActive("/lugares") ? styles.active : ""}`}
            >
                <MapPinned size={20} />
                <span>Lugares</span>
            </Link>

            <Link
                href="/estatisticas"
                className={`${styles.item} ${isActive("/estatisticas") ? styles.active : ""}`}
            >
                <BarChart3 size={20} />
                <span>Estat.</span>
            </Link>

            <Link
                href="/blog"
                className={`${styles.item} ${isActive("/blog") ? styles.active : ""}`}
            >
                <BookOpen size={20} />
                <span>Blog</span>
            </Link>

        </nav>

    );

}
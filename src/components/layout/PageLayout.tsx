"use client";

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MobileHeader from "./mobile/MobileHeader";
import MobileDrawer from "./MobileDrawer";
import styles from "./PageLayout.module.css";
import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {

    const [menuOpen, setMenuOpen] = useState(false);
        useEffect(() => {

        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };

    }, [menuOpen]);

    return (

        <main className={styles.main}>

            <Sidebar />

            <section className={styles.content}>

                <MobileHeader
                    open={menuOpen}
                    onMenuClick={() => setMenuOpen(!menuOpen)}
                />

                <MobileDrawer
                    open={menuOpen}
                    onClose={() => setMenuOpen(false)}
                />

                <div className={styles.container}>

                    {children}

                    <Footer />

                </div>

            </section>

        </main>

    );

}
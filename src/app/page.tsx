import styles from "./page.module.css";

import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import CardAdventure from "@/components/home/CardAdventure";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className={styles.main}>

            <Sidebar />

            <section className={styles.content}>

                <div className={styles.container}>

                    <Hero />

                    <Gallery />

                    <CardAdventure />

                    <Footer />

                </div>

            </section>

        </main>
    );
}
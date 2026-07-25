import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

import LoadingDots from "@/components/ui/LoadingDots/LoadingDots";

import styles from "@/app/page.module.css";

export default function Loading() {
    return (
        <main className={styles.main}>
            <Sidebar />

            <section className={styles.content}>
                <div className={styles.container}>

                    <LoadingDots />

                    <Footer />

                </div>
            </section>

            <MobileBottomBar />
        </main>
    );
}
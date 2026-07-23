import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

import Skeleton from "@/components/ui/Skeleton/Skeleton";

import styles from "@/app/page.module.css";

export default function Loading() {

    return (

        <main className={styles.main}>

            <Sidebar />

            <section className={styles.content}>

                <div className={styles.container}>

                    <Skeleton
                        height="260px"
                        radius="24px"
                    />

                    <Skeleton
                        height="800px"
                        radius="24px"
                    />

                    <Skeleton
                        height="180px"
                        radius="24px"
                    />

                    <Footer />

                </div>

            </section>

            <MobileBottomBar />

        </main>

    );

}
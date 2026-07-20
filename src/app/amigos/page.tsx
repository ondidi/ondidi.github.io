import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import FriendsInfo from "@/components/friends/FriendsInfo";
import AdventurePhotoGallery from "@/components/adventures/AdventurePhotoGallery";
import FriendsHero from "@/components/friends/FriendsHero";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import styles from "@/app/page.module.css";

export default function FriendsPage() {

    return (

        <main className={styles.main}>

            <Sidebar />

            <section className={styles.content}>

                <div className={styles.container}>

                <FriendsHero />

                <FriendsInfo />

                <AdventurePhotoGallery
                    title="Galeria dos amigos"
                    folder="amigos"
                    prefix="amigos"
                    extension="webp"
                    count={45}
                />

                <Footer />
                <MobileBottomBar />

            </div>

            </section>

        </main>

    );

}
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import PlacesHero from "@/components/places/PlacesHero";
import PlacesInfo from "@/components/places/PlacesInfo";
import AdventurePhotoGallery from "@/components/adventures/AdventurePhotoGallery";

import styles from "@/app/page.module.css";

export default function PlacesPage() {

    return (

        <main className={styles.main}>

            <Sidebar />

            <section className={styles.content}>

                <div className={styles.container}>

                    <PlacesHero />

                    <PlacesInfo />

                    <AdventurePhotoGallery
                        title="Belas memórias"
                        folder="lugares"
                        prefix="lugares"
                        extension="webp"
                        count={34}
                    />

                    <Footer />

                </div>

            </section>

        </main>

    );

}
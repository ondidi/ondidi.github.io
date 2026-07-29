import PageLayout from "@/components/layout/PageLayout";
import styles from "./page.module.css";

import FriendsHero from "@/components/friends/FriendsHero";
import FriendsInfo from "@/components/friends/FriendsInfo";
import AdventurePhotoGallery from "@/components/adventures/AdventurePhotoGallery";

export default function FriendsPage() {
    return (
        <PageLayout>
            <div className={styles.sections}>

                <FriendsHero />

                <FriendsInfo />

                <AdventurePhotoGallery
                    title="Galeria dos amigos"
                    folder="amigos"
                    prefix="amigos"
                    extension="webp"
                    count={45}
                />

            </div>
        </PageLayout>
    );
}
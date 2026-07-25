import PageLayout from "@/components/layout/PageLayout";

import FriendsHero from "@/components/friends/FriendsHero";
import FriendsInfo from "@/components/friends/FriendsInfo";
import AdventurePhotoGallery from "@/components/adventures/AdventurePhotoGallery";

export default function FriendsPage() {
    return (
        <PageLayout>
            <FriendsHero />

            <FriendsInfo />

            <AdventurePhotoGallery
                title="Galeria dos amigos"
                folder="amigos"
                prefix="amigos"
                extension="webp"
                count={45}
            />
        </PageLayout>
    );
}
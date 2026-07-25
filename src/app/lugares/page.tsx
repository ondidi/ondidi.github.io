import PageLayout from "@/components/layout/PageLayout";

import PlacesHero from "@/components/places/PlacesHero";
import PlacesInfo from "@/components/places/PlacesInfo";
import AdventurePhotoGallery from "@/components/adventures/AdventurePhotoGallery";

export default function PlacesPage() {

    return (

        <PageLayout>

            <PlacesHero />

            <PlacesInfo />

            <AdventurePhotoGallery
                title="Belas memórias"
                folder="lugares"
                prefix="lugares"
                extension="webp"
                count={34}
            />

        </PageLayout>

    );

}
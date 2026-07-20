import PageLayout from "@/components/layout/PageLayout";

import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import CardAdventure from "@/components/home/CardAdventure";
import Footer from "@/components/layout/Footer";

export default function Home() {

    return (

        <PageLayout>

            <Hero />

            <Gallery />

            <CardAdventure />

           

        </PageLayout>

    );

}
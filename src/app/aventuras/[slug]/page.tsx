import { notFound } from "next/navigation";

import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import AdventureHero from "@/components/adventures/AdventureHero";
import AdventureInfo from "@/components/adventures/AdventureInfo";
import AdventurePhotoGallery from "@/components/adventures/AdventurePhotoGallery";

import { adventures } from "@/data/adventures";

import styles from "@/app/page.module.css";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function AdventurePage({ params }: Props) {

    const { slug } = await params;

    const adventure = adventures.find(
        (item) => item.slug === slug
    );

    if (!adventure) {
        notFound();
    }

    return (

        <main className={styles.main}>

            <Sidebar />

            <section className={styles.content}>

                <div className={styles.container}>

                    <AdventureHero adventure={adventure} />

                    <AdventureInfo adventure={adventure} />

                    <AdventurePhotoGallery
                        title={adventure.menu.title}
                        folder={adventure.gallery.folder}
                        prefix={adventure.gallery.prefix}
                        extension={adventure.gallery.extension}
                        count={adventure.gallery.count}
                    />

                    <Footer />

                </div>

            </section>

        </main>

    );

}
import { notFound } from "next/navigation";

import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import AdventureHero from "@/components/adventures/AdventureHero";
import AdventurePhotoGallery from "@/components/adventures/AdventurePhotoGallery";

import { adventures } from "@/data/adventures";

import styles from "@/app/page.module.css";
import AdventureHeader from "@/components/adventures/AdventureHeader/AdventureHeader";
import AdventureText from "@/components/adventures/AdventureText/AdventureText";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

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

                    <div className={styles.intro}>

                        <AdventureHeader
                            title={adventure.menu.title}
                            publishedAt={adventure.info.published}
                        />

                        <AdventureText
                            text={adventure.info.description}
                        />

                    </div>

                    <AdventurePhotoGallery
                        title={adventure.gallery.caption}
                        folder={adventure.gallery.folder}
                        prefix={adventure.gallery.prefix}
                        extension={adventure.gallery.extension}
                        count={adventure.gallery.count}
                    />

                    <Footer />
                    <MobileBottomBar />

                </div>

            </section>

        </main>

    );

}
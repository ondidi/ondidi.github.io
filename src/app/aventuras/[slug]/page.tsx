import { notFound } from "next/navigation";

import PageLayout from "@/components/layout/PageLayout";

import AdventureHero from "@/components/adventures/AdventureHero";
import AdventurePhotoGallery from "@/components/adventures/AdventurePhotoGallery";
import AdventureHeader from "@/components/adventures/AdventureHeader/AdventureHeader";
import AdventureText from "@/components/adventures/AdventureText/AdventureText";
import styles from "./page.module.css";
import { adventures } from "@/data/adventures";

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

        <PageLayout>

            <div className={styles.sections}>

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

            </div>

        </PageLayout>

    );

}
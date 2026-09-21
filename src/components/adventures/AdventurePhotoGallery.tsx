import AdventurePhoto from "./AdventurePhoto";

import styles from "./AdventurePhotoGallery.module.css";

import AdventureRouteCard from "./AdventureRouteCard";

type Props = {
    title: string;
    folder: string;
    prefix: string;
    extension: string;
    count: number;
    route?: string;
};

export default function AdventurePhotoGallery({
    title,
    folder,
    prefix,
    extension,
    count,
    route,
}: Props) {

    const photos = Array.from(

        { length: count },

        (_, index) =>
            `${prefix} (${index + 1}).${extension}`

    );

    return (

        <section className={styles.gallery}>

            {route && (
                <AdventureRouteCard gpx={route} />
            )}

            {photos.map((photo) => (
                <AdventurePhoto
                    key={photo}
                    image={`/img/${folder}/${photo}`}
                    title={title}
                />
            ))}

        </section>

    );

}
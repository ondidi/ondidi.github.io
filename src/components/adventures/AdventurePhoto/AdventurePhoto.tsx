import { Download, Share2 } from "lucide-react";
import styles from "./AdventurePhoto.module.css";

type AdventurePhotoProps = {
    image: string;
    title: string;
    caption: string;

    downloadUrl?: string;
    shareUrl?: string;
};

export default function AdventurePhoto({
    image,
    title,
    caption,
    downloadUrl,
    shareUrl,
}: AdventurePhotoProps) {
    return (
        <article className={styles.card}>

            <img
                src={image}
                alt={title}
                className={styles.image}
            />

            <div className={styles.footer}>

                <div className={styles.header}>

                    <h3>{title}</h3>

                    <div className={styles.actions}>

                        {downloadUrl && (
                            <button
                                className={styles.iconButton}
                                title="Download"
                            >
                                <Download size={20} />
                            </button>
                        )}

                        {shareUrl && (
                            <button
                                className={styles.iconButton}
                                title="Compartilhar"
                            >
                                <Share2 size={20} />
                            </button>
                        )}

                    </div>

                </div>

                <p className={styles.caption}>
                    {caption}
                </p>

            </div>

        </article>
    );
}
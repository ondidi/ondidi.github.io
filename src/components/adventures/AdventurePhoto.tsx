"use client";
import Image from "next/image";
import { Download, Share2 } from "lucide-react";

import styles from "./AdventurePhoto.module.css";

type Props = {
    image: string;
    title: string;
};

export default function AdventurePhoto({
    image,
    title,
}: Props) {

    function handleDownload() {

        const link = document.createElement("a");

        link.href = image;

        link.download = image.split("/").pop() || "foto.webp";

        link.click();

    }

    async function handleShare() {

        try {

            if (navigator.share) {

                await navigator.share({

                    title,
                    text: title,
                    url: image,

                });

            }

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <article className={styles.card}>

            <div className={styles.imageWrapper}>

                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width:768px)100vw,33vw"
                />

            </div>

            <footer className={styles.footer}>

                <span className={styles.title}>
                    {title.toUpperCase()}
                </span>

                <div className={styles.actions}>

                    <button
                        onClick={handleDownload}
                        className={styles.iconButton}
                        title="Baixar foto"
                    >

                        <Download size={18} />

                    </button>

                    <button
                        onClick={handleShare}
                        className={styles.iconButton}
                        title="Compartilhar foto"
                    >

                        <Share2 size={18} />

                    </button>

                </div>

            </footer>

        </article>

    );

}
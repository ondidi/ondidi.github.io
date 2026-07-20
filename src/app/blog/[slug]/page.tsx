import { notFound } from "next/navigation";

import { blogService } from "@/services/blog.service";

import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import BlogHero from "@/components/blog/BlogHero";
import BlogArticle from "@/components/blog/BlogArticle";
import BlogAuthor from "@/components/blog/BlogAuthor";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

import styles from "@/app/page.module.css";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogArticlePage({ params }: Props) {

    const { slug } = await params;

    const artigo = await blogService.getArtigoBySlug(slug);

    if (!artigo) {
        notFound();
    }

    return (

        <main className={styles.main}>

            <Sidebar />

            <section className={styles.content}>

                <div className={styles.container}>

                    <BlogHero />

                    <BlogArticle artigo={artigo} />

                    <BlogAuthor />

                    <Footer />

                </div>

            </section>

            <MobileBottomBar />

        </main>

    );

}
import { notFound } from "next/navigation";

import { blogService } from "@/services/blog.service";

import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import BlogHero from "@/components/blog/BlogHero";
import BlogArticleHero from "@/components/blog/BlogArticleHero";
import BlogArticleMeta from "@/components/blog/BlogArticleMeta";
import BlogArticleContent from "@/components/blog/BlogArticleContent";
import BlogArticleActions from "@/components/blog/BlogArticleActions";
import BlogAuthor from "@/components/blog/BlogAuthor";

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

                    <BlogArticleHero artigo={artigo} />

                    <BlogArticleMeta artigo={artigo} />

                    <BlogArticleContent artigo={artigo} />

                    <BlogAuthor />

                    <Footer />

                </div>

            </section>

        </main>

    );

}
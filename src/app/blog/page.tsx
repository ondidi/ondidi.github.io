import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogAuthor from "@/components/blog/BlogAuthor";

import { blogService } from "@/services/blog.service";

import styles from "@/app/page.module.css";

export default async function BlogPage() {

    const artigos = await blogService.getArtigos();

    const destaque = artigos[0];
    const recentes = artigos.slice(1, 5);

    return (

        <main className={styles.main}>

            <Sidebar />

            <section className={styles.content}>

                <div className={styles.container}>

                    <BlogHero />

                    <BlogFeatured artigo={destaque} />

                    <BlogGrid artigos={recentes} />

                    <BlogAuthor />

                    <Footer />

                </div>

            </section>

        </main>

    );

}
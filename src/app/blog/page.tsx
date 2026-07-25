import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogAuthor from "@/components/blog/BlogAuthor";

import { blogService } from "@/services/blog.service";


export const metadata: Metadata = {
    title: "Blog | Ondids",
    description:
        "Artigos sobre cicloviagens, mountain bike, filosofia, estoicismo, fotografia, tecnologia e reflexões inspiradas pelas experiências sobre duas rodas.",
    keywords: [
        "blog ciclismo",
        "cicloviagem",
        "cicloturismo",
        "mountain bike",
        "filosofia",
        "estoicismo",
        "fotografia",
        "aventuras",
        "tecnologia",
        "Ondids",
    ],
    alternates: {
        canonical: "https://ondids.com.br/blog",
    },
    openGraph: {
        title: "Blog | Ondids",
        description:
            "Histórias, aventuras, filosofia e tecnologia reunidas em um blog sobre viver, pedalar e aprender.",
        url: "https://ondids.com.br/blog",
        type: "website",
    },
};

export default async function BlogPage() {
    const artigos = await blogService.getArtigos();

    const destaque = artigos[0];
    const recentes = artigos.slice(1, 5);

    return (
        <PageLayout>
            <BlogHero />

            <BlogFeatured artigo={destaque} />

            <BlogGrid artigos={recentes} />

            <BlogAuthor />
        </PageLayout>
    );
}
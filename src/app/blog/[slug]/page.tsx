import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { blogService } from "@/services/blog.service";
import PageLayout from "@/components/layout/PageLayout";

import BlogHero from "@/components/blog/BlogHero";
import BlogArticle from "@/components/blog/BlogArticle";
import BlogAuthor from "@/components/blog/BlogAuthor";



type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { slug } = await params;

    const artigo = await blogService.getArtigoBySlug(slug);

    if (!artigo) {
        return {
            title: "Artigo não encontrado",
        };
    }

    const imagem = artigo.imagem_principal
        ? (
            artigo.imagem_principal.startsWith("http") ||
            artigo.imagem_principal.startsWith("data:")
                ? artigo.imagem_principal
                : `https://ondids.com.br${artigo.imagem_principal}`
        )
        : "https://ondids.com.br/img/blog/default.webp";

    return {
        title: artigo.titulo,
        description: artigo.chamada,

        alternates: {
            canonical: `https://ondids.com.br/blog/${slug}`,
        },

        openGraph: {
            title: artigo.titulo,
            description: artigo.chamada,
            url: `https://ondids.com.br/blog/${slug}`,
            type: "article",
            publishedTime: artigo.data_publicacao,
            images: [
                {
                    url: imagem,
                    alt: artigo.titulo,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: artigo.titulo,
            description: artigo.chamada,
            images: [imagem],
        },
    };
}

export default async function BlogArticlePage({ params }: Props) {

    const { slug } = await params;

    const artigo = await blogService.getArtigoBySlug(slug);

    if (!artigo) {
        notFound();
    }
    const imagem = artigo.imagem_principal
    ? (
        artigo.imagem_principal.startsWith("http") ||
        artigo.imagem_principal.startsWith("data:")
            ? artigo.imagem_principal
            : `https://ondids.com.br${artigo.imagem_principal}`
    )
    : "https://ondids.com.br/img/blog/default.webp";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",

        headline: artigo.titulo,
        description: artigo.chamada,

        image: [imagem],

        datePublished: artigo.data_publicacao,
        dateModified: artigo.created_at ?? artigo.data_publicacao,

        author: {
            "@type": "Person",
            name: "Diógenes Pasqualini",
        },

        publisher: {
            "@type": "Person",
            name: "Diógenes Pasqualini",
        },

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://ondids.com.br/blog/${artigo.slug}`,
        },
    };

    return (
        <>
            <Script
                id="blog-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <PageLayout>

                <BlogHero />

                <BlogArticle artigo={artigo} />

                <BlogAuthor />

            </PageLayout>
        </>
    );

}
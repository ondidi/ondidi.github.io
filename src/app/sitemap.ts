import type { MetadataRoute } from "next";
import { adventures } from "@/data/adventures";

import { blogService } from "@/services/blog.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const artigos = await blogService.getArtigos();

    const blog = artigos.map((artigo) => ({

        url: `https://ondids.com.br/blog/${artigo.slug}`,

        lastModified: artigo.created_at
            ? new Date(artigo.created_at)
            : new Date(artigo.data_publicacao),

        changeFrequency: "monthly" as const,

        priority: 0.8,

    }));

    const adventurePages = adventures.map((adventure) => ({

    url: `https://ondids.com.br/aventuras/${adventure.slug}`,

    lastModified: new Date(adventure.home.date),

    changeFrequency: "monthly" as const,

    priority: adventure.home.featured ? 0.9 : 0.8,

    }));

    return [

        {
            url: "https://ondids.com.br",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: "https://ondids.com.br/blog",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },

        {
            url: "https://ondids.com.br/amigos",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },

        {
            url: "https://ondids.com.br/lugares",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },

        {
            url: "https://ondids.com.br/aventuras",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        ...adventurePages,

        ...blog,

    ];

}
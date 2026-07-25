import type { Metadata } from "next";

import PageLayout from "@/components/layout/PageLayout";

import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import CardAdventure from "@/components/home/CardAdventure";

export const metadata: Metadata = {
    title: "Ondids | Cicloviagens, Aventuras e Histórias",
    description:
        "Relatos de cicloviagens, mountain bike, cicloturismo e aventuras pelo Brasil. Descubra roteiros, paisagens, fotografias e histórias reais vividas sobre duas rodas.",
    keywords: [
        "cicloviagem",
        "cicloturismo",
        "mountain bike",
        "MTB",
        "bikepacking",
        "aventuras de bicicleta",
        "pedais",
        "roteiros de bike",
        "caminho da fé",
        "ciclismo",
        "Ondids",
    ],
    alternates: {
        canonical: "https://ondids.com.br",
    },
    openGraph: {
        title: "Ondids | Cicloviagens, Aventuras e Histórias",
        description:
            "Relatos de cicloviagens, mountain bike e cicloturismo pelo Brasil, com fotografias, roteiros e histórias reais.",
        url: "https://ondids.com.br",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ondids | Cicloviagens, Aventuras e Histórias",
        description:
            "Relatos de cicloviagens, mountain bike e cicloturismo pelo Brasil.",
    },
};

export default function Home() {
    return (
        <PageLayout>
            <Hero />
            <Gallery />
            <CardAdventure />
        </PageLayout>
    );
}
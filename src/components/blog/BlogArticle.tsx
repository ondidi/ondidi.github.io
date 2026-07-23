"use client";

import { useState } from "react";

import BlogArticleHero from "./BlogArticleHero";
import BlogArticleMeta from "./BlogArticleMeta";
import BlogArticleContent from "./BlogArticleContent";

type Props = {
    artigo: any;
};

export default function BlogArticle({ artigo }: Props) {

    const [fontScale, setFontScale] = useState(0);

    function increase() {
        setFontScale(scale => Math.min(scale + 0.1, 0.8));
    }

    function decrease() {
        setFontScale(scale => Math.max(scale - 0.4, -0.4));
    }

    return (

        <>

            <BlogArticleHero artigo={artigo} />

            <BlogArticleMeta
                artigo={artigo}
                increase={increase}
                decrease={decrease}
            />

            <BlogArticleContent
            artigo={artigo}
            fontScale={fontScale}
        />

        </>

    );

}
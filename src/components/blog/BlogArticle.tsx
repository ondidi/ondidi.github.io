"use client";

import { useState } from "react";

import BlogArticleHero from "./BlogArticleHero";
import BlogArticleMeta from "./BlogArticleMeta";
import BlogArticleContent from "./BlogArticleContent";

type Props = {
    artigo: any;
};

export default function BlogArticle({ artigo }: Props) {

    const [fontSize, setFontSize] = useState(1.5);

    function increase() {
        setFontSize(size => Math.min(size + 0.1, 2.2));
    }

    function decrease() {
        setFontSize(size => Math.max(size - 0.1, 1.1));
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
                fontSize={fontSize}
            />

        </>

    );

}
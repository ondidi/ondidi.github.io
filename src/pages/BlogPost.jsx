import { useEffect, useState } from "react";
import "../../src/assets/styles/Blog.css";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabase";

import BlogHeader from "../components/blog/BlogHeader";
import BlogFooter from "../components/blog/BlogFooter";
import { Helmet } from "react-helmet-async";

export default function BlogPost() {

  const { id } = useParams();

  const [artigo, setArtigo] =
    useState(null);
    const [fontSize, setFontSize] =
    useState(1);

  useEffect(() => {

    async function carregar() {

      const { data, error } =
        await supabase
          .from("artigos")
          .select("*")
          .eq("id", id)
          .single();

      console.log(
        JSON.stringify(data, null, 2)
        )
      console.log(error);

      if (data) {

        setArtigo(data);

      }

    }

    carregar();

  }, [id]);

  if (!artigo) {

    return <h2>Carregando...</h2>;

  }

  return (

  <div className="article-page">
    <Helmet>

    <title>
      {artigo.titulo_completo || artigo.titulo} | Ondids
    </title>

    <meta
      name="description"
      content={
        artigo.destaque ||
        artigo.titulo
      }
    />

    <link
      rel="canonical"
      href={`https://ondids.com.br/blog/${id}`}
    />

    <meta
      property="og:title"
      content={
        artigo.titulo_completo || artigo.titulo
      }
    />

    <meta
      property="og:description"
      content={artigo.destaque}
    />

    <meta
      property="og:url"
      content={`https://ondids.com.br/blog/${id}`}
    />

  </Helmet>

    <BlogHeader article />

    <section className="article-hero">

      <h1 className="article-title">

        {artigo.titulo_completo || artigo.titulo}

      </h1>

      <p className="article-subtitle">

        {artigo.destaque}

      </p>

      <div className="article-meta">

        <div className="meta-item">

          <img
            src="/img/icons/calendario.svg"
            alt="Calendário"
          />

            <span>

            Publicado em:
            {" "}
            {
                new Date(
                artigo.data_publicacao
                ).toLocaleDateString(
                "pt-BR"
                )
            }

            </span>

        </div>

        <div className="meta-item">

          <img
            src="/img/icons/leitura.svg"
            alt="Leitura"
          />

          <span>

            Tempo de leitura:
            {" "}
            {artigo.tempo_leitura}

          </span>

        </div>

        <div className="meta-item">

          <div className="font-controls">

            <img
              src="/img/icons/textomenos.svg"
              alt="Diminuir fonte"
              className="article-meta-icon clickable"
              onClick={() => {

                if (fontSize > 0.9) {

                  setFontSize(
                    fontSize - 0.1
                  );

                }

              }}
            />

            <img
              src="/img/icons/textomais.svg"
              alt="Aumentar fonte"
              className="article-meta-icon clickable"
              onClick={() => {

                if (fontSize < 1.5) {

                  setFontSize(
                    fontSize + 0.1
                  );

                }

              }}
            />

          </div>

        </div>

      </div>

    </section>

    <article
      className="article-content"
      style={{
        fontSize:
          `${fontSize}rem`
      }}
    >

      <p className="drop-cap">

        {artigo.texto_completo}

      </p>

    </article>

    <BlogFooter />

  </div>
  

);
}
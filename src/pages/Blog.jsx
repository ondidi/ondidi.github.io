import "../assets/styles/Blog.css";
import { NavLink, Link } from "react-router-dom";
import BlogHeader from "../components/blog/BlogHeader";
import BlogFooter from "../components/blog/BlogFooter";
import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";

const Blog = () => {
  const [artigos, setArtigos] = useState([]);
  const destaque = artigos[0];
  const recentes = artigos.slice(1, 5);
  useEffect(() => {

  async function carregarArtigos() {

    const { data, error } =
      await supabase
        .from("artigos")
        .select("*")
        .eq("status", "Publicado")
        .order("id", {
          ascending: false
        });

    if (error) {

      console.error(error);
      return;

    }

    console.log(data);

    setArtigos(data || []);

  }

  carregarArtigos();

}, []);

  return (

    <div className="blog-page">
      
      <BlogHeader />
      {/* DESTAQUE */}

      {destaque && (

    <section className="featured-post">

      <div className="featured-image-container">

        <img
          src={
            destaque.imagem_principal ||
            "/img/blog/castas.webp"
          }
          alt={destaque.titulo}
          className="featured-image"
        />

      </div>

      <div className="featured-content">

        <span className="section-label">
          Publicação mais recente
        </span>

        <h1 className="featured-title">
          {destaque.titulo}
        </h1>

        <p className="featured-text">
          {destaque.chamada}
        </p>

        <Link
          to={`/blog/${destaque.id}`}
          className="read-button"
        >

          Ler o texto

          <img
            src="/img/icons/seta.svg"
            alt="Seta"
          />

        </Link>

      </div>

    </section>

  )}

      {/* TEXTOS RECENTES */}

      <section className="recent-posts">

        <span className="section-label">
          Textos recentes
        </span>

        <div className="posts-grid">

          {recentes.map((post) => (

            <div
              className="post-card"
              key={post.id}
            >

              <h3 className="post-title">
                {post.titulo}
              </h3>

              <span className="post-meta">

                {new Date(
                  post.data_publicacao
                ).toLocaleDateString(
                  "pt-BR"
                )}

              </span>

              <p className="post-excerpt">

                {post.chamada
                  ?.split(" ")
                  .slice(0, 22)
                  .join(" ")
                }...

              </p>

              <Link
                to={`/blog/${post.id}`}
                className="post-button"
              >

                <img
                  src="/img/icons/ler.svg"
                  alt="Ler"
                />

                Ler

              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <BlogFooter />

    </div>

  );

};

export default Blog;
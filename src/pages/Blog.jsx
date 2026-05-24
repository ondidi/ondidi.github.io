// src/pages/Blog.jsx

import "../assets/styles/Blog.css";
import { NavLink, Link } from "react-router-dom";
import BlogHeader from "../components/blog/BlogHeader";
import BlogFooter from "../components/blog/BlogFooter";

const recentPosts = [

  {
    id: 1,
    title: "Custodes sui",
    category: "Greve",
    date: "16/05/26",
    excerpt:
      "Tenho acompanhado a greve dos alunos da Universidade de São Paulo...",
    link: "/blog/custodes",
  },

  {
    id: 2,
    title: "Deus",
    category: "Reflexão",
    date: "25/04/26",
    excerpt:
      "Li recentemente, em um jornal de grande circulação de São Paulo, resenha...",
    link: "/blog/deus",
  },

  {
    id: 3,
    title: "Conversa",
    category: "Política",
    date: "11/04/26",
    excerpt:
      "O eleitor brasileiro, em sua grande maioria, tem demonstrado...",
    link: "/blog/conversa",
  },

  {
    id: 4,
    title: "Menino e menina",
    category: "Comportamento",
    date: "26/03/26",
    excerpt:
      "A polêmica envolvendo a deputada Erika Hilton...",
    link: "/blog/menino",
  },

];

const Blog = () => {

  return (

    <div className="blog-page">
      
      <BlogHeader />
      {/* DESTAQUE */}

      <section className="featured-post">

        <div className="featured-content">

          <span className="section-label">
            Publicação mais recente
          </span>

          <h1 className="featured-title">
            Castas e crenças
          </h1>

          <p className="featured-text">

            Este texto busca dialogar com uma reflexão
            que há muito tempo me acompanha: o meio molda
            quem somos?

            <br /><br />

            Autores como Michel Foucault, Pierre Bourdieu,
            Hannah Arendt e Jean-Paul Sartre, entre tantos
            outros, desenvolveram linhas de pensamento sobre
            moral, instituições, poder, liberdade e
            condicionamento social.

          </p>

            <a
              href="/blog/castas-e-crencas"
              className="read-button"
            >

            Ler o texto

            <img
              src="/img/icons/seta.svg"
              alt="Seta"
            />

          </a>

        </div>

        <div className="featured-image-container">

          <img
            src="/img/blog/castas.webp"
            alt="Castas e crenças"
            className="featured-image"
          />

        </div>

      </section>

      {/* TEXTOS RECENTES */}

      <section className="recent-posts">

        <span className="section-label">
          Textos recentes
        </span>

        <div className="posts-grid">

          {recentPosts.map((post) => (

            <div
              className="post-card"
              key={post.id}
            >

              <h3 className="post-title">
                {post.title}
              </h3>

              <span className="post-meta">

                {post.category} • {post.date}

              </span>

              <p className="post-excerpt">
                {post.excerpt}
              </p>

              <Link
                to={post.link}
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
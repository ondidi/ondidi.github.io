// src/pages/Blog.jsx

import "../assets/styles/Blog.css";
import { NavLink } from "react-router-dom";

const recentPosts = [

  {
    id: 1,
    title: "Custodes sui",
    category: "Greve",
    date: "16/05/26",
    excerpt:
      "Tenho acompanhado a greve dos alunos da Universidade de São Paulo...",
  },

  {
    id: 2,
    title: "Custodes sui",
    category: "Greve",
    date: "16/05/26",
    excerpt:
      "Tenho acompanhado a greve dos alunos da Universidade de São Paulo...",
  },

  {
    id: 3,
    title: "Custodes sui",
    category: "Greve",
    date: "16/05/26",
    excerpt:
      "Tenho acompanhado a greve dos alunos da Universidade de São Paulo...",
  },

  {
    id: 4,
    title: "Custodes sui",
    category: "Greve",
    date: "16/05/26",
    excerpt:
      "Tenho acompanhado a greve dos alunos da Universidade de São Paulo...",
  },

];

const Blog = () => {

  return (

    <div className="blog-page">

      {/* TOPO */}

      <header className="blog-header">

        <div className="blog-author">

          <img
            src="/img/blog/didifotocircular.webp"
            alt="Diógenes"
            className="author-photo"
          />

          <span className="author-name">
            Diógenes Pasqualini
          </span>

        </div>

        <nav className="blog-nav">

          <NavLink
            to="/blog"
            end
            className={({ isActive }) =>
              isActive ? "blog-link active" : "blog-link"
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/blog/textos"
            className={({ isActive }) =>
              isActive ? "blog-link active" : "blog-link"
            }
          >
            Textos
          </NavLink>

        </nav>

        <img
          src="/img/blog/logoblog.webp"
          alt="Blog do Dids"
          className="blog-logo"
        />

      </header>

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

          <button className="read-button">

            Ler o texto

            <img
              src="/img/icons/seta.svg"
              alt="Seta"
            />

          </button>

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

              <button className="post-button">

                <img
                  src="/img/icons/ler.svg"
                  alt="Ler"
                />

                Ler

              </button>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <footer className="blog-footer">

  {/* EXPEDIENTE */}

<div className="footer-col footer-editorial">

  <div className="footer-contact-row">

    <a
      href="https://www.linkedin.com/in/didibr"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-linkedin-anchor"
    >

      <img
        src="/img/icons/linkedin.svg"
        alt="LinkedIn"
        className="footer-icon-small"
      />

      <span className="footer-name">
        Diógenes Pasqualini
      </span>

    </a>

  </div>

    <a
      href="mailto:didispbr@gmail.com"
      className="footer-mail-icon"
    >

      <img
        src="/img/icons/contato.svg"
        alt="Contato"
        className="footer-icon-small"
      />

    </a>

    <p className="footer-text">

      Este Blog é alimentado pelos textos
      que publico regularmente em mídia impressa.

    </p>

  </div>

  {/* BIO */}

  <div className="footer-col">

    <p className="footer-text">

      Mestre e Doutor em Comunicação.
      Especialista em Marketing Político e Propaganda Eleitoral.
      Estudou nas Universidades Unimep - Piracicaba,
      USP - Universidade de São Paulo e PUC - Pontifícia
      Universidade de São Paulo por 12 anos.

    </p>

  </div>

  {/* TECNOLOGIA */}

  <div className="footer-col">

    <p className="footer-text">

      Tecnologia e Informação.
      Na TI encontrou uma nova oportunidade
      de Comunicação e desenvolvimento de Projetos.
      Atua na Empresa Softpark Tecnologia Ltda,
      em São Paulo.

    </p>

  </div>

</footer>

    </div>

  );

};

export default Blog;
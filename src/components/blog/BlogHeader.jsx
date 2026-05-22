import { NavLink } from "react-router-dom";

const BlogHeader = ({ article = false }) => {

  return (

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
            isActive && !article
              ? "blog-link active"
              : "blog-link"
          }
        >
          Início
        </NavLink>

        <span className={
        article
            ? "blog-link active"
            : "blog-link-indicator"
        }>
          Textos
        </span>

      </nav>

      <img
        src="/img/blog/logoblog.webp"
        alt="Blog do Dids"
        className="blog-logo"
      />

    </header>

  );

};

export default BlogHeader;
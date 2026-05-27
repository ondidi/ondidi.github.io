import { NavLink } from "react-router-dom";

const BlogHeader = ({ article = false }) => {

  return (

    <header className="blog-header">

      <div className="blog-author">

        <img
          src="/img/blog/didifotocircular.webp"
          alt="Autor"
          className="author-photo"
        />

        <img
          src="/img/blog/logoblog.webp"
          alt="Blog do Dids"
          className="blog-logo"
        />

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

    </header>

  );

};

export default BlogHeader;
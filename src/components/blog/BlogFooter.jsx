const BlogFooter = () => {

  return (

    <footer className="blog-footer">

      <div className="footer-col footer-editorial">

        <div className="footer-contact-row">

          <a
            href="https://linkedin.com"
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
          href="mailto:contato@ondids.com"
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

      <div className="footer-col">

        <p className="footer-text">

          Mestre e Doutor em Comunicação.
          Especialista em Marketing Político
          e Propaganda Eleitoral.

        </p>

      </div>

      <div className="footer-col">

        <p className="footer-text">

          Tecnologia e Informação.
          Atua em Tecnologia Ltda,
          em São Paulo.

        </p>

      </div>

    </footer>

  );

};

export default BlogFooter;
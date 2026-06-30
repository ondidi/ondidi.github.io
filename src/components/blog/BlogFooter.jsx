import { useState } from "react";

const BlogFooter = () => {

  const [bioOpen, setBioOpen] = useState(false);

  return (

    <>
    
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

            <button
              className="footer-info-button"
              onClick={() => setBioOpen(true)}
            >

              <img
                src="/img/icons/inform.svg"
                alt="Informações"
                className="footer-info-icon"
              />

            </button>

          </div>

          <a
            href="mailto:contato@ondids.com.br"
            className="footer-mail-icon"
          >

            <img
              src="/img/icons/contato.svg"
              alt="Contato"
              className="footer-icon-small"
            />

          </a>

          <p className="footer-text footer-mini-text">

            Este Blog é alimentado pelos textos
            que publico regularmente em mídia impressa.

          </p>

        </div>

      </footer>

      {bioOpen && (

        <div
          className="bio-modal-overlay"
          onClick={() => setBioOpen(false)}
        >

          <div
            className="bio-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="bio-close"
              onClick={() => setBioOpen(false)}
            >

              ✕

            </button>

            <h3>
              Diógenes Pasqualini
            </h3>


            <p>

            Mestre e Doutor em Comunicação. Especialista em Marketing Político e Propaganda Eleitoral. Estudou nas Universidades Unimep - Piracicaba, onde fez jornalismo. USP - Universidade de São Paulo - SP, Marketing Político e Propaganda Eleitoral e PUC-SP - Pontifícia Universidade de São Paulo, Comunicação e Semiótica. Jornada de 12 anos.

            </p>
            <p>
              Pai dos adoráveis Juliano e Evelyn.
            </p>

            <p>

            E hoje? Tecnologia e Informação. Na TI encontrou uma nova oportunidade de Comunicação e desenvolvimento de Projetos. Atua na Empresa Softpark Tecnologia Ltda, em São Paulo.

            </p>

          </div>

        </div>

      )}

    </>

  );

};

export default BlogFooter;
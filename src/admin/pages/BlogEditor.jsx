import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import "../styles/BlogEditor.css";

export default function BlogEditor() {

  return (

    <div className="admin-page">

      <AdminSidebar />

      <div className="admin-content">

        <AdminHeader />

        {/* CHAMADA BLOG */}

        <div className="section-title">
          Texto chamada blog
        </div>

        <div className="blog-chamada">

          <div className="upload-principal">

            <p>Upload foto Principal blog</p>

          </div>

          <div className="blog-chamada-form">

            <input
              type="text"
              placeholder="Título"
            />

            <textarea
              placeholder="Chamada última publicação"
            ></textarea>

          </div>

          <div className="blog-home">

            <label>

              <input
                type="checkbox"
              />

              Destacar na Home

            </label>

            <small>
              Últimos 5 destaques na página principal
            </small>

          </div>

        </div>

        {/* TEXTO COMPLETO */}

        <div className="section-title">
          Texto completo blog
        </div>

        <div className="blog-completo">

          <div className="col-esquerda">

            <input
              type="date"
            />

            <input
              type="text"
              placeholder="Tempo médio de leitura"
            />

          </div>

          <div className="col-direita">

            <input
              type="text"
              placeholder="Título"
            />

            <textarea
              className="destaque-texto"
              placeholder="Destaque do texto"
            ></textarea>

          </div>

        </div>

        <div className="texto-principal">

          <textarea
            placeholder="Texto completo da publicação..."
          ></textarea>

        </div>

        <div className="blog-acoes">

          <button className="btn-rascunho">
            Salvar rascunho
          </button>

          <button className="btn-publicar">
            Publicar
          </button>

        </div>

      </div>

    </div>

  );

}
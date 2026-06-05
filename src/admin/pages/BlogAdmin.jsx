import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/BlogAdmin.css";

export default function BlogAdmin() {

  const navigate = useNavigate();

  const [artigos, setArtigos] = useState([]);

  useEffect(() => {

    const artigosSalvos =
      localStorage.getItem("artigos");

    if (artigosSalvos) {

      setArtigos(
        JSON.parse(artigosSalvos)
      );

    }

  }, []);

  function excluirArtigo(index) {

    const novosArtigos =
      artigos.filter((_, i) => i !== index);

    setArtigos(novosArtigos);

    localStorage.setItem(
      "artigos",
      JSON.stringify(novosArtigos)
    );

  }

  return (

    <div className="admin-page">

      <AdminSidebar />

      <div className="admin-content">

        <AdminHeader />

        <div className="blog-header">

          <h2>Artigos do Blog</h2>

          <button
            className="btn-novo"
            onClick={() => navigate("/admin/blog/novo")}
          >
            + Novo Artigo
          </button>

        </div>

        <div className="blog-table">

          <div className="blog-table-header">

            <div>Título</div>

            <div>Status</div>

            <div>Data</div>

            <div>Ações</div>

          </div>

          {artigos.map((item, index) => (

            <div
              className="blog-row"
              key={index}
            >

              <div>{item.titulo}</div>

              <div>

                <span className="status-publicado">

                  {item.status || "Publicado"}

                </span>

              </div>

              <div>{item.data}</div>

              <div className="acoes">

                <button title="Editar">

                  <img
                    src="/img/icons/editar.svg"
                    alt="Editar"
                  />

                </button>

                <button
                  title="Visualizar"
                  onClick={() => {

                    localStorage.setItem(
                      "previewArtigo",
                      JSON.stringify(item)
                    );

                    navigate("/admin/blog/preview");

                  }}
                >

                  <img
                    src="/img/icons/visualizar.svg"
                    alt="Visualizar"
                  />

                </button>

                <button
                  title="Excluir"
                  onClick={() => excluirArtigo(index)}
                >

                  <img
                    src="/img/icons/excluir.svg"
                    alt="Excluir"
                  />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}
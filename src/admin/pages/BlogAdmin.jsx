import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { useNavigate } from "react-router-dom";

import "../styles/BlogAdmin.css";

export default function BlogAdmin() {

  const navigate = useNavigate();

  const artigos = [

    {
      id: 1,
      titulo: "Rota das Frutas",
      status: "Publicado",
      data: "03/06/2026"
    },

    {
      id: 2,
      titulo: "Serra do Japi",
      status: "Rascunho",
      data: "01/06/2026"
    },

    {
      id: 3,
      titulo: "Caminho da Fé",
      status: "Publicado",
      data: "28/05/2026"
    }

  ];

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

          {artigos.map((item) => (

            <div
              className="blog-row"
              key={item.id}
            >

              <div>{item.titulo}</div>

              <div>

                <span
                  className={
                    item.status === "Publicado"
                      ? "status-publicado"
                      : "status-rascunho"
                  }
                >
                  {item.status}
                </span>

              </div>

              <div>{item.data}</div>

              <div className="acoes">

                <button>
                  ✏
                </button>

                <button>
                  👁
                </button>

                <button>
                  🗑
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}
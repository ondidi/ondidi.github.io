import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabase";

import "../styles/BlogAdmin.css";

export default function BlogAdmin() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const [artigos, setArtigos] = useState([]);

  useEffect(() => {

    async function carregarArtigos() {

      const { data, error } =
        await supabase
          .from("artigos")
          .select("*")
          .order("id", {
            ascending: false
          });

      if (error) {

        console.error(error);
        return;

      }

      setArtigos(data || []);

    }

    carregarArtigos();

  }, []);

  async function excluirArtigo(id) {

    const confirmar =
      window.confirm(
        "Deseja realmente excluir este artigo?"
      );

    if (!confirmar) return;

    const { error } =
      await supabase
        .from("artigos")
        .delete()
        .eq("id", id);

    if (error) {

      alert(
        "Erro ao excluir artigo."
      );

      console.error(error);

      return;

    }

    setArtigos(
      artigos.filter(
        artigo =>
          artigo.id !== id
      )
    );

  }

  return (

    <div className="admin-page">

      <AdminSidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="admin-content">

        <AdminHeader
          setMenuOpen={setMenuOpen}
        />

        <div className="blog-header">

          <h2>Artigos do Blog</h2>

          <button
            className="btn-novo"
            onClick={() =>
              navigate(
                "/admin/blog/novo"
              )
            }
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

              <div>
                {item.titulo}
              </div>

              <div>

                <span
                  className={
                    item.status === "Rascunho"
                      ? "status-rascunho"
                      : "status-publicado"
                  }
                >

                  {item.status}

                </span>

              </div>

              <div>
                {item.data_publicacao}
              </div>

              <div className="acoes">

                <button
                  title="Editar"
                  onClick={() =>
                    navigate(
                      `/admin/blog/editar/${item.id}`
                    )
                  }
                >

                  <img
                    src="/img/icons/editar.svg"
                    alt="Editar"
                  />

                </button>

                <button
                  title="Visualizar"
                  onClick={() =>
                    navigate(
                      `/admin/blog/preview/${item.id}`
                    )
                  }
                >

                  <img
                    src="/img/icons/visualizar.svg"
                    alt="Visualizar"
                  />

                </button>

                <button
                  title="Excluir"
                  onClick={() =>
                    excluirArtigo(item.id)
                  }
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
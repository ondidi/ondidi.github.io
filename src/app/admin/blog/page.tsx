"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";

import "@/admin/styles/BlogAdmin.css";

interface Artigo {
  id: number;
  titulo: string;
  status: string;
  data_publicacao: string;
}

export default function BlogAdmin() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [artigos, setArtigos] = useState<Artigo[]>([]);

  useEffect(() => {
    async function carregarArtigos() {
      const { data, error } = await supabase
        .from("artigos")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setArtigos(data || []);
    }

    carregarArtigos();
  }, []);

  async function excluirArtigo(id: number) {
    const confirmar = window.confirm(
      "Deseja realmente excluir este artigo?"
    );

    if (!confirmar) return;

    const { error } = await supabase
      .from("artigos")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Erro ao excluir artigo.");
      console.error(error);
      return;
    }

    setArtigos((lista) =>
      lista.filter((artigo) => artigo.id !== id)
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
            onClick={() => router.push("/admin/blog/novo")}
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
              <div data-label="Título">
                {item.titulo}
              </div>

              <div data-label="Status">
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

              <div data-label="Data">
                {item.data_publicacao}
              </div>

              <div
                className="acoes"
                data-label="Ações"
              >
                <button
                  title="Editar"
                  onClick={() =>
                    router.push(`/admin/editor/${item.id}`)
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
                    router.push(`/admin/preview/${item.id}`)
                  }
                >
                  <img
                    src="/img/icons/visualizar.svg"
                    alt="Visualizar"
                  />
                </button>

                <button
                  title="Excluir"
                  onClick={() => excluirArtigo(item.id)}
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
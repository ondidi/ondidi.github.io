"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { supabase } from "@/lib/supabase";

import AdminSidebar from "@/admin/components/AdminSidebar";
import AdminHeader from "@/admin/components/AdminHeader";

interface Artigo {
  id: number;
  titulo: string;
  chamada: string;
  titulo_completo: string;
  destaque: string;
  texto_completo: string;
  data_publicacao: string;
  tempo_leitura: string;
  imagem_principal: string;
}

export default function BlogPreview() {
  const [menuOpen, setMenuOpen] = useState(false);

  const params = useParams();
  const id = params?.id as string | undefined;

  const [artigo, setArtigo] = useState<Artigo | null>(null);

  useEffect(() => {
    async function carregarArtigo() {
      if (!id) return;

      const { data, error } = await supabase
        .from("artigos")
        .select("*")
        .eq("id", id)
        .single();

      console.log("ARTIGO:", data);
      console.log("ERRO:", error);

      if (data) {
        setArtigo(data);
      }
    }

    carregarArtigo();
  }, [id]);

  if (!artigo) {
    return <h2>Carregando artigo...</h2>;
  }

  return (
    <div className="admin-page">
      <AdminSidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div
        className="admin-content"
        style={{
          marginLeft: 280,
          width: "calc(100% - 280px)",
          padding: 40,
          boxSizing: "border-box",
        }}
      >
        <AdminHeader setMenuOpen={setMenuOpen} />

        <h1>{artigo.titulo_completo}</h1>

        <p>{artigo.chamada}</p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            color: "#666",
          }}
        >
          <span>📅 {artigo.data_publicacao}</span>

          <span>⏱️ {artigo.tempo_leitura}</span>
        </div>

        <hr />

        <h3>{artigo.destaque}</h3>

        <p>{artigo.texto_completo}</p>
      </div>
    </div>
  );
}
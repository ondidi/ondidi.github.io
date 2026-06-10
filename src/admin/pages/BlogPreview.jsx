import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabase";

export default function BlogPreview() {

  const { id } = useParams();

  const [artigo, setArtigo] =
    useState(null);

  useEffect(() => {

    async function carregarArtigo() {

      const { data, error } =
        await supabase
          .from("artigos")
          .select("*")
          .eq("id", id)
          .single();

      console.log(
        "ARTIGO:",
        data
      );

      console.log(
        "ERRO:",
        error
      );

      if (data) {

        setArtigo(data);

      }

    }

    carregarArtigo();

  }, [id]);

  if (!artigo) {

    return (
      <h2>
        Carregando artigo...
      </h2>
    );

  }

  return (

    <div className="admin-page">

      <AdminSidebar />

      <div className="admin-content">

        <AdminHeader />

        <h1>
          {artigo.titulo_completo}
        </h1>

        <p>
          {artigo.chamada}
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            color: "#666"
          }}
        >

          <span>
            📅 {artigo.data_publicacao}
          </span>

          <span>
            ⏱️ {artigo.tempo_leitura}
          </span>

        </div>

        <hr />

        <h3>
          {artigo.destaque}
        </h3>

        <p>
          {artigo.texto_completo}
        </p>

      </div>

    </div>

  );

}
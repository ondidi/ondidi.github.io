import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabase";
import { useParams } from "react-router-dom";

import "../styles/BlogEditor.css";

export default function BlogEditor() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id } = useParams();

const [titulo, setTitulo] = useState("");
const [chamada, setChamada] = useState("");
const [tituloCompleto, setTituloCompleto] = useState("");
const [destaque, setDestaque] = useState("");
const [textoCompleto, setTextoCompleto] = useState("");
const [dataPublicacao, setDataPublicacao] =
  useState("");

const [tempoLeitura, setTempoLeitura] =
  useState("");

const [imagemPrincipal, setImagemPrincipal] =
  useState("");

useEffect(() => {

  async function carregarArtigo() {

    if (!id) return;

    const { data, error } =
      await supabase
        .from("artigos")
        .select("*")
        .eq("id", id)
        .single();

    console.log(
      "ARTIGO EDIÇÃO:",
      data
    );

    console.log(
      "ERRO:",
      error
    );

    if (!data) return;

    setTitulo(
      data.titulo || ""
    );

    setChamada(
      data.chamada || ""
    );

    setTituloCompleto(
      data.titulo_completo || ""
    );

    setDestaque(
      data.destaque || ""
    );

    setTextoCompleto(
      data.texto_completo || ""
    );

    setDataPublicacao(
      data.data_publicacao || ""
    );

    setTempoLeitura(
      data.tempo_leitura || ""
    );

    setImagemPrincipal(
      data.imagem_principal || ""
    );

  }

  carregarArtigo();

}, [id]);

async function publicar() {
    console.log(
    "ENTROU EM PUBLICAR"
  );

    let resultado;

if (id) {

  resultado =
    await supabase
      .from("artigos")
      .update({
        titulo: titulo,
        chamada: chamada,
        titulo_completo: tituloCompleto,
        destaque: destaque,
        texto_completo: textoCompleto,
        data_publicacao: dataPublicacao,
        tempo_leitura: tempoLeitura,
        imagem_principal: imagemPrincipal,
        status: "Publicado"
      })
      .eq("id", id)
      .select();

} else {

  resultado =
    await supabase
      .from("artigos")
      .insert([
        {
          titulo: titulo,
          chamada: chamada,
          titulo_completo: tituloCompleto,
          destaque: destaque,
          texto_completo: textoCompleto,
          data_publicacao: dataPublicacao,
          tempo_leitura: tempoLeitura,
          imagem_principal: imagemPrincipal,
          status: "Publicado",
          destaque_home: false
        }
      ])
      .select();

}

  const { error } = resultado;

  if (error) {

    console.error(error);

    alert(
      "Erro ao salvar artigo."
    );

    return;

  }

  alert(
    id
      ? "Artigo atualizado com sucesso!"
      : "Artigo publicado com sucesso!"
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

    <div className="section-title">
      Texto chamada blog
    </div>

    <div className="blog-chamada">

      <div className="upload-principal">

        {imagemPrincipal ? (

          <img
            src={imagemPrincipal}
            alt="Preview"
            className="preview-imagem"
          />

        ) : (

          <div className="upload-placeholder">

            <img
              src="/img/icons/camera.svg"
              alt="Selecionar imagem"
            />

            <span>
              Selecionar foto
            </span>

          </div>

        )}

        <input
          className="input-upload"
          type="file"
          accept="image/*"
          onChange={(e) => {

            const arquivo =
              e.target.files[0];

            if (!arquivo) return;

            const reader =
              new FileReader();

            reader.onload = () => {

              setImagemPrincipal(
                reader.result
              );

            };

            reader.readAsDataURL(
              arquivo
            );

          }}
        />

      </div>

      <div className="blog-chamada-form">

        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          placeholder="Chamada última publicação"
          value={chamada}
          onChange={(e) => setChamada(e.target.value)}
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

    <div className="section-title">
      Texto completo blog
    </div>

    <div className="blog-completo">

      <div className="col-esquerda">

        <input
          type="date"
          value={dataPublicacao}
          onChange={(e) =>
            setDataPublicacao(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Tempo médio de leitura"
          value={tempoLeitura}
          onChange={(e) =>
            setTempoLeitura(
              e.target.value
            )
          }
        />

      </div>

      <div className="col-direita">

        <input
          type="text"
          placeholder="Título"
          value={tituloCompleto}
          onChange={(e) =>
            setTituloCompleto(e.target.value)
          }
        />

        <textarea
          placeholder="Destaque do texto"
          value={destaque}
          onChange={(e) =>
            setDestaque(e.target.value)
          }
        ></textarea>

      </div>

    </div>

    <div className="texto-principal">

      <textarea
        placeholder="Texto completo da publicação..."
        value={textoCompleto}
        onChange={(e) =>
          setTextoCompleto(e.target.value)
        }
        
      ></textarea>

    </div>

    <div className="blog-acoes">

      <button
        className="btn-rascunho"
        disabled
      >
        Rascunho (em construção)
      </button>

      <button
        className="btn-publicar"
        onClick={publicar}
      >
        Publicar
      </button>

    </div>

  </div>

</div>


);

}

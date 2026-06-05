import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { useState, useEffect } from "react";

import "../styles/BlogEditor.css";

export default function BlogEditor() {

const [titulo, setTitulo] = useState("");
const [chamada, setChamada] = useState("");
const [tituloCompleto, setTituloCompleto] = useState("");
const [destaque, setDestaque] = useState("");
const [textoCompleto, setTextoCompleto] = useState("");
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

function publicar() {

const artigo = {

  titulo,
  chamada,
  tituloCompleto,
  destaque,
  textoCompleto,
  data: new Date().toLocaleDateString("pt-BR"),
  status: "Publicado"

};

const novosArtigos = [
  ...artigos,
  artigo
];

setArtigos(novosArtigos);

localStorage.setItem(
  "artigos",
  JSON.stringify(novosArtigos)
);

setTitulo("");
setChamada("");
setTituloCompleto("");
setDestaque("");
setTextoCompleto("");

}

return (

<div className="admin-page">

  <AdminSidebar />

  <div className="admin-content">

    <AdminHeader />

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

      <button className="btn-rascunho">
        Salvar rascunho
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

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function BlogPreview() {

  const artigo =
    JSON.parse(
      localStorage.getItem("previewArtigo")
    );

  if (!artigo) {

    return <h2>Artigo não encontrado</h2>;

  }

  return (

    <div className="admin-page">

      <AdminSidebar />

      <div className="admin-content">

        <AdminHeader />

        <h1>
          {artigo.tituloCompleto}
        </h1>

        <p>
          {artigo.chamada}
        </p>

        <hr />

        <h3>
          {artigo.destaque}
        </h3>

        <p>
          {artigo.textoCompleto}
        </p>

      </div>

    </div>

  );

}
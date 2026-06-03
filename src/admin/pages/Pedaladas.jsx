import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import "../styles/Pedaladas.css";

export default function Pedaladas() {

  return (

    <div className="admin-page">

      <AdminSidebar />

      <div className="admin-content">

        <AdminHeader />

        <div className="section-title">
          Pedaladas
        </div>

        <div className="pedaladas-top">

          <div className="upload-thumb">

            <p>Upload Thumb</p>

            <small>
              Formatos permitidos JPG, JPEG, PNG
              <br />
              Tamanho máximo de 500 KB
            </small>

          </div>

          <div className="pedaladas-form">

            <input
              type="text"
              placeholder="Título"
            />

            <div className="row">

              <input
                type="text"
                placeholder="Slug"
              />

              <input
                type="number"
                placeholder="Ano pedal"
              />

            </div>

          </div>

          <div className="preview-sidebar">

            <h4>Preview Side Bar</h4>

            <div className="preview-item">

              <div className="thumb">
                thumb
              </div>

              <div>

                <strong>
                  Rota das frutas
                </strong>

                <p>2026</p>

              </div>

            </div>

          </div>

        </div>

        <div className="section-title">
          Dados do Card
        </div>

        <div className="dados-card">

          <div className="upload-card">

            <p>Upload foto e a mesma que o thumb</p>

            <small>
              Formatos permitidos JPG, JPEG, PNG
              <br />
              Tamanho máximo de 500 KB
            </small>

          </div>

          <div className="dados-form">

            <div className="row">

              <input
                type="text"
                placeholder="Cidade"
              />

              <input
                type="text"
                placeholder="Distância (KM)"
              />

            </div>

            <input
              type="text"
              placeholder="Nome da rota"
            />

            <div className="dificuldade-box">

              <label>
                <input
                  type="radio"
                  name="dificuldade"
                />
                Fácil
              </label>

              <label>
                <input
                  type="radio"
                  name="dificuldade"
                />
                Moderada
              </label>

              <label>
                <input
                  type="radio"
                  name="dificuldade"
                  defaultChecked
                />
                Difícil
              </label>

            </div>

          </div>

          <div className="preview-card">

            <h3>Preview card</h3>

            <div className="preview-foto">
              Foto
            </div>

            <p className="preview-cidade">
              Louveira / Vinhedo
            </p>

            <h4>Rota das Frutas</h4>

            <div className="preview-info">

              <span>

                <img
                  src="/img/icons/distance.svg"
                  alt="Distância"
                />

                32 km

              </span>

              <span>

                <img
                  src="/img/icons/dificult.svg"
                  alt="Dificuldade"
                />

                Esforço moderado

              </span>

            </div>

            <button>
              Ver pedal
            </button>

          </div>

        </div>

        <div className="section-title">
          Galeria
        </div>

        <div className="galeria-container">

          <div className="upload-galeria">

            <p>Upload fotos galeria</p>

            <small>
              Permitir múltiplas fotos
            </small>

          </div>

          <div className="galeria-form">

            <input
              type="text"
              placeholder="Título da rota"
            />

            <textarea
              className="galeria-texto"
              placeholder="Texto da galeria..."
            ></textarea>

            <div className="galeria-footer">

              <input
                type="date"
              />

              <input
                type="text"
                placeholder="Legenda foto galeria"
              />

              <button className="btn-rascunho">
                Salvar rascunho
              </button>

              <button className="btn-publicar">
                Publicar
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}
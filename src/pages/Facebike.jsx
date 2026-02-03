import React from "react";
import { useNavigate } from "react-router-dom"; 

const Facebike = () => {
  const navigate = useNavigate();

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="about-container">
      {/* Ícone de Voltar */}
      <i className="fas fa-chevron-left back-icon" onClick={() => navigate(-1)}></i>

      {/* Ícone de Voltar ao Topo */}
      <i className="fas fa-arrow-up scroll-to-top" onClick={scrollToTop}></i>

      {/* Imagem Principal */}
      <div className="about-image-container">
        <img src="/img/imagem-principal3.webp" alt="didi pasqualini" width="300" />
      </div>
      
      {/* Linha Suave */}
      <hr className="divider" />

      {/* Galeria Facebibe */}
      <div className="gallery-info">
        <h2 className="gallery-title">Facebike</h2>
        <p className="gallery-date">Publicado na nossa história !!!</p>
        <p className="gallery-description">
          As seções do site foram organizadas para refletir diferentes momentos e companhias ao longo dos anos. Em Viagens <em> (página anterior)</em>, estão os relatos e fotos das aventuras mais marcantes, aqueles <em>grandes périplos</em> que reúnem jornadas que exigiram planejamento, e grande dose de espírito explora(dor).
          A categoria <strong>Aro 29</strong> traz registros dos pedais mais recentes com a galera atual que vamos agregando pelo caminho.
          Para relembrar <em>priscas eras</em>, há a seção <strong>Aro 26</strong>, dedicada aos rolês com a turma mais antiga, momentos inesquecíveis vividos sobre duas rodas. E, claro, os registros especiais de pedaladas com os filhos, que cresceram, sim, mas carregam o amor pela bike. No final, <strong>"Pedacinhos do Mundo"</strong> traz ideia de capturar momentos singelos da natureza—detalhes que muitas vezes passam despercebidos, mas que carregam uma beleza única.
        </p> 
      </div>

      {/* Linha Suave */}
      <hr className="divider" />
      <div className="gallery-info"><h2 className="gallery-title">Aro 29</h2></div>

      <div className="gallery">
        <img src="/img/Aro29/new (9).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Aro29/new (8).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Aro29/new (6).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Aro29/new (1).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Aro29/new (2).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Aro29/new (3).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Aro29/new (4).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Aro29/new (5).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Aro29/new (7).webp" alt="Didi Pasqualini- 0" />
      </div>

      {/* Linha Suave */}
      <hr className="divider" />
      <div className="gallery-info"><h2 className="gallery-title">Aro 26</h2></div>
      

      <div className="gallery">

      
        <img src="/img/Facebike/Face (30).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (1).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (2).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (3).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (4).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (5).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (6).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (31).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (7).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (8).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (9).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (10).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (11).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (12).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (13).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (14).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (15).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (16).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (17).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (18).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (19).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (20).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (21).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (22).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (23).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (24).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (25).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (26).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (27).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (28).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Facebike/Face (29).webp" alt="Didi Pasqualini- 0" />
                
      </div>

      {/* Linha Suave */}
      <hr className="divider" />
      <div className="gallery-info"><h2 className="gallery-title">"Pedacinhos do Mundo"</h2></div>

      <div className="gallery">
        <img src="/img/Gotas/got (40).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (39).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (1).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (2).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (3).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (4).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (5).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (6).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (7).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (8).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (9).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (10).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (11).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (12).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (13).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (14).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (15).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (16).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (17).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (18).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (19).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (20).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (21).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (22).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (23).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (24).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (25).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (26).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (27).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (28).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (29).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (30).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (31).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (32).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (33).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (34).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (35).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (36).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (37).webp" alt="Didi Pasqualini- 0" />
        <img src="/img/Gotas/got (38).webp" alt="Didi Pasqualini- 0" />
      
      </div>
    

      {/* Linha Suave */}
      <hr className="dividerfim" />
    </div>
  );
}

export default Facebike;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../assets/styles/Home.css";
import PieChart from "../components/PieChart";

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [formData, setFormData] = useState({ email: "", subject: "Contato", message: "" });
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle da abertura da modal

  const toggleText = () => {
    if (!expanded) {
      setExpanded(true);
      setTimeout(() => setHidden(true), 300);
    } else {
      setExpanded(false);
      setHidden(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jjt6mng",  // ID do serviço
        "template_ihovcfb",  // ID do template
        formData,            // Dados do formulário
        "o0Keodxb0xLMFw2kH"  // chave pública
      )
      .then(
        (response) => {
          console.log("E-mail enviado com sucesso!", response.status, response.text);
          setStatus("Mensagem enviada com sucesso!");
          setFormData({ email: "", subject: "Contato", message: "" });
          setIsModalOpen(false); // Fechar a modal após envio
        },
        (error) => {
          console.log("Erro ao enviar o e-mail:", error);
          setStatus("Erro ao enviar a mensagem. Tente novamente.");
        }
      );
  };

  return (
    <div className="home">
      <img src="/img/imagem-principal1.webp" alt="Didi Pasqualini" className="home-image" />
      <div className="icon-links">
      <Link to="/about" className="icon-item">
        <img src="/about.webp" alt="Sobre mim" className="home-icon" />
        <span className="icon-label">Pedaladas</span>
      </Link>
      <Link to="/facebike" className="icon-item">
        <img src="/facebike.webp" alt="Minhas pedaladas" className="home-icon" />
        <span className="icon-label">Amigos</span>
      </Link>
      <a
        href="https://wa.me/123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-item"
        >
        <img src="/whatsapp.webp" alt="WhatsApp" className="home-icon" />
        <span className="icon-label">WhatsApp</span>
      </a>
      <a
        href="https://www.linkedin.com/in/didibr/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-item"
      >
      <img src="/LinkedIn.webp" alt="Meu LinkedIn" className="home-icon" />
      <span className="icon-label">LinkedIn</span>
    </a>
    <a
      href="#"
      onClick={() => setIsModalOpen(true)}
      className="icon-item"
      aria-label="Enviar um e-mail"
    >
      <img src="/email.webp" alt="Contato por e-mail" className="home-icon" />
      <span className="icon-label">Contato</span>
    </a>
      </div>

      <h1 className="home-title">Estado da arte.</h1>
      <p className="home-text">
        A vida é uma ideia em movimento. A jornada é o caminho.
        Nesta versão 2026 do meu espaço de aventuras, levo adiante aquilo que, em meus estudos de pós-graduação, chamávamos de estado da arte.        {expanded && (
          <>  Aqui celebro aventuras, descobertas, viagens e novas amizades — encontros que surgem e vão dando lugar a conexões, pelas quais, pouco a pouco, construímos aquilo que chamamos de história.
              Tenho descoberto que viver não é chegar a um estado pronto, acabado — sobretudo à medida que caminhamos um pouco mais pela estrada da vida —, mas um processo contínuo de ajuste.
              Nele, incorporamos novos valores, afetos, consciência e sentido, que convivem e contrastam com perdas, dores, silêncios e caminhos.
              O exterior nos toca, nos ensina, nos conduz aos sonhos. Mas é no interior que corrigimos rotas, ajustamos os tons. Afinar a beleza da vida é o ponto central.
              A bike tem sido a catalisadora de tudo isso. No equilíbrio, ela nos ensina a escutar — e a não perder o ritmo. Nos encontramos por aí, quem sabe.
          </>
        )}
      </p>
      {!hidden && (
        <button className="toggle-button" onClick={toggleText}>
          {expanded ? "Ler menos ▲" : "Ver textão ▼"}
        </button>
      )}

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Assunto:</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label>Mensagem (máx. 300 caracteres):</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength="300"
                required
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      )}

      <PieChart />

      <footer className="footer">
        <p>&copy; 2026 - Diógenes (Didi) Pasqualini. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;

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
        <Link to="/about">
          <img src="/about.webp" alt="About" className="home-icon" />
        </Link>
        <Link to="/facebike">
          <img src="/facebike.webp" alt="Facebike" className="home-icon" />
        </Link>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.webp" alt="WhatsApp" className="home-icon" />
        </a>
        <a href="https://www.linkedin.com/in/didibr/" target="_blank" rel="noopener noreferrer">
          <img src="/LinkedIn.webp" alt="LinkedIn" className="home-icon" />
        </a>
        <a href="#" onClick={() => setIsModalOpen(true)}>
          <img src="/email.webp" alt="Email" className="home-icon" />
        </a>
      </div>
      <h1 className="home-title">Viver é uma concessão, pedalar é um privilégio.</h1>
      <p className="home-text">
          Pedalar é liberdade. Viajar é descoberta. Aqui, compartilho um pouco das minhas experiências, aprendizados e momentos que a vida me presenteou. Se você gosta de natureza, movimento e boas histórias, seja bem-vindo. Respire fundo, explore cada imagem e aproveite a jornada.
        {expanded && (
          <>  Neste espaço pessoal, versão 2025, a proposta é vida e movimento, evolução e redescoberta. Tenho aprendido que cada desafio é um convite ao crescimento e que viver é uma concessão da natureza. Pedalar é um privilégio, e estar feliz, a verdadeira apoteose de tudo isso. Se você me permite não exagerar muito, me considero uma pessoa de muita sorte. Sorte por ter amigos incríveis, por ter nascido em uma família que me deu uma boa educação, por ter tido a oportunidade de me relacionar com muitas pessoas. Com algumas, como diz Martinho, “certo tempo fiquei”, para outras, “apenas um pouco me dei”. Sorte também por ter sido parte essencial na vida de duas pessoas maravilhosas: meus filhos, Juliano e Evelyn. Ser pai deles é, sem dúvida, uma das maiores alegrias da minha vida. Acompanhar suas trajetórias, ver seus sonhos ganhando forma e saber que, de alguma maneira, pude contribuir para com suas histórias é um privilégio indescritível. Sorte ainda por ter construído uma carreira profissional maravilhosa, por ter estudado, me graduado e pós-graduado. Então, se você chegou até este ponto do texto, venha tranquilo. Leia, respire, inspire-se. Deixe que cada palavra encontre seu próprio espaço dentro da sua história. Não tenha pressa, não julgue, seja impecável com sua consciência, pois ao fazer este site dei o melhor de mim. E se, depois de ler, sentir vontade de mandar um “Oi”, escolha um canal nos ícones acima. Vou adorar te receber.
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
        <p>&copy; 2025 - Diógenes (Didi) Pasqualini. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;

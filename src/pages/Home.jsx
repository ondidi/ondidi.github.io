import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css";


const Home = () => {
  return (
    <div className="home">
      <img src="/img/imagem-principal.webp" alt="Didi Pasqualini" className="home-image" />
      <h1 className="home-title">Viver é uma concessão, pedalar é um privilégio.</h1>
      <p className="home-text">
      Neste espaço pessoal, versão 2025, a proposta é vida e movimento, evolução e redescoberta. Tenho aprendido que cada desafio é um convite ao crescimento e que viver é uma concessão da natureza. Pedalar é um privilégio, e estar feliz, a verdadeira apoteose de tudo isso.
      Se você me permite não exagerar muito, me considero uma pessoa de muita sorte. Sorte por ter amigos incríveis, por ter nascido em uma família que me deu uma boa educação, por ter tido a oportunidade de me relacionar com muitas pessoas. Com algumas, como diz Martinho, “certo tempo fiquei”, para outras, “apenas um pouco me dei”.
      Sorte também por ter sido parte essencial na vida de duas pessoas maravilhosas: meus filhos, Juliano e Evelyn. Ser pai deles é, sem dúvida, uma das maiores alegrias da minha vida. Acompanhar suas trajetórias, ver seus sonhos ganhando forma e saber que, de alguma maneira, pude contribuir para com suas histórias é um privilégio indescritível.
      Sorte ainda por ter construído uma carreira profissional maravilhosa, por ter estudado, me graduado e pós-graduado. Então, se você chegou até este ponto do texto, venha tranquilo. Leia, respire, inspire-se. Deixe que cada palavra encontre seu próprio espaço dentro da sua história. Não tenha pressa, não julgue, seja impecável com sua consciência, pois ao fazer este site dei o melhor de mim.
      E se, depois de ler, sentir vontade de mandar um “Oi”, use o espaço no menu. Vou adorar te receber.
      </p>
      <Link to="/about">
        <button className="home-button">Partiu com o Dids</button>
      </Link>
      <footer className="footer">
      <p className="footer">&copy; 2025 - Diógenes (Didi) Pasqualini. Todos os direitos reservados.</p>
    </footer>
    </div>
  );
};

export default Home;

/*
modelo publicação artigo
*/


import { useState } from "react";
import "../../assets/styles/Blog.css";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogFooter from "../../components/blog/BlogFooter";

const Menino = () => {
  const [fontSize, setFontSize] = useState(1);

  return (

    <div className="article-page">
      <BlogHeader article />
      <section className="article-hero">

        <h1 className="article-title">
          Menino e Menina
        </h1>

        <p className="article-subtitle">

            A polêmica envolvendo a deputada Erika Hilton em sua eleição como presidente da Comissão de Defesa dos Direitos da Mulher na Câmara, gerou forte repercussão

        </p>

        <div className="article-meta">

          <div className="meta-item">

            <img
              src="/img/icons/calendario.svg"
              alt="Calendário"
            />

            <span>
              Publicado em: 26/03/2026
            </span>

          </div>

          <div className="meta-item">

            <img
              src="/img/icons/leitura.svg"
              alt="Leitura"
            />

            <span>
              Tempo de leitura: 6 min.
            </span>

          </div>

          <div className="meta-item">

            <div className="font-controls">

              <img
                src="/img/icons/textomenos.svg"
                alt="Diminuir fonte"
                className="article-meta-icon clickable"
                onClick={() => {
                  if (fontSize > 0.9) {
                    setFontSize(fontSize - 0.1);
                  }
                }}
              />

              <img
                src="/img/icons/textomais.svg"
                alt="Aumentar fonte"
                className="article-meta-icon clickable"
                onClick={() => {
                  if (fontSize < 1.5) {
                    setFontSize(fontSize + 0.1);
                  }
                }}
              />

            </div>

          </div>

        </div>

      </section>

        <article

            className="article-content"
            style={{
                fontSize: `${fontSize}rem`,
            }}
        >

        <p className="drop-cap">

          O tema rapidamente ganhou as redes sociais e reacendeu dois debates que considero urgentes: identidade de gênero e representação política.
            Críticas públicas e ataques vieram de diferentes frentes, dentro e fora do Congresso.
            <br /><br />
            A reação do apresentador Ratinho e uma parlamentar paulista adiciona uma camada que vai além da busca por audiência.
            <br /><br />
            Ela revela uma visão de mundo em que a figura da mulher é reduzida a um objeto, desconsiderando sua capacidade intelectual e política — algo que, em maior ou menor grau, ainda persiste na sociedade.
            <br /><br />
            Talvez seja pouco produtivo tentar convencer quem já está completamente posicionado. Ainda assim, há um ponto que precisa ser lembrado: quem define a presidência de uma comissão são os próprios parlamentares, eleitos democraticamente pela população. Sob essa lógica, a escolha de Erika Hilton é legítima.
            <br /><br />
            Diante disso, talvez o foco devesse ser outro: o que ela pretende fazer no cargo? Quais pautas irá defender? Que impacto sua atuação poderá gerar?
            <br /><br />
            Faz sentido defender a inclusão e a representatividade de minorias?
            <br /><br />
            Também faz sentido discutir critérios biológicos quando se trata de determinados espaços?
            <br /><br />
            O problema surge quando esse debate deixa de ser racional e passa a ser alimentado por rancor, ataques pessoais, desinformação, simplificações extremas ou stand-up parlamentar.
            <br /><br />
            Se deslocarmos um pouco o olhar, percebemos algo interessante: e se estivéssemos falando de uma mulher pobre, negra, oriunda da periferia, eleita por um partido de esquerda?
            <br /><br />
            É possível que a polêmica também existisse — mas com outros argumentos. De um lado, críticas sobre ideologização; de outro, a defesa da representatividade, da democracia e da necessidade de dar voz a grupos historicamente excluídos.
            <br /><br />
            Isso revela que, muitas vezes, o debate não é apenas sobre critérios objetivos, mas sobre percepções, valores e disputas simbólicas.
            <br /><br />
            Afinal, o que define uma mulher na sua concepção?
            <br /><br />
            Apenas a biologia? O status? A experiência social? Aqui lembro Pepeu Gomes na letra Masculino e Feminino.
            Ou será que parte desse desconforto nasce menos de critérios objetivos e mais daquilo que nos desafia — e, por isso, nos parece ameaçador?
            <br /><br />
            A resposta talvez não seja simples — nem mesmo quando falamos de mulheres biológicas. O tema é mais complexo do que as categorias rígidas que tentamos impor.
            <br /><br />
            O problema começa quando o preconceito deixa de ser questionado e passa a ser tratado como verdade. Nesse momento, passamos a enxergar o mundo por meio de rótulos, simplificações e certezas frágeis.
            <br /><br />
            E, em um ambiente cada vez mais polarizado, distinguir realidade de narrativa se torna um exercício raro — porém necessário.
            <br /><br />
            Quando tudo se reduz a lados, rótulos e disputas previsíveis, perdemos a capacidade de enxergar alternativas.
            Não dá mais para a sociedade permanecer refém de visões binárias, onde o pensamento crítico cede espaço à identificação automática.
            <br /><br />
            Mais do que posicionamentos, faltam propostas, qualidade de debate e lideranças capazes de construir algo novo. Porém, não é essa geração que atua hoje na política que vai fazer o País avançar, esteja certo disso.
            <br /><br />            
        </p>

      </article>
      <BlogFooter />

    </div>

  );

};

export default Menino;
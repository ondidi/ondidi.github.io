/*
modelo publicação artigo
*/


import { useState } from "react";
import "../../assets/styles/Blog.css";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogFooter from "../../components/blog/BlogFooter";

const Custodes = () => {
  const [fontSize, setFontSize] = useState(1);

  return (

    <div className="article-page">
      <BlogHeader article />
      <section className="article-hero">

        <h1 className="article-title">
          Custodes sui
        </h1>

        <p className="article-subtitle">

          Tenho acompanhado a greve dos alunos da Universidade de São Paulo, mais especificamente no campus Butantã, por conta de minha filha que estuda por lá.

        </p>

        <div className="article-meta">

          <div className="meta-item">

            <img
              src="/img/icons/calendario.svg"
              alt="Calendário"
            />

            <span>
              Publicado em: 09/05/2026
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
          fontSize: `${fontSize}rem`
          }}
        >

        <p className="drop-cap">

           O que se vê, no fim das contas, é um retrato bastante brasileiro: reposição salarial e valorização de carreira avançam com relativa rapidez, enquanto estudantes, funcionários terceirizados, manutenção predial e qualidade de vida universitária seguem em segundo plano.

            Boa parte do orçamento universitário é consumida por salários e aposentadorias. Ou seja, há pouca flexibilidade orçamentária dentro da universidade.
            <br /><br />
            Nem todos sabem, mas a USP possui características admiráveis. Seus professores, em grande parte, são doutores, trabalham com ensino, pesquisa e extensão, muitos em regime de dedicação exclusiva. O problema não está na existência da carreira acadêmica em si, mas na forma como ela se relaciona com a realidade social ao redor.
            <br /><br />
            Em muitos casos, os salários são elevados para os padrões brasileiros e possuem impacto significativo também nas aposentadorias. Isso cria uma universidade com muita folha e pouca capacidade de investimento em infraestrutura, manutenção e renovação.
            <br /><br />
            E é justamente aí que surge o desconforto. Fora dos muros universitários, cresce a percepção de que parte do corpo docente vive uma trajetória excessivamente fechada dentro do próprio ambiente acadêmico. Muitas discussões tornaram-se cansativas para a sociedade porque parecem desconectadas do cotidiano real das pessoas. Disputas por bônus e benefícios soam distantes de um país marcado por precariedade, baixa renda e falta de perspectivas.
            <br /><br />
            Talvez por isso, na ótica da opinião pública, o professor universitário passe a ocupar, injustamente ou não, uma posição semelhante à de outras categorias vistas como privilegiadas, como setores do Judiciário, uma parte do funcionalismo público e políticos.
            <br /><br />
            Por outro lado, seria simplista ignorar que a USP concentra pesquisas importantes e diretamente ligadas aos problemas nacionais. A contradição está justamente aí: a universidade pesquisa sobre desigualdade, exclusão e pobreza, mas muitas vezes opera internamente distante dessas próprias condições. Isso gera um paradoxo de legitimidade. A produção intelectual permanece frequentemente no diagnóstico, enquanto a transformação concreta acontece pouco, inclusive dentro da própria universidade.
            <br /><br />
            É importante também ajustar a lente. Nem todos os professores recebem salários extravagantes como parte da sociedade imagina. Há caricaturas e exageros no debate público. O ponto central não é atacar indivíduos, mas discutir um modelo que combina carreira, estabilidade e acomodação estrutural.
            <br /><br />
            A questão mais importante talvez seja outra: como conectar produção intelectual e transformação prática sem que o conhecimento vire apenas retórica institucional?
            <br /><br />
            O Brasil produz muito pouco em tecnologia estratégica. Em muitos momentos, o ambiente universitário parece fechado em si mesmo. Ainda assim, existem avanços importantes. Embraer, Embrapa, Instituto Butantan e Fiocruz demonstram que há competência instalada no país. Mas esses casos não resolvem o problema estrutural.
            <br /><br />
            O Brasil segue dependente de tecnologias-chave vindas de fora. O resultado é um ciclo conhecido: a universidade pesquisa, mas a indústria não absorve; o conhecimento é produzido, mas não ganha escala econômica.

        </p>

      </article>
      <BlogFooter />

    </div>

  );

};

export default Custodes;
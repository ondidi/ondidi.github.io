/*
modelo publicação artigo
*/


import { useState } from "react";
import "../../assets/styles/Blog.css";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogFooter from "../../components/blog/BlogFooter";

const Deus = () => {
  const [fontSize, setFontSize] = useState(1);

  return (

    <div className="article-page">
      <BlogHeader article />
      <section className="article-hero">

        <h1 className="article-title">
          Deus
        </h1>

        <p className="article-subtitle">

          Li recentemente, em um jornal de grande circulação de São Paulo, resenha do mais recente livro do filósofo coreano radicado na Alemanha, Byung-Chul Han. 

        </p>

        <div className="article-meta">

          <div className="meta-item">

            <img
              src="/img/icons/calendario.svg"
              alt="Calendário"
            />

            <span>
              Publicado em: 25/04/2026
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

          Considero-me alguém de sorte por ter tido contato com seu pensamento ainda no doutorado — e por ter incentivado outros a explorarem essa leitura sensível do nosso tempo.
            Em seu novo trabalho, ao refletir sobre Deus, fiz uma conexão quase imediata com Friedrich Nietzsche, que, ainda no século XIX, ao afirmar que “Deus está morto”, diagnosticava menos um ateísmo e mais o colapso de um apego ao sentido divino. Talvez tenha sido pouco compreendido em sua época.
            <br /><br />
            Porém quero fazer uma ressalva. Não escrevo aqui para questionar crenças, mas para propor uma triangulação entre esses filósofos e uma inquietação pessoal já tratada em verso e prosa aqui: as redes sociais.
            <br /><br />
            Se Nietzsche apontava para a morte de um valor, Han nos conduz a outro diagnóstico: não foi Deus que desapareceu, mas a nossa capacidade de atenção. Perdemos o tempo da escuta, da pausa, da contemplação. E, nesse espaço esvaziado, algo se impôs — silencioso, mas dominante: a pressa.
            <br /><br />
            A sociedade, nesse movimento, não desaparece de forma abrupta; ela se dilui. As relações se tornam superficiais, as amizades se comprimem em interações digitais, e a comunicação passa a ser mediada por vozes que não são nossas. Influenciadores, algoritmos e repetições ocupam o lugar da experiência direta.
            <br /><br />
            Se antes havia um vazio deixado pela perda de referências transcendentes, hoje ele é preenchido por estímulos contínuos. Penso que telas dos smartphones funcionam como vitrais das catedrais, sõ que invertidas: não filtram a luz do sagrado, mas projetam um brilho constante que ofusca qualquer possibilidade de profundidade.
            <br /><br />
            Toma-se como base a política partidária no Brasil. Os pastores, em sua grande maioria, transpõem discursos radicais como forma de crença religiosa, que não mobiliza seus seguidores à reflexão, mas como instrumento de afirmação pessoal ou em grupo político, como pertencimento.
            <br /><br />
            Assim, substituímos, não Deus em si, mas o espaço onde ele poderia se manifestar. Onde antes havia silêncio, há ruído. Onde havia pausa, urgência. Onde cabia a reflexão, instala-se a distração e a escravidão disfarçada de “liberdade”.
            <br /><br />
            Nesse ambiente, a pressa deixa de ser circunstância e se torna valor. Estar ocupado é sinal de importância; desacelerar soa como falha. Até o descanso precisa ser produtivo.
            Ler um texto como este, por exemplo, já exige esforço. Demanda tempo, atenção, escolha — elementos cada vez mais escassos.
            <br /><br />
            Buscar sentido — seja ele religioso ou não — deixou de ser uma questão de convicção e passou a esbarrar em algo mais básico: a incapacidade de permanecer. Não é que não haja mais o que encontrar. É que já não conseguimos ficar o suficiente para perceber.
            <br /><br />
            Costumamos dizer que a pressa é apenas uma condição do nosso tempo. Talvez seja mais do que isso. Talvez ela seja o próprio mecanismo que nos impede de acessar aquilo que ainda poderia dar sentido à vida.
            Não abandonamos Deus por decisão. Fizemo-lo por hábito. E hábitos - como diz Kahneman, em Rápido e devagar -  ao contrário das ideias, raramente são questionados.
            <br /><br />
            Ela expõe o esgotamento de um modelo institucional em que carreiras se consolidam, mas o país continua incapaz de converter parte significativa de sua produção intelectual em desenvolvimento amplo, tecnológico e social.


        </p>

      </article>
      <BlogFooter />

    </div>

  );

};

export default Deus;
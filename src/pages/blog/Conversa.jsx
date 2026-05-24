/*
modelo publicação artigo
*/


import { useState } from "react";
import "../../assets/styles/Blog.css";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogFooter from "../../components/blog/BlogFooter";

const Conversa = () => {
  const [fontSize, setFontSize] = useState(1);

  return (

    <div className="article-page">
      <BlogHeader article />
      <section className="article-hero">

        <h1 className="article-title">
          Conversa
        </h1>

        <p className="article-subtitle">

            O eleitor brasileiro, em sua grande maioria, tem demonstrado pouco interesse em comparecer às urnas neste ano.

        </p>

        <div className="article-meta">

          <div className="meta-item">

            <img
              src="/img/icons/calendario.svg"
              alt="Calendário"
            />

            <span>
              Publicado em: 11/04/2026
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

          Isso é reflexo de um conjunto de fatores que, somados, geram tensão, desconfiança e medo.
            Vivemos uma polarização insistente — e, em muitos aspectos, doentia — que já se arrasta há quase uma década.
            <br /><br />
            Ao mesmo tempo, há uma percepção de corrupção disseminada nos três poderes, que, para muitos, passou a funcionar como uma espécie de “economia de interesses”.
            <br /><br />
            No cenário internacional, guerras e tensões geopolíticas envolvendo Estados Unidos, China e Rússia apontam para uma transição de ordem global, em que interesses e narrativas disputam espaço, sem qualquer sinal de pacificação no horizonte.
            <br /><br />
            Esse contexto de instabilidade econômica acaba recaindo, sobretudo, sobre as camadas mais pobres da população, que possuem menor capacidade de absorver os impactos da inflação e da perda de poder de compra — fatores que afetam diretamente sua sobrevivência.
            <br /><br />
            Enquanto isso, as elites tradicionais parecem dar sinais de perda de controle, transferindo o custo de suas incertezas para os grupos mais vulneráveis.
            <br /><br />
            É comum, em momentos como este, que estruturas de poder se reconfigurem — e, historicamente, esse processo ocorre com ônus desproporcional para os menos protegidos.
            <br /><br />
            Talvez isso ajude a explicar por que programas sociais são frequentemente criticados, enquanto a corrupção sistêmica é, em certa medida, tolerada por parcelas mais privilegiadas.
            <br /><br />
            Também passa a ser aceitável que pessoas sem experiência assumam posições de liderança, enquanto discursos de ruptura ganham força — mesmo quando, historicamente, tais promessas raramente se concretizam em mudanças reais na vida da população.
            <br /><br />
            Seguiremos assistindo às mesmas justificativas para problemas antigos: economia, saúde, educação, segurança. Uma repetição que, por vezes, chega a colocar em dúvida nossa própria capacidade crítica.
            <br /><br />
            O Judiciário, que tradicionalmente ocupava um lugar de confiança institucional — ainda que nem sempre de concordância —, também passa a ser alvo de suspeitas. E isso impacta profundamente aqueles que viam nessa instituição um símbolo de conduta, responsabilidade e equilíbrio.
            <br /><br />
            No campo religioso, observa-se o crescimento de lideranças movidas por interesses questionáveis, transformando espaços de fé em instrumentos de poder e influência.
            <br /><br />
            Os principais nomes que hoje lideram o cenário político não parecem, até aqui, apresentar respostas à altura da complexidade do contexto global em que o Brasil está inserido.
            <br /><br />
            Cometemos um erro grave ao olhar apenas para um lado, pois essas duas correntes se alimentam mutuamente.
            <br /><br />
            Tanto a chamada esquerda quanto a direita simplificam o mundo para gerar engajamento — mas isso tem um efeito colateral profundo: reduz o espaço para pessoas realmente preparadas assumirem posições de liderança.
            <br /><br />
            Diante de um cenário tão marcado por incertezas, surge uma pergunta inevitável: como reunir forças para votar?
            <br /><br />
            Diante de um cinismo cada vez mais evidente — marcado por corrupção, ineficiência do Estado e decisões políticas orientadas por interesses —, torna-se legítimo questionar: se o sistema não entrega, por que mantê-lo como está?
            <br /><br />
            Não se trata de ruptura irresponsável, mas de reconhecer a necessidade de reformas profundas: melhorar regras, ampliar a transparência, ajustar incentivos e, gradualmente, reconstruir um modelo institucional mais funcional e confiável


        </p>

      </article>
      <BlogFooter />

    </div>

  );

};

export default Conversa;
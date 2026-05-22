import "../../assets/styles/Blog.css";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogFooter from "../../components/blog/BlogFooter";

const Castas = () => {

  return (

    <div className="article-page">
      <BlogHeader article />
      <section className="article-hero">

        <h1 className="article-title">
          Castas e crenças
        </h1>

        <p className="article-subtitle">

          Este texto busca dialogar com uma reflexão
          que há muito tempo me acompanha:
          o meio molda quem somos?

        </p>

        <div className="article-meta">

          <div className="meta-item">

            <img
              src="/img/icons/calendario.svg"
              alt="Calendário"
            />

            <span>
              Publicado em: 23/05/2026
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

            <img
              src="/img/icons/texto.svg"
              alt="Texto"
            />

          </div>

        </div>

      </section>

      <article className="article-content">

        <p className="drop-cap">

          Autores como Michel Foucault,
          Pierre Bourdieu, Hannah Arendt
          e Jean-Paul Sartre, entre tantos
          outros, desenvolveram linhas de
          pensamento sobre moral,
          instituições, poder, liberdade
          e condicionamento social.

          Cada um, à sua maneira,
          tentou compreender até que ponto
          somos autores de nós mesmos
          ou produtos dos ambientes
          que habitamos.

          <br /><br />

          A recente notícia sobre o estreito
          envolvimento entre Flávio Bolsonaro
          e Daniel Vorcaro me faz pensar
          em como os instrumentos econômicos
          e as estruturas de poder exercem
          força sobre todos nós e,
          dependendo do caráter e do meio
          em que estamos inseridos,
          acabam influenciando profundamente
          a forma como agimos.

          <br /><br />

          Muitas vezes assumimos discursos
          sobre corrupção, por exemplo,
          ou avaliamos a conduta de terceiros
          sem percebermos aquilo que nós mesmos
          fazemos ou reproduzimos.

          <br /><br />

          E mais: frequentemente midiatizamos,
          defendemos e trabalhamos em prol
          de indivíduos nos quais acreditamos,
          mesmo quando eles próprios são frutos
          de meios capazes de corromper.

          <br /><br />

          Também deixo um alerta:
          não pretendo banalizar atitudes
          ou transformar este texto
          em julgamento de indivíduos específicos.

          <br /><br />

          O ponto que desejo discutir
          talvez seja outro:
          existe uma normalização
          daquilo que determinados grupos
          consideram corrupção e daquilo
          que escolhem não considerar?

          <br /><br />

          Quando focamos apenas
          na questão ideológica,
          passamos a defender
          quase qualquer prática.

          <br /><br />

          Não é só na política
          que construímos uma espécie
          de moral paralela.

          <br /><br />

          Talvez essa contradição acompanhe
          permanentemente a experiência humana
          nessa eterna tensão entre bem e mal,
          virtude e corrupção,
          Deus e Diabo.

          <br /><br />

          O marketing compreendeu profundamente
          essa lógica de pertencimento.

          <br /><br />

          Talvez o mais perigoso nisso
          seja o fato de nos tornarmos
          guardiões apaixonados de conceitos
          que, muitas vezes,
          nos aprisionam.

          <br /><br />

          Por outro lado,
          meios saudáveis elevam comportamento,
          responsabilidade e consciência.

          Mas eles também cobram um preço:
          atravessar, muitas vezes sozinhos,
          caminhos que exigem reflexão,
          angústia e dor.

        </p>

      </article>
      <BlogFooter />

    </div>

  );

};

export default Castas;
import { useNavigate } from "react-router-dom";
import "/src/assets/styles/About.css";

/*ponto volta*/

function About() {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="about-container">
            {/* Botão Voltar */}
            <i className="fas fa-chevron-left back-icon" onClick={() => navigate("/")}></i>

            {/* Imagem Principal */}
            <div className="about-image-container">
                <img src="/img/imagem-principal2.webp" alt="didi pasqualini" width="300" />
            </div>
            
             {/* Linha Suave */}
             <hr className="divider" />
            <p>
                As fotos que compartilho são um convite para viver em harmonia com a vida e a natureza. 
                Não busco mostrar uma realidade onde tudo é felicidade – se fosse esse o propósito, usaria 
                as redes sociais para isso. Minha intenção é outra: estar aberto a novas experiências e lembrar 
                que o convite é para somar, nunca dividir. A bike é apenas um facilitador, um meio para explorar 
                caminhos, mas jamais substituir o que realmente importa: amizade, companheirismo, solidariedade
                e compaixão.  
            </p>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Rota Márcia Prado*/}
            <div className="gallery-info">
                <h2 className="gallery-title">São Paulo - Santos</h2>
                <p className="gallery-date">Publicado em 1º de fevereiro de 2026</p>
                <p className="gallery-description">
                Percorrer a Rota Márcia Prado, que liga São Paulo a Santos passando por São Bernardo do Campo, foi uma experiência marcante, dessas que ficam no corpo e na memória.
                Além da beleza do trajeto e da sensação única de descer a serra pedalando, há algo a mais nesse caminho. Conheci a história de Márcia Regina de Andrade Prado ainda em vida, quando eu trabalhava em São Paulo, na Alesp. Foi também naquele período que retomei o hábito de pedalar, muito influenciado pelo meu filho.
                Hoje, cruzar essa rota e ver seu nome eternizado ao longo do percurso traz um sentimento especial. Não se trata apenas de um trajeto ciclístico, mas de uma conquista construída na resistência, no risco e na coragem de quem ousou ocupar as ruas em um país que quase nunca pensa no ciclista.
                Entre túneis, curvas, amor e a companhia de tantos outros ciclistas, a liberdade aparece de forma concreta: no vento, no movimento contínuo e na sensação de pertencimento. É um percurso que mistura paisagem, história e emoção.
                Valeu, grupo. A estrada segue viva — e nós seguimos pedalando.

                </p>
            </div>

            <div className="gallery">
              
                <img src="/img/Marcia/MP0.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP1.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP2.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP21.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP3.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP4.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP5.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP6.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP7.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP8.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP9.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP10.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP11.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP12.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP13.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP14.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP15.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP16.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP17.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP18.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP19.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Marcia/MP20.webp" alt="Didi Pasqualini- 0"/>



            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* jacupiranga-cananeia*/}
            <div className="gallery-info">
                <h2 className="gallery-title">Jacupiranga - Cananéia - Ilha do Cardoso</h2>
                <p className="gallery-date">Publicado em 15 de Dezembro de 2025</p>
                <p className="gallery-description">
                Cada pedal carrega uma história, e toda história percorre uma jornada que nem sempre pode ser dita — seja pelas palavras, seja pelas imagens.
                Nesta última cicloviagem, segui acompanhado de um time muito bacana: com alguns já havia pedalado antes, outros encontrei pelo próprio caminho.
                Este foi um ano de muitas aventuras e pedais marcantes. Um ano mais leve, mais romântico e, sobretudo, de astral elevado.
                Viver não é apenas o que se registra, mas o todo — com tudo aquilo que o destino nos oferece. A chuva e o sol, o dia e a noite, as vitórias e as derrotas. Em tudo, há sempre algo que ensina, algo que vale.
                Assim, encerro este pedal de 2025, com as belas paisagens de Jacupiranga, Cananéia, Ilha Comprida e Ilha do Cardoso, e fecho um ano em que cumpri grande parte daquilo que desejo como ser humano: ser impecável com as palavras, não levar nada pelo lado pessoal, não tirar conclusões e o mais importante, buscar fazer sempre o melhor.

                </p>
            </div>

            <div className="gallery">
              
                <img src="/img/Cana/PCJ1.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ2.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ3.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ4.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ5.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ6.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ7.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ8.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ9.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ10.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ11.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ12.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ13.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ14.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ15.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ16.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ17.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ18.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ19.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Cana/PCJ20.webp" alt="Didi Pasqualini- 0"/>


            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Guaxupe*/}
            <div className="gallery-info">
                <h2 className="gallery-title">Rota do café - Guaxupé - MG</h2>
                <p className="gallery-date">Publicado em 6 de Dezembro de 2025</p>
                <p className="gallery-description">
                Pedalar pela Rota do Café, em Guaxupé, foi uma experiência intensa. Entre fazendas centenárias e belas paisagens, o percurso virou um verdadeiro teste de resistência: mais de 40 km com cerca de 2 mil metros de altimetria acumulada. O ponto mais alto marcou 1.221 metros no Garmin.
                Fui solo. Como diz o ditado, sozinho a gente vai mais rápido, mas acompanhado vai mais longe. No meu caso, fui rápido… e pouco. À noite curti a cidade, linda, maravilhossa, super enfeitada para o Natal. 

                </p>
            </div>

            <div className="gallery">
              
                <img src="/img/Guaxu/CAF1.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF2.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF3.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF4.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF5.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF6.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF7.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF8.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF9.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF10.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF11.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Guaxu/CAF12.webp" alt="Didi Pasqualini- 0"/>

            </div>

                        {/* Linha Suave */}
            <hr className="divider" />

            {/* Cafécomtrem*/}
            <div className="gallery-info">
                <h2 className="gallery-title">Campinas - Jaguariúna</h2>
                <p className="gallery-date">Publicado em 13 de Setembro de 2025</p>
                <p className="gallery-description">
                Fiz um pedal entre Campinas e Jaguariúna margeando a antiga linha férrea por onde ainda passa a charmosa Maria Fumaça. A rota tem trechos muito bem preservados e cenários que misturam natureza, história e aquela sensação gostosa de pedalar em um clima nostálgico foi muito gostoso. Em alguns pontos, o visual faz a gente diminuir o ritmo só para apreciar.
                O trajeto oferece opções para todos os gostos — desde passeios tranquilos até desafios mais técnicos de MTB — e fiz tudo isso com amigos, o que deixou a experiência ainda mais divertida. No fim, ficou aquela alegria simples de quem viveu um dia leve, conectando paisagem, aventura e boa companhia.

                </p>
            </div>

            <div className="gallery">
              
                <img src="/img/Trem/T1.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Trem/T2.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Trem/T3.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Trem/T4.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Trem/T5.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Trem/T6.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Trem/T7.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Trem/T8.webp" alt="Didi Pasqualini- 0"/>
            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Caminhodafe*/}
            <div className="gallery-info">
                <h2 className="gallery-title">Após uma década, voltei ao Caminho da Fé</h2>
                <p className="gallery-date">Publicado em 17 de Julho de 2025</p>
                <p className="gallery-description">
                Não foi dessa vez que usei bike moderna ou apoio logístico — fui com a mesma bicicleta de 10 anos atrás, equipada com alforjes de 14 kg, mais comida, água e todo o peso das vestes, minhas e da parceira. 
                Meu propósito era claro: zerar o percurso. Isso significa não colocar o pé no chão nem nas subidas mais teimosas — inclusive a famosa e temida Serra da Luminosa, que costuma testar até os mais experientes.
                Partimos de São José do Rio Pardo, em vez de Rio Claro, como já fiz. Essa pequena mudança aumentou — e muito — o desafio. A altimetria acumulada passou dos 10.000 metros e a distância originalmente planejada de 357 km acabou se transformando em 418 km de pura vivência.
                Essa travessia não foi apenas um esforço físico; foi um lembrete luminoso de que sempre podemos recomeçar, de que existe força onde às vezes achamos só cansaço e que a fé — seja ela qual for — é também capacidade de seguir em frente, reinventar nossos passos e acolher novas versões de nós mesmos.

                </p>
            </div>

            <div className="gallery">
              
                <img src="/img/Aparecida/AP1.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP2.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP3.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP4.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP5.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP6.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP7.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP8.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP9.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP10.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP11.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP12.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP13.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP14.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP15.webp" alt="Didi Pasqualini- 0"/>
                <img src="/img/Aparecida/AP16.webp" alt="Didi Pasqualini- 0"/>

            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Graciosa/Morretes*/}
            <div className="gallery-info">
                <h2 className="gallery-title">Graciosa/Morretes - PR</h2>
                <p className="gallery-date">Publicado em 25 de Março de 2025</p>
                <p className="gallery-description">
                A Serra da Graciosa encanta pela beleza e charme. A percorri de carro e outra vez no tradicional passeio trem/van. Este pedal foi difícil, foram quase 70 km de extensão, descendo e subindo do Portal até Morretes. Um desnível de quase 1000 metros. O tempo mais do que ajudou, sol forte, mesmo à sombra o desgaste testou todos os limites da resistência. Não sabia, mas o trajeto faz parte da Estrada Real, que era utilizada desde o período colonial para o transporte de mercadorias entre o litoral e Curitiba. Uma jornada exaustiva, mas que voltaria a fazer.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Graciosa/gra (1).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (2).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (3).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (12).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (4).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (5).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (6).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (7).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (8).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (9).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (10).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (11).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (13).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Graciosa/gra (14).webp" alt="Didi Pasqualini- 0" />
               

            </div>

            {/* Linha Suave */}
            <hr className="divider" />

                        {/* Galeria Pontal do Paraná*/}
                        <div className="gallery-info">
                <h2 className="gallery-title">Pontal do Paraná - PR</h2>
                <p className="gallery-date">Publicado em 23 de Março de 2025</p>
                <p className="gallery-description">
                    A descida da serra pela Estrada do Café foi desafiadora. A logistica era não pedalar por boa parte de Curitiba. Então planejei um pedal misto carro/bike/ônibus: deixei o carro no início da serra e pedalei até o Pontal, explorando boa parte das praias paranaenses.
                    Foram mais de 120 km, sendo 80 km de rodovia e o restante pelas praias, combinando trechos urbanos, a emocionante descida da Serra do Mar e a beleza do litoral paranaense. O percurso passa por cenários incríveis, e a sensação de descer a serra é como estar em uma montanha-russa natural, com curvas que revelam vistas de tirar o fôlego.
                    Chegando ao litoral, o destaque ficou por conta da infraestrutura bem planejada para ciclistas e pedestres. Algumas praias contam com ciclofaixas separadas dos carros, tornando o passeio ainda mais seguro e agradável.
                    Seja para desafiar seus limites, apreciar a natureza ou simplesmente curtir um pedal longo e recompensador, essa rota é altamente recomendada!
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Pontal do parana/Ponta (9).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (1).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (2).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (3).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (4).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (5).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (6).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (7).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (8).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (10).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (11).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (12).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (13).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (14).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (15).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Pontal do parana/Ponta (16).webp" alt="Didi Pasqualini- 0" />

            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Galeria Curitiba */}
            <div className="gallery-info">
                <h2 className="gallery-title">Curitiba - PR</h2>
                <p className="gallery-date">Publicado em 22 de Março de 2025</p>
                <p className="gallery-description">
                Explorar Curitiba sobre duas rodas, foi uma experiência incrível! O tempo ajudou, clima de começo de outono, fresquinho, sem muito calor, deixou tudo mais agradável para pedalar e, claro, fazer bons registros. A capital paranaense é um convite ao turismo, e percorrê-la de bicicleta foi um sonho realizado. Aqui tenho boas lembranças, que trazem aquela sensação gostosa de nostalgia. Devo ter pedalado mais de 70 quilômetros, e o melhor; sem gastar um litro de combustível, apenas água no "motor".
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Curitiba/cur16.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur14.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur12.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur1.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur2.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur3.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur4.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur5.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur17.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur6.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur7.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur8.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur9.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur10.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur11.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur13.webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Curitiba/cur15.webp" alt="Didi Pasqualini- 0" />
            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Galeria Santa Olímpia */}
            <div className="gallery-info">
                <h2 className="gallery-title">Santa Olímpia, Piracicaba - SP</h2>
                <p className="gallery-date">Publicado em 20 de Julho de 2024</p>
                <p className="gallery-description">
                A Festa da Polenta de Santa Olimpia é, sem dúvida, um evento que combina desafio, cultura e confraternização. É uma tradição que há muitos anos tem minha presença garantida. Ciclistas de diversas regiões se reúnem para participar deste evento que, além de celebrar a cultura local, proporciona um desafio físico amplo. Ao longo do percurso, encontramos pessoas agradáveis, tornando a pedalada ainda mais especial. Este ano, tive a companhia dos amigos Rodrigo e Eli. Pedalar ao lado de bons amigos é sempre um incentivo extra para superar "as pedras" que encontramos pelo caminho. Outra coisa, e muito importante: recepção dos voluntários é algo a ser destacado, eles são impecáveis em todos os detalhes, desde a organização até a acolhida calorosa. E, claro, a comida é maravilhosa, com a polenta sendo a estrela da festa. Saborear os pratos típicos após um longo pedal é uma recompensa e tanto.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Sta-Olimpia/StaOlimpia (0).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (1).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (2).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (3).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (4).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (6).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (7).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (8).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (9).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (10).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (11).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (12).webp" alt="Didi Pasqualini- 0" />
                <img src="/img/Sta-Olimpia/StaOlimpia (13).webp" alt="Didi Pasqualini- 0" />
       
            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Galeria Rio Pardo */}
            <div className="gallery-info">
                <h2 className="gallery-title">São José do Rio Pardo - SP</h2>
                <p className="gallery-date">Publicado em 17 de Dezembro de 2023</p>
                <p className="gallery-description">
                Este pedal também estava guardado na "gaveta" há um bom tempo. A ideia era percorrer um trecho pequeno de aproximadamente 60 quilômetros em São José do Rio Pardo. Como tudo que está próximo de Minas tem muitas subidas, por aqui não é diferente, então ter cautela na jornada faz toda a diferença. 
                Mas, como os grandes amores valem a pena, aqui não seria menos apaixonante, pois a cidade é cercada por uma atmosfera histórica e cultural maravilhosa. O ponto alto foi a visita à Fazenda Fortaleza, com sua estrutura imponente composta por casarões, terreiros, cachoeiras, usina hidrelétrica e áreas agrícolas, que refletem a arquitetura típica das fazendas que foram essenciais para o desenvolvimento da economia brasileira, principalmente no contexto da produção de café. Acredito que está tudo contado. Rio Pardo tem muito a oferecer, e a certeza de voltar é garantida. 
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Rio-pardo/Rio-pardo (0).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (1).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (2).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (3).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (4).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (5).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (6).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (7).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (8).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (9).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (10).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (11).webp" alt="Didi pasqualini" />
                <img src="/img/Rio-pardo/Rio-pardo (12).webp" alt="Didi pasqualini" />
            </div>

             {/* Linha Suave */}
             <hr className="divider" />

            {/* Brotas/Torrinha */}
            <div className="gallery-info">
                <h2 className="gallery-title">Brotas/Torrinha - SP</h2>
                <p className="gallery-date">Publicado em 14/10/2023</p>
                <p className="gallery-description">
                Todos os pedais têm uma história, mas este foi ao som e "companhia" de Lulu, "foi bom ter ver de novo aqui... Surpresa certa te encontrar... o que for da vida não nos deterá". Simples, porém profunda a metáfora. Isso porque já estive em Brotas em um tour com o grande amigo Rodrigo Torres. Uma jornada épica de 160 quilômetros. Rever este pedal, agora e com outras ideias na cabeça, implica em entender que os eventos da nossa vida são realmente influenciados por fatores imprevisíveis. Tudo tem uma razão e um propósito. Por isso é que eu estou aqui compartilhando este momento. A aceitação da incerteza, a maneira de lidar com a complexidade realmente estão além do controle e imprevisibilidade da vida. Então, "... não há lógica no que o acaso decidir". Me dobro em reverência e respeito ao mistério, mas sem crendices e deuses, sou mais aquele que aprecia a complexidade e diversidade do mundo como modelos de crescimento. Tá contado. Beijos a todos.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Brotas-torrinha/brotas-torrinha-00.webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (1).webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (2).webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (3).webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (4).webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (5).webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (6).webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (7).webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (8).webp" alt="Didi pasqualini" />
                <img src="/img/Brotas-torrinha/Brotas-torrinha (9).webp" alt="Didi pasqualini" />
    
            </div>

             {/* Linha Suave */}
             <hr className="divider" />

            {/* Analândia */}
            <div className="gallery-info">
                <h2 className="gallery-title">Analândia - SP</h2>
                <p className="gallery-date"> Publicado em 19/08/2023</p>
                <p className="gallery-description">
                Este pedal em Analândia é uma homenagem à Frida Kahlo, cujo o quadro, título da poesia, inspirou a música "Viva la Vida" do Coldplay, repleta de significados e referências. No entanto, o que realmente se destaca nesta história é a inspiração que a pintura de Kahlo nos proporciona: a ideia de que nunca é tarde para se redescobrir. Além disso, ela nos ensina uma importante lição: todas as formas de poder são inúteis, uma vez que a natureza segue leis eternas, concedendo vida, mas também retirando-a. Quando combinamos arte com poesia, isso se torna um elemento revolucionário em nossa alma. De qualquer forma, essa conexão que me inspira ressoa como uma canção em homenagem à vida, que recomeça a cada dia. Antes de concluir, não posso deixar de mencionar o quão incrível foi esse passeio de pedal e como a companhia das amigas Andrea e Silene tornou o dia ainda mais especial. A você e a todos que amam a vida livre, "Viva la Vida"
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Ana/ana0.webp" alt="Didi pasqualini" />
                <img src="/img/Ana/ana1.webp" alt="Didi pasqualini" />
                <img src="/img/Ana/ana3.webp" alt="Didi pasqualini" />
                <img src="/img/Ana/ana4.webp" alt="Didi pasqualini" />
                <img src="/img/Ana/ana5.webp" alt="Didi pasqualini" />
                <img src="/img/Ana/ana6.webp" alt="Didi pasqualini" />
                    
            </div>

            

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Cananéia */}
            <div className="gallery-info">
                <h2 className="gallery-title">Cananéia - SP</h2>
                <p className="gallery-date"> Publicado em 16/09/2023</p>
                <p className="gallery-description">
                Foram 144 quilômetros de estrada e praia que se estenderam por praticamente toda a extensão da Ilha Comprida, culminando na chegada a Cananéia. Essa jornada de pedal foi, sem dúvida, exaustiva, mas também incrivelmente emocionante, repleta de paisagens deslumbrantes e experiências memoráveis ao longo do caminho.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Cananeia/CAN (1).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (2).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (3).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (4).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (5).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (6).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (7).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (8).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (9).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (10).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (11).webp" alt="Didi pasqualini" />
                <img src="/img/Cananeia/CAN (12).webp" alt="Didi pasqualini" />
                    
            </div>

             {/* Linha Suave */}
             <hr className="divider" />

            {/* Ilha Comprida */}
            <div className="gallery-info">
                <h2 className="gallery-title">Ilha Comprida - SP</h2>
                <p className="gallery-date"> Publicado em 17/09/2023</p>
                <p className="gallery-description">
                Foram 144 quilômetros de estrada e praia que se estenderam por praticamente toda a extensão da Ilha Comprida, culminando na chegada a Cananéia. Essa jornada de pedal foi, sem dúvida, exaustiva, mas também incrivelmente emocionante, repleta de paisagens deslumbrantes e experiências memoráveis ao longo do caminho.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Ilha-comprida/IC (1).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (2).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (3).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (4).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (5).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (6).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (7).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (8).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (9).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (10).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (11).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-comprida/IC (12).webp" alt="Didi pasqualini" />
                    
            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* Ilha Bela*/}
            <div className="gallery-info">
                <h2 className="gallery-title">Ilhabela/Castelhanos</h2>
                <p className="gallery-date"> Publicado em 14/10/2023</p>
                <p className="gallery-description">
                O percurso entre São Sebastião à deslumbrante Praia de Castelhanos em Ilhabela pode ser tecnicamente curto, com aproximadamente 42 quilômetros de extensão de onde eu parti, mas desafia os ciclistas com mais de 1600 metros de elevação acumulada. Contudo, cada pedalada nesse trajeto é recompensada por paisagens espetaculares, tornando-o uma jornada que transcende a mera aventura. O parque, em seu entorno, revela-se como um oásis de maravilhas naturais, proporcionando uma experiência verdadeiramente inesquecível para o ciclista que deseja estar junto à natureza.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Ilha-bela/ilha (1).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-bela/ilha (2).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-bela/ilha (3).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-bela/ilha (4).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-bela/ilha (5).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-bela/ilha (6).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-bela/ilha (7).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-bela/ilha (8).webp" alt="Didi pasqualini" />
                <img src="/img/Ilha-bela/ilha (9).webp" alt="Didi pasqualini" />
                    
            </div>

            {/* Linha Suave */}
            <hr className="divider" />

            {/* São Sebastião */}
            <div className="gallery-info">
                <h2 className="gallery-title">São Sebastião - SP</h2>
                <p className="gallery-date"> Publicado em 13/10/2023</p>
                <p className="gallery-description">
                São Sebastião oferece um cenário único, onde o passado se entrelaça harmoniosamente com o moderno. Com seus casarões com mais de 300 anos à beira-mar e um charmoso calçadão convidativo, o local proporciona o cenário perfeito para passeios de bike pelas ciclovias e momentos de descontração nos aconchegantes bares na orla. Pedalar enquanto aprecia a paisagem deslumbrante e trombar pessoas bonitas foi uma experiência verdadeiramente gratificante. Estava há tempos na minha agenda.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/SB/SB (1).webp" alt="Didi pasqualini" />
                <img src="/img/SB/SB (2).webp" alt="Didi pasqualini" />
                <img src="/img/SB/SB (3).webp" alt="Didi pasqualini" />
                <img src="/img/SB/SB (4).webp" alt="Didi pasqualini" />
                <img src="/img/SB/SB (5).webp" alt="Didi pasqualini" />
                <img src="/img/SB/SB (6).webp" alt="Didi pasqualini" />
                    
            </div>

            {/* Linha Suave */}
            <hr className="divider" />


            {/* Horto Florestal - Rio Claro SP */}
            <div className="gallery-info">
                <h2 className="gallery-title">Horto Florestal - Rio Claro SP</h2>
                <p className="gallery-date"> Publicado em 05/03/2023</p>
                <p className="gallery-description">
                Para quem mora em Rio Claro, SP, o Horto Florestal é como uma extensão de casa. Explorar a floresta de bike e depois seguir para um café aconchegante em Cascalho é uma experiência verdadeiramente reconfortante. A Andrea Castanho tem sido uma parceira incrível nesses pedais e, como ela costuma exclamar, "Ai que tudoooooooooooooooo!". Sem dúvida, compartilho totalmente desse sentimento com ela.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Horto/HF-1.jpg" alt="Didi pasqualini" />
                <img src="/img/Horto/HF-2.jpg" alt="Didi pasqualini" />
                <img src="/img/Horto/HF-3.jpg" alt="Didi pasqualini" />
                <img src="/img/Horto/HF-4.jpg" alt="Didi pasqualini" />
                <img src="/img/Horto/HF-5.jpg" alt="Didi pasqualini" />
                <img src="/img/Horto/HF-6.jpg" alt="Didi pasqualini" />
                    
            </div>

            {/* Linha Suave */}
            <hr className="divider" />


            {/* Pico do Gavião - SP/Minas */}
            <div className="gallery-info">
                <h2 className="gallery-title">Pico do Gavião - SP/Minas</h2>
                <p className="gallery-date"> Publicado em 01/06/2018</p>
                <p className="gallery-description">
                Em 2018, meu amigo Rodrigo Torres e eu embarcamos em uma jornada de pedal incrível. Partindo de Rio Claro, percorremos 157 quilômetros ao longo de três dias inesquecíveis. O desafio foi potencializado devido ao peso extra que carregávamos em nossas bicicletas. No entanto, como diz o ditado, "o que é difícil, vale a pena." E as fotos que capturamos durante a viagem são a prova viva disso.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/pico/pgav (1).webp" alt="Didi pasqualini" />
                <img src="/img/pico/pgav (2).webp" alt="Didi pasqualini" />
                <img src="/img/pico/pgav (3).webp" alt="Didi pasqualini" />
                <img src="/img/pico/pgav (4).webp" alt="Didi pasqualini" />
                <img src="/img/pico/pgav (5).webp" alt="Didi pasqualini" />
                <img src="/img/pico/pgav (6).webp" alt="Didi pasqualini" />
                <img src="/img/pico/pgav (7).webp" alt="Didi pasqualini" />
                <img src="/img/pico/pgav (8).webp" alt="Didi pasqualini" />
                <img src="/img/pico/pgav (9).webp" alt="Didi pasqualini" />    
            </div>

            {/* Linha Suave */}
            <hr className="divider" />


            {/* Caminho dos Anjos - MG */}
            <div className="gallery-info">
                <h2 className="gallery-title">Caminho dos Anjos - MG</h2>
                <p className="gallery-date"> Publicado em 14/06/2015</p>
                <p className="gallery-description">
                Essa incrível jornada por diversas cidades históricas em Minas Gerais foi compartilhada com meu amigo Erik Aceiro. Foi uma aventura com nossas bikes repleta de descobertas, encontros memoráveis e alguns desafios ao longo do caminho. Percorremos um trecho significativo da icônica Estrada Real, e essa experiência se tornou inesquecível, permanecendo viva em nossas memórias até hoje. Valeu "Erikão".
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Caminho-anjos/CA (1).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (2).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (3).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (4).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (5).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (6).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (7).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (8).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (9).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (11).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (12).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (13).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (14).webp" alt="Didi pasqualini" />
                <img src="/img/Caminho-anjos/CA (15).webp" alt="Didi pasqualini" />
              
            </div>

             {/* Linha Suave */}
             <hr className="divider" />


            {/* Ponte do Esqueleto - Limeira - SP */}
            <div className="gallery-info">
                <h2 className="gallery-title">Ponte do Esqueleto - Limeira - SP</h2>
                <p className="gallery-date"> Publicado em 10/07/2021</p>
                <p className="gallery-description">
                Neste local, reza a lenda, foi erguido para atender ao ambicioso projeto de expansão de uma linha de trem de alta velocidade para o Interior. No entanto, o projeto não foi concluído e o que restou é carinhosamente chamado pelos ciclistas de "Ponte do Esqueleto". Essa imponente estrutura pode ser avistada por quem trafega pela Rodovia dos Bandeirantes, em Limeira. A sensação de pedalar aqui provoca aquele "friozinho", pois um dos lados da ponte não possui guarda-corpo, proporcionando uma experiência única. O trajeto como um todo é repleto de beleza e emoção, desde a subida do Morro Azul até as trilhas desafiadoras que se estendem além da ponte.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/esq/eskleto (0).webp" alt="Didi pasqualini" />
                <img src="/img/esq/eskleto (1).webp" alt="Didi pasqualini" />
                <img src="/img/esq/eskleto (2).webp" alt="Didi pasqualini" />
                <img src="/img/esq/eskleto (3).webp" alt="Didi pasqualini" />
                <img src="/img/esq/eskleto (4).webp" alt="Didi pasqualini" />
                <img src="/img/esq/eskleto (5).webp" alt="Didi pasqualini" />
            </div>
            {/* Linha Suave */}
            <hr className="divider" />


            {/* Gruta Cantagalo - Ipeúna - SP */}
            <div className="gallery-info">
                <h2 className="gallery-title">Gruta Cantagalo - Ipeúna - SP</h2>
                <p className="gallery-date"> Publicado em 10/02/2018</p>
                <p className="gallery-description">
                Existem pedais que nós repetimos incansavelmente, e o Cantagalo em Ipeúna é definitivamente um deles. Fui levado a essa incrível trilha pela generosidade do meu amigo e companheiro de pedal, Alexandre D'bronzo, um ser humano dedicado e de um coração verdadeiramente único. Aliás, a grande maioria das nossas aventuras de pedal contou com a participação da nossa galera fiel, incluindo o Rodrigo, Ronei, João, Gasbarro, e as maravilhosas Andrea e Bia. Juntos, compartilhamos experiências que enriquecem nossas vidas e fortalecem nossa amizade a cada pedalada.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Gruta/gruta (1).webp" alt="Didi pasqualini" />
                <img src="/img/Gruta/gruta (2).webp" alt="Didi pasqualini" />
                <img src="/img/Gruta/gruta (3).webp" alt="Didi pasqualini" />
                <img src="/img/Gruta/gruta (4).webp" alt="Didi pasqualini" />
                <img src="/img/Gruta/gruta (5).webp" alt="Didi pasqualini" />
            </div>

             {/* Linha Suave */}
             <hr className="divider" />


            {/* Aparecida - SP */}
            <div className="gallery-info">
                <h2 className="gallery-title">Aparecida - SP</h2>
                <p className="gallery-date"> Publicado em 01/04/2015</p>
                <p className="gallery-description">
                Muitas vezes, a chegada não representa o fim, mas o reaprendizado de um monte de coisa. Acredito que Paulo Coelho tenha inspirado muita gente a embarcar em peregrinações. Ao longo da minha vida, fiz muitas delas, a pé ou de bicicleta. A minha aventura de 2015 foi particularmente emocionante. Percorri 415 quilômetros sozinho, em busca de autoencontro, reflexão e harmonia. A beleza da pedalada mística ao longo do Caminho da Fé não me tornou uma pessoa melhor ou pior, e eu não encontrei o que "procuro". Pois na vida, muitas vezes, não encontramos aquilo que não existe dentro de nós.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Caminhofe/caminho_1.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_2.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_3.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_4.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_5.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_6.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_7.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_8.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_9.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_10.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_11.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_12.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_13.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_14.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_15.webp" alt="Didi pasqualini" />
                <img src="/img/Caminhofe/caminho_16.webp" alt="Didi pasqualini" />

            </div>

            {/* Linha Suave */}
            <hr className="divider" />


            {/* Piracicaba SP */}
            <div className="gallery-info">
                <h2 className="gallery-title">Piracicaba - SP</h2>
                <p className="gallery-date"> Publicado em 10/02/2017</p>
                <p className="gallery-description">
                Essa pequena porção de terra, conhecida como Godinhos, no Município de Piracicaba, SP, foi meu embarque no mundo, na casa que apareço de bike. Este lugar tem uma importância imensurável em minha vida. Me leva a uma conexão entre o real e imaginário. Foi aqui que minha mãe me deu o nome de Diógenes, em homenagem ao famoso filósofo. Minha família possuía uma propriedade rural onde abrigou três gerações de descendentes de italianos que vieram em busca de uma vida melhor no Brasil. Foi neste ambiente rústico, desprovido de energia elétrica e outras conveniências, que minha conexão com este mundo começou.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Godinho/god (1).webp" alt="Didi pasqualini" />
                <img src="/img/Godinho/god (2).webp" alt="Didi pasqualini" />
                <img src="/img/Godinho/god (3).webp" alt="Didi pasqualini" />
                <img src="/img/Godinho/god (4).webp" alt="Didi pasqualini" />
               
            </div>
             {/* Linha Suave */}
             <hr className="divider" />
            {/* Paraitinga - SP */}
            <div className="gallery-info">
                <h2 className="gallery-title">São Luís do Paraitinga - SP</h2>
                <p className="gallery-date"> Publicado em 24/06/2017</p>
                <p className="gallery-description">
                São Luiz do Paraitinga, localizada no Vale do Paraíba, aqui em São Paulo, foi um pedal muito interessante. Trilhas, cachoeiras e muita estrada. Fiz este pedal na companhia dos amigos Erick e Alessandro. A cidade fica no topo da Serra do Mar e foi rota da coroa portuguesa. História pura.
                </p>
            </div>

            <div className="gallery">
                <img src="/img/Paraitinga/parai (1).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (2).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (3).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (4).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (5).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (6).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (7).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (8).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (9).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (10).webp" alt="Didi pasqualini" />
                <img src="/img/Paraitinga/parai (11).webp" alt="Didi pasqualini" />
               
            </div>
            {/* Botão Fixo no Rodapé */}
                <div className="footer">
                    <button className="scroll-to-top-fixed" onClick={scrollToTop}>
                        <i className="fas fa-arrow-up"></i> 
                    </button>
                </div>

            {/* Linha Suave */}
            <hr className="dividerfim" />
        </div>
    );
}

export default About;

"use client";

import MaintenanceCard from "./MaintenanceCard";
import "./maintenance.css";
import MaintenanceItem from "./MaintenanceItem";

const categories = [
  {
    title: "Elementos rodantes",
    description: "Pneus, câmaras, rodas, cubos...",
    progress: "4 / 6 itens em dia",
    status: "EM DIA",
    statusType: "ok",
    icon: "rodantes.svg",
    href: "/admin/manutencao/elementos-rodantes",
    components: [],
  },

  {
    title: "Freios",
    description: "Pastilhas, discos, cabos, óleo...",
    progress: "3 / 5 itens em dia",
    status: "ATENÇÃO",
    statusType: "attention",
    icon: "freios.svg",
    components: [],
  },

  {
    title: "Transmissão",
    description: "Corrente, K7, câmbio, cabos...",
    progress: "4 / 7 itens em dia",
    status: "ATENÇÃO",
    statusType: "attention",
    icon: "transmissao.svg",

    components: [
      {
        name: "Corrente",
        service: "Última troca",
        date: "20/08/2026",
        mileage: "3.800 km",
        sinceLabel: "Desde a troca",
        since: "64 km",
        next: "4.500 km",
        status: "EM DIA",
        statusType: "ok",
        icon: "corrente.svg",
      },

      {
        name: "Cassete (K7)",
        service: "Última troca",
        date: "10/06/2026",
        mileage: "3.200 km",
        sinceLabel: "Desde a troca",
        since: "664 km",
        next: "5.000 km",
        status: "ATENÇÃO",
        statusType: "attention",
        icon: "cassete.svg",
      },

      {
        name: "Câmbio traseiro",
        service: "Última manutenção",
        date: "25/05/2026",
        mileage: "2.900 km",
        sinceLabel: "Desde a manutenção",
        since: "964 km",
        next: "6.000 km",
        status: "EM DIA",
        statusType: "ok",
        icon: "cambio.svg",
      },

      {
        name: "Trocador",
        service: "Última manutenção",
        date: "25/05/2026",
        mileage: "2.900 km",
        sinceLabel: "Desde a manutenção",
        since: "964 km",
        next: "6.000 km",
        status: "EM DIA",
        statusType: "ok",
        icon: "trocador.svg",
      },

      {
        name: "Cabos e conduítes",
        service: "Última troca",
        date: "15/03/2026",
        mileage: "2.200 km",
        sinceLabel: "Desde a troca",
        since: "1.664 km",
        next: "3.000 km",
        status: "ATENÇÃO",
        statusType: "attention",
        icon: "cabos.svg",
      },
    ],
  },

  {
    title: "Contato e direção",
    description: "Guidão, mesa, selim, canote...",
    progress: "5 / 6 itens em dia",
    status: "EM DIA",
    statusType: "ok",
    icon: "direcao.svg",
    components: [],
  },

  {
    title: "Suspensão",
    description: "Suspensão dianteira, óleo, vedações...",
    progress: "1 / 4 itens em dia",
    status: "NECESSÁRIO",
    statusType: "needed",
    icon: "suspensao.svg",
    components: [],
  },

  {
    title: "Outros / revisão geral",
    description: "Outros itens e revisão completa",
    progress: "0 / 2 itens em dia",
    status: "SEM HISTÓRICO",
    statusType: "empty",
    icon: "manutencao.svg",
    components: [],
  },
];

export default function MaintenanceDashboard() {
  return (
    <main className="maintenance-page">

      <section className="maintenance-mileage">
        <div className="maintenance-mileage-info">
          <span>QUILOMETRAGEM ATUAL</span>

          <strong>
            3.864 <small>km</small>
          </strong>

          <p>Atualizada em 25/08/2026</p>
        </div>

        <img
          src="/img/icons/bicicleta.svg"
          alt="Bicicleta"
        />
      </section>

      <section className="maintenance-summary">
        <h2>RESUMO GERAL</h2>

        <div className="maintenance-summary-grid">

          <div className="summary-item summary-ok">
            <span>✓</span>
            <strong>12</strong>
            <p>Em dia</p>
            <small>itens</small>
          </div>

          <div className="summary-item summary-attention">
            <span>△</span>
            <strong>5</strong>
            <p>Atenção</p>
            <small>itens</small>
          </div>

          <div className="summary-item summary-needed">
            <span>▲</span>
            <strong>2</strong>
            <p>Necessário</p>
            <small>itens</small>
          </div>

          <div className="summary-item summary-empty">
            <span>?</span>
            <strong>3</strong>
            <p>Sem histórico</p>
            <small>itens</small>
          </div>

        </div>
      </section>

      <section className="maintenance-categories">
        <h2>CATEGORIAS</h2>

        <div className="maintenance-category-list">
          {categories.map((category) => (
            <MaintenanceCard
              key={category.title}
              {...category}
            />
          ))}
        </div>
      </section>

      <section className="maintenance-history">
        <h2>COMPONENTES</h2>

        <div className="maintenance-item-list">
            {categories
            .flatMap((category) => category.components)
            .map((item) => (
                <MaintenanceItem
                key={item.name}
                {...item}
                />
            ))}
        </div>
        </section>
      
      <button
        className="maintenance-add"
        aria-label="Registrar manutenção"
      >
        <span>+</span>
        <small>Registrar<br />manutenção</small>
      </button>

    </main>
  );
}
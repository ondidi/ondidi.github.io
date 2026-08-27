import MaintenanceItem from "./MaintenanceItem";
import "./maintenance.css";
import Link from "next/link";

const components = [
  {
    name: "Pneu dianteiro",
    service: "Última troca",
    date: "13/06/2026",
    mileage: "65.344 km",
    sinceLabel: "Desde a troca",
    since: "2.530 km",
    next: "Avaliar desgaste",
    status: "EM DIA",
    statusType: "ok" as const,
    icon: "pneu.svg",
  },
  {
    name: "Pneu traseiro",
    service: "Última troca",
    date: "13/06/2026",
    mileage: "65.344 km",
    sinceLabel: "Desde a troca",
    since: "2.530 km",
    next: "Avaliar desgaste",
    status: "EM DIA",
    statusType: "ok" as const,
    icon: "pneu.svg",
  },
  {
    name: "Câmara dianteira",
    service: "Última troca",
    date: "13/06/2026",
    mileage: "65.344 km",
    sinceLabel: "Desde a troca",
    since: "2.530 km",
    next: "Avaliar condição",
    status: "EM DIA",
    statusType: "ok" as const,
    icon: "camara.svg",
  },
  {
    name: "Câmara traseira",
    service: "Última troca",
    date: "13/06/2026",
    mileage: "65.344 km",
    sinceLabel: "Desde a troca",
    since: "2.530 km",
    next: "Avaliar condição",
    status: "EM DIA",
    statusType: "ok" as const,
    icon: "camara.svg",
  },
  {
    name: "Roda dianteira",
    service: "Última manutenção",
    date: "25/05/2026",
    mileage: "64.980 km",
    sinceLabel: "Desde a manutenção",
    since: "2.894 km",
    next: "Inspeção",
    status: "EM DIA",
    statusType: "ok" as const,
    icon: "roda.svg",
  },
  {
    name: "Roda traseira",
    service: "Última manutenção",
    date: "25/05/2026",
    mileage: "64.980 km",
    sinceLabel: "Desde a manutenção",
    since: "2.894 km",
    next: "Inspeção",
    status: "ATENÇÃO",
    statusType: "attention" as const,
    icon: "roda.svg",
  },
];

export default function ElementsRodantes() {
  return (
    <main className="maintenance-page">

      <div className="maintenance-detail-header">
        <a href="/admin/manutencao">‹</a>

        <div>
          <span>MANUTENÇÃO</span>
          <h1>Elementos rodantes</h1>
        </div>
      </div>

      <p className="maintenance-detail-description">
        Pneus, câmaras, rodas e cubos
      </p>

      <div className="maintenance-category-summary">
        <strong>4 / 6</strong>
        <span>itens em dia</span>
      </div>

      <section className="maintenance-history">
        <h2>COMPONENTES</h2>

        <div className="maintenance-item-list">
          {components.map((item) => (
            <Link
            key={item.name}
            href={`/admin/manutencao/elementos-rodantes/${item.name
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            className="maintenance-item-link"
            >
            <MaintenanceItem {...item} />
            </Link>
          ))}
        </div>
      </section>

      <button
        className="maintenance-add"
        aria-label="Adicionar componente"
      >
        <span>+</span>
        <small>
          Adicionar<br />
          componente
        </small>
      </button>

    </main>
  );
}
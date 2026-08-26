interface MaintenanceItemProps {
  name: string;
  service: string;
  date: string;
  mileage: string;
  sinceLabel: string;
  since: string;
  next: string;
  status: string;
  statusType: string;
  icon: string;
}

export default function MaintenanceItem({
  name,
  service,
  date,
  mileage,
  sinceLabel,
  since,
  next,
  status,
  statusType,
  icon,
}: MaintenanceItemProps) {
  return (
    <article className="maintenance-item">
      <div className={`maintenance-item-icon ${statusType}`}>
        <img
          src={`/img/icons/${icon}`}
          alt=""
        />
      </div>

      <div className="maintenance-item-content">

        <div className="maintenance-item-header">
          <h3>{name}</h3>

          <span className={`maintenance-status ${statusType}`}>
            {status}
          </span>
        </div>

        <div className="maintenance-item-data">

          <div>
            <span>{service}</span>
            <strong>{date}</strong>
            <strong>{mileage}</strong>
          </div>

          <div>
            <span>{sinceLabel}</span>
            <strong>{since}</strong>

            <span>Próxima revisão</span>
            <strong>{next}</strong>
          </div>

        </div>
      </div>

      <span className="maintenance-arrow">›</span>
    </article>
  );
}
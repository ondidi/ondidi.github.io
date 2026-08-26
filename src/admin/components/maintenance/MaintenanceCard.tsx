import Link from "next/link";

interface MaintenanceCardProps {
  title: string;
  description: string;
  progress: string;
  status: string;
  statusType: string;
  icon: string;
  href?: string;
}

export default function MaintenanceCard({
  title,
  description,
  progress,
  status,
  statusType,
  icon,
  href,
}: MaintenanceCardProps) {
  const content = (
    <>
      <div className={`maintenance-card-icon ${statusType}`}>
        <img
          src={`/img/icons/${icon}`}
          alt=""
        />
      </div>

      <div className="maintenance-card-content">
        <div className="maintenance-card-header">
          <h3>{title}</h3>

          <span className={`maintenance-status ${statusType}`}>
            {status}
          </span>
        </div>

        <p>{description}</p>

        <small>{progress}</small>
      </div>

      <span className="maintenance-arrow">›</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="maintenance-card">
        {content}
      </Link>
    );
  }

  return (
    <article className="maintenance-card">
      {content}
    </article>
  );
}
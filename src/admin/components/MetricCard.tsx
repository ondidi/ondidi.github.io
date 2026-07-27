import "../styles/MetricCard.css";

interface MetricCardProps {
  icon: string;
  title: string;
  value: number;
  growth: string;
}

export default function MetricCard({
  icon,
  title,
  value,
  growth,
}: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="metric-icon">
        <img
          src={icon}
          alt={title}
        />
      </div>

      <div className="metric-content">
        <h3>{title}</h3>

        <h2>{value}</h2>

        <span>{growth}</span>
      </div>
    </div>
  );
}
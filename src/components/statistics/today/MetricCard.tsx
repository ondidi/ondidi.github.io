import { Bike } from "lucide-react";
import styles from "./MetricCard.module.css";

interface MetricCardProps {
  label: string;
  value: string;
  unit: string;
  icon?: React.ReactNode;
}

export default function MetricCard({
  label,
  value,
  unit,
  icon,
}: MetricCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon ?? <Bike size={28} strokeWidth={1.8} />}
      </div>

      <div className={styles.content}>
        <span className={styles.label}>{label}</span>

        <div className={styles.valueRow}>
          <span className={styles.value}>{value}</span>
          <span className={styles.unit}>{unit}</span>
        </div>
      </div>
    </div>
  );
}
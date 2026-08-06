import styles from "./OverviewCard.module.css";

type Props = {

    icon: React.ReactNode;

    title: string;

    subtitle?: string;

    value: string | number;

    unit?: string;

    className?: string;

};

export default function OverviewCard({

    icon,
    title,
    subtitle,
    value,
    unit,
    className

}: Props) {

    return (

        <article className={`${styles.card} ${className ?? ""}`}>

            <div className={styles.icon}>
                {icon}
            </div>

            <div className={styles.content}>

                <div className={styles.heading}>

                    <span className={styles.title}>
                        {title}
                    </span>

                    {subtitle && (
                        <span className={styles.subtitle}>
                            {subtitle}
                        </span>
                    )}

                </div>

                <strong className={styles.value}>
                    {value}
                </strong>

                {unit && (
                    <span className={styles.unit}>
                        {unit}
                    </span>
                )}

            </div>

        </article>

    );

}
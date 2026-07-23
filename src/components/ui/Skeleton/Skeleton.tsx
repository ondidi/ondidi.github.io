import styles from "./Skeleton.module.css";

type SkeletonProps = {
    width?: string;
    height?: string;
    radius?: string;
    className?: string;
};

export default function Skeleton({
    width = "100%",
    height = "20px",
    radius = "12px",
    className = "",
}: SkeletonProps) {
    return (
        <div
            className={`${styles.skeleton} ${className}`}
            style={{
                width,
                height,
                borderRadius: radius,
            }}
        />
    );
}
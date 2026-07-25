import styles from "./LoadingDots.module.css";

export default function LoadingDots() {
    return (
        <div className={styles.loading}>
            <span />
            <span />
            <span />
        </div>
    );
}
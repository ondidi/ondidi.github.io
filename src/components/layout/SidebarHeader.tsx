import styles from "./SidebarHeader.module.css";

export default function SidebarHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.logo}>Ondids</h1>

        <p className={styles.subtitle}>
          Seja bem-vindo
        </p>
      </div>
    </header>
  );
}
import styles from "./Sidebar.module.css";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarAdventureList from "./SidebarAdventureList";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SidebarHeader />

      <SidebarMenu />

      <div className={styles.list}>
        <SidebarAdventureList />
      </div>

      <SidebarFooter />
    </aside>
  );
}
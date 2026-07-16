import styles from "./Sidebar.module.css";

import SidebarContent from "./SidebarContent";

export default function Sidebar() {

    return (

        <aside className={styles.sidebar}>

            <SidebarContent />

        </aside>

    );

}
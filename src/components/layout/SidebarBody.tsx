import SidebarMenu from "./SidebarMenu";
import SidebarAdventureList from "./SidebarAdventureList";
import SidebarFooter from "./SidebarFooter";

import styles from "./Sidebar.module.css";

export default function SidebarBody() {

    return (

        <>

            <SidebarMenu />

            <div className={styles.list}>

                <SidebarAdventureList />

            </div>

            <SidebarFooter />

        </>

    );

}
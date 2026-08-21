import SidebarHeader from "./SidebarHeader";
import SidebarAdventureList from "./SidebarAdventureList";

import styles from "./Sidebar.module.css";

export default function SidebarBodyMobile() {

    return (

        <>

            <SidebarHeader showLogo={false} />

            <h2 className={styles.title}>
                AVENTURAS
            </h2>

            <div className={styles.list}>

                <SidebarAdventureList />

            </div>

        </>

    );

}
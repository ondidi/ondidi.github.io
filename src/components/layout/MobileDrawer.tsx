"use client";

import SidebarBodyMobile from "./SidebarBodyMobile";

import styles from "./MobileDrawer.module.css";

type MobileDrawerProps = {
    open: boolean;
    onClose: () => void;
};

export default function MobileDrawer({
    open,
    onClose,
}: MobileDrawerProps) {

    return (

        <>

            <div
                className={`${styles.overlay} ${!open ? styles.hidden : ""}`}
                onClick={onClose}
            />

            <aside
                className={`${styles.drawer} ${open ? styles.open : ""}`}
            >

                <SidebarBodyMobile />

            </aside>

        </>

    );

}
import React from "react";
import { Core } from "./subcomponents/menu-item";

export function Menu() {
    return(
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <Core core="Core" dash="Dashboard" layout="Layouts" addons="Addons" page="Pages" charte="Charts" Interface="Interfaces" table="Tables"></Core>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
        </>
    )
}
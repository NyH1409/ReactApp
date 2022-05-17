import React from "react";


export function Crumb() {
    return(
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li className="breadcrumb-item active">Tables</li>
        </ol>
    )
}
import React from "react";


export function Crumb(props) {
    let{ item1, item2 } = props;
    return(
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item"><a href="index.html">{item1}</a></li>
            <li className="breadcrumb-item active">{item2}</li>
        </ol>
    )
}
import React from "react";


export function Card(props) {
    const { children }=props
    const title = "DataTable Example"
    return(
        <>
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    {title}
                </div>
                <div className="card-body">
                    <table id="datatablesSimple">
                        {children}
                    </table>
                </div>
            </div>
        </>
    )
}
import React from "react";

export function Tr(props){
    let {name, job, country, age, date, salary}= props;
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{job}</td>
                <td>{country}</td>
                <td>{age}</td>
                <td>{date}</td>
                <td>{salary}</td>
            </tr>
        </>
    )
}
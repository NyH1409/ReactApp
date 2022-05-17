import React, { Component } from "react";

export class Tfoot extends Component{
    render(){
        return(
            <>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </tfoot>
            </>
        )
    }
}
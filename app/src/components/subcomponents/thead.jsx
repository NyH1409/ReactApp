import React, { Component } from "react";


export class Thead extends Component{
    render(){
        return(
            <>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </thead>
            </>
        )
    }
}
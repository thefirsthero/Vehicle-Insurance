import React, {useEffect, useState} from "react";
import Table from "../../table/table";


export default ()=>{

    
    return(
        <div>
            <h3>Your Policies</h3>
            
            <div style={{ paddingLeft: "450px", paddingTop: "10px" }}>
                <Table/>
            </div>
        </div>
    )
}
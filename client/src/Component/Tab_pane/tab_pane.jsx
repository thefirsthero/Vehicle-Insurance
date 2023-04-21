
import React from "react";
import "./tab_pane.css"
import Whatweoffer from "./tab_data/whatWeOffer";
import Dashboard from "./tab_data/dashboard";
import Head from "../header_and_footer/header";
import Foot from "../header_and_footer/footer";
import { Link } from "react-router-dom";

export default function Tab_Pane(){
    return(
        <div >
            <Head user="Emmanuel Tsosi" />
            
            <br></br>
            <ul class="nav nav-pills nav-stacked col-md-3"style={{backgroundColor:"white"}}>
                <li class="active"><a data-toggle="tab" href="#home">Dashboard</a></li>
                <li><a data-toggle="tab" href="#menu1">What We Offer</a></li>
                <hr style={{height:"2px",backgroundColor:"rgb(7, 143, 201)"}}></hr>
                
                <h5>Apply for Policy</h5>
                <Link to ='/'>
                    <h5 onClick={()=>{
                        localStorage.clear()
                    }}>Log out</h5>
                </Link>
                
            </ul>

            <div class="tab-content" style={{backgroundColor:"white"}}>
                <div id="home" class="tab-pane fade in active">
                    <Dashboard/>
                </div>
                <div id="menu1" class="tab-pane fade">
                    <Whatweoffer/>
                </div>
            </div>

            <Foot/>
    </div>
    )
}
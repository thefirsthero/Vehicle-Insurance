
import React from "react";
import { useEffect, useState } from 'react'
import "./tab_pane.css"
import Whatweoffer from "./tab_data/whatWeOffer";
import Dashboard from "./tab_data/dashboard";
import Head from "../header_and_footer/header";
import Foot from "../header_and_footer/footer";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Tab_Pane(){
    const history = useHistory();
    const [token, setToken] = useState('');

    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
    });

    const handleLogout = () => {
        sessionStorage.clear();
        history.push('/');
    }
    return(
        <>
        {token &&
            <div >
            <Head user="Welcome User!" />
            
            <br></br>
            <ul class="nav nav-pills nav-stacked col-md-3"style={{backgroundColor:"white"}}>
                <li class="active"><a data-toggle="tab" href="#home">Dashboard</a></li>
                <li><a data-toggle="tab" href="#menu1">What We Offer</a></li>
                <hr style={{height:"2px",backgroundColor:"rgb(7, 143, 201)"}}></hr>
                
                <Link to ='/policysignup'>
                    <h5>Apply for Policy</h5>
                </Link>

                <Link to ='/faq'>
                    <h5>FAQ's</h5>
                </Link>
                
                <h5 onClick={handleLogout}>Log out</h5>
                
            </ul>

            <div class="tab-content" >
                <div id="home" class="tab-pane fade in active" style={{backgroundColor:"white", color:"black"}}>
                    <Dashboard/>
                </div>
                <div id="menu1" class="tab-pane fade" style={{backgroundColor:"white"}}>
                    <Whatweoffer/>
                </div>
            </div>

            <Foot/>
    </div>
        }

        {!token &&
                <div className="d-flex justify-content-center align-items-center login-container">
                <div class="alert alert-warning" role="alert">
                    <Link to='/'>Please Login</Link>
                </div>
                </div>
            }
        </>
        
    )
}
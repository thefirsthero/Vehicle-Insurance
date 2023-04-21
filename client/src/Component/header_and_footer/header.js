import "../header_and_footer/header.css"
import usericon from "../images/usericon.png"
import React from "react"
import logo from "../images/logo.png"
// import Popup from 'reactjs-popup';

export default function Head(props){

    return(
        <div className="App-header">
            <img src={logo} className="logo"></img>
            <div className="title">
                Vehicle Insurance Limited
            </div>
                
            <div className="tab2"></div>
            <div className="btn-username">
                {props.user}
                <img src={usericon} className="usericon"></img>
            </div>
                    
            
            
            
            
        </div>
    )
}
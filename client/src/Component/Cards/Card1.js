import React from "react";
import "./Card.css";


export default function card(props){

    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={props.img}style={{width:"300px",height:"250px"}} />
                    <h4>{props.insuranceType}</h4>
                </div>
                <div class="flip-card-back">
                    <h1>{props.insuranceType}</h1>
                    <br></br>
                    <p>{props.insuranceExplanation}</p>
                </div>
            </div>
        </div>
    )

};
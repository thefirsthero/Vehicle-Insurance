import React from "react";
import Cards from "../../Cards/Card1"
import personalInsurance from "../../images/personalInsurance.png"
import colllisionInsurance from "../../images/CollisionInsurance.jpg"
import liabilityInsurance from "../../images/liabilityInsurance.jpg"
import comprehensiveInsurance from "../../images/comprehensiveInsurance.jpg"



export default function whatweoffer(){
    var collisionInsuranceInfo = "This insurance covers any damages to your vehcile in the event of an accident,"+
    "regardless of who is at fault. It is designed to help protect you financially "+
    "in case you crash into another car or object."

    var personalInsuranceInfo = "Personal insurance is a type of insurance coverage that provides financial protection "+ 
       "to individuals and families in the event of unexpected circumstances. Personal insurance policies"
      +" can cover a range of risks, including health and medical expenses, disability, death, property damage, and liability for lawsuits. "

    var liabilityInsuranceInfo = "Liability insurance is a type of insurance policy that offers protection to an individual"+
    "or business in the event that they are held liable for causing injury or damage to another person or their property."+
    " Liability insurance can cover various types of incidents such as accidents on one's property, product defects, and professional errors."

    var comprehensiveInsuranceInfo ="Comprehensive insurance is a type of car insurance coverage that covers damages to your vehicle caused by"+
    " things like natural disasters, theft, vandalism, and other non-collision related incidents."+
    "This type of coverage is typically optional, but may be required if you are leasing or financing your vehicle. "
   

    return(
        <div>
            <h3 style={{textAlign:"left",color:"rgb(29, 29, 29)"}}>What We Offer</h3>
            <div style={{ paddingLeft: "450px", paddingTop: "10px" }}>
                <div style={{ display: "flex" }}>
                    <Cards insuranceType="Personal Insurance" img={personalInsurance}insuranceExplanation={personalInsuranceInfo} />
                    <div style={{ width: "50px" }}></div>
                    <Cards insuranceType="Collision Insurance" img={colllisionInsurance} insuranceExplanation={collisionInsuranceInfo} />
                </div>
                <div style={{ paddingTop: "30px", display: "flex" }}>
                    <Cards insuranceType="Liability Insurance" img={liabilityInsurance} insuranceExplanation={liabilityInsuranceInfo} />
                    <div style={{ width: "50px" }}></div>
                    <Cards insuranceType="Comprehensive Insurance" img={comprehensiveInsurance} insuranceExplanation={comprehensiveInsuranceInfo}/>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
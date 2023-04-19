import CarImage from "../images/CarInsurance.jpg"
import React from "react";

export default(props)=> {
  return (
      <div class="card" style={{width:"300px", height:"300px"}}>
        <img class="card-img-bottom" src={CarImage} alt="Card image" style={{width:"100%"}}></img>
          <div class="card-body">
              <h4 class="card-title">{props.insuranceType}</h4>
              
              <table>
                <tr>
                    <td>Car Brand</td>
                    <td>{props.CarBrand}</td>
                </tr>

                <tr>
                    <td>VIN</td>
                    <td>{props.VIN}</td>
                </tr>

                <tr>
                    <td>Car Expiry</td>
                    <td>{props.CarExpiry}</td>
                </tr>
              </table>
          </div>
      </div>
  );
}
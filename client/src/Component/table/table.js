import React, {useEffect, useState} from "react";
import axios from "axios"


function Table() {
    const [listVehicles, setListVehicles] = useState([]);

    useEffect(function(){
        async function getAllVehicles(){
            try {
                //const response = await axios.get("/userdashboard");
                //console.log(response.data);
                // setListVehicles(response.data);
                setListVehicles([]);
            } catch (error) {
                console.log("error",error);
            }
           
        }
        getAllVehicles();
    },[]);
  
  return (
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">VIN</th>
                    <th scope="col">Car Brand</th>
                    <th scope="col">Car Model</th>
                    <th scope="col">IDV</th>
                    <th scope="col">Car Expiry</th>
                </tr>
            </thead>
              <tbody>
                  {
                      listVehicles.map(insr => (
                          <tr key={insr.VIN}>
                            <td>{insr.VIN}</td>
                              <td>{insr.carBrand}</td>
                              <td>{insr.carModel}</td>
                              <td>{insr.IDV}</td>
                              <td>{ insr.carExpiry}</td>
                          </tr>
                      ))
                  }
              </tbody>
        </table>
    </div>
  )
}

export default Table
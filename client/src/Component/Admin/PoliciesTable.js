import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as Icon from 'react-bootstrap-icons'

const EditPolicies = () => {
    const [adminData, setAdminData] = useState([])
    const [search, setsearch] = useState("");

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const res = await axios.get('http://localhost:3033/get_policies')
                console.log(res.data)
                setAdminData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAdminData()
    }, [])

    const searching = async(e) => {
        setsearch(e.target.value)
        console.log(e.target.value)
        try {
            if (search)
                {const res = await axios.get('http://localhost:3033/search_policies/'+e.target.value)
                setAdminData(res.data)}
            else if(search === ""){
            const res = await axios.get('http://localhost:3033/get_policies')
            setAdminData(res.data)}
        } catch (error) {
            console.log(error)
        }
    }

    const searched = async() => {
    
        try {
            const res = await axios.get('http://localhost:3033/get_policies')
            setsearch("")
            setAdminData(res.data)
        } catch (error) {
            console.log(error)
        }

    }

    return (    
        <div className='container-fluid p-5 column'>
            <h1>Policies</h1>
            <div className='d-flex' style={{float: 'right'}}>
                
                
                <input type="text" placeholder="search..." onChange={searching} value={search}/>
                <button className="btn btn-primary" onClick={searched}><Icon.Trash /></button>
                    
            </div>

            <br/><br/>
            
            <div style={{overflowY: 'scroll', height: 350}}>



            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Drivers Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Car Make</th>
                        <th>Car Model</th>
                        <th>Vin Number</th>
                        <th>Coverage Option</th>
                        <th>Payment Information</th>
                    </tr>

                </thead>
                <tbody >
                    {adminData.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.Drivers_Name}</td>
                            <td>{u.Email}</td>
                            <td>{u.Phone}</td>
                            <td>{u.Address}</td>
                            <td>{u.City}</td>
                            <td>{u.Car_Make}</td>
                            <td>{u.Car_Model}</td>
                            <td>{u.Vin_Number}</td>
                            <td>{u.coverage_options}</td>
                            <td>{u.Payment_information}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
            </div>
</div>
    )
}

export default EditPolicies
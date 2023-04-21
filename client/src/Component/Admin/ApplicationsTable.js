import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as Icon from 'react-bootstrap-icons'

const AdminPolicies = () => {
    const [adminData, setAdminData] = useState([])
    const [search, setsearch] = useState("");

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const res = await axios.get('http://localhost:3033/get_applications')
                setAdminData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAdminData()
    }, [])

    const searching = async(e) => {
        setsearch(e.target.value)
        try {
            if (search)
                {const res = await axios.get('http://localhost:3033/search_applications/'+e.target.value)
                setAdminData(res.data)}
            else if(search === ""){
            const res = await axios.get('http://localhost:3033/get_applications')
            setAdminData(res.data)}
        } catch (error) {
            console.log(error)
        }
    }

    const searched = async() => {
    
        try {
            const res = await axios.get('http://localhost:3033/get_applications')
            setsearch("")
            setAdminData(res.data)
        } catch (error) {
            console.log(error)
        }

    }

    const declinePolicy = async(id) => {

        try {
            await axios.delete('http://localhost:3033/deletepolicy/'+id)
            const res = await axios.get('http://localhost:3033/get_applications')
            setAdminData(res.data)
        } catch (error) {
            console.log(error)
        }

    }


    const approvePolicy = async(a, b, c, d, e, f, g, h, i, j, k) => {

        const data = {
            id: a,
            Drivers_Name: b,
            Email: c,
            Phone: d,
            Address: e,
            City: f,
            Car_Make: g,
            Car_Model: h,
            Vin_Number: i,
            coverage_options: j,
            Payment_information: k
            
        }
        try {
            const res = await axios.post('http://localhost:3033/approvepolicy', data)
            declinePolicy(a)
        } catch (error) {
            console.log(error)
        }

    }


    return (    
        <div className='container-fluid p-5 column'>
            <h1>Applications</h1>
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
                        <th>Vin Number</th>
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
                            <td><button onClick={() => declinePolicy(u.id)}><Icon.X/></button><button onClick={() => approvePolicy(u.id,u.Drivers_Name,u.Email,u.Phone,u.Address,u.City,u.Car_Make,u.Car_Model,u.Vin_Number,u.coverage_options,u.Payment_information)}><Icon.Check/></button></td>

                        </tr>

                    ))}
                </tbody>

            </table>
            </div>

        </div>
    )
}

export default AdminPolicies
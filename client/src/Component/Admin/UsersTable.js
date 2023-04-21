import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as Icon from 'react-bootstrap-icons'

const Users = () => {
    const [user_data, set_user_data] = useState([])
    const [search, setsearch] = useState("");

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const res = await axios.get('http://localhost:3033/get_users')
                console.log(res.data)
                set_user_data(res.data)
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
                {const res = await axios.get('http://localhost:3033/search_users/'+e.target.value)
                set_user_data(res.data)}
            else if(search === ""){
            const res = await axios.get('http://localhost:3033/get_users')
            set_user_data(res.data)}
        } catch (error) {
            console.log(error)
        }
    }

    const searched = async() => {
    
        try {
            const res = await axios.get('http://localhost:3033/get_users')
            setsearch("")
            set_user_data(res.data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        
        <div className='container-fluid p-5 column col'>
            
            <h1>Users</h1>
            <div className='d-flex' style={{float: 'right'}}>
                
                
                <input type="text" placeholder="search user name" onChange={searching} value={search}/>
                <button className="btn btn-primary" onClick={searched}><Icon.Trash /></button>
                    
            </div>

            <br/><br/>
            
            <div style={{overflowY: 'scroll', height: 350}}>



            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Identification Number</th>
                        <th>Email</th>
                    </tr>

                </thead>
                <tbody >
                    {user_data.map((u) => (
                        <tr key={u.user_id_number}>
                            <td>{u.user_name}</td>  
                            <td>{u.user_surname}</td>
                            <td>{u.user_id_number}</td>
                            <td>{u.user_email}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
            </div>
 </div>
    )
}

export default Users

import React from 'react'
import { Link } from 'react-router-dom'


function Login() {

  
  return (
    <div>
        <h1>Login</h1>
        <Link to ="/userdashboard">
            <button onClick={()=>{
              localStorage.setItem('username','1999');
    
  }}>Login</button>
        </Link>
        

    </div>
  )
}

export default Login
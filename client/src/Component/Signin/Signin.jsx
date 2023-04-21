import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import formValidation from './../common/form-validation'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault() // very very important!

        let formData = {
            'user_email': email,
            'user_password': password
        }
        if(formValidation(formData)){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('http://localhost:3033/signin', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.message){
                    alert("Please try again");
                } else {
                    // console.log(data.name)
                    // logic to go to admin dashboard o user dashboard:
                    console.log(data.admin_id)
                    if(data.admin_id == 1){
                        history.push('/admin_dashboard'); // go to admin dashboard
                    }
                    else{
                        history.push('/user_dashboard'); // go to user dashboard
                    }
                    sessionStorage.setItem('token', data.token);
                    // sessionStorage.setItem('name', data.name);
                    // sessionStorage.setItem('email', data.email);
                    sessionStorage.setItem('admin_id', data.admin_id)
                }
            })
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center login-container">
            <form className="login-form text-center" onSubmit={e => { handleSubmit(e) }}>
                <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
                <div className="form-group text-left">
                    <input type="email" className="form-control rounded-pill form-control-lg" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="form-group text-left">
                    <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div className="forgot-link form-group text-left d-flex justify-content-between align-items-center">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Remember Password</label>
                    </div>
                </div>
                <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Log in</button>
                <p className="mt-3 font-weight-normal">Don't have an account? <Link to={'/register'}><strong>Register Now</strong></Link></p>
            </form>
        </div>
    )
}

export default SignIn;
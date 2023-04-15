import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const SignUp = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            'user_id_number': id,
            'user_name': name,
            'user_surname': surname,
            'user_email': email,
            'user_password': password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        fetch('http://localhost:3033/signup', requestOptions)
            .then(response => response.json())
            .then(() => {
                alert("You have successfully registered, \n Please login");
                history.push('/');
            });
    }

    return (
        <div className="d-flex justify-content-center align-items-center login-container">
            <form className="login-form text-center" onSubmit={e => { handleSubmit(e) }}>
                <h1 className="mb-5 font-weight-light text-uppercase">Register</h1>
                <div className="form-group text-left">
                    <input type="number" className="form-control form-control-lg" placeholder="Id" onChange={(event) => { setId(event.target.value) }} />
                </div>
                <div className="form-group text-left">
                    <input type="text" className="form-control form-control-lg" placeholder="Name" onChange={(event) => { setName(event.target.value) }} />
                </div>
                <div className="form-group text-left">
                    <input type="text" className="form-control form-control-lg" placeholder="Surname" onChange={(event) => { setSurname(event.target.value) }} />
                </div>
                <div className="form-group text-left">
                    <input type="email" className="form-control form-control-lg" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="form-group text-left">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <button type="submit" className="btn mt-5 btn-lg btn-custom btn-block text-uppercase">Register</button>
                <p className="mt-3 font-weight-normal">Already have an account? <Link to={'/'}><strong>Login Now</strong></Link></p>
            </form>
        </div>
    )
}
export default SignUp;
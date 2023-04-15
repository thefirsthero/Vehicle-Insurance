import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const [token, setToken] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
    });

    const handleLogout = () => {
        sessionStorage.clear();
        history.push('/');
    }

    return (
        <>
            {token &&
                <div className="d-flex justify-content-center align-items-center login-container">
                    <div className="card float-right">
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="d-block w-100" src="https://img.icons8.com/bubbles/2x/user-male.png" alt="usericon" />
                            </div>
                            <div className="col-sm-7">
                                <div className="card-block text-left pt-4">
                                    {/* Can Put Dashboard Stuff Here */}
                                    <p><button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {!token &&
                <div className="d-flex justify-content-center align-items-center login-container">
                    <div class="alert alert-warning" role="alert">
                        <Link to='/'>Please Login</Link>
                    </div>
                </div>
            }
        </>
    )
}
export default Home;
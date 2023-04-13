import {useState, useEffect} from 'react';
import Axios from 'axios';

const LoginRegister = () => {
    const [usernameLoginInput, setUsernameLoginInput] = useState('');
    const [passwordLoginInput, setPasswordLoginInput] = useState('');
    const [usernameRegisterInput, setUsernameRegisterInput] = useState('');
    const [passwordRegisterInput, setPasswordRegisterInput] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [isMessageShown, setIsMessageShown] = useState(false);
    const clearInputs = () => {
        setUsernameLoginInput('');
        setPasswordLoginInput('');
        setUsernameRegisterInput('');
        setPasswordRegisterInput('');
    }
    const loginHandler = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/login', {
            "username": usernameLoginInput,
            "password": passwordLoginInput
        }).then((res) => {
            if (res.data[0]) {
                const tempMessage = `Welcome ${res.data[0].username}!`;
                setMessage(tempMessage);
                setMessageType('positive');
                setIsMessageShown(true);
                clearInputs();
            } else {
                setMessage('Wrong username or password!');
                setMessageType('negative');
                setIsMessageShown(true);
            }
        });
    }
    const registerHandler = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/register', {
            "username": usernameRegisterInput,
            "password": passwordRegisterInput
        }).then((res) => {
            if (!res.data.code) {
                setMessage('Successful registration!');
                setMessageType('positive');
                setIsMessageShown(true);
                clearInputs();
            } else if (res.data.code === 'ER_DUP_ENTRY') {
                setMessage('Username already taken!');
                setMessageType('negative');
                setIsMessageShown(true);
            }
        });
    }
    useEffect(() => {
        const timeout =setTimeout(() => {
            setIsMessageShown(false);
            return () => clearTimeout(timeout);
        }, 5000);
    }, [isMessageShown]);
    return (
        <section className='formContainer'>
            <form onSubmit={loginHandler}>
                <h2>Login</h2>
                <label htmlFor="loginUsername">Username:<span className='required'>*</span></label>
                <input type="text" id='loginUsername' name='loginUsername' required value={usernameLoginInput} onChange={(e) => {setUsernameLoginInput(e.target.value)}}/>
                <label htmlFor="loginPassword">Password:<span className='required'>*</span></label>
                <input type="password" name="loginPassword" id="loginPassword" required value={passwordLoginInput} onChange={(e) => {setPasswordLoginInput(e.target.value)}}/>
                <input type="submit" value="Login" className='btn' />
            </form>
            <hr />
            <form onSubmit={registerHandler}>
                <h2>Register</h2>
                <label htmlFor="registerUsername">Username:<span className='required'>*</span></label>
                <input type="text" id='registerUsername' name='registerUsername' required value={usernameRegisterInput} onChange={(e) => {setUsernameRegisterInput(e.target.value)}}/>
                <label htmlFor="registerPassword">Password:<span className='required'>*</span></label>
                <input type="password" name="registerPassword" id="registerPassword" required value={passwordRegisterInput} onChange={(e) => {setPasswordRegisterInput(e.target.value)}}/>
                <input type="submit" value="Register" className='btn' />
            </form>
            {isMessageShown ? <p className={messageType}>{message}</p> : <></>}
        </section>
    );
}

export default LoginRegister;
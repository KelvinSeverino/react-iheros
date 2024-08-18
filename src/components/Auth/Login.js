import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../../services/authService';

const Login = () => {
    const navigate = useNavigate();

    const [userField, setUserField] = useState({
        username: "",
        password: "",
    });    
    
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        logout(); 
    })
    
    const changeUserFieldHandler = (e) => {        
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await login(userField);            
            if(response.error) throw response.error;
            navigate('/');
        } catch (e) {     
            setErrorMessage(e.message);     
        }
    }

    return (
        <div className="container">
            <main className="form-signin">
                <div className='col-3 py-5'>
                    <h1 className="h3 mb-3 fw-normal">Login | iHero</h1>

                    <div className="form-floating pb-3">
                        <input type="text" className="form-control" id="username" name="username" placeholder="email@example.com" onChange={e => changeUserFieldHandler(e)}/>
                        <label>Username</label>
                    </div>
                    <div className="form-floating pb-3">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={e => changeUserFieldHandler(e)}/>
                        <label>Password</label>
                    </div>

                    {errorMessage && <div className='text-danger text-center'>{errorMessage}</div>}
                    <button className="w-100 btn btn-lg btn-primary" onClick={e => onSubmitChange(e)}>Entrar</button>
                </div>
            </main>
        </div>
    ) 
}

export default Login;
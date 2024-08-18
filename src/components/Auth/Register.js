import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';

const Register = () => {
    const navigate = useNavigate();

    const [userField, setUserField] = useState({
        username: "",
        email: "",
        password: "",
    });    
    
    const [errorMessage, setErrorMessage] = useState()
    
    const changeUserFieldHandler = (e) => {        
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await register(userField);            
            if(response.error) throw response.error;
            navigate('/login');
        } catch (e) {     
            setErrorMessage(e.message);     
        }
    }
    
    return (
        
        <div className="container d-flex justify-content-center">
            <main className="form-signin">
                <div className='col-12 py-5'>
                    <h1 className="h3 mb-3 fw-normal">New Account | iHero</h1>

                    <div className="form-floating pb-3">
                        <input type="text" className="form-control" id="username" name="username" placeholder="username" onChange={e => changeUserFieldHandler(e)}/>
                        <label>Username</label>
                    </div>
                    <div className="form-floating pb-3">
                        <input type="text" className="form-control" id="email" name="email" placeholder="email@example.com" onChange={e => changeUserFieldHandler(e)}/>
                        <label>Email</label>
                    </div>
                    <div className="form-floating pb-3">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={e => changeUserFieldHandler(e)}/>
                        <label>Password</label>
                    </div>

                    {errorMessage && <div className='text-danger text-center'>{errorMessage}</div>}
                    <button className="w-100 btn btn-lg btn-success" onClick={e => onSubmitChange(e)}>Salvar</button>
                </div>
            </main>
        </div>
    ) 
}

export default Register;
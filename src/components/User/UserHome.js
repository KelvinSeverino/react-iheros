import React, { useState } from 'react';

import UserList from './UserList';
import { useNavigate } from 'react-router-dom';
import { storeUser } from '../../services/userService';

const UserIndex = () => {    
    const navigate = useNavigate();

    const [loading, setLoading] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const [userField, setUserField] = useState({
        username: "",
        email: "",
        password: "",
    });

    const changeUserFieldHandler = (e) => {        
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        console.log(userField);
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await storeUser(userField);            
            if(response.error) throw response.error;

            setLoading(true);
        } catch (e) {     
            setErrorMessage(e.message);     
        }
    }
    if(loading){
        return <UserIndex/>
    }

    const clickToBackHome = () => {
        navigate('/');
    }

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3
            }}
        />
    );

    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Usuários | iHero</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>Informe Dados do Usuário</h3>
                        <form>
                            {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Username:</label>
                                        <input type="text" className="form-control" id="username" placeholder="Insira username" name="username" onChange={e => changeUserFieldHandler(e)} />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Email:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Insira email" name="email" onChange={e => changeUserFieldHandler(e)} />
                                    </div>
                                </div>
                            </div>
                            <div className='row pb-3'>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" placeholder="Insira password" name="password" onChange={e => changeUserFieldHandler(e)} />
                                    </div>
                                </div>
                            </div>
                             
                             <button type="submit" className="btn btn-success" onClick={e => onSubmitChange(e)}>Gravar</button>                             
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <UserList />
                    </div>
                </div>
            <ColoredLine color="black"/>
            <div className='container d-flex justify-content-center'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button className='btn btn-secondary' onClick={clickToBackHome}>Home</button>
                </div>
            </div>
        </div>
    ) 
}

export default UserIndex;
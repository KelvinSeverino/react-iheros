import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, updateUser } from '../../services/userService';

const UserEdit = () => {   
    const navigate = useNavigate();
    
    const {id} = useParams();

    const [userField, setUserField] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        const fetchUser = async () => {        
            const userData = await getById(id);
            console.log(userData)
            setUserField(userData)
        }

        fetchUser();
    }, [id])

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
            const response = await updateUser(id, userField);            
            if(response.error) throw response.error;

            navigate('/users');
        } catch (e) {     
            setErrorMessage(e.message);     
        }
    }
    
    const clickToBackHandler = () => {
        navigate('/usuarios');
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

    return(
        <div className='container'>
            <h1>Editar</h1>
            <div className='col-12'>
                <form>
                    {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                    <div className='row'>
                        <div className='col-6'>
                            <div className="mt-2">
                                <label className="form-label">Username:</label>
                                <input type="text" className="form-control" id="username" placeholder="Insira username" name="username" value={userField.username} onChange={e => changeUserFieldHandler(e)} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mt-2">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Insira email" name="email" value={userField.email} onChange={e => changeUserFieldHandler(e)} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="mt-2">
                                <label className="form-label">Password:</label>
                                <input type="password" className="form-control" id="password" placeholder="Insira password" name="password" onChange={e => changeUserFieldHandler(e)} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                    </div>                    
                </form>
                <div className='container d-flex justify-content-center pt-4'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button className='btn btn-warning' onClick={clickToBackHandler}>Voltar</button>
                        <button type='submit' className='btn btn-success float-left' onClick={e => onSubmitChange(e)}>Atualizar</button>
                    </div>
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

export default UserEdit;
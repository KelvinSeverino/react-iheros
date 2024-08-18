import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../services/userService';
import Header from '../Header/Header';

const UserView = () => {
    const {id} = useParams();

    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {        
            const userData = await getById(id);
            console.log(userData)
            setUser(userData)
        }

        fetchUser();
    }, [id]);

    const clickToBackHandler = () => {
        navigate('/users');
    }
 
    return <div>
        <div className="container">
            <Header title="Usuário"/>
            <div className='row pt-4'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>                     
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
 
            </div>
        </div>
        <div className='container d-flex justify-content-center'>
            <div><button className='btn btn-primary' onClick={clickToBackHandler}>Voltar</button></div>
        </div>
    </div>   
}

export default UserView;
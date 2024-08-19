import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';

function Header({ title }) {    
    const navigate = useNavigate();

    async function exit(id) {
        await logout(id);
        navigate('/login');
    }

    return (
        <div className="container">
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <div className="d-flex justify-content-center flex-grow-1">
                        <span className="nav-text"><strong>{ title } | iHero</strong></span>
                    </div>

                    <ul className="nav">
                        <li className="nav-item">
                            <button className='btn btn-dark btn-sm' onClick={()=>exit()}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header
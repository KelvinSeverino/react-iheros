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
            <nav class="py-2 bg-light border-bottom">
                <div class="container d-flex flex-wrap">
                    <div class="d-flex justify-content-center flex-grow-1">
                        <span class="nav-text"><strong>{ title } | iHero</strong></span>
                    </div>

                    <ul class="nav">
                        <li class="nav-item">
                            <button className='btn btn-primary btn-sm' onClick={()=>exit()}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header
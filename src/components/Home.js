import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header';

const Home = () => {
    return (
        <div className="container">
            <Header title="Home"/>
            <div className="row py-5">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Batalhas</h4>
                        </div>
                        <div className="card-body">
                            <Link type="button" className="w-100 btn btn-lg btn-success" to="/battles">Abrir</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Usuários (CRUD)</h4>
                        </div>
                        <div className="card-body">
                            <Link type="button" className="w-100 btn btn-lg btn-success" to="/users">Abrir</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Heróis (CRUD)</h4>
                        </div>
                        <div className="card-body">
                            <Link type="button" className="w-100 btn btn-lg btn-success" to="/heros">Abrir</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Home;
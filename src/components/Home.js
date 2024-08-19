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
                            <h4 className="my-0 fw-normal">Batalhas Realtime</h4>
                        </div>
                        <div className="card-body">
                            <Link type="button" className="w-50 btn btn-lg btn-warning" to="/battlesInRealTime">Visualizar</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Batalhas Finalizadas</h4>
                        </div>
                        <div className="card-body">
                            <Link type="button" className="w-50 btn btn-lg btn-warning" to="/battlesFinished">Visualizar</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Usuários (CRUD)</h4>
                        </div>
                        <div className="card-body">
                            <Link type="button" className="w-50 btn btn-lg btn-primary" to="/users">Acessar</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Heróis (CRUD)</h4>
                        </div>
                        <div className="card-body">
                            <Link type="button" className="w-50 btn btn-lg btn-primary" to="/heros">Acessar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Home;
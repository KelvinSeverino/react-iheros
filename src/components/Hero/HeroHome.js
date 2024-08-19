import React, { useState } from 'react';

import HeroList from './HeroList';
import { useNavigate } from 'react-router-dom';
import { storeHero } from '../../services/heroService';
import Header from '../Header/Header';

const HeroIndex = () => {    
    const navigate = useNavigate();

    const [loading, setLoading] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const [heroField, setHeroField] = useState({
        heroname: "",
        heroclass: "",
        latitude: "",
        longitude: "",
        userId: "",
    });

    const heroClasses = [
        { id: 'S', name: 'Classe S' },
        { id: 'A', name: 'Classe A' },
        { id: 'B', name: 'Classe B' },
        { id: 'C', name: 'Classe C' }
    ];

    const changeHeroFieldHandler = (e) => {        
        setHeroField({
            ...heroField,
            [e.target.name]: e.target.value
        });
        console.log(heroField);
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await storeHero(heroField);            
            if(response.error) throw response.error;

            setLoading(true);
        } catch (e) {     
            setErrorMessage(e.message);     
        }
    }
    if(loading){
        return <HeroIndex/>
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
                <Header title="Usuários"/>
                <div className='row pt-4'>
                    <div className='col-md-4'>
                        <h3>Informe Dados do Herói</h3>
                        <form>
                            {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Heroname:</label>
                                        <input type="text" className="form-control" id="heroname" placeholder="Insira heroname" name="heroname" onChange={e => changeHeroFieldHandler(e)} />
                                    </div>
                                </div>
                                <div className='col-6 py-2'>
                                    <label className="form-label">Classe:</label>
                                    <select className="form-control form-select" id="heroclass" name="heroclass" onChange={e => changeHeroFieldHandler(e)}>
                                        <option value=''>Selecione</option>
                                        {heroClasses.map((opcao, index) => (
                                            <option key={opcao.id} value={opcao.id}>
                                            {opcao.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='row pb-3'>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Latitude:</label>
                                        <input type="number" step="any" className="form-control" id="latitude" placeholder="Insira latitude" name="latitude" onChange={e => changeHeroFieldHandler(e)} />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Longitude:</label>
                                        <input type="number" step="any" className="form-control" id="longitude" placeholder="Insira longitude" name="longitude" onChange={e => changeHeroFieldHandler(e)} />
                                    </div>
                                </div>
                            </div>
                             
                             <button type="submit" className="btn btn-success" onClick={e => onSubmitChange(e)}>Gravar</button>                             
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <HeroList />
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

export default HeroIndex;
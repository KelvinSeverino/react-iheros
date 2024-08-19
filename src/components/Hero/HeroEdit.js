import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, updateHero } from '../../services/heroService';
import Header from '../Header/Header';

const HeroEdit = () => {   
    const navigate = useNavigate();
    
    const {id} = useParams();

    const [heroField, setHeroField] = useState({
        heroname: "",
        heroclass: "",
        latitude: "",
        longitude: "",
    });
    const [errorMessage, setErrorMessage] = useState()

    const heroClasses = [
        { id: 'S', name: 'Classe S' },
        { id: 'A', name: 'Classe A' },
        { id: 'B', name: 'Classe B' },
        { id: 'C', name: 'Classe C' }
    ];

    useEffect(() => {
        const fetchHero = async () => {        
            const heroData = await getById(id);
            console.log(heroData)
            setHeroField(heroData)
        }

        fetchHero();
    }, [id])

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
            const response = await updateHero(id, heroField);            
            if(response.error) throw response.error;

            navigate('/heros');
        } catch (e) {     
            setErrorMessage(e.message);     
        }
    }
    
    const clickToBackHandler = () => {
        navigate('/heros');
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
            <Header title="Editar Usuário"/>
            <div className='col-12 pt-4'>
                <form>
                    {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                    <div className='row'>
                        <div className='col-6'>
                            <div className="mt-2">
                                <label className="form-label">Heroname:</label>
                                <input type="text" className="form-control" id="heroname" placeholder="Insira heroname" name="heroname" value={heroField.heroname} onChange={e => changeHeroFieldHandler(e)} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mt-3">
                                <label className="form-label">Classe:</label>
                                <select value={heroField.heroclass} className="form-control form-select" id="heroclass" name="heroclass" onChange={e => changeHeroFieldHandler(e)}>
                                    <option value=''>Selecione modelo</option>
                                    {heroClasses.map((opcao, index) => (
                                        <option key={opcao.id} value={opcao.id}>
                                        {opcao.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="mt-2">
                                <label className="form-label">Latitude:</label>
                                <input type="number" step="any" className="form-control" id="latitude" placeholder="Insira latitude" name="latitude" value={heroField.latitude} onChange={e => changeHeroFieldHandler(e)} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mt-2">
                                <label className="form-label">Longitude:</label>
                                <input type="number" step="any" className="form-control" id="longitude" placeholder="Insira longitude" name="longitude" value={heroField.longitude} onChange={e => changeHeroFieldHandler(e)} />
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

export default HeroEdit;
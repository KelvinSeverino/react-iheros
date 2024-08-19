import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../services/heroService';
import Header from '../Header/Header';

const HeroView = () => {
    const {id} = useParams();

    const [hero, setHero] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHero = async () => {        
            const heroData = await getById(id);
            console.log(heroData)
            setHero(heroData)
        }

        fetchHero();
    }, [id]);

    const clickToBackHandler = () => {
        navigate('/heros');
    }
 
    return <div>
        <div className="container">
            <Header title="Usuário"/>
            <div className='row pt-4'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Heroname</th>
                                <th>Heroclass</th>  
                                <th>Lat.</th>
                                <th>Log.</th>                  
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{hero.heroname}</td>
                                <td>{hero.heroclass}</td>
                                <td>{hero.latitude}</td>
                                <td>{hero.longitude}</td>  
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

export default HeroView;
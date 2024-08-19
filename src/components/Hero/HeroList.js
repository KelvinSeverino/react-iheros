import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { destroyHero, getHeros } from "../../services/heroService";

const HeroList = () => { 
    const [heros, setHeros] = useState([])

    async function fetchHeros() {
        const herosData = await getHeros();
        setHeros(herosData)
    }

    useEffect(() => {
        fetchHeros();
    }, [])    

    async function deleteHero(id) {
        await destroyHero(id);
        fetchHeros();
    }

    return(
        <div className="container">
            <h3>Lista Heróis</h3>
            {<table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Heroname</th>
                        <th>Heroclass</th>
                        <th>Lat.</th>
                        <th>Log.</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        heros.map((hero, i) => {
                            return (
                                <tr key={hero.id}>
                                    <td>{hero.heroname}</td>
                                    <td>{hero.heroclass}</td>
                                    <td>{hero.latitude}</td>
                                    <td>{hero.longitude}</td>
                                    <td>
                                        <NavLink to={`/heros/view/${hero.id}`} className="btn btn-secondary">Abrir</NavLink>
                                        <NavLink to={`/heros/edit/${hero.id}`} className="btn btn-warning mx-2">Editar</NavLink>
                                        <button onClick={()=>deleteHero(hero.id)} className="btn btn-danger">Apagar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default HeroList;
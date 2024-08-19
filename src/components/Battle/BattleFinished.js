import React, { useState, useEffect } from "react";
import { getBattlesFinished } from "../../services/battleService";
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";

const BattleFinished = () => { 
    const navigate = useNavigate();

    const [battlesFinished, setbattlesFinished] = useState([])

    async function fetchBattlesFinished() {
        const battlesFinished = await getBattlesFinished();
        setbattlesFinished(battlesFinished)
        return
    }

    useEffect(() => {
        fetchBattlesFinished();

        const intervalId = setInterval(() => {
            fetchBattlesFinished();
        }, 30000); // 30000 ms = 30 segundos

        return () => clearInterval(intervalId);
    }, [])

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
        <div className="container">
            <Header title="Batalhas Finalizadas"/>
            <div className='row pt-4'>
                <div className='col-12'>
                    {<table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Heroname</th>
                                <th>Hero Class</th>
                                <th>Monster</th>
                                <th>Monster Rank</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                battlesFinished.map((battle, i) => {
                                    return (
                                        <tr key={battle.id}>
                                            <td>{battle.hero.heroname}</td>
                                            <td>{battle.hero.heroclass}</td>
                                            <td>{battle.monstername}</td>
                                            <td>{battle.monsterrank}</td>
                                            <td>{battle.duration}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>}
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

export default BattleFinished;
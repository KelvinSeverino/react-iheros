import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { getBattlesRealTime } from "../../services/battleService";

const BattleRealTime = () => {    
    const navigate = useNavigate();
     
    const [battlesInRealTime, setbattlesInRealTime] = useState([])

    async function fetchBattlesInRealTime() {
        const battlesInRealTime = await getBattlesRealTime();
        setbattlesInRealTime(battlesInRealTime)
        return
    }

    useEffect(() => {
        fetchBattlesInRealTime();

        const intervalId = setInterval(() => {
            fetchBattlesInRealTime();
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

    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);

        const hours = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const day = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });

        return `${hours} ${day}`;
    };

    return (
        <div className="container">
            <Header title="Batalhas em Tempo Real"/>
            <div className='row pt-4'>
                <div className='col-12'>
                    {<table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Heroname</th>
                                <th>Hero Class</th>
                                <th>Monster</th>
                                <th>Monster Rank</th>
                                <th>Battle Starts At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                battlesInRealTime.map((battle, i) => {
                                    return (
                                        <tr key={battle.id}>
                                            <td>{battle.hero.heroname}</td>
                                            <td>{battle.hero.heroclass}</td>
                                            <td>{battle.monstername}</td>
                                            <td>{battle.monsterrank}</td>
                                            <td>{formatDateTime(battle.createdAt)}</td>
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

export default BattleRealTime;
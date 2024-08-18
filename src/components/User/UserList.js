import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { destroyUser, getUsers } from "../../services/userService";

const UserList = () => { 
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const usersData = await getUsers();
        setUsers(usersData)
    }

    useEffect(() => {
        fetchUsers();
    }, [])    

    async function deleteUser(id) {
        await destroyUser(id);
        fetchUsers();
    }

    return(
        <div className="container">
            <h3>Lista Usuários</h3>
            {<table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <NavLink to={`/users/view/${user.id}`} className="btn btn-secondary">Abrir</NavLink>
                                        <NavLink to={`/users/edit/${user.id}`} className="btn btn-warning mx-2">Editar</NavLink>
                                        <button onClick={()=>deleteUser(user.id)} className="btn btn-danger">Apagar</button>
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

export default UserList;
import axios from "axios";

const usersAPI = axios.create({baseURL: "http://localhost:3001/users"})

async function getUsers() {    
    try {
        const response = await usersAPI.get("/")   
        return response.data.users
    } catch (e) {
        console.log("something Wrong");
    }
}

async function getById(id) {    
    try {
        const response = await usersAPI.get(`/${id}`)   
        return response.data.user
    } catch (e) {
        console.log("something Wrong");
    }
}

async function storeUser(userFields) {
    try {
        const response = await usersAPI.post('/', userFields);
        return response.data.user;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function updateUser(id, userFields) {
    try {
        const response = await usersAPI.put(`/${id}`, userFields);
        return response.data;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function destroyUser(id) {
    await usersAPI.delete(`/${id}`)
    
}

export {
    getUsers,
    getById,
    storeUser,
    updateUser,
    destroyUser,
}
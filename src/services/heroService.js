import axios from "axios";
import { decodeToken } from "./authService";

const herosAPI = axios.create({baseURL: "http://localhost:3001/heros"})

// Interceptor para adicionar o token de autenticação em todas as requisições
herosAPI.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['authorization'] = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

async function getHeros() {    
    try {
        const response = await herosAPI.get("/")   
        return response.data.heros
    } catch (e) {
        console.log("something Wrong");
    }
}

async function getById(id) {    
    try {
        const response = await herosAPI.get(`/${id}`)   
        return response.data.hero
    } catch (e) {
        console.log("something Wrong");
    }
}

async function storeHero(heroFields) {
    try {
        const tokenDecoded = decodeToken();
        const userId = tokenDecoded.id;

        heroFields.userId = userId;
        const response = await herosAPI.post('/', heroFields);

        return response.data.hero;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function updateHero(id, heroFields) {
    try {
        const response = await herosAPI.put(`/${id}`, heroFields);
        return response.data;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function destroyHero(id) {
    await herosAPI.delete(`/${id}`)
    
}

export {
    getHeros,
    getById,
    storeHero,
    updateHero,
    destroyHero,
}
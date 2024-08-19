import axios from "axios";

const battlesAPI = axios.create({baseURL: "http://localhost:3001/battles"})

// Interceptor para adicionar o token de autenticação em todas as requisições
battlesAPI.interceptors.request.use(
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

async function getBattlesRealTime() {    
    try {
        const response = await battlesAPI.get("/realtime")
        return response.data.battles
    } catch (e) {
        console.log("something Wrong");
    }
}

async function getBattlesFinished() {    
    try {
        const response = await battlesAPI.get("/finished")   
        return response.data.battles
    } catch (e) {
        console.log("something Wrong");
    }
}

export {
    getBattlesRealTime,
    getBattlesFinished,
}
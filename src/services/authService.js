import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const registerAPI = axios.create({baseURL: "http://localhost:3001/register"})
const loginAPI = axios.create({baseURL: "http://localhost:3001/login"})

async function register(userFields) {
    try {
        await registerAPI.post('/', userFields);
        return true;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

async function login(userFields) {
    try {
        const response = await loginAPI.post('/', userFields);

        if(response.data.auth){
            const token = response.data.token;
            localStorage.setItem('token', token)
        }

        return true;
    } catch (e) {
        const errorMessage = e.response.data;
        return { error: errorMessage };
    }
}

function logout()
{
    localStorage.removeItem('token');
}

function decodeToken()
{
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    return decoded;
}

export {
    register,
    login,
    logout,
    decodeToken
}
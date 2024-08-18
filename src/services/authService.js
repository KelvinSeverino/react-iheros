import axios from "axios";

const loginAPI = axios.create({baseURL: "http://localhost:3001/login"})

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

export {
    login,
    logout,
}
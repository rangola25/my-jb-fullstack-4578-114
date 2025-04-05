import axios from "axios";
import Login from "../models/user/Login";
import SignUp from "../models/user/SignUp";

interface Response {
    jwt: string;
    isAdmin: boolean;
}

class Auth {
    async login(login: Login): Promise<Response> {
        const response = await axios.post<Response>(`${import.meta.env.VITE_REST_SERVER_URL}/auth/login`, login);
        
        localStorage.setItem('jwt', response.data.jwt); 
        localStorage.setItem('isAdmin', response.data.isAdmin.toString()); 

        return response.data;
    }

    async signUp(signUp: SignUp): Promise<string> {
        const response = await axios.post<{ jwt: string }>(`${import.meta.env.VITE_REST_SERVER_URL}/auth/signup`, signUp);
        return response.data.jwt;
    }
}

const auth = new Auth();
export default auth;

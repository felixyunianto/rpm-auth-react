import axios from 'axios';

const API_URL = 'http://localhost:3001/';

export const authSignUp = (data) => {
    return axios.post(`${API_URL}auth/sign-up`, data);
}

export const authSignIn = (data) => {
    return axios.post(`${API_URL}auth/sign-in`, data);
}
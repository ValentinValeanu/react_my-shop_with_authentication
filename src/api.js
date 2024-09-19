import axios from "axios";

const API_URL = 'https://localhost:7777/api';

export const login = (credentials) => {
    return axios.post(`${API_URL}/login`, credentials);
};

export const register = (user) => {
    return axios.post(`${API_URL}/register`, user);
}

export const getUser = (token) => {
    return axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
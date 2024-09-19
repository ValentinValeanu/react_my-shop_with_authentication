import React, { createContext, useState, useEffect } from 'react'
import { login, register, getUser } from '../api'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signIn = async (user) => {
        const { data } = await register(user);

        localStorage.setItem('myshop_token', data.token);

        const { data: userData } = await getUser(data.token);

        setUser(userData);
    }

    const logIn = async (credentials) => {
        const { data } = await login(credentials);

        localStorage.setItem('myshop_token', data.token);

        const { data: userData } = await getUser(data.token);
        setUser(userData);
    };

    const logOut = () => {
        localStorage.removeItem('myshop_token');
        setUser(null);
    };

    useEffect(() => {
        const loadUser = async () => {
            let token = localStorage.getItem('myshop_token');

            token = null;

            if (token) {

                const { data: userData } = await getUser(token);

                setUser(userData);
            }

            setLoading(false);
        }

        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, signIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
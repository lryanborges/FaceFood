import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api"


export function useAuth() {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin({ email, senha }) {

        const login = {
            email: email,
            senha: senha,
        }

        try {
            const { headers } = await api.post("/api/login", login);


            const authorization = headers.authorization;

            const [, token] = authorization.split(" ");

            localStorage.setItem('token', JSON.stringify(token));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
            navigate("/homepage");
            
        } catch (error) {
            alert(`${error}.\nCredenciais não coincidem com um usuário do sistema`);
        }
    }

    async function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        navigate("/dashboard")
    }

    return { authenticated, loading, handleLogin, handleLogout }

}
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {api} from "../services/api"


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

    async function handleLogin({email, senha}) {

        const login = {
            email:email,
            senha:senha,
        }

        const { headers } = await api.post("/api/login", login);

        const authorization = headers.authorization;

        const [, token] = authorization.split(" ");

        if(!token){
            alert("E-mail ou senha incorretos.");
        }

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        navigate("/homepage");
    }

    async function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        navigate("/dashboard")
    }

    return { authenticated, loading, handleLogin, handleLogout }

}
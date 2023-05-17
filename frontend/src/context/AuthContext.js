import React, {createContext} from "react";
import {useAuth} from "../hocs/useAuth";

const Context = createContext();

function AuthProvider({children}){
    const {authenticated, loading, handleLogin, handleLogout} = useAuth();

    return(
        
        <Context.Provider value={{loading, authenticated, handleLogin, handleLogout}}>
            {children}
        </Context.Provider>
    );
    
}

export {Context, AuthProvider};
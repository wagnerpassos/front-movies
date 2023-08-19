import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovie:token");
        const user = localStorage.getItem("@rocketmovie:user");

        if(user && token){
            api.defaults.headers.authorization = `Bearer ${token}`;
            
            setData({
                user: JSON.parse(user),
                token
            });
        }
    }, []);

    async function signIn({email, password}){
        try{
            const response = await api.post("/session", {email, password})
            const { user, token } = response.data;

            if(!user || !token){
                throw new Error(response.data.message);
            }
            api.defaults.headers.authorization = `Bearer ${token}`;

            localStorage.setItem("@rocketmovie:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovie:token", token);

            setData({user, token});
        }catch(error){
            alert(error);
        }
    }

    function signOut(){
        const token = localStorage.removeItem("@rocketmovie:token");
        const user = localStorage.removeItem("@rocketmovie:user");

        setData({});
    }

    return (
        <AuthContext.Provider value={{
             signIn, 
             signOut, 
             user: data.user 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthContext, AuthProvider, useAuth };
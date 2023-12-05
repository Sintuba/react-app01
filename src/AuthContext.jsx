import React ,{createContext,useState,useContext,useEffect} from 'react';
import bcrypt from 'bcryptjs'
export const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [userId,setUserId] = useState(null);
    
    useEffect(()=>{
        const storedUserId = localStorage.getItem('userId');
        if(storedUserId){
            setUserId(storedUserId);
            setIsAuthenticated(true);
        }
    },[]);



    const signin = (userId) =>{
        setUserId(userId);
        setIsAuthenticated(true);
        localStorage.setItem('userId',userId);
    };

    const signout = () =>{
        setIsAuthenticated(false);
        setUserId(null);
        localStorage.removeItem('userId');
    };

    return(
        <AuthContext.Provider value={{isAuthenticated,userId,signin,signout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
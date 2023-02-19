import { createContext, useEffect, useState } from 'react';
import { onAuthStateListiener } from '../utils/firebase.utils';

export const UserContext = createContext({
    loginUser: null,
    setLoginUser: () => null
});

export const UserProvider = ({children}) => {
    const [loginUser, setLoginUser] = useState(null);
    const value = { loginUser, setLoginUser }; 

    useEffect(()=>{
        const unsubscribe = onAuthStateListiener((user)=>{
            console.log('user login status', user);
            setLoginUser(user);
        });

        return unsubscribe;
    },[]);

    // useEffect = (()=>{
    //     const res = onAuthStateListiener((user_callback)=>{
    //         setLoginUser(user_callback);
    //     });
    //     console.log('user login status', res);
    //     return res;
    // }, []);

    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
};
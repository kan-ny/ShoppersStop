/* import { createContext, useEffect, useState } from 'react';
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
*/
import { useEffect, useReducer, createContext } from "react";
import { onAuthStateListiener } from '../utils/firebase.utils';

export const UserContext = createContext({
    loginUser: null,
    setLoginUser: () => null,
});

export const Initial_User = { loginUser: null };

export const SET_USER_TYPE = { SET_CURRENT_USER: 'SET_CURRENT_USER' };

export const userReducer = ( state, action ) => {
    console.log('inside user reducer');
    const { type, payload } = action;
    switch(type){
        case SET_USER_TYPE.SET_CURRENT_USER:
            console.log('inside user reducer SET_CURRENT_USER');

            return {
                ...state,
                loginUser: payload
            } 
        default:
            throw new Error(`Type ${type} cannot handle`);
    }
};

export const UserProvider = ({children}) => {
    const [ { loginUser }, dispatch ] = useReducer(userReducer, Initial_User);
    const setLoginUser = (user) => { dispatch({  type: SET_USER_TYPE.SET_CURRENT_USER, payload: user} ); }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateListiener((user)=>{
            console.log('user login status', user);
            setLoginUser(user);
        });
        
        return unsubscribe;
    }, []);

    const value = {
        loginUser
      };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}



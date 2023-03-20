import { createSlice } from "@reduxjs/toolkit";


const Initial_User = { loginUser: null,
    isLoading: false,
    error: null
 };

// createSlice() creates reducers, action and types
export const UserSlice = createSlice({
    // name space of slice
    name: 'user',
    initialState: Initial_User,
    reducers: {
        // setCurrentUser() => {}, === setCurrentUser() {}
        setCurrentUser(state, action) {
        // looks mutable but under the hood it's generating a new object
        // reduxjs/toolkit uses immer library to handle this.
            state.loginUser = action.payload; // easier to read and write
        } 

    }
});

// createSlice returns new object slice
// createSlice-object.actions returns all reducers  
export const { setCurrentUser } = UserSlice.actions; 

// the actual reducer can be get using .reducer
export const UserReducer = UserSlice.reducer;



// import { USER_TYPE } from "./user-types";

// export const UserReducer = (state = Initial_User, action) => {
//     const { type, payload } = action;
//     switch(type) {
//         case USER_TYPE.SIGNIN_SUCCESS:
//             // state is immutable, never mutate the state.
//             return {...state, loginUser: payload}
//         case USER_TYPE.SIGNOUT_SUCCESS:
//             return {...state, loginUser: undefined}
//         case USER_TYPE.SIGNIN_FAIL:
//         case USER_TYPE.SIGNUP_FAIL:
//         case USER_TYPE.SIGNOUT_FAIL:
//             return {...state, error: payload}
//         default:
//             return state
//     }
// }



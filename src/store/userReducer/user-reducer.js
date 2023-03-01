import { USER_TYPE } from "./user-types";

const Initial_User = { loginUser: null };

export const UserReducer = (state = Initial_User, action) => {
    const { type, payload } = action;
    switch(type) {
        case USER_TYPE.SET_CURRENT_USER:
            return {...state, loginUser: payload }
        default:
            return state
    }
}



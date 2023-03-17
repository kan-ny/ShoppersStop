import { USER_TYPE } from "./user-types";

const Initial_User = { loginUser: null,
    isLoading: false,
    error: null
 };

export const UserReducer = (state = Initial_User, action) => {
    const { type, payload } = action;
    switch(type) {
        case USER_TYPE.SIGNIN_SUCCESS:
            return {...state, loginUser: payload}
        case USER_TYPE.SIGNOUT_SUCCESS:
            return {...state, loginUser: undefined}
        case USER_TYPE.SIGNIN_FAIL:
        case USER_TYPE.SIGNUP_FAIL:
        case USER_TYPE.SIGNOUT_FAIL:
            return {...state, error: payload}
        default:
            return state
    }
}



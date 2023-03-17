import { USER_TYPE } from "./user-types"
export const userAction = (user) => ({
    type: USER_TYPE.SET_CURRENT_USER,
    payload: user
});

const action_ = (type, payload) => ({type, payload})

export const google_signin = () => (action_(USER_TYPE.GOOGLE_SIGNIN))

export const email_signin = (email, password) => (action_(USER_TYPE.EMAIL_SIGNIN, {email, password}));
export const check_user_signin = ()=> (action_(USER_TYPE.CHECK_USER_SESSION));
export const signin_success = (user) => action_(USER_TYPE.SIGNIN_SUCCESS, user);
export const signin_fail = (error) => action_(USER_TYPE.SIGNIN_FAIL, error);

export const signup_start = ( username, password, displayName ) => (action_(USER_TYPE.SIGNUP_START, { username, password, displayName }));
export const signup_success = (user, additionalDetails ) => (action_(USER_TYPE.SIGNUP_SUCCESS, {user, additionalDetails}));
export const signup_fail = (error) => (action_(USER_TYPE.SIGNUP_FAIL, error));

export const signout_start = () => (action_(USER_TYPE.SIGNOUT_START));
export const signout_success = () => (action_(USER_TYPE.SIGNOUT_SUCCESS));
export const signout_fail = (error) => (action_(USER_TYPE.SIGNOUT_FAIL, error));

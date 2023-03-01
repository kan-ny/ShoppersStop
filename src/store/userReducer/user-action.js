import { USER_TYPE } from "./user-types"
export const userAction = (user) => ({
    type: USER_TYPE.SET_CURRENT_USER,
    payload: user
});
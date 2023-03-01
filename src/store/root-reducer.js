import { combineReducers } from 'redux';
import { UserReducer } from './userReducer/user-reducer';

export const rootReducer = combineReducers({
    user: UserReducer
});
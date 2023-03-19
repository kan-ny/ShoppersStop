// import { combineReducers } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';

import { UserReducer } from './userReducer/user-reducer';
import { CartReducer } from './contentReducer/content-reducer';
import { CategoryReducer } from './categoryReducer/category-reducer';

export const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    category: CategoryReducer,
});
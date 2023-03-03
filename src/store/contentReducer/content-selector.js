import { createSelector } from 'reselect';

const contentReducerIp = (state) => state.cart;

export const contentItems = createSelector(
    [contentReducerIp],
    (cart) => cart.cartItem
);

export const contentDropdown = createSelector(
    [contentReducerIp],
    (cart) => cart.cart_dropdown
);

export const contentTotal = createSelector(
    [contentItems],
    (cartItem) => cartItem.reduce( (acc, currentEle)=> acc + ( currentEle['price'] * currentEle['quantity'] ) , 0 )

);

export const contentCount = createSelector(
    [contentItems],
    (cartItem) => cartItem.reduce((acc, currentEle)=> acc + currentEle['quantity'], 0)
);


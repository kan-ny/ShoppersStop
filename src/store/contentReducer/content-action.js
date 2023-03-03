import { CART_TYPES } from "./content-types";

export const cartAddAction = ( payload ) => ({
    type: CART_TYPES.ADD_ITEM,
    payload: payload
})

export const cartDecAction = ( payload ) => ({
    type: CART_TYPES.DECREASE_ITEM,
    payload: payload
})

export const cartRemoveAction = ( payload ) => ({
    type: CART_TYPES.REMOVE_ITEM,
    payload: payload
})

export const cartDropdownAction = ( payload ) =>  ({
    type: CART_TYPES.CART_DROPDOWN,
    payload: payload
})
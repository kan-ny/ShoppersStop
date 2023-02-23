import { useReducer, createContext } from "react";

export const CART_TYPES = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CART_DROPDOWN: 'CART_DROPDOWN',
    INCEASE_DECREASE_ITEM: 'INCEASE_DECREASE_ITEM'
};

export const CartContent = createContext({
    cart_dropdown: false,
    cartItem: [],
    total: 0,
    count: 0,
    setCartItem: () => null,
    setTotal: () => null,
    set_cart_dropdown: () => null,
    set_count: ()=> null
});

export const InitialValue = {
    cart_dropdown: false,
    cartItem: [],
    total: 0, 
    count: 0,
 };

export const indexOfItem = (list = [], item) => {
    return list.findIndex(ele=> ele['id'] === item['id'] );
}

export const getTotal = (list =[]) => {
    return list.reduce( (acc, currentEle)=> acc + ( currentEle['price'] * currentEle['quantity'] ) , 0 );
}

export const getCount = (list = [])=> {
    return list.reduce((acc, currentEle)=> acc + currentEle['quantity'], 0);
}

export const incOrDec = (list =[], payload) =>{
    console.log('incOrDec', payload);
    return list.map(ele=>{
        const i = indexOfItem(list, payload);
        if(i !== -1){
            return { ...ele, quantity: payload }
        }
        return {...ele}
    
    })
} 

export const addItem = (list, payload) =>{
    const i = indexOfItem(list, payload);
        if(i !== -1){
            return list.map(ele=> ele.id === payload.id ? {
                ...ele, quantity: ele.quantity += 1
            } : {...ele })
        }
        return [...list,  {...ele, quantity: 1}];
}

export const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case CART_TYPES.ADD_ITEM:
            return {
                ...state,
                cartItem: addItem(...cartItem, payload),
            } 
        case CART_TYPES.REMOVE_ITEM:
            return {
                ...state,
                cartItem: cartItem.filter(ele => ele['id'] !== payload['id'])
            }
        case CART_TYPES.CART_DROPDOWN:
            return {
                ...state,
                cart_dropdown: payload
            }
        case CART_TYPES.INCEASE_DECREASE_ITEM:
            return {
                ...state,
                // cartItem: incOrDec(...cartItem, payload)
            }
        default:
            throw new Error(`Type: ${type} cannot handle`);
    }
}

export const CartProvider = ({children}) => {
    
    const [ { cart_dropdown,
        cartItem,
        total, count }, dispatch ] = useReducer(CartReducer, InitialValue);
    
    const set_cart_dropdown = () => {
        dispatch({ type: CART_TYPES.CART_DROPDOWN, payload:  !cart_dropdown })
    }

    const increaseDecrease = ( item, val ) => {
        // dispatch({ type: CART_TYPES.INCEASE_DECREASE_ITEM, payload: {item: item, quantity : val  } } );
    }

    const removeItem = ( item ) => {
        dispatch({ type: CART_TYPES.REMOVE_ITEM, payload: item  });
    }

    const addCartItem = ( item ) => {
        dispatch({ type: CART_TYPES.ADD_ITEM, payload: item  })
    }

    const value = { cart_dropdown, count, total, cartItem, set_cart_dropdown, increaseDecrease, removeItem,  addCartItem };


    return (
    <CartContent.Provider value={value}>
        {children}
    </CartContent.Provider>);
};
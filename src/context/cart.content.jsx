/* import { useEffect, useState } from "react";
import { createContext } from "react";


const handleIncreaseDecrease = (list, item, val) => {
        if (item['quantity'] + val <= 0) return list;

        return list.map(ele => ele.id === item.id ?
            {...ele, quantity: ele['quantity'] + val}
            :
            {...ele}
            )
}

const handleRemoveItem = (list, item) => {
    return list.filter(ele=> ele['id'] !== item['id'])
}

const checkItemExist = (list, item) => {
    const index = list.findIndex(ele => ele['id'] === item['id']);

    // if(index === -1){
    //     item['quantity'] = 1
    //     list.push(item);
    // }else{

    //     item['quantity'] += 1;
    // }
    // console.log('test', list);
    // return list;

    if(index !== -1){
        console.log('exist');
        return list.map(ele=> ele.id === item.id ? 
            {...ele, quantity: ele['quantity'] + 1}
            :
            {...ele})
    }
    console.log('new', );

    return [ ...list, {...item, quantity: 1 } ]

};

export const CartContent = createContext({
    cart_dropdown: false,
    set_cart_dropdown: () => {},
    cartItem: [],
    setCartItem: () => {},
    total: 0,
    setTotal: ()=> {},
});


export const CartProvider = ({children}) => {
    const [cart_dropdown, set_cart_dropdown] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [total, setTotal] = useState(0);

    const addCartItem = (item) => {
        setCartItem(checkItemExist(cartItem, item));
    }
    const increaseDecrease = (item, val) => {
        setCartItem(handleIncreaseDecrease(cartItem, item, val ));
    } 

    useEffect(()=>{
        const newTotal = cartItem.reduce((acc, currentEle)=> acc + (currentEle['price'] *  currentEle['quantity']), 0 );
        setTotal(newTotal);

    }, [cartItem])

    const removeItem = (item) => {
        setCartItem(handleRemoveItem( cartItem, item));
    }

    const value = {total, increaseDecrease, removeItem, cart_dropdown, set_cart_dropdown, addCartItem, cartItem };

    return (
    <CartContent.Provider value={value}>
        {children}
    </CartContent.Provider>);
};

*/


import { useReducer, createContext } from "react";

export const CART_TYPES = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CART_DROPDOWN: 'CART_DROPDOWN',
    DECREASE_ITEM: 'DECREASE_ITEM'
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



export const additem_ = (list, payload, value= 1) =>{
    const i = indexOfItem(list, payload);
        if(i !== -1){
           return list.map(ele=> {
            if(ele['id'] === list[i]['id'] ){
                ele.quantity += value;
                if(ele.quantity < 1){
                    ele.quantity = 1 ;
                }
                return {...ele}
            }else{
                return {...ele}
            }
            
           })
        }
        return [...list,  {...payload, quantity: 1}];
}
 
export const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case CART_TYPES.ADD_ITEM:
            return {
                ...state,
                cartItem: additem_([...state.cartItem], payload),
                total: getTotal([...state.cartItem]),
                count: getCount([...state.cartItem])
            } 
        case CART_TYPES.REMOVE_ITEM:
            // the amount is no

            const x = {
                ...state,
                cartItem: [...state.cartItem].filter(ele=> ele['id'] !== payload.id ),
            }
            return {
                ...x,
                total: getTotal( x['cartItem']),
                count: getCount( x['cartItem'])
            }


        case CART_TYPES.CART_DROPDOWN:
            return {
                ...state,
                cart_dropdown: payload
            }
        case CART_TYPES.DECREASE_ITEM:
            return {
                ...state,
                cartItem: additem_([...state.cartItem], payload, -1),
                total: getTotal([...state.cartItem]),
                count: getCount([...state.cartItem])
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

    const decreaseItem = ( item ) => {
        dispatch({ type: CART_TYPES.DECREASE_ITEM, payload: item } );
    }

    const removeItem = ( item ) => {
        dispatch({ type: CART_TYPES.REMOVE_ITEM, payload: item  });
    }

    const addCartItem = ( item ) => {
        dispatch({ type: CART_TYPES.ADD_ITEM, payload: item  })
    }

    const value = { cart_dropdown, count, total, cartItem, set_cart_dropdown, decreaseItem, removeItem,  addCartItem };


    return (
    <CartContent.Provider value={value}>
        {children}
    </CartContent.Provider>);
};
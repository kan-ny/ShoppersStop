import { CART_TYPES } from "./content-types";

const Initial_Cart = {
   cartItem : [],
//    total: 0,
//    count: 0,
   cart_dropdown: false
}

const indexOfItem = (list = [], item) => {
    return list.findIndex(ele=> ele['id'] === item['id'] );
}


// moved to content reducer
// const getTotal = (list =[]) => {
//     return list.reduce( (acc, currentEle)=> acc + ( currentEle['price'] * currentEle['quantity'] ) , 0 );
// }

// const getCount = (list = [])=> {
//     return list.reduce((acc, currentEle)=> acc + currentEle['quantity'], 0);
// }

const additem_ = (list, payload, value= 1) =>{
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


export const CartReducer = (state = Initial_Cart, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_TYPES.ADD_ITEM:
            return {
                ...state,
                cartItem: additem_([...state.cartItem], payload),
                
            }
            // return {
            //     ...y,
            //     total: getTotal( y['cartItem']),
            //     count: getCount( y['cartItem'])
            // }

        case CART_TYPES.REMOVE_ITEM:
            return {
                ...state,
                cartItem: [...state.cartItem].filter(ele=> ele['id'] !== payload.id ),
            }
            // return {
            //     ...x,
            //     total: getTotal( x['cartItem']),
            //     count: getCount( x['cartItem'])
            // }
        case CART_TYPES.CART_DROPDOWN:
            return {
                ...state,
                cart_dropdown: payload
            }
        case CART_TYPES.DECREASE_ITEM:
            return {
                ...state,
                cartItem: additem_([...state.cartItem], payload, -1),
            }
            // return {
            //     ...z,
            //     total: getTotal( z['cartItem']),
            //     count: getCount( z['cartItem'])
            // }
        default:
            return state
    }
}
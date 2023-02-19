import { useEffect, useState } from "react";
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
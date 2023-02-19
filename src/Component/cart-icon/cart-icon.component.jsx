import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContent } from '../../context/cart.content';
import { useContext, useEffect, useState } from 'react';

const CartIcon = () => {
    const { cart_dropdown, set_cart_dropdown, cartItem } = useContext(CartContent); 
    const [ itemCount, setItemCount ] = useState(0);

    useEffect(()=>{
        let count = 0;
        cartItem.forEach(ele =>{
            count += ele['quantity'];
        });
        setItemCount(count);
    }, [cartItem]);

    const onC = () => {
        console.log('cart_dropdown..', cart_dropdown);
        set_cart_dropdown(!cart_dropdown);
    }

    return (<div onClick={onC} className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount > 0 ? itemCount : null }</span>
    </div>)

};

export default CartIcon;
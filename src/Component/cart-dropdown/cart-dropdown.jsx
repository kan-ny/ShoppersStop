import { useContext } from 'react';
import { CartContent } from '../../context/cart.content';
import Button from '../button/Button.component';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

import CartItem from './cart-item.component';


const CartDropdown = () => {
    const { cartItem, set_cart_dropdown } = useContext(CartContent);
    const navigate = useNavigate();
    
    const handleCheckout = () =>{
        set_cart_dropdown(false);
        navigate('/checkout');   
    }
    console.log('hola', cartItem);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItem.map(product=> <CartItem key={product.id} product={product} ></CartItem>)}
               
            </div>
            <Button onClick={handleCheckout} >CHECKOUT</Button>
        </div>
    );

};

export default CartDropdown;
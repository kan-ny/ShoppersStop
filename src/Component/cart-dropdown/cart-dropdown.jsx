import { useContext } from 'react';
import { CartContent } from '../../context/cart.content';
import Button from '../button/Button.component';
import { CartDropdownContainer, CartItems} from './cart-dropdown.styles.jsx';
import { useNavigate } from 'react-router-dom';

import CartItem from './cart-item.component';
import { useDispatch, useSelector } from 'react-redux';
import { contentItems } from '../../store/contentReducer/content-selector';
import { cartDropdownAction } from '../../store/contentReducer/content-action';


const CartDropdown = () => {
    const dispatch = useDispatch();
    // const { cartItem, set_cart_dropdown } = useContext(CartContent);
    const cartItem  = useSelector(contentItems);
    const navigate = useNavigate();
    
    const handleCheckout = () =>{
        // set_cart_dropdown(false);
        dispatch(cartDropdownAction(false));
        navigate('/checkout');   
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItem.length ?
                cartItem.map(product=> <CartItem key={product.id} product={product} ></CartItem>)
                    :
                    <span>Your cart is Empty</span>
            }
            </CartItems>
            <Button onClick={handleCheckout} >CHECKOUT</Button>
        </CartDropdownContainer>
    );

};

export default CartDropdown;
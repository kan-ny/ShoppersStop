import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContent } from '../../context/cart.content';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; 
import { cartDropdownAction } from '../../store/contentReducer/content-action';
import { useDispatch } from 'react-redux'; 
import { contentCount, contentDropdown } from '../../store/contentReducer/content-selector';


const CartIcon = () => {
    const dispatch = useDispatch();
    const cart_dropdown = useSelector(contentDropdown);
    const count = useSelector(contentCount);
    
    const {  cartItem } = useContext(CartContent); 
    const [ itemCount, setItemCount ] = useState(0);

    // useEffect(()=>{
    //     let count = 0;
    //     cartItem.forEach(ele =>{
    //         count += ele['quantity'];
    //     });
    //     setItemCount(count);
    // }, [cartItem]);


    const onC = () => {
        // set_cart_dropdown(!cart_dropdown);
        dispatch(cartDropdownAction(!cart_dropdown));
    }

    return (<div onClick={onC} className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{count > 0 ? count : null }</span>
    </div>)

};

export default CartIcon;
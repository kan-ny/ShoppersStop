import './product-card.styles.scss';
import Button from '../button/Button.component';
import { useContext } from 'react';
import { CartContent } from '../../context/cart.content';

export const ProductCard = ({product}) => {

    const { name, price, imageUrl } = product;

    const { addCartItem } = useContext(CartContent);
    const handleAdd = () => addCartItem(product);

    return (<div className='product-card-container'>
        <img  src={imageUrl} alt={name} />
        <div className='footer'>
            <span className='name'> {name} </span>
            <span className='price'> {price} </span>
        </div>
        <Button onClick={handleAdd} btype='inverted' >Add</Button>

    </div>);



};

export default ProductCard;
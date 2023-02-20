import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx';
import Button, { BUTTON_TYPE } from '../button/Button.component';
import { useContext } from 'react';
import { CartContent } from '../../context/cart.content';

export const ProductCard = ({product}) => {

    const { name, price, imageUrl } = product;

    const { addCartItem } = useContext(CartContent);
    const handleAdd = () => addCartItem(product);

    return (<ProductCardContainer>
        <img  src={imageUrl} alt={name} />
        <Footer>
            <Name> {name} </Name>
            <Price> {price} </Price>
        </Footer>
        <Button onClick={handleAdd} btype={BUTTON_TYPE.inverted} >Add</Button>

    </ProductCardContainer>);



};

export default ProductCard;
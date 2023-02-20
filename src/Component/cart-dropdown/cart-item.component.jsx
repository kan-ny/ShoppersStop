import { ItemContainer, ItemImg, Details} from './cart-dropdown.styles.jsx';

const CartItem = ({product}) => {

    const {name, quantity, price, imageUrl} = product;

    return(<div>
        <ItemContainer>
        <ItemImg className='itemImg' src={imageUrl} alt={name} />
        <Details >
            <h2 className='name'>{name}</h2>
            <span className='quanity'>{quantity} X ${price}</span>
        </Details>
        </ItemContainer>
      
    </div>);

}

export default CartItem;
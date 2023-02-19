import './cart-dropdown.styles.scss';

const CartItem = ({product}) => {

    const {name, quantity, price, imageUrl} = product;

    return(<div>
        <div className='itemContainer'>
        <img className='itemImg' src={imageUrl} alt={name} />
        <div className='details' >
            <h2 className='name'>{name}</h2>
            <span className='quanity'>{quantity} X ${price}</span>
        </div>
        </div>
      
    </div>);

}

export default CartItem;
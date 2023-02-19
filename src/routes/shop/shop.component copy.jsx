
// import SHOP_DATA from '../../jsondata/shop-data.json';

import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../Component/product-card/product-card.component";
import './shop.styles.scss';

const ShopApp = () => {

    const { products } = useContext(ProductsContext);
    console.log('shop_content', products);

    return(<div className="product-container">
        
        {/*  
        version 1
        {SHOP_DATA.map((product)=>{
            return (<div key={product.id}>
                {product.name}
            </div>)
        })} */}


    {/* 
        version 2
    { products.map((product)=>{
            return (<div key={product.id}>
                {product.name}
            </div>)
        })} */}

    {products.map(product=>{
        return <ProductCard key={product.id} product={product} />
    })}

    </div>)

};
export default ShopApp;

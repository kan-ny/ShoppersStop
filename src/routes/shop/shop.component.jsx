

// import SHOP_DATA from '../../jsondata/shop-data.json';

import { Fragment, useContext } from "react";
import { CategoryContext } from "../../context/product.context";
import ProductCard from "../../Component/product-card/product-card.component";
import './shop.styles.scss';
import Preview from "../category-preview/category-preview.componet";

const ShopApp = () => {

    const { category_data } = useContext( CategoryContext );

    return(
        <Fragment >

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

    {
        Object.keys(category_data).map((title, index) => {
            
            return ( 
                <Preview title={title} key={index} products={ category_data[title] } /> 
                )
            })
        }
    </Fragment>
    )

};
export default ShopApp;

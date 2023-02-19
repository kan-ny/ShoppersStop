// import SHOP_DATA from '../../jsondata/shop-data.json';


import { Fragment, useContext } from "react";
import { CategoryContext } from "../../context/product.context";
import ProductCard from "../../Component/product-card/product-card.component";
import './category.styles.scss';
import Preview from "../category-preview/category-preview.componet";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Category = () => {

    const { category_data } = useContext( CategoryContext );
    const [productsData, setProducts] = useState([]);
    const { category } = useParams(); 
    useEffect(()=>{
        setProducts(category_data[category]);
    }, [category_data, category])


    return(
        <Fragment >
             <h2 className="category-title" >{category.toLocaleUpperCase()}</h2>

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

        productsData && 
            <div className="product-container">
            {productsData.map((product, index) =>
             <ProductCard key={product.id} product={product} />
            )}
            </div>
            
    }

    </Fragment>
    )

};
export default Category;

// import SHOP_DATA from '../../jsondata/shop-data.json';


import { Fragment, useContext } from "react";
import { CategoryContext } from "../../context/product.context";
import ProductCard from "../../Component/product-card/product-card.component";
import { ProductContainer, CategoryTitle } from './category.styles.jsx';
import Preview from "../category-preview/category-preview.componet";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { getCategoriesData } from "../../store/categoryReducer/category-selector";

const Category = () => {
    const category_data = useSelector(getCategoriesData);
    // const { category_data } = useContext( CategoryContext );
    const [productsData, setProducts] = useState([]);
    
    const { category } = useParams(); 
    useEffect(()=>{
        setProducts(category_data[category]);
    }, [category_data, category])


    return(
        <Fragment >
             <CategoryTitle >{category.toLocaleUpperCase()}</CategoryTitle>

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
            <ProductContainer>
            {productsData.map((product, index) =>
             <ProductCard key={product.id} product={product} />
            )}
            </ProductContainer>
            
    }

    </Fragment>
    )

};
export default Category;

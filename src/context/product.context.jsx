import { useEffect } from "react";
import { createContext, useState} from "react";
import PRODUCTS from '../../src/jsondata/shop-data.json';
import SHOP_DATA from '../../src/jsondata/shop-data.js';

import { addCollectionAndDoc, getCollectionAndDoc } from '../utils/firebase.utils.js';


export const CategoryContext = createContext({
    category_data: {}
});


export const CategoryProvider = ({children})=> {

    const [category_data, set_shop_content] = useState({});
    const value = { category_data };

    useEffect(()=>{

        // adding json data js to firebase
        // addCollectionAndDoc('categories', SHOP_DATA);


        // call to get Data from firebase
        const getCategoryMap = async () => {
            const categoryData = await getCollectionAndDoc();
            // set_shop_content(categoryData);
        }
        getCategoryMap();
    }, []);

    return ( <CategoryContext.Provider value={value} >
        {children}
        </CategoryContext.Provider> );
};

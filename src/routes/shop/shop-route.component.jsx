
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import ShopApp from "./shop.component";
const ShopRoutes = () =>{

  

    return(<Routes>
            <Route index={true} element={ <ShopApp /> } />
            <Route path=":category" element={ <Category /> } />
        </Routes>)
}
export default ShopRoutes;
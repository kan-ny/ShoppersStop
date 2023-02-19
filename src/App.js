// import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Directive from '../src/Component/directory';
import  Navigation  from './routes/navigation/navigation';
// import Signin from './routes/signin/signin';
import Authentication from './routes/authentication/authentication';
import ShopRoutes from './routes/shop/shop-route.component';
import Checkout from './Component/checkout/Checkout';

const SomeApp = () => {
    return (
        <div>
            Hola..
        </div>
    );
}

const App = () => {  

   return (
    <Routes>
         <Route path='/'  element={<Navigation/>} >
             <Route index={true} element={<Directive />} />
             <Route path='shop/*' element={<ShopRoutes />} />
             <Route path='auth' element={<Authentication />} />
             <Route path='checkout' element={<Checkout />} />
         </Route>
     </Routes>
   )
}
export default App;


// import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Directive from '../src/Component/directory';
import  Navigation  from './routes/navigation/navigation';
// import Signin from './routes/signin/signin';
import Authentication from './routes/authentication/authentication';
import ShopRoutes from './routes/shop/shop-route.component';
import Checkout from './Component/checkout/Checkout';
import { onAuthStateListiener, getCurrentUser } from './utils/firebase.utils';
import { userAction } from './store/userReducer/user-action';

// check user call using saga
import { check_user_signin } from './store/userReducer/user-action';

const SomeApp = () => {
    return (
        <div>
            Hola..
        </div>
    );
}

const App = () => {  
    const dispatch =  useDispatch();

    useEffect(()=>{
        // const unsubscribe = onAuthStateListiener((user)=>{
        //     console.log('user login status', user);
        //     dispatch(userAction(user));
        // });
        
        // return unsubscribe;
        // getCurrentUser().then(user => console.log('///',user) )

        dispatch(check_user_signin());


    }, []);

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


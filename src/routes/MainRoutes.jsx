import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Directive from '../Component/directory';
import  Navigation  from './navigation/navigation';
// import Signin from './signin/signin';
import Authentication from './authentication/authentication';

const MainRoutes = () => {    
   
   return (
    <Routes>
         <Route path='/'  element={  <Navigation />} >
            <Route index element={  <Directive />} />
            <Route path='/auth' element={  <Authentication />} />

         </Route>
     </Routes>
   )
}
export default MainRoutes;


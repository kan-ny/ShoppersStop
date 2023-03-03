import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext  } from 'react'; 
import { ReactComponent as Logo}  from '../../assets/crown.svg';
import { NavigationDiv, NavLinksContainer, RouterLink } from './navigation.styles.jsx';
import { UserContext } from '../../context/user.context';
import { userSignOut } from '../../utils/firebase.utils';
import CartIcon from '../../Component/cart-icon/cart-icon.component';
import CartDropdown from '../../Component/cart-dropdown/cart-dropdown';

import { CartContent } from '../../context/cart.content';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/userReducer/user-selector';
import { contentSelector } from '../../store/contentReducer/content-selector';

const Navigation = () => {

    // const { cart_dropdown } = useContext(CartContent);
    const { cart_dropdown } = useSelector(contentSelector);
    const {loginUser} = useSelector(userSelector);
    
    // const  { loginUser, setLoginUser } = useContext(UserContext);

    const logout = async () => {
        const res = await userSignOut();
        // if(res === undefined ){
        //     setLoginUser(null);
        // }
        console.log(res);
    }

  
    console.log('nav copmp loginUser ', loginUser);
    return (
        <div>
            <NavigationDiv > 
                <RouterLink to={'/'} >
                    {/* <div className='logo'></div> */}
                    <Logo />
                    {/* <p> Home </p> */}
                </RouterLink>
            
            <NavLinksContainer> 
                <Link  to={'/shop'}  className='nav-link' >
                    <p > Shop </p>
                </Link>
            </NavLinksContainer>

            { loginUser !== null ?

            <NavLinksContainer> 
                {/* <Link className='nav-link' >
                    <p> { loginUser.email } </p>
                </Link> */}
                <Link onClick={logout} className='nav-link' >
                    <p>Logout <br/> { loginUser.email } </p>
                    <p>  </p>
                </Link>


            </NavLinksContainer>

            :
            <NavLinksContainer> 
            <Link to={'/auth'}  className='nav-link' >
                    <p> Signin </p>
            </Link>
            </NavLinksContainer>
            }
          
                <CartIcon  />
                {/* <CartIcon otherprops={()=>handelDropDown} /> */}

            </NavigationDiv>
            {
                cart_dropdown ?
                <CartDropdown />
                :
                null
            }

            <Outlet />
        </div>
    );
};

export default Navigation;
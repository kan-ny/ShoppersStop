import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext  } from 'react'; 
import { ReactComponent as Logo}  from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';
import { userSignOut } from '../../utils/firebase.utils';
import CartIcon from '../../Component/cart-icon/cart-icon.component';
import CartDropdown from '../../Component/cart-dropdown/cart-dropdown';

import { CartContent } from '../../context/cart.content';

const Navigation = () => {

    const { cart_dropdown } = useContext(CartContent);
    
    const  { loginUser, setLoginUser } = useContext(UserContext);
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
            <div className='navigation' > 
                <Link to={'/'} className='logo-container' >
                    {/* <div className='logo'></div> */}
                    <Logo />
                    {/* <p> Home </p> */}
                </Link>
            
            <div className='nav-links-container'> 
                <Link  to={'/shop'}  className='nav-link' >
                    <p > Shop </p>
                </Link>
            </div>

            { loginUser !== null ?

            <div className='nav-links-container'> 
                {/* <Link className='nav-link' >
                    <p> { loginUser.email } </p>
                </Link> */}
                <Link onClick={logout} className='nav-link' >
                    <p>Logout <br/> { loginUser.email } </p>
                    <p>  </p>
                </Link>


            </div>

            :
            <div className='nav-links-container'> 
            <Link to={'/auth'}  className='nav-link' >
                    <p> Signin </p>
            </Link>
            </div>
            }
          
                <CartIcon  />
                {/* <CartIcon otherprops={()=>handelDropDown} /> */}

            </div>
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
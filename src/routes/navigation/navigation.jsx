import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext, useEffect  } from 'react'; 
import { ReactComponent as Logo}  from '../../assets/crown.svg';
import { NavigationDiv, NavLinksContainer, RouterLink } from './navigation.styles.jsx';
import { UserContext } from '../../context/user.context';
import { userSignOut } from '../../utils/firebase.utils';
import CartIcon from '../../Component/cart-icon/cart-icon.component';
import CartDropdown from '../../Component/cart-dropdown/cart-dropdown';

import { CartContent } from '../../context/cart.content';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../store/userReducer/user-selector';
import { contentDropdown } from '../../store/contentReducer/content-selector';
import { setCategoryData } from '../../store/categoryReducer/category-action';
import { getCollectionAndDoc } from '../../utils/firebase.utils';
import { setCategoryDataAsync } from '../../store/categoryReducer/category-action';

const Navigation = () => {

    // const { cart_dropdown } = useContext(CartContent);
    const  cart_dropdown  = useSelector( contentDropdown );
    const {loginUser} = useSelector(userSelector);
    
    // const  { loginUser, setLoginUser } = useContext(UserContext);

    const logout = async () => {
        const res = await userSignOut();
        // if(res === undefined ){
        //     setLoginUser(null);
        // }
        console.log(res);
    }


    const dispatch = useDispatch();
    useEffect(()=>{
        // const getCategoryMap = async () => {
        //     const categoryData = await getCollectionAndDoc();
        //     dispatch( setCategoryData(categoryData));
        // };
        // getCategoryMap();

        dispatch(setCategoryDataAsync());
    },[])
  
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
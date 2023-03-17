import { useState, useContext } from "react";
import FormInput from "../../Component/from-input/form-input.component";
import Button, { BUTTON_TYPE } from "../../Component/button/Button.component";
import { signInAuthWithEmainAndPassword, signInWithGooglePopup } from "../../utils/firebase.utils";
import { SignInContainer, ButtonsContainer } from './signin.styles.jsx';

import { UserContext } from "../../context/user.context";
import { useDispatch }  from 'react-redux';
import { google_signin, email_signin } from "../../store/userReducer/user-action";


const FormFields = {
  email: "",
  password: "",
};
const Signin = () => {
  const [loginDetails, setLoginDetails] = useState(FormFields);
  const { email, password } = loginDetails;
  const dispatch =useDispatch();

  const { setLoginUser } = useContext(UserContext);

  const handelChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      // const auth = await signInAuthWithEmainAndPassword(email, password);
      // console.log('auth', auth);

      // saga
      dispatch( email_signin(email, password) );



      // setLoginUser(auth.user);

      setLoginDetails(FormFields);
    } catch (error) {
      alert(error.code);
    }
    
  };


  const signinWithGoogle = () => {
    // const response = await signInWithGooglePopup();
    // // const { setLoginUser } = useContext(UserContext);
    // // setLoginUser(response.user);
    // console.log('signinWithGoogle',response);

    dispatch(google_signin());



}


  return (
    <SignInContainer>

<h2>Already Have an account ?</h2>
            <span>Sign in with your email and password</span> 


      <form onSubmit={handelSubmit}>
        <FormInput
          onChange={handelChange}
          name="email"
          value={email}
          required
          label={"email"}
        />
        <FormInput
          onChange={handelChange}
          name="password"
          type="password"
          value={password}
          required
          label={"password"}
        />
        <ButtonsContainer>
          <Button children="Login" type="submit" />
          <Button type="button" onClick={signinWithGoogle} children={"Sign In With Google"} btype={BUTTON_TYPE.google} />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default Signin;

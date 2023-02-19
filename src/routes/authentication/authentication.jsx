import { signInWithGooglePopup, createUserDoc } from  "../../utils/firebase.utils";
import Signup from "../singup/signup";
import Button from "../../Component/button/Button.component";
import Signin from "./singin";


const authStyle = {
    display: "flex",
    "justify-content": "space-between",
    margin: "30px auto",
    width: "850px"
};


const Authentication = () => {

    // const signinWithGoogle = async () => {
    //     const response = await signInWithGooglePopup();
    //     console.log(response);
    //     const userData = await createUserDoc(response.user);
    //     console.log('userData', userData );
    // }

    return (
        <div style={authStyle}>


            {/* <Button onClick={signinWithGoogle} btype="google" children={'Sign in with google'} /> */}
            <Signin />
            {/* <button onClick={signinWithGoogle}>Sign in with google</button> */}
            <Signup />
        </div>
    );

}

export default Authentication;
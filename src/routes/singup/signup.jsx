import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDoc } from "../../utils/firebase.utils";
import FormInput from "../../Component/from-input/form-input.component"; 
import { SignUpContainer } from './signup.styles.jsx';
import Button from "../../Component/button/Button.component";
import { useDispatch } from "react-redux";
import { signup_start } from "../../store/userReducer/user-action";

const formFileds = {
    name: "",
    email: "",
    pwd: "",
    cpwd: ""
}

const Singup = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(formFileds);
    const { name, email, pwd, cpwd } = formData;
    const handelChange = (event) =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    } 
    
    const resetFormresetForm = () => {
        setFormData(formFileds);
    }

    const submit = async (event) => {
        console.log('default event', event);
        event.preventDefault();

        if(pwd !== cpwd) {
            alert('password not match');
            return;
        };
        try {
            // console.log('formdata',formData);
            // const { user } = await createAuthUserWithEmailAndPassword(email, pwd);
            // console.log('user obj', user);
            // const createDoc = await createUserDoc(user, { displayName: name});
            // console.log('create user doc using signup with email and password', createDoc);
            dispatch(signup_start(email, pwd, name));

            // resetFormresetForm();
        } catch (error) {

            if(error.code === 'auth/email-already-in-use'){
                alert("account already exist");
                return;
            }
            console.log(error);
        }
       
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span> 

        <form onSubmit={submit}>



            {/* <h2>Sign Up with Email and Password</h2> */}

            <FormInput label="Display Name" required type="text" name="name" onChange={handelChange} value={name} />
            <FormInput label="Email" required type="text" name="email" onChange={handelChange} value={email} />
            <FormInput type="password" label="Password" required  name="pwd" onChange={handelChange} value={pwd} />
            <FormInput type="password" label="Confirm Password" required name="cpwd" onChange={handelChange} value={cpwd} />

            {/* <label>Display Name</label>
            <input required  /> */}

            {/* <label></label>
            <input required type="email" name="email" onChange={handelChange} value={email} />

            <label>Password</label>
            <input required type="password" name="pwd" onChange={handelChange} value={pwd} />

            <label>Confirm Password</label>
            <input required type="password" name="cpwd" onChange={handelChange} value={cpwd} /> */}
            

            <Button type="submit" children={"Submit Form"} />
        </form>

        </SignUpContainer>
    );

}

export default Singup;
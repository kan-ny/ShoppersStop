// 3 buttons 
import { BaseButton, GoogleSign, Inverted } from './button.styles.jsx';


export const BUTTON_TYPE  = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
};

const getButton = (btype = 'base') => 
    ({
        [BUTTON_TYPE.base]: BaseButton,
        [BUTTON_TYPE.google]: GoogleSign,
        [BUTTON_TYPE.inverted]: Inverted
    }[btype]);


const Button = ({children, btype, ...otherprops}) => {
    
    const CustomButton = getButton(btype);
    return <CustomButton {...otherprops} >{children}</CustomButton>

    // return <button {...otherprops} className={`button-container ${BUTTON_TYPE[btype]}`} >{children}</button>
    

}

export default Button;
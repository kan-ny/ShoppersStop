// 3 buttons 
import './button.styles.scss';

const BUTTON_TYPE  = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, btype="inverted", ...otherprops}) => {

    return <button {...otherprops} className={`button-container ${BUTTON_TYPE[btype]}`} >{children}</button>

}

export default Button;
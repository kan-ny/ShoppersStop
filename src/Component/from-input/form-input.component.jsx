import './form-input.styles.scss';

const FormInput = ({label, ...inputProps}) =>{

    return(
        <div className="group">
        { label && <label className={`form-input-label ${inputProps.value.length ? 'shrink' : 'null'}`}> {label} </label> }
        <input className="form-input" {...inputProps} />
        </div>
    )   


}


export default FormInput;
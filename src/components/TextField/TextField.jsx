import './TextFieldStyle.css'

export const TextField = ({label, type, id}) => {
    return(
        <input id={id} className="txtfld1" placeholder={label} type={type}></input>
    )
}
import './ButtonStyle.css'

export const Button = ({label, variant}) => {
    return(
        <button className={variant}>{label}</button>
    )
}
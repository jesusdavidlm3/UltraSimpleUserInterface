import './CheckBoxStyle.css'

export const CheckBox = ({ label }) => {
    return(
        <>
            <input className='checkBox' type="checkbox"></input>
            <p>{ label }</p>
        </>
    )
}
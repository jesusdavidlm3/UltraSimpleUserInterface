import './CheckBoxStyle.css'

export const CheckBox = ({ label }) => {
    return(
        <div className='chckbxctn'>
            <input className='checkBox' type="checkbox"></input>
            <p>{ label }</p>
        </div>
    )
}
import './TitleStyle.css'

export const Title = ({variant, Text, color}) => {
    return(
        <>
            {variant == 'h1' && 
                <h1 className={ color }>{ Text }</h1>    
            }

            {variant == 'h2' && 
                <h2 className={ color }>{ Text }</h2>    
            }

            {variant == 'h3' && 
                <h3 className={ color }>{ Text }</h3>    
            }

            {variant == 'h4' && 
                <h4 className={ color }>{ Text }</h4>    
            }

            {variant == 'h5' && 
                <h5 className={ color }>{ Text }</h5>    
            }

            {variant == 'h6' && 
                <h6 className={ color }>{ Text }</h6>    
            }
        </>
    )
}
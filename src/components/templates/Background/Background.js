import { useState, useEffect } from 'react'
import './_Background.style.scss'

/// TODO: Define props for Background
const Background = ({testID, type, children}) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Background` }>
          { children}
        </div>
    )

}

export default Background
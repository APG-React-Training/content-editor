import { useState, useEffect } from 'react'
import './_Tags.style.scss'

const Tags = ({testID, text}) => {

    return(
        <div data-testid={ testID }
             className={ `Tags` }>
          { text }
        </div>
    )

}

export default Tags
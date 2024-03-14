import { useState, useEffect } from 'react'
import './_Paragraph.style.scss'

const Paragraph = ({testID, type, text}) => {

    return(
        <p data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Paragraph` }>
          { text }
        </p>
    )

}

export default Paragraph
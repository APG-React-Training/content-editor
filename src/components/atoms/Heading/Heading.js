import { useState, useEffect } from 'react'
import './_Heading.style.scss'

const Heading = ({testID, type, text, color}) => {

    const CustomTag = type

    return(
        <CustomTag data-testid={ testID }
             data-object-type={ color ?? "black" }
             className={ `Heading` }>
          { text }
        </CustomTag>
    )

}

export default Heading
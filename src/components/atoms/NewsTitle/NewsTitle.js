import { useState, useEffect } from 'react'
import './_NewsTitle.style.scss'

const NewsTitle = ({testID, text }) => {

    return(
        <div data-testid={ testID }
             className={ `NewsTitle` }>
          { text }
        </div>
    )

}

export default NewsTitle
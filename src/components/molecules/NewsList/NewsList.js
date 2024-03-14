import { useState, useEffect } from 'react'
import './_NewsList.style.scss'
import { Heading, NewsTitle } from '../../atoms'

const NewsList = ({testID, data}) => {

    return(
        <div data-testid={ testID }
             className={ `NewsList` }>
          <Heading type={'h3'} text={'Actueel'} />
          {
            data.map( (newsItem) => {
              return(
                <NewsTitle key={newsItem.id} text={newsItem.title} />
              )
            })

          }
        </div>
    )

}

export default NewsList
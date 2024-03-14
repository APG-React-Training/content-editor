import { useState, useEffect } from 'react'
import './_Card.style.scss'
import { Row, Col} from 'react-bootstrap'
import { Heading, Paragraph, Tags } from '../../atoms'

const Card = ({testID, type, width, data, action }) => {

  const colWidth = width > 5 ? width : 12


    const renderImageLeft = () => {
      if(width > 5) {
        return(
          <Col md={12 - colWidth} className={'image'}
               style={{ backgroundImage: `url('${data.image}')` }} >
          </Col>
        )
      }
    }


    const renderCardType = () => {

        if( width === 5 && data.image) {
          return(
            <Row className={'card-content'} data-object-type={'slate'}>
              <Col md={12 } className={'image-top'}
                   style={{ backgroundImage: `url('${data.image}')` }} >
              </Col>
              <Col md={12} >

                <div className={'content-small'}>
                  <Paragraph text={data.content}
                             type={'blue'} />
                  <Tags text={`Achtergrond: ${data.tags.join(', ')}`} />
                </div>
              </Col>
            </Row>
        )
        }

        /// "Normaal"
        return (
          <Row className={'card-content'} data-object-type={ type ?? ""}>
            { renderImageLeft()}
            <Col md={colWidth} className={'text-content'}>
              <div className={'content'}>
                <Heading type={'h1'} text={data.title} color={'white'}/>
                <Paragraph text={data.content} />
                <Tags text={`Achtergrond: ${ data.tags.join(', ') }` } />
              </div>
            </Col>
          </Row>
        )

    }

    return(
        <Col data-testid={ testID }
             className={ `Card` }
             onClick={() => action(data)}
             md={width} >

          { renderCardType() }

        </Col>
    )

}

export default Card
import 'bootstrap/dist/css/bootstrap.min.css'
import './resources/styles/main.css'
import { Container, Row, Col  }  from 'react-bootstrap'
import { Background } from './components/templates'
import {
  Heading, NewsTitle,
  Paragraph,
  Tags
} from './components/atoms'
import { Card, NewsList } from './components/molecules'

const App = () => {

  const news = [
    { id: 1, title: 'Dit is nieuws item 1'},
    { id: 2, title: 'Dit is nieuws item 2'},
    { id: 3, title: 'Dit is nieuws item 3'},
    { id: 4, title: 'Dit is nieuws item 4'},
  ]

  const content = [
    { id: 1, title: "Beleggingen uitgelegd", tags: ['beleggingen', 'inkomen'], content: 'Iemand van APG doet iets moois', image: 'https://apg.nl/media/3krbxykh/anp-470691768.jpg?width=1900&height=900&rnd=133547146031870000'},
    { id: 2, title: "Artikel 2", tags: ['pensioenen', 'oude dag'], content: 'Iemand van APG doet iets moois', image: 'https://apg.nl/media/3krbxykh/anp-470691768.jpg?width=1900&height=900&rnd=133547146031870000'},
    { id: 3, title: "Artikel 3", tags: ['beleggingen', 'inkomen'], content: 'Iemand van APG doet iets moois' },
    { id: 4, title: "Artikel 4", tags: ['beleggingen', 'inkomen'], content: 'Iemand van APG doet iets moois', image: 'https://apg.nl/media/3krbxykh/anp-470691768.jpg?width=1900&height=900&rnd=133547146031870000'}
  ]


  return (
      <Container fluid={ true }>
        <Background>
         <Row>
           <Col md={9}>
             <Row>
               {
                 content.map( (item, index) => {

                   const w = [7,5,5,7]
                   const c = ['blue', 'red']
                   const wposition = index % 4
                   const position = index % 2

                   return(
                     <Card width={w[wposition]} type={c[position]} data={item} />
                   )

                 })
               }


            </Row>
           </Col>
           <Col md={3} style={{padding: 20}}>
             <NewsList data={news} />
           </Col>
         </Row>
        </Background>
      </Container>
  )
}

export default App

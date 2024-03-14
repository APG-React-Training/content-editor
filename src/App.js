import 'bootstrap/dist/css/bootstrap.min.css'
import './resources/styles/main.css'
import { Container, Row, Col  }  from 'react-bootstrap'
import { Background } from './components/templates'
import { Card, NewsList } from './components/molecules'

import { useFetchData } from './hooks'

const App = () => {


  const [news, newsLoaded] = useFetchData('http://localhost:3025/news')
  const [content, contentLoaded] =  useFetchData('http://localhost:3025/articles')


  return (
      <Container fluid={ true }>
        <Background>
         <Row>
           <Col md={9}>
             <Row>
               {
                 contentLoaded && content.map( (item, index) => {

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
             { newsLoaded && <NewsList data={news} /> }
           </Col>
         </Row>
        </Background>
      </Container>
  )
}

export default App

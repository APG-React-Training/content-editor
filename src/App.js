import 'bootstrap/dist/css/bootstrap.min.css'
import './resources/styles/main.css'
import { Container, Row, Col  }  from 'react-bootstrap'
import { Background } from './components/templates'
import { Card, NewsList } from './components/molecules'
import { useState } from 'react'

import { useFetchData } from './hooks'

const App = () => {

   const [refresh, setRefresh] = useState(false)

   const saveData = () => {

      const url = 'http://localhost:3025/news'
      const  params = { id: 20, title: 'Dit is een nieuwsbericht'}

       fetch(url, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(params)
       }).then(result => result.json())
         .then(result => setRefresh(!refresh))

   }

  const [news, newsLoaded] = useFetchData('http://localhost:3025/news', refresh)
  const [content, contentLoaded] =  useFetchData('http://localhost:3025/articles', refresh)

  return (
      <Container fluid={ true }>

        <Background>
          <button onClick={() => saveData()}>Opslaan
          </button>
          <Row>
            <Col md={9}>
              <Row>
                {
                  contentLoaded && content.map((item, index) => {

                    const w = [7, 5, 5, 7]
                    const c = ['blue', 'red']
                    const wposition = index % 4
                    const position = index % 2

                    return (
                      <Card key={index}
                            width={w[wposition]}
                            type={c[position]} data={item} />
                    )
                  })
                }
              </Row>
            </Col>
            <Col md={3} style={{ padding: 20 }}>
              {newsLoaded && <NewsList data={news} />}
            </Col>
          </Row>
        </Background>
      </Container>
  )
}

export default App

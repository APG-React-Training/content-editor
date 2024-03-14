import 'bootstrap/dist/css/bootstrap.min.css'
import './resources/styles/main.css'
import { Container, Row, Col  }  from 'react-bootstrap'
import { Background } from './components/templates'
import { Card, NewsList } from './components/molecules'
import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

import { useFetchData } from './hooks'

const App = () => {

   const [refresh, setRefresh] = useState(false)
   const [show, setShow] = useState(false);
   const [currentItem, setCurrentItem] = useState()



   const saveData = (type, params) => {

      const method  = params.id ? 'PATCH' : 'POST'
      const url = `http://localhost:3025/${type}${params.id ? '/' + params.id.toString() :''}`

       fetch(url, {
         method: method,
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(params)
       }).then(result => result.json())
         .then(result => setRefresh(!refresh))

   }

  const handleClose = () => {
    setShow(false)
    console.log(currentItem)
    saveData('articles', currentItem)
  }

  const handleShow = (item) => {
    setShow(true)
    setCurrentItem(item)
  }

   const saveNews = () => {
     saveData('news', { title: "Iets anders"})
   }

  const [news, newsLoaded] = useFetchData('http://localhost:3025/news', refresh)
  const [content, contentLoaded] =  useFetchData('http://localhost:3025/articles', refresh)

  return (
      <Container fluid={ true }>

        <Background>

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
                              action={handleShow}
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

        <Modal show={show} onHide={handleClose}  size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Bewerk { currentItem?.title }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titel</Form.Label>
                <Form.Control type="text" value={currentItem?.title} onChange={(e) => setCurrentItem(current => ({...current, title: e.target.value }) )}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" value={currentItem?.image} onChange={(e) => setCurrentItem(current => ({...current, image: e.target.value }) )} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={3} value={currentItem?.content} onChange={(e) => setCurrentItem(current => ({...current, content: e.target.value }) )}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tags</Form.Label>
                <Form.Control type="text" value={currentItem?.tags.join(', ')} onChange={(e) => setCurrentItem(current => ({...current, tags: e.target.value.split(', ') }) )}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
  )
}

export default App

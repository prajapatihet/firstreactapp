import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  let email = 'abc@gmail.com';
  let phone = '95265485228';
  let fullname = {
    firstName: 'Hetkumar',
    lastName: 'Prajapati'
  }
  return (
    <div className="App">
      <Header email={email} phone={phone} name={fullname}>
        <h3>Welcome to my Portfolio!</h3>
        {/* <FontAwesomeIcon icon={faWhatsapp} />
        <p>Extra Spaces</p>
        <FontAwesomeIcon icon={faPhone} className='text-danger' /> */}
      </Header>
      {/* <div className='container'>
        <h1 className='text-danger'>Welcome to Page</h1>
      </div> */}
      {/* <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      {/* <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>MEARN Stack Developer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>MEAN stack Developer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Flutter Developer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Python Developer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}
      {/* <Container>
        <Row>
          {blog.map((v, i) => {
            return (
              <ProductItem pitems={v} key={i} />
            )
          })}
        </Row>
      </Container> */}

      <Footer />
    </div>
  );
}

export default App;

// function Card() {
//   return (
//     <div className='cardItems'>Card div</div>
//   )
// }

// function ProductItem({ pitems }) {
//   return (
//     <div className='col-lg-3 mb-4'>
//       <Card >
//         <Card.Body>
//           <Card.Title>{pitems.title}</Card.Title>
//           <Card.Text>
//             {pitems.body}
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }
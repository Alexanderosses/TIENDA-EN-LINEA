// BOOTSTRAP
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

// OWN
import '../../app.css';
import data from '../../menu.json'; 

export const CardComp = () => {
  const firstFourPlatos = data.platos.slice(0, 6); // Obténemos los primeros 6 elementos

  return (
      <div className='container'>
        <h2 className='titleSectionCard mt-5 ms-2 mb-4'>Los especiales <br />para hoy</h2>
        <Row xs={1} md={2} className="g-4">
          {firstFourPlatos.map((platos, idx) => (
            <Col key={idx}>
              <div>                  
                <Link to={`/PlateDetails/${platos.item}`}>
                  <Card className='bodyCard h-100'>
                    <Card.Body className='d-flex flex-column'>
                      <Row>
                        <Col md={4} className='carImg'>
                          <Card.Img src={platos.imagen} alt={platos.item} className="cardImg" />
                        </Col>
                        <Col md={8}>
                          <Card.Title className='bodyCardTitle'>{platos.item}</Card.Title>                          
                          <Card.Text className='bodyCardParagraph'>{platos.description.length > 100 ? `${platos.description.slice(0, 140)}...` : platos.description}</Card.Text>
                          <Card.Text className="bodyCardPrice mt-auto">${platos.price}</Card.Text>   
                        </Col>
                      </Row>
                    </Card.Body>
                    <div className="triangle"></div> 
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <div className='cardButton'>
          <Link to='/APP-RESTAURANTE/menu'>
            <button className='button'>TODO EL MENÚ</button>
         </Link>
        </div>             
      </div>
  );
};
